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
          <div class="flex items-center">
            <q-icon size="30px" class="q-mr-md" color="primary" name="people_alt" />
            <h3 class="text-h5">Новые компании</h3>
          </div>

         <CompanyCard
            v-for="guild in guilds"
            :key="guild.id"
            :item="guild"
           />

          <div class="text-center">
            <q-btn v-if="!$user.loggedIn" @click="changeauthModalVisible(true)" icon="add" no-caps color="primary" text-color="dark" label="Добавить компанию"/>
            <q-btn v-else @click="changeguildCreateModalVisible(true)" icon="add" no-caps color="primary" text-color="dark" label="Добавить компанию"/>
          </div>
            <q-separator spaced="lg"/>
          <div class="flex items-center">
            <q-icon size="30px" class="q-mr-md" color="primary" name="app_registration" />
            <h3 class="text-h5">Новые билды</h3>
          </div>
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

</style>
