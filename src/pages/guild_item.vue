<template>
  <q-page >
    <div class="container">
      <div class="flex items-center justify-between">
        <h1 class="text-white text-h3">{{guild.name}}</h1>
      </div>
      <div class="container">
        <div class="guild-wrapper">
          <div v-if="guild.image" class="text-center q-mb-lg">
            <img style="max-width: 100%;height: auto;object-fit: contain;margin-bottom: 30px" :src="guild.image" alt="">
            <a class="inline-block q-py-sm q-px-lg q-btn q-btn-item non-selectable no-outline q-btn--standard q-btn--rectangle bg-primary text-dark q-btn--actionable q-focusable q-hoverable q-btn--wrap q-btn--active" v-if="guild.discord_link" target="_blank" :href="guild.discord_link">Ссылка на Discord</a>
          </div>
          <div class="post-content" v-html="guild.description"></div>
        </div>
        <q-separator spaced="lg"/>
        <p class="text-h6 text-bold">Отзывы о компании</p>
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
          <div class="flex q-mb-md">
            <p class="q-mb-none q-mr-md text-bold">Рейтинг</p>
            <q-rating
              v-model="feedbackData.rating"
              size="18px"
              color="primary"
            /></div>
          <p class="text-bold">Отзыв</p>
          <q-input
            v-model="feedbackData.text"
            filled
            dark
            class="q-mb-md text-white"
            type="textarea"
          />
          <q-btn :loading="is_loading"
                 :disable="!feedbackData.text.length>0 || !feedbackData.rating>0"
                 @click="createFeedback"
                 icon="add" no-caps color="primary" text-color="dark" label="Отправить"/>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>


import {mapActions, mapGetters} from "vuex";
export default {
  async preFetch ({ store, currentRoute, redirect, ssrContext}) {
    await store.dispatch('data/fetchGuild',currentRoute.params.slug)
    if (!store.state.data.guild.name){
      redirect({ path: '/404' })
    }
  },
  meta() {
    return {
      title : `New World Fans | Компания ${this.title}`,
      meta: {
        description: {name: 'description', content: this.description},
        ogTitle: {
          name: 'og:title',
          content: `New World Fans | Компания ${this.title}`
        }
      }
    }
  },
  data () {
    return {
      title: this.$store.state.data.guild.name,
      description: this.$store.state.data.guild.description.substring(0,220).replace(/<[^>]*>?/gm, ''),
      is_loading:false,
      feedbackData:{
        rating:0,
        text:'',
        guild_id:null
      },
      addFeedback:false,
      feedbacks:[]
    }
  },
  async mounted() {
    this.feedbackData.guild_id = this.guild.id
    const response_fb = await this.$api.get(`/api/guild/feedback?slug=${this.$route.params.slug}`)
    this.feedbacks = response_fb.data
  },
  computed: {
    ...mapGetters('data',['guild']),
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
.guild-wrapper
  display: grid
  grid-template-columns: 2fr 3fr
  grid-gap: 20px
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
.post-content
  img
    max-width: 100% !important
    height: auto !important
@media (max-width: 1024px)
  .guild-wrapper
    grid-template-columns: 1fr
</style>
