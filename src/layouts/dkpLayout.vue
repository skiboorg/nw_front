<template>
  <q-layout view="lHh Lpr lFf" class="bg-dark">
     <q-header elevated  class="bg-dark q-py-md ">
      <div class="container">
        <q-toolbar class="flex items-center">
          <q-toolbar-title >
            <router-link style="text-decoration: none;color: #fff" class="flex items-center no-wrap" to="/">
              <p class="q-mb-none q-mr-xs">DKP</p>

            </router-link>
          </q-toolbar-title>

          <q-tabs :breakpoint="1000" dense v-model="tab" indicator-color="primary" class="gt-sm">

            <q-route-tab name="news" label="Главная" to="/dkp"/>
            <q-route-tab v-if="$user.loggedIn" name="guilds" label="События" to="/companies"/>
            <q-route-tab v-if="$user.loggedIn && $user.user.is_leader" name="calc" label="Админка" to="/dkp/admin"/>



          </q-tabs>
          <q-btn
            flat
            dense
            round
            class="lt-md"

            icon="menu"
            aria-label="Menu"
            @click="leftDrawerOpen = !leftDrawerOpen"
          />
        </q-toolbar>
      </div>

    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      side="right"
      bordered
      dark
    >
      <q-toolbar class="flex items-center">
        <div class=""></div>
        <q-space/>

        <q-btn
          flat
          dense
          round
          class="lt-md"

          icon="close"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
      </q-toolbar>
      <q-list  dark >
        <q-item clickable v-ripple >
          <q-item-section @click="$router.push('/news')">
           Новости
          </q-item-section>
        </q-item>
         <q-item clickable v-ripple >
          <q-item-section @click="$router.push('/companies')">
           Компании
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple >
          <q-item-section @click="$router.push('/guides')">
           Гайды
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple >
          <q-item-section @click="$router.push('/faq')">
           FAQ
          </q-item-section>
        </q-item>
         <q-item clickable v-ripple >
          <q-item-section @click="$router.push('/skills')">
           Калькулятор
          </q-item-section>
        </q-item>
          <q-item clickable v-ripple >
          <q-item-section @click="$router.push('/map')">
           Карта
          </q-item-section>
        </q-item>
             <q-item clickable v-ripple >
          <q-item-section @click="$router.push('/trade')">
           Биржа
          </q-item-section>
        </q-item>
        <q-separator/>


      </q-list>

    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'MainLayout',
   meta: {
    // sets document title
    title: 'DKP',


    // meta tags
    meta: {
      description: {name: 'description', content: 'Page 1'},
      keywords: {name: 'keywords', content: 'Quasar website'},
      equiv: {'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8'},
      // note: for Open Graph type metadata you will need to use SSR, to ensure page is rendered by the server
      ogTitle: {
        name: 'og:title',
        // optional; similar to titleTemplate, but allows templating with other meta properties
        template(ogTitle) {
          return `DKP`
        }
      }
    }
  },

  data () {
    return {
      leftDrawerOpen:false,
      tab:'index',


    }
  },

  methods:{
    ...mapActions('componentState',['changePoiVisible']),
  },
  computed:{
    is_poi_visible:{
      get(){
        return this.$store.state.componentState.is_poi_visible
      },
      set(val){
        return  this.changePoiVisible(val)
      }
    }
  }
}
</script>
<style lang="sass">
.logo
  width: 30px
  height: 30px
  object-fit: contain
.nav-link
  text-decoration: none
  color: #ffffff
  text-transform: uppercase
.form-control
  flex-basis: 49%
</style>
