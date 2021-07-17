<template>
  <q-page>
    <q-carousel
      arrows
      animated
      v-model="slide"
      :autoplay="autoplay"
      infinite
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      height="500px"
      class="q-mb-lg bg-dark"
    >
      <q-carousel-slide
        v-for="(item,index) in banners"
        :name="index"
        :key="index"
        :class="{'cursor-pointer':item.url}"
        @click="item.url ? $router.push(item.url) : null"
        :img-src="item.image">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2 q-mb-lg">{{item.top_text}}</div>
          <div class="text-h5">{{item.bottom_text}}</div>
        </div>
      </q-carousel-slide>

    </q-carousel>
    <div class="container">
      <div class="page-wrapper">
        <div class="page-left">
          <div class="flex items-center ">
            <q-icon size="30px" class="q-mr-md" color="primary" name="people_alt" />
            <h3 class="text-h5">Социальные сети</h3>
          </div>

          <q-card dark>
            <q-list >

              <a :href="item.url" target="_blank" v-for="item in socials" :key="item.id">
                <q-item clickable v-ripple class="row">

                  <q-item-section class="col-1 gt-sm" avatar>
                    <q-avatar rounded>
                      <img :src="item.logo">
                    </q-avatar>
                  </q-item-section>
                  <q-item-section class="col-lg-4 col-md-6 col-sm-6 col-xs-6 ">{{item.name}}</q-item-section>
                  <q-item-section class="col-lg-4 col-md-6 col-sm-6 col-xs-6" >{{item.description}}</q-item-section>
                  <q-item-section class="text-center gt-sm">{{item.type}}</q-item-section>




                </q-item>
              </a>
            </q-list>
          </q-card>

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
          <router-link to="/companies">
            <div class="flex items-center ">
              <q-icon size="30px" class="q-mr-md" color="primary" name="people_alt" />
              <h3 class="text-h5 text-title">Популярные компании</h3>

            </div>
          </router-link>

          <q-card dark   class="bg-grey-10 rs-card  cursor-pointer q-mb-md">
            <router-link  to="/companies/red-sky">
              <q-card-section  class="text-center q-pa-none">
               <q-img :ratio="16/9" src="~assets/rs.png"></q-img>
              </q-card-section>
            </router-link>
          </q-card>

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
  name: 'MainLayout',
  components: {BuildCard, CompanyCard, NewsCard},
  meta: {
    // sets document title
    title: 'New World Fans | Главная',


    // meta tags
    meta: {
      description: {name: 'Информационный сайт посвященный игре New World.' +
          ' Калькулятор билдов, описание скилов, интерактивная карта, биржа игровой валюты'},
      keywords: {name: 'keywords', content: 'Калькулятор билдов, описание скилов, интерактивная карта, биржа игровой валюты'},

      // note: for Open Graph type metadata you will need to use SSR, to ensure page is rendered by the server
      ogTitle: {
        name: 'og:title',
        // optional; similar to titleTemplate, but allows templating with other meta properties
        template(ogTitle) {
          return `Информационный сайт посвященный игре New World`
        }
      }
    }
  },

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
