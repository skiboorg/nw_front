<template>
  <q-layout view="lHh Lpr lFf"  class="bg-dark text-grey-2">

    <q-header elevated  class="bg-dark q-py-md ">
      <q-toolbar class="flex items-center">
        <q-toolbar-title >
          <router-link style="text-decoration: none;color: #fff" class="flex items-center no-wrap" to="/">
            <p class="q-mb-none q-mr-xs">NW</p>
            <img class="logo  q-mr-xs" src="~assets/logo.png" alt="">
            <p class="q-mb-none">FANS</p>
          </router-link>
        </q-toolbar-title>

        <q-tabs :breakpoint="1600" dense v-model="tab" indicator-color="primary" class="gt-sm">
          <q-route-tab name="news" label="Новости" to="/news"/>
          <q-route-tab name="guilds" label="Компании" to="/companies"/>

          <q-route-tab name="builds" label="Билды" to="/builds"/>
          <q-route-tab name="calc" label="Калькулятор (v0.5)" to="/skills"/>
          <q-route-tab name="db" label="База предметов" to="/database/all"/>
          <q-route-tab name="guides" label="Гайды" to="/guides"/>
          <q-route-tab name="map" label="Карта" to="/map"/>
          <q-route-tab name="faq" label="FAQ" to="/faq"/>
          <!--            <q-route-tab name="trade" label="Биржа" to="/trade"/>-->
<!--          <q-btn @click="feedbackModal = !feedbackModal" color="dark" text-color="primary" label="Обратная связь"/>-->

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
                  <q-item-section @click="$router.push('/builds')">
                    Билды
                  </q-item-section>
                </q-item>
        <q-item clickable v-ripple >
                  <q-item-section @click="$router.push('/database/all')">
                     База предметов
                  </q-item-section>
                </q-item>

        <q-item clickable v-ripple >
          <q-item-section @click="$router.push('/map')">
            Карта
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple >
          <q-item-section @click="feedbackModal = !feedbackModal">
            Обратная связь
          </q-item-section>
        </q-item>
        <q-separator/>


      </q-list>

    </q-drawer>
    <q-page-container>
<!--      https://discord.gg/K6uSpssV96-->
      <div class="container">
        <a href="https://izi.ru/new-world/currency/sell?utm_source=nwfans" target="_blank">
            <img v-if="$q.screen.gt.xs" class="img" src="~assets/b-d.gif" alt="">
        <img v-else class="img" src="~assets/b-m.gif" alt="">
        </a>

      </div>
      <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[20, 90]">
        <q-btn fab size="md" icon="keyboard_arrow_up" color="primary" />
      </q-page-scroller>
    </q-page-container>
    <footer class="q-pb-lg">
      <q-separator spaced="lg"/>
      <div class="container ">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <router-link style="text-decoration: none;color: #fff" class="flex items-center no-wrap q-mr-md" to="/">
              <p class="q-mb-none q-mr-xs">NW</p>
              <img class="logo  q-mr-xs" src="~assets/logo.png" alt="">
              <p class="q-mb-none">FANS</p>
            </router-link>
            <p class="q-mb-none">Информационный сайт посвященный игре New World</p>
          </div>

          <div class="flex items-center">
            <a class="icon q-mr-md" href="https://vk.com/nwfansru" target="_blank">
              <img src="~assets/vk.svg" alt="">
            </a>
            <a class="icon q-mr-md" href="https://t.me/nwfansru" target="_blank">
              <img src="~assets/t.svg" alt="">
            </a>
            <a class="icon" href="https://www.instagram.com/nwfansru/" target="_blank">
              <img src="~assets/inst.svg" alt="">
            </a>

          </div>



        </div>
      </div>
    </footer>
    <q-dialog v-model="feedbackModal"  >
      <q-card  style="width: 700px; max-width: 80vw;">

        <q-card-section >
          <p class="text-dark text-center text-h6 text-bold q-mb-none">Обратная связь</p>
          <p class="text-caption text-center">Все ваши предложения по улучшению работы сайта и замечания будут рассмотрены</p>
          <q-input
            filled
            :dense="!$q.screen.gt.md"
            class="q-mb-md"
            v-model="fb_user"
            label="Ваш e-mail, discord (username#0000) или любой способ связи *"/>
          <q-input
            v-model="fb_text"
            filled
            class="q-mb-md"
            label="Сообщение *"
            type="textarea"
          />
          <div class="text-center ">
            <q-btn @click="add_fb" :loading="is_loading" color="primary" :disable="!fb_text || !fb_user" text-color="dark" label="Отправить"/>
          </div>

        </q-card-section>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'MainLayout',


  data () {
    return {
      tab:'index',
      showAd:false,
      leftDrawerOpen:false,
      is_loading:false,
      feedbackModal:false,
      fb_text: null,
      fb_user: null,




    }
  },

  methods:{
    async add_fb(){
      this.is_loading = true

      await this.$api.post('/api/add_fb', {
        fb_user: this.fb_user,
        fb_text: this.fb_text
      })
      this.$q.notify({
        message: 'Спасибо! :))',
        position: this.$q.screen.lt.sm ? 'bottom' : 'bottom-right',
        color: 'positive',
        icon: 'announcement'
      })
      this.is_loading = false
      this.feedbackModal = false
    },
  },
  computed:{
    ...mapGetters('data',['item_categories']),
  }

}
</script>
<style lang="sass">
.icon
  display: inline-flex
  border: 2px solid $primary
  align-items: center
  justify-content: center
  padding: 5px
  border-radius: 5px
  img
    width: 30px
    height: 30px
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

.database-wrapper
  display: grid
  grid-template-columns: 1fr 3fr
  grid-gap: 30px
@media (max-width: 768px)
  .database-wrapper
    grid-template-columns: 1fr
</style>
