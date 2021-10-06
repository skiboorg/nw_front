<template>
  <q-page >
    <div class="container">
      <div class="flex items-center justify-between q-pt-lg q-mb-lg">
        <div class="flex items-center ">
          <q-icon size="30px" class="q-mr-md" color="primary" name="app_registration" />
          <h1 class="text-h5">{{!h1_add ? 'Билды' : ''}} New World {{h1_add ? ' | Билд ' + h1_add : ''}}</h1>

        </div>
        <q-btn to="/skills" :class="$q.screen.lt.sm ? 'full-width q-mb-md' : ''" icon="add" no-caps color="primary" text-color="dark" label="Создать билд"/>
      </div>

      <q-card dark class="q-mb-lg">
        <q-card-section>
          <p class="q-mb-md text-h6 text-bold text-primary">Поиск</p>

          <div class=" row q-mb-md">

            <q-select
              @popup-hide = 'roleChanged'
              class="col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pr-lg-sm q-pr-md-sm q-pr-sm-sm q-pr-sm-none q-mb-sm-sm q-mb-xs-sm"
                      dark v-model="build_role" filled :options="build_role_options" label="Роль" />
            <q-select class="col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pr-lg-sm q-pr-md-sm q-pr-sm-sm q-pr-sm-none q-mb-sm-sm q-mb-xs-sm"
                      dark v-model="build_purpose" filled :options="build_purpose_options" label="Назначение" />
            <q-select
              @popup-hide = 'firstWeaponChanged'
              class="col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pr-lg-sm q-pr-md-sm q-pr-sm-sm q-pr-sm-none q-mb-sm-sm q-mb-xs-sm"
                      dark v-model="build_first_weapon" filled :options="build_first_weapon_options"  label="Первое оружие" />
            <q-select class="col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pr-lg-sm q-pr-md-sm q-pr-sm-sm q-pr-sm-none q-mb-sm-sm q-mb-xs-sm"
                      dark v-model="build_second_weapon" filled :options="build_second_weapon_options"  label="Второе оружие" />

          </div>
          <div class="flex wrap justify-between">
            <q-btn text-color="dark" :class="$q.screen.lt.sm ? 'full-width q-mb-md' : ''" color="primary" @click="filterBuilds" label="Найти"/>
            <q-btn text-color="dark" :class="$q.screen.lt.sm ? 'full-width' : ''"color="primary" @click="resetFilters" label="Сбросить"/>

          </div>

        </q-card-section>
      </q-card>
      <h3 class="text-h5">{{!is_filtered ? 'Популярные билды' : 'Результаты поиска'}}</h3>
      <q-card dark class="">
         <q-list v-if="!is_filtered" dark>
        <div class="" v-for="build in builds"
             :key="build.id">
          <q-item clickable :to="`/builds/${build.name_slug}`">
            <q-item-section class="gt-xs">
              <q-item-label class="text-bold">{{build.name}}</q-item-label>
              <q-item-label caption class="text-grey-9">Название</q-item-label>

            </q-item-section>
            <q-item-section class="gt-xs">
              <q-item-label class="text-bold">{{build.role}} </q-item-label>
              <q-item-label caption class="text-grey-9">Роль</q-item-label>
            </q-item-section>
            <q-item-section class="gt-xs">
              <q-item-label class="text-bold">{{build.purpose}} </q-item-label>
              <q-item-label caption class="text-grey-9">Назначение</q-item-label>
            </q-item-section>
            <q-item-section  class="gt-xs">
              <q-item-label class="text-bold">{{build.weapon1.name}} / {{build.weapon2.name}}</q-item-label>
              <q-item-label caption class="text-grey-9">Оружие</q-item-label>
            </q-item-section>
            <q-item-section class="gt-xs">
              <q-rating
                v-model="build.rating"
                size="12px"
                color="primary"
                readonly
              />
              <q-item-label caption class="text-grey-9">Рейтинг</q-item-label>
            </q-item-section>
            <q-item-section side  class="gt-xs">
              <q-item-label >{{build.created }} назад</q-item-label>
              <q-item-label caption class="text-grey-9">Добавлен</q-item-label>
            </q-item-section>
            <q-item-section  class="lt-sm">
              <q-item-label caption class="text-grey-9">Название</q-item-label>
              <q-item-label class="text-bold">{{build.name}}</q-item-label>
              <q-item-label caption class="text-grey-9">Роль</q-item-label>
              <q-item-label class="text-bold">{{build.role}} </q-item-label>
              <q-item-label caption class="text-grey-9">Назначение</q-item-label>
              <q-item-label class="text-bold">{{build.purpose}} </q-item-label>
              <q-item-label caption class="text-grey-9">Оружие</q-item-label>
              <q-item-label class="text-bold">{{build.weapon1.name}} / {{build.weapon2.name}}</q-item-label>
              <q-item-label caption class="text-grey-9">Рейтинг</q-item-label>
              <q-rating
                v-model="build.rating"
                size="12px"
                color="primary"
                readonly
              />
              <q-item-label caption class="text-grey-9">Добавлен</q-item-label>
              <q-item-label class="text-bold">{{build.created }} назад</q-item-label>



            </q-item-section>
          </q-item>
          <q-separator dark   />
        </div>
      </q-list>
         <q-list v-else dark>
        <div class="" v-for="build in filtered_builds"
             :key="build.id">
          <q-item clickable :to="`/builds/${build.name_slug}`">
            <q-item-section class="gt-xs">
              <q-item-label class="text-bold">{{build.name}}</q-item-label>
              <q-item-label caption class="text-grey-9">Название</q-item-label>

            </q-item-section>
            <q-item-section class="gt-xs">
              <q-item-label class="text-bold">{{build.role}} </q-item-label>
              <q-item-label caption class="text-grey-9">Роль</q-item-label>
            </q-item-section>
            <q-item-section class="gt-xs">
              <q-item-label class="text-bold">{{build.purpose}} </q-item-label>
              <q-item-label caption class="text-grey-9">Назначение</q-item-label>
            </q-item-section>
            <q-item-section  class="gt-xs">
              <q-item-label class="text-bold">{{build.weapon1.name}} / {{build.weapon2.name}}</q-item-label>
              <q-item-label caption class="text-grey-9">Оружие</q-item-label>
            </q-item-section>
            <q-item-section class="" class="gt-xs">
              <q-rating
                v-model="build.rating"
                size="12px"
                color="primary"
                readonly
              />
              <q-item-label caption class="text-grey-9">Рейтинг</q-item-label>
            </q-item-section>
            <q-item-section side  class="gt-xs">
              <q-item-label>{{build.created }} назад</q-item-label>
              <q-item-label caption class="text-grey-9">Добавлен</q-item-label>
            </q-item-section>
            <q-item-section  class="lt-sm">
              <q-item-label caption class="text-grey-9">Название</q-item-label>
              <q-item-label class="text-bold">{{build.name}}</q-item-label>
              <q-item-label caption class="text-grey-9">Роль</q-item-label>
              <q-item-label class="text-bold">{{build.role}} </q-item-label>
              <q-item-label caption class="text-grey-9">Назначение</q-item-label>
              <q-item-label class="text-bold">{{build.purpose}} </q-item-label>
              <q-item-label caption class="text-grey-9">Оружие</q-item-label>
              <q-item-label class="text-bold">{{build.weapon1.name}} / {{build.weapon2.name}}</q-item-label>
              <q-item-label caption class="text-grey-9">Рейтинг</q-item-label>
              <q-rating
                v-model="build.rating"
                size="12px"
                color="primary"
                readonly
              />
              <q-item-label caption class="text-grey-9">Добавлен</q-item-label>
              <q-item-label class="text-bold">{{build.created }} назад</q-item-label>



            </q-item-section>
          </q-item>
          <q-separator dark   />
        </div>
      </q-list>
        <q-inner-loading dark :showing="is_loading">
        <q-spinner-gears size="50px" color="primary" />
      </q-inner-loading>
      </q-card>

    </div>
  </q-page>
</template>
<script>

import {mapGetters} from "vuex";

export default {
  async preFetch ({store,currentRoute,redirect}) {
    store.dispatch('data/resetBuildsWeapon')
    if (currentRoute.params.weapon){
      store.dispatch('data/setBuildsWeapon',currentRoute.params.weapon)
      if (!store.state.data.builds_weapon){
        redirect({ path: '/404' })
      }
    }
    if (currentRoute.params.role){
      store.dispatch('data/setBuildsRole',currentRoute.params.role)
       if (!store.state.data.builds_role){
        redirect({ path: '/404' })
      }
    }

    if (store.state.data.builds.length === 0){
      await store.dispatch('data/fetchBuilds')
    }
  },
  // meta: {
  //   title: 'New World Fans | Билды на русском',
  //   // meta tags
  //   meta: {
  //     description: {name: 'description', content: 'Узнавай лучшие билды для New World первым! Рапира билд, копье билд, билд хила, билд мага, мушкет билд и многие другие лучшие билды! Заходи!'},
  //     ogTitle: {
  //       name: 'og:title',
  //       template(ogTitle) {
  //         return `New World Fans | Билды на русском`
  //       }
  //     }
  //   }
  // },
  meta() {
    return{
       title: this.title,
    // meta tags
    meta: {
      description: {name: 'description', content: this.description},
      ogTitle: {
        name: 'og:title',
        template(ogTitle) {
          return this.title
        }
      }
    }
    }

  },
  data () {
    return {
      h1_add:'',
      is_filtered:false,
      is_loading:false,
      filtered_builds:[],
      build_purpose:'Универсальный',
      build_first_weapon:'Любое оружие',
      build_second_weapon:'Любое оружие',
      build_role:{slug:'',label:'Не указана'},
      build_purpose_options: [
        'ПвП', 'ПвЕ', 'Осады', 'Данжи', 'Универсальный'
      ],
      // build_first_weapon_options:[
      //   'Любое оружие','Меч и щит','Боевой молот','Секира','Топор','Лук','Мушкет','Рапира','Копье','Посох жизни','Посох огня','Ледяная перчатка'
      // ],
      build_first_weapon_options:[
        {slug:'sword',label:'Меч и щит'},
      {slug:'war_hammer',label:'Боевой молот'},
      {slug:'great_axe',label:'Секира'},
      {slug:'hatchet',label:'Топор'},
      {slug:'bow',label:'Лук'},
      {slug:'musket',label:'Мушкет'},
      {slug:'rapier',label:'Рапира'},
      {slug:'spear',label:'Копье'},
      {slug:'life_staff',label:'Посох жизни'},
      {slug:'fire_staff',label:'Посох огня'},
      {slug:'ice_gauntlet',label:'Ледяная перчатка'}
      ],
      build_second_weapon_options:[
        'Любое оружие','Меч и щит','Боевой молот','Секира','Топор','Лук','Мушкет','Рапира','Копье','Посох жизни','Посох огня','Ледяная перчатка'
      ],
      build_role_options:[
        {slug:'tank',label:'Танк'},
      {slug:'heal',label:'Хил'},
      {slug:'dd',label:'ДД'},
      {slug:'rdd',label:'РДД'},
      ]
    }
  },
  async mounted() {
    // this.title = 'New World Fans | Билды на русском'
    // this.description = 'New World Fans | Билды на русском'

    if (this.builds_weapon){
      this.build_first_weapon = this.builds_weapon
      this.h1_add = this.builds_weapon.label
      await this.filterBuilds()
    }

    if (this.builds_role){
      this.build_role = this.builds_role
      this.h1_add = this.builds_role.label
      await this.filterBuilds()
    }



  },
  methods: {
    firstWeaponChanged(data){

    if (!this.builds_role){
      this.$router.push(`/builds/weapon/${this.build_first_weapon.slug}`)
    }


    },
    roleChanged(data){
      if (!this.builds_weapon){
       this.$router.push(`/builds/role/${this.build_role.slug}`)
      }

    },
    async filterBuilds() {
      this.is_loading = true
      const response = await this.$api.post('/api/skill/builds_filter', {
        build_role: this.build_role.label,
        build_purpose: this.build_purpose,
        build_first_weapon: this.build_first_weapon.label,
        build_second_weapon: this.build_second_weapon,
      })
      this.filtered_builds = response.data
      this.is_filtered = true
      this.is_loading = false
    },
    resetFilters() {
      this.$store.dispatch('data/resetBuildsWeapon')
      this.$router.push('/builds')
      // this.build_purpose = 'Универсальный'
      // this.build_first_weapon = 'Любое оружие'
      // this.build_second_weapon = 'Любое оружие'
      // this.build_role = 'Не указана'
      // this.is_filtered = false
    },
  },
    computed:{
      ...mapGetters('data',['builds','builds_weapon','builds_role','title','description']),
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
