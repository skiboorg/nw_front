<template>
  <q-page>
<!--    <q-carousel-->
<!--      arrows-->
<!--      animated-->
<!--      v-model="slide"-->
<!--      :autoplay="autoplay"-->
<!--      infinite-->
<!--      transition-prev="slide-right"-->
<!--      transition-next="slide-left"-->
<!--      @mouseenter="autoplay = false"-->
<!--      @mouseleave="autoplay = true"-->
<!--      height="500px"-->
<!--      class="q-mb-lg bg-dark"-->
<!--    >-->

<!--         <q-carousel-slide-->
<!--        v-for="(item,index) in banners"-->
<!--        :name="index"-->
<!--        :key="index"-->
<!--        :img-src="item.image">-->
<!--        <router-link v-if="!item.is_url_for_site" :to="item.url">-->
<!--        <div class="absolute-bottom custom-caption">-->
<!--          <div v-if="item.top_text" :class="{'q-mb-lg':item.bottom_text}" class="text-h2 ">{{item.top_text}}</div>-->
<!--          <div v-if="item.bottom_text" class="text-h5">{{item.bottom_text}}</div>-->
<!--        </div>-->
<!--      </router-link>-->
<!--        <a v-else :href="item.url" target="_blank">-->
<!--          <div class="absolute-bottom custom-caption">-->
<!--          <div v-if="item.top_text" :class="{'q-mb-lg':item.bottom_text}" class="text-h2 ">{{item.top_text}}</div>-->
<!--          <div v-if="item.bottom_text" class="text-h5">{{item.bottom_text}}</div>-->
<!--        </div>-->
<!--        </a>-->
<!--      </q-carousel-slide>-->



<!--    </q-carousel>-->
    <div class="container">
      <div class="page-wrapper">
        <div class="page-left">
          <!--          <a target="_blank" href="https://izi.ru/new-world/currency/sell?utm_source=nwfans&utm_medium=banner&utm_campaign=1">-->
          <!--            <img style="width: 100%; height: auto" src="~assets/izi.gif" alt="">-->
          <!--          </a>-->


          <div class="flex items-center no-wrap">
            <q-icon size="30px" class="q-mr-md" color="primary" name="campaign" />
            <h3 class="text-h5">Последние новости New World</h3>
          </div>

          <NewsCard
            v-for="post in posts"
            :key="post.id"
            :post="post"
          />
        </div>
        <div class="page-right">

          <div class="flex items-center ">
            <q-icon size="30px" class="q-mr-md" color="primary" name="monitor" />
            <h3 class="text-h5">Популярные стримеры</h3>
          </div>

          <q-card dark>
            <q-list separator >


                <q-item   class="row q-py-md" v-for="item in socials" :key="item.id">

                  <q-item-section class="col-6" avatar>
                    <q-avatar rounded class="q-mb-sm">
                      <img :src="item.logo">
                    </q-avatar>
                   <q-item-section >{{item.name}}</q-item-section>
                  </q-item-section>

                    <q-item-section class="col-6" >

                   <q-item-section >
                     <p class="q-mb-sm text-bold" v-if="item.url_youtube">  <a class="text-title cursor-pointer" :href="item.url_youtube" target="_blank">YouTube</a></p>
                   <p class="q-mb-none text-bold"  v-if="item.url_twitch"><a class="text-title cursor-pointer" :href="item.url_twitch" target="_blank">Twitch</a> </p>
</q-item-section>

                  </q-item-section>





                </q-item>

            </q-list>
          </q-card>

          <router-link to="/companies">
            <div class="flex items-center ">
              <q-icon size="30px" class="q-mr-md" color="primary" name="people_alt" />
              <h3 class="text-h5 text-title">Популярные компании</h3>

            </div>
          </router-link>

<!--                    <q-card dark   class="bg-grey-10 rs-card  cursor-pointer q-mb-md">-->
<!--                      <a target="_blank" href="https://discord.gg/eWx3fUKfYM" >-->
<!--                        <q-card-section  class="text-center ">-->
<!--                         <img  src="~assets/rs.png"/>-->
<!--                        </q-card-section>-->
<!--                      </a>-->
<!--                    </q-card>-->

          <CompanyCard
            v-if="guild.name_slug!=='red-sky'"
            v-for="guild in guilds"
            :key="guild.id"
            :item="guild"
          />

          <div class="text-center">
            <q-btn v-if="!$user.loggedIn" @click="changeauthModalVisible(true)" icon="add" no-caps color="primary" text-color="dark" label="Добавить компанию"/>
            <q-btn v-else @click="changeguildCreateModalVisible(true)" icon="add" no-caps color="primary" text-color="dark" label="Добавить компанию"/>
          </div>
          <q-separator spaced="lg"/>
          <router-link to="/builds">
            <div class="flex items-center">

              <q-icon size="30px" class="q-mr-md" color="primary" name="app_registration" />
              <h3 class="text-h5 text-title">Новые билды</h3>
            </div>
          </router-link>

          <BuildCard
            v-for="build in builds"
            :key="build.name_slug"
            :item="build"
          />
          <div class="text-center">

            <q-btn to="/skills" icon="add" no-caps color="primary" text-color="dark" label="Создать билд"/>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>


import { mapActions, mapGetters } from 'vuex'
import NewsCard from "components/NewsCard";
import CompanyCard from "components/CompanyCard";
import BuildCard from "components/BuildCard";
export default {
  meta: {
    title: 'New World mmorpg игра, фан сайт',
    // meta tags
    meta: {
      description: {name: 'description', content: 'Все о мире New World собрано на nwfans! Гайды, билды, компании, калькулятор билдов и многое другое! Заходи!'},
      ogTitle: {
        name: 'og:title',
        template(ogTitle) {
          return `New World mmorpg игра, фан сайт`
        }
      }
    }
  },
  name: 'MainLayout',
  components: {BuildCard, CompanyCard, NewsCard},


  data () {
    return {
      slide:0,
      autoplay:true,
      posts:[],
      guilds:[],
      socials:[],
      ratingModel:4,
      banners:[],
      builds:[],


    }
  },
  async mounted() {

    const response_posts = await this.$api.get('/api/post/posts?for=index')
    this.posts = response_posts.data
    const response_guilds = await this.$api.get('/api/guild/guilds?for=index')
    this.guilds = response_guilds.data
    const response_banners = await this.$api.get('/api/banner')
    this.banners = response_banners.data
    const response_builds = await this.$api.get(`/api/skill/build?for=index`)
    this.builds = response_builds.data
    const response_social = await this.$api.get(`/api/social`)
    this.socials = response_social.data


  },
  methods:{
    ...mapActions('componentState',['changeauthModalVisible','changeguildCreateModalVisible']),
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
  }

}
</script>
<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
.rs-card
  animation: pulse 2s infinite

@-webkit-keyframes pulse
  0%
    -webkit-box-shadow: 0 0 0 0 rgba(216,28,35, 0.4)

  70%
    -webkit-box-shadow: 0 0 0 10px rgba(216,28,35, 0)

  100%
    -webkit-box-shadow: 0 0 0 0 rgba(216,28,35, 0)


@keyframes pulse
  0%
    -moz-box-shadow: 0 0 0 0 rgba(216,28,35, 0.4)
    box-shadow: 0 0 0 0 rgba(216,28,35, 0.4)

  70%
    -moz-box-shadow: 0 0 0 10px rgba(216,28,35, 0)
    box-shadow: 0 0 0 10px rgba(216,28,35, 0)

  100%
    -moz-box-shadow: 0 0 0 0 rgba(216,28,35, 0)
    box-shadow: 0 0 0 0 rgba(216,28,35, 0)


</style>
