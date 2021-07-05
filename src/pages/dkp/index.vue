<template>
<q-page padding v-if="$user.loggedIn">
  <div class="container text-white">
    <p class="text-h6">Баланс DKP : {{$user.user.dkp_balance}}</p>

    <p class="text-h5">Активные события</p>
      <div class="">
         <q-card dark v-for="event in events" :key="event.id" class="q-mb-lg">
      <q-card-section >
        <div class="text-h6">{{event.name}}</div>
        <div class="text-subtitle2">Дата/Время : {{`${event.date.split('-')[2]} / ${event.date.split('-')[1]} / ${event.date.split('-')[0]} | ${event.time}`}} </div>
        <div class="text-subtitle2">DKP : {{event.dpk_points}}</div>
        <div class="text-subtitle2">Участников: {{event.players.length}}</div>
        {{event.code}}
        <q-expansion-item

          group="test"
        expand-separator
        dark
        label="Описание"

      >
        <q-card dark style="height: fit-content">
          <q-card-section v-html="event.description">

          </q-card-section>
        </q-card>
      </q-expansion-item>
      </q-card-section>

      <q-separator />

      <q-card-actions align="right">

        <q-input class="q-mr-md" v-if="!event.players.filter(x=>x.player===$user.user.id).length && event.code" dense filled dark label="Нужен код" v-model="code"/>
        <q-btn v-if="!event.code" @click="eventAction(event.id,event.players.filter(x=>x.player===$user.user.id).length ? 'remove' : 'add')"
               flat

               :color="event.players.filter(x=>x.player===$user.user.id).length ? 'negative' : 'positive' "
               :label="event.players.filter(x=>x.player===$user.user.id).length ? 'Отказаться' : 'Принять участие' "/>
        <q-btn v-else  @click="eventAction(event.id,event.players.filter(x=>x.player===$user.user.id).length ? 'remove' : 'add')"
               flat
               :disable="event.players.filter(x=>x.player===$user.user.id).length ? false : code !== event.code"
               :color="event.players.filter(x=>x.player===$user.user.id).length ? 'negative' : 'positive' "
               :label="event.players.filter(x=>x.player===$user.user.id).length ? 'Отказаться' : 'Принять участие' "/>

      </q-card-actions>
    </q-card>
      </div>



  </div>
</q-page>
  <q-page v-else class="flex column items-center justify-center">


          <q-tabs
          v-model="tab"
          dense

          class="text-grey bg-dark"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="login" label="Вход" />
          <q-tab name="reg" label="Регистрация" />

        </q-tabs>

        <q-separator />

        <q-tab-panels  style="min-height: 460px" class="bg-dark" v-model="tab" animated>
          <q-tab-panel class="bg-dark" name="login">
            <q-card dark>
              <q-card-section>
                 <q-form  @submit="userLoginAction" class=" q-gutter-sd q-mb-lg">
            <q-input
              filled
              dark
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
              dark
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



            </div>

          </q-form>
              </q-card-section>
            </q-card>

          </q-tab-panel>

          <q-tab-panel class="bg-dark" name="reg">
            <q-card dark>
              <q-card-section>
             <q-form
            @submit="onSubmit"
            style="width: 320px"
            class="q-gutter-sm form">

            <q-input
              filled
              dark
              :dense="!$q.screen.gt.md"
              v-model="userData.email"
              label="Email"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Введите Email',
              val => email_re.test(String(val)) || 'Введите корректный Email'
              ]"/>

               <q-input
              filled
              dark
              :dense="!$q.screen.gt.md"
              v-model="userData.discord"
              label="DiscordID (name#0000)"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Введите DiscordID',

              ]"/>

            <q-input
              filled
              dark
              :dense="!$q.screen.gt.md"
              v-model="userData.nickname"
              label="Ник"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Введите ник'
              ]"/>


            <q-input
              filled
              dark
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
              dark
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

              </div>


            </div>
          </q-form>
              </q-card-section>
            </q-card>
          </q-tab-panel>


        </q-tab-panels>




  </q-page>
</template>
<script>
import {mapActions} from "vuex";

export default {

  data () {
    return {
      tab:'login',
      leftDrawerOpen:false,
      is_loading:false,
      code: null,
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

      userData:{
        password1:null,
        password2:null,
        email:null,
        discord:null,
        nickname:null,
      },
      events:[]




    }
  },
  beforeMount() {
    if(this.$user.loggedIn){

      !this.$user.user.is_guild_member ? this.$router.push('/') : null
    }


  },
  async mounted() {
    await this.getEvents()
  },
  methods:{
    ... mapActions('auth',['loginUser','logoutUser']),
    userLoginAction() {
      this.loginUser(this.userLogin)
    },
    onSubmit () {
      console.log('submit')
      this.completeRegistration()
    },
    async eventAction(id,action){
      await this.$api.post('/api/dkp/event_action', {event_id:id,action:action})
      await this.getEvents()
    },
    async completeRegistration() {
      try {
        let response = await this.$api.post('/auth/users/', {
          email: this.userData.email,
          password: this.userData.password2,
          nickname: this.userData.nickname,
          discord: this.userData.discord,
          is_guild_member: true
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
    async getEvents(){
      const response = await this.$api.get('/api/dkp/events')
      this.events = response.data
      console.log(response.data)
    }
  },

}
</script>
<style lang="sass">
.events
  display: grid
  grid-template-columns: repeat(auto-fill,minmax(300px,1fr))
  grid-gap: 20px
</style>
