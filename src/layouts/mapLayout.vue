<template>
  <q-layout view="lHh Lpr lFf" class="bg-dark">
   <q-header elevated  class="bg-dark q-py-md ">
      <div class="container">
        <q-toolbar class="flex items-center">
          <q-toolbar-title >
            <router-link style="text-decoration: none;color: #fff" class="flex items-center no-wrap" to="/">
              <p class="q-mb-none q-mr-xs">NW</p>
              <img class="logo  q-mr-xs" src="~assets/logo.png" alt="">
              <p class="q-mb-none">FANS</p>
            </router-link>
          </q-toolbar-title>

          <q-tabs :breakpoint="1000" dense v-model="tab" indicator-color="primary" class="gt-sm">

            <q-route-tab name="news" label="Новости" to="/news"/>
            <q-route-tab name="guilds" label="Компании" to="/companies"/>
            <q-btn-dropdown  auto-close stretch flat label="Информация">
              <q-list class="bg-grey-9">
                <q-item clickable>
                  <q-item-section >
                    <router-link  class="nav-link" to="/guides">Гайды</router-link>
                  </q-item-section>
                </q-item>
                <q-separator/>
                <q-item clickable>
                  <q-item-section>
                    <router-link class="nav-link" to="/faq">FAQ</router-link>
                  </q-item-section>
                </q-item>
                <q-separator/>
                <q-item clickable>
                  <q-item-section>
                    <router-link class="nav-link" to="/builds">Билды</router-link>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
            <q-route-tab name="calc" label="Калькулятор (v0.3)" to="/skills"/>

            <q-route-tab name="map" label="Карта" to="/map"/>
<!--            <q-route-tab name="trade" label="Биржа" to="/trade"/>-->
          <q-btn @click="feedbackModal = !feedbackModal" color="dark" text-color="primary" label="Обратная связь"/>

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
<!--        <q-item clickable v-ripple >-->
<!--          <q-item-section @click="$router.push('/trade')">-->
<!--            Биржа-->
<!--          </q-item-section>-->
<!--        </q-item>-->
         <q-item clickable v-ripple >
          <q-item-section @click="feedbackModal = !feedbackModal">
            Обратная связь
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
    title: 'Интерактивная карта, карта объектов New World',


    // meta tags
    meta: {
      description: {name: 'description', content: 'Интерактивная карта, карта объектов New World, точки интереса и ресурсы'},
      keywords: {name: 'keywords', content: 'Интерактивная карта, карта объектов New World, точки интереса, точки интереса, сундуки'},
      equiv: {'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8'},
      // note: for Open Graph type metadata you will need to use SSR, to ensure page is rendered by the server
      ogTitle: {
        name: 'og:title',
        // optional; similar to titleTemplate, but allows templating with other meta properties
        template(ogTitle) {
          return `Интерактивная карта New World`
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
