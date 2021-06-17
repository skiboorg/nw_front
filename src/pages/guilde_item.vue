<template>
<q-page >
   <q-parallax :height="300" :speed="1" class="q-mb-lg">
      <template v-slot:media>
        <img :src="post.image" :alt="post.name">
      </template>

      <h1 class="text-white text-h3">{{post.name}}</h1>
    </q-parallax>
  <div class="container">
    <div class="post-content" v-html="post.description"></div>
  </div>
</q-page>
</template>

<script>



export default {
  name: 'MainLayout',
  meta: {
    // sets document title
    title: `New World Fans | Гайды игры`,


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
          return `New World Fans | Гайды игры`
        }
      }
    }
  },

  data () {
    return {

      post:{}

    }
  },
  async mounted() {
    const response_post = await this.$api.get(`/api/guide/guide?slug=${this.$route.params.slug}`)
    this.post = response_post.data

  },
  methods:{

  },

}
</script>
<style lang="sass">
.post-content
  img
    max-width: 100% !important
    height: auto !important
</style>
