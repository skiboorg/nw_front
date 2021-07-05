<template>
  <q-layout view="lHh Lpr lFf"  class="bg-dark text-grey-2">

    <q-header elevated  class="bg-dark q-py-md ">
      <div class="container">
        <q-toolbar class="flex items-center">
          <q-toolbar-title >
            <router-link style="text-decoration: none;color: #fff" class="flex items-center no-wrap" to="/">
              <p class="q-mb-none q-mr-xs">NW</p>
              <img class="logo  q-mr-xs" src="~assets/new-world-1.png" alt="">
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
              </q-list>
            </q-btn-dropdown>

             <q-btn-dropdown  auto-close stretch flat label="Калькулятор">
              <q-list class="bg-grey-9">
                <q-item clickable>
                  <q-item-section >
                    <router-link  class="nav-link" to="/skills">Калькулятор (v0.2)</router-link>
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
            <q-route-tab name="map" label="Карта" to="/map"/>
            <q-route-tab name="trade" label="Биржа" to="/trade"/>


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
    <footer class="q-pb-lg">
      <q-separator spaced="lg"/>
      <div class="container ">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <router-link style="text-decoration: none;color: #fff" class="flex items-center no-wrap q-mr-md" to="/">
              <p class="q-mb-none q-mr-xs">NW</p>
              <img class="logo  q-mr-xs" src="~assets/new-world-1.png" alt="">
              <p class="q-mb-none">FANS</p>
            </router-link>
            <p class="q-mb-none">Информационный сайт посвященный игре New World</p>
          </div>

          <p class="q-mb-none">Сайт никак не связан с Amazon Game Studios</p>
        </div>
      </div>
    </footer>
    <q-dialog v-model="is_authModal_visible">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">{{is_register ? 'Регистрация' : 'Вход'}}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <q-form
            v-if="is_register"
            @submit="onSubmit"
            style="width: 320px"
            class="q-gutter-sm form">

            <q-input
              filled
              :dense="!$q.screen.gt.md"
              v-model="userData.email"
              label="Email"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Введите Email',
              val => email_re.test(String(val)) || 'Введите корректный Email'
              ]"/>

            <q-input
              filled
              :dense="!$q.screen.gt.md"
              v-model="userData.nickname"
              label="Ник"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Введите ник'
              ]"/>


            <q-input
              filled
              :dense="!$q.screen.gt.md"
              v-model="userData.password1"
              label="Пароль"
              :type="isPwd ? 'password' : 'text'"
              lazy-rules
              :rules="[ val => val && val.length >= 6|| 'Пароль должен быть не менее 6 символов']">
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
            <q-input
              filled
              :dense="!$q.screen.gt.md"
              v-model="userData.password2"
              :type="isPwd ? 'password' : 'text'"
              label="Повторите пароль"
              lazy-rules
              :rules="[ val => val && val===this.userData.password1 || 'Пароли не совпадают']">
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>

            <!--      <q-toggle v-model="accept" label="I accept the license and terms" />-->

            <div>
              <div class="text-center">
                <q-btn label="Регистрация"  type="submit" class="q-px-xl q-mb-md" color="primary "/>
                <p>Уже есть аккунт? <a href="#" @click.prevent="is_register=false">Войти</a></p>
              </div>


            </div>
          </q-form>
          <q-form v-else @submit="userLoginAction" class=" q-gutter-sd q-mb-lg">
            <q-input
              filled
              :dense="!$q.screen.gt.md"
              v-model="userLogin.email"
              label="Email *"

              style="width: 320px"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Введите email']"
            />
            <q-input
              :dense="!$q.screen.gt.md"
              filled
              :type="isPwd ? 'password' : 'text'"
              v-model="userLogin.password"
              label="Пароль *"
              lazy-rules
              :rules="[val => val !== null && val !== '' || 'Введите пароль' ]">
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
            <div class="text-center">
              <q-btn size="md" label="Войти" type="submit" color="primary" class="q-px-xl q-mb-md"/>
              <p>Нет аккаунта? <a class="text-primary" href="#" @click.prevent="is_register=true">Регистрация</a></p>


            </div>

          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
     <q-dialog v-model="is_guildCreateModal_visible">
      <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Добавление компании</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <q-form
            @submit="createGuild"

            class="flex-lg flex-md flex-sm justify-between">

            <q-input
              filled
              :dense="!$q.screen.gt.md"
              v-model="guildData.name"
              label="Название *"
              class="form-control "
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Введите название'
              ]"/>

             <q-select class="form-control" :dense="!$q.screen.gt.md" filled v-model="guildData.fraction" :options="fraction_options" label="Фракция" />
             <q-select class="form-control" :dense="!$q.screen.gt.md" filled v-model="guildData.size" :options="size_options" label="Размер" />
             <q-select class="form-control q-mb-md" :dense="!$q.screen.gt.md" filled v-model="guildData.style" :options="style_options" label="Направленность" />
             <q-input class="form-control q-mb-md" filled v-model="guildData.server" label="Сервер" />
             <q-input class="form-control q-mb-md" filled v-model="guildData.discord_link" label="Ссылка на Discord" />
            <q-file class="form-control" :dense="!$q.screen.gt.md" filled v-model="guildData.image" label="Аватар, баннер и т.д." />

            <p class="text-h6 q-mt-md full-width">Описание компании</p>
            <div style="overflow-y: auto">
              <q-editor
      v-model="guildData.description"

      :dense="$q.screen.lt.md"
      class="q-mb-md"
      :toolbar="[

        ['bold', 'italic', 'strike','hr', 'underline', 'subscript', 'superscript'],


        [
          {
            label: $q.lang.editor.formatting,
            icon: $q.iconSet.editor.formatting,
            list: 'no-icons',
            options: [
              'p',
              'h1',
              'h2',
              'h3',
              'h4',
              'h5',
              'h6',
              'code'
            ]
          },
          {
            label: $q.lang.editor.fontSize,
            icon: $q.iconSet.editor.fontSize,
            fixedLabel: true,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'size-1',
              'size-2',
              'size-3',
              'size-4',
              'size-5',
              'size-6',
              'size-7'
            ]
          },
          {
            label: $q.lang.editor.defaultFont,
            icon: $q.iconSet.editor.font,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'default_font',
              'arial',
              'arial_black',
              'comic_sans',
              'courier_new',
              'impact',
              'lucida_grande',
              'times_new_roman',
              'verdana'
            ]
          },
          'removeFormat'
        ],
        ['quote', 'unordered', 'ordered', 'outdent', 'indent'],


      ]"
      :fonts="{
        arial: 'Arial',
        arial_black: 'Arial Black',
        comic_sans: 'Comic Sans MS',
        courier_new: 'Courier New',
        impact: 'Impact',
        lucida_grande: 'Lucida Grande',
        times_new_roman: 'Times New Roman',
        verdana: 'Verdana'
      }"
    />
            </div>

            <!--      <q-toggle v-model="accept" label="I accept the license and terms" />-->

            <div>
              <div class="text-center flex items-center justify-between">
                <q-btn label="Добавить" :loading="is_loading" text-color="dark" no-caps type="submit" class="q-px-xl q-mb-md" color="primary "/>
                <p class="no-margin text-center text-bold">Для редактирования иформации в будущем обращайтесь в дискорд <span class="text-negative">greshnik#9579</span></p>
              </div>


            </div>
          </q-form>

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
      leftDrawerOpen:false,
      is_loading:false,
      name: null,
      age: null,
      accept: false,
      is_register:false,
      email_re:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

      isPwd: true,
      userLogin:{
        email:'1@1.11',
        password:'123',
      },
      fraction_options:[
        'Не выбрана еще', 'Ковенант','Марадеры','Синдикат'
      ],
      size_options:[
        '1-10 чел', '11-25 чел','26-50 чел','51-100 чел','+101 чел'
      ],
      style_options:[
        'ПвЕ', 'ПвП','ПвЕ ПвП','Крафт','РП'
      ],
      userData:{
        password1:null,
        password2:null,
        email:null,
        age:null,
        sex:'Male',
        nickname:null,
      },
      guildData:{
        name:null,
        fraction:'Не выбрана еще',
        server:null,
        size:'1-10',
        style:'ПвЕ',
        image:null,
        description:null,
        discord_link:null,

      }



    }
  },
  methods:{
    ...mapActions('componentState',['changeauthModalVisible',"changeguildCreateModalVisible"]),
    ... mapActions('auth',['loginUser','logoutUser']),
    userLoginAction() {
      this.loginUser(this.userLogin)

    },
    onSubmit () {
      console.log('submit')
      this.completeRegistration()
    },
    async completeRegistration() {
      try {
        let response = await this.$api.post('/auth/users/', {
          email: this.userData.email,
          password: this.userData.password2,
          nickname: this.userData.nickname,
          discord: null,
          is_guild_member: false
        })
        this.$q.notify({
          message: 'Аккаунт создан',
          position: this.$q.screen.lt.sm ? 'bottom' : 'bottom-right',
          color: 'positive',
          icon: 'announcement'
        })
        this.loading = false
        this.is_register = false
      } catch (e) {
        this.$q.notify({
          message: 'Проверьте введеные данные',
          position: this.$q.screen.lt.sm ? 'bottom' : 'bottom-right',
          color: 'red',
          icon: 'announcement'
        })
      }
    },
    async createGuild(){
      this.is_loading = true
      let formData = new FormData()
      formData.set('data', JSON.stringify(this.guildData))
      if (this.guildData.image){
        formData.set('img',this.guildData.image)
      }
      const response = await this.$api({
        method: 'post',
        headers:{
          'content-type': 'multipart/form-data'
        },
        url: '/api/guild/create',
        data: formData
      })
      this.$q.notify({
          message: 'Спасибо, компания поставлена на модерацию',
          position: this.$q.screen.lt.sm ? 'bottom' : 'bottom-right',
          color: 'positive',
          icon: 'announcement'
        })
      this.is_loading = false
      this.changeguildCreateModalVisible(false)
      this.guildData.name=null
        this.guildData.fraction='Не выбрана еще'
        this.guildData.server=null
        this.guildData.size='1-10'
        this.guildData.style='ПвЕ'
        this.guildData.image=null
        this.guildData.description=null
        this.guildData.discord_link=null


    },
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
