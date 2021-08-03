<template>
  <q-page>
    <div class="container">
      <div class="flex items-center justify-between q-py-lg">
        <div class="flex items-center">
          <q-icon size="30px" class="q-mr-md" color="primary" name="people_alt" />
          <h1 class="text-h5">Компании NW</h1>
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
import CompanyCard from "components/CompanyCard";
import { mapActions, mapGetters } from 'vuex'
export default {
  async preFetch ({store, ssrContext}) {
    if (store.state.data.guilds.length === 0){
       await store.dispatch('data/fetchGuilds')
    }
  },
   meta: {
    title: 'New World Fans | Компании New World',
    // meta tags
    meta: {
      description: {name: 'description', content: 'Выбирай лучшие компании New World, добавляй свою компанию!'},
      ogTitle: {
        name: 'og:title',
        template(ogTitle) {
          return `New World Fans | Компании New World`
        }
      }
    }
  },
  name: 'MainLayout',
  components: {CompanyCard},
  data () {
    return {
    }
  },
  async mounted() {
  },
  methods:{
    ...mapActions('componentState',['changeauthModalVisible','changeguildCreateModalVisible']),
  },
  computed:{
    ...mapGetters('data',['guilds']),
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

