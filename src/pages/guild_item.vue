<template>
  <q-page >
    <div class="container">
      <div class="flex items-center justify-between">
         <h1 class="text-white text-h3">{{guild.name}}</h1>
        <p v-if="guild.discord_link" class="q-mb-none text-h6 text-primary"><a class="text-primary" target="_blank" :href="guild.discord_link">Ссылка на Discord</a></p>
      </div>


      <div class="container">
        <div v-if="guild.image" class="text-center q-mb-lg">
          <q-img :ratio="16/9" :src="guild.image" alt=""/>
        </div>
        <div class="post-content" v-html="guild.description"></div>
        <q-separator spaced="lg"/>
        <p class="text-h6">Отзывы о компании</p>
        <p v-if="!feedbacks.length>0">Отзывов пока нет</p>
        <q-list class="q-mb-lg" dark>

          <q-item v-for="fb in feedbacks" :key="fb.id">
            <q-item-section>
              <q-item-label>{{fb.user.nickname}}</q-item-label>
              <q-item-label caption>{{fb.text}}</q-item-label>
            </q-item-section>

            <q-item-section side top>
              <q-item-label caption>{{new Date(fb.created_at).toLocaleDateString() }}</q-item-label>
              <q-rating
                v-model="fb.rating"
                size="1em"
                color="orange"
                readonly
              />
            </q-item-section>
          </q-item>




        </q-list>
        <q-btn v-if="$user.loggedIn && !addFeedback" @click="addFeedback = true" icon="add" no-caps color="primary" text-color="dark" label="Добавить отзыв"/>
            <q-btn v-if="!$user.loggedIn" @click="changeauthModalVisible(true)" icon="add" no-caps color="primary" text-color="dark" label="Добавить отзыв"/>

        <div v-if="addFeedback" class="addFeedback q-mt-lg">
          <div class="flex q-mb-md"><p class="q-mb-none q-mr-md">Рейтинг</p>
            <q-rating
              v-model="feedbackData.rating"
              size="1em"
              color="primary"
            /></div>
          <p>Отзыв</p>
          <q-input
            v-model="feedbackData.text"
            filled
            dark
            class="q-mb-md text-white"
            type="textarea"
          />
          <q-btn :loading="is_loading" :disable="!feedbackData.text.length>0"
                 @click="createFeedback"
                 icon="add" no-caps color="primary" text-color="dark" label="Отправить"/>

        </div>

      </div>
    </div>

  </q-page>
</template>

<script>


import { date } from 'quasar'
import {mapActions} from "vuex";
export default {
  name: 'MainLayout',

  meta () {
    return {


      title: this.title,
      meta: {
        description: {name: this.description},
        keywords: {name: 'keywords', content: 'Калькулятор билдов, описание скилов, интерактивная карта, биржа игровой валюты'},

      }
    }
  },

  data () {
    return {
      is_loading:false,
      feedbackData:{
        rating:0,
        text:'',
        guild_id:null
      },
      addFeedback:false,
      title: 'New World Fans | Компании',
      description: 'Информация о компании в игре New World',
      guild:{},
      feedbacks:[]

    }
  },
  async mounted() {
    const response = await this.$api.get(`/api/guild/guild?slug=${this.$route.params.slug}`)
    this.guild = response.data
    this.title = 'New World Fans | Компания ' + this.guild.name
    this.description = 'Информация о компании в игре New World ' + this.guild.name
    this.feedbackData.guild_id = this.guild.id
    const response_fb = await this.$api.get(`/api/guild/feedback?slug=${this.$route.params.slug}`)
    this.feedbacks = response_fb.data

  },
  computed: {
    is_authModal_visible: {
      get() {
        return this.$store.state.componentState.is_authModal_visible
      },
      set(val) {
        return this.changeauthModalVisible(val)
      }
    }
  },
  methods:{
    ...mapActions('componentState',['changeauthModalVisible','changeguildCreateModalVisible']),
    async createFeedback(){
      this.is_loading = true


      const response = await this.$api.post('/api/guild/feedback',this.feedbackData)
      this.$q.notify({
        message: 'Спасибо за отзыв',
        position: this.$q.screen.lt.sm ? 'bottom' : 'bottom-right',
        color: 'positive',
        icon: 'announcement'
      })
      this.is_loading = false
      this.addFeedback = false
      this.feedbackData.text=''
      this.feedbackData.rating=0



    },

  },

}
</script>
<style lang="sass">
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
.post-content
  img
    max-width: 100% !important
    height: auto !important
</style>
