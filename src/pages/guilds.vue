<template>
  <q-page>

    <div class="container">

          <div class="flex items-center justify-between q-py-lg">
            <div class="flex items-center">
               <q-icon size="30px" class="q-mr-md" color="primary" name="people_alt" />
            <h3 class="text-h5">Компании</h3>
            </div>

               <q-btn v-if="!$user.loggedIn" @click="changeauthModalVisible(true)" icon="add" no-caps color="primary" text-color="dark" label="Добавить компанию"/>
            <q-btn v-else @click="changeguildCreateModalVisible(true)" icon="add" no-caps color="primary" text-color="dark" label="Добавить компанию"/>

          </div>
      <div class="companies-grid">
        <CompanyCard
            v-for="guild in guilds"
            :key="guild.id"
            :item="guild"
           />
      </div>

        </div>

  </q-page>
</template>

<script>



import NewsCard from "components/NewsCard";
import CompanyCard from "components/CompanyCard";
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'MainLayout',
  components: {CompanyCard, NewsCard},
  meta: {
    // sets document title
    title: 'New World Fans | Компании',


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
          return `New World Fans | Компании`
        }
      }
    }
  },

  data () {
    return {
      guilds:[],

    }
  },
  async mounted() {

    const response_guilds = await this.$api.get('/api/guild/guilds?for=all')
    this.guilds = response_guilds.data


  },
  methods:{
    ...mapActions('componentState',['changeauthModalVisible','changeguildCreateModalVisible']),
  },
  computed:{
    is_authModal_visible:{
      get(){
        return this.$store.state.componentState.is_authModal_visible
      },
      set(val){
        return  this.changeauthModalVisible(val)
      }
    },
    is_guildCreateModal_visible:{
      get(){
        return this.$store.state.componentState.is_guildCreateModal_visible
      },
      set(val){
        return  this.changeguildCreateModalVisible(val)
      }
    },

  }

}
</script>
<style lang="sass" scoped>
.companies-grid
  display: grid
  grid-template-columns: repeat(auto-fill,minmax(300px,1fr))
  grid-gap: 20px
</style>
