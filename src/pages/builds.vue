<template>
<q-page >
 <div class="container">
        <div class="flex items-center justify-between">
          <div class="flex items-center q-py-lg">
            <q-icon size="30px" class="q-mr-md" color="primary" name="app_registration" />
            <h3 class="text-h5">Билды</h3>
          </div>
          <q-btn to="/skills" icon="add" no-caps color="primary" text-color="dark" label="Создать билд"/>
        </div>

   <div class="companies-grid">
          <BuildCard
          v-for="build in builds"
            :key="build.id"
            :item="build"
          />
   </div>



    </div>
</q-page>
</template>

<script>


import NewsCard from "components/NewsCard";
import BuildCard from "components/BuildCard";
export default {
  components: {BuildCard, NewsCard},
  name: 'MainLayout',
  meta: {
    // sets document title
    title: 'New World Fans | Билды',


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
          return `New World Fans | Билды`
        }
      }
    }
  },

  data () {
    return {
      slide:'first',
      autoplay:true,
      builds:[]

    }
  },
  async mounted() {
     const response = await this.$api.get(`/api/skill/build?for=all`)
    this.builds = response.data

  },
  methods:{

  },

}
</script>
<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)

</style>
