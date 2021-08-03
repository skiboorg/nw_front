<template>
  <q-page >
    <div class="container">
      <div class="flex items-center justify-between q-pt-lg q-mb-lg">
        <div class="flex items-center ">
          <q-icon size="30px" class="q-mr-md" color="primary" name="app_registration" />
          <h1 class="text-h5">Билды New World</h1>
        </div>
        <q-btn to="/skills" :class="$q.screen.lt.sm ? 'full-width q-mb-md' : ''" icon="add" no-caps color="primary" text-color="dark" label="Создать билд"/>
      </div>

      <q-card dark class="q-mb-lg">
        <q-card-section>
          <p class="q-mb-md text-h6 text-bold text-primary">Поиск</p>

          <div class=" row q-mb-md">

            <q-select class="col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pr-lg-sm q-pr-md-sm q-pr-sm-sm q-pr-sm-none q-mb-sm-sm q-mb-xs-sm"
                      dark v-model="build_role" filled :options="build_role_options" label="Роль" />
            <q-select class="col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pr-lg-sm q-pr-md-sm q-pr-sm-sm q-pr-sm-none q-mb-sm-sm q-mb-xs-sm"
                      dark v-model="build_purpose" filled :options="build_purpose_options" label="Назначение" />
            <q-select class="col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pr-lg-sm q-pr-md-sm q-pr-sm-sm q-pr-sm-none q-mb-sm-sm q-mb-xs-sm"
                      dark v-model="build_first_weapon" filled :options="build_first_weapon_options"  label="Первое оружие" />
            <q-select class="col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pr-lg-sm q-pr-md-sm q-pr-sm-sm q-pr-sm-none q-mb-sm-sm q-mb-xs-sm"
                      dark v-model="build_second_weapon" filled :options="build_first_weapon_options"  label="Второе оружие" />

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
  async preFetch ({store}) {
    if (store.state.data.builds.length === 0){
      await store.dispatch('data/fetchBuilds')
    }
  },
  meta: {
    title: 'New World Fans | Билды на русском',
    // meta tags
    meta: {
      description: {name: 'description', content: 'Узнавай лучшие билды для New World первым! Рапира билд, копье билд, билд хила, билд мага, мушкет билд и многие другие лучшие билды! Заходи!'},
      ogTitle: {
        name: 'og:title',
        template(ogTitle) {
          return `New World Fans | Билды на русском`
        }
      }
    }
  },
  data () {
    return {
      is_filtered:false,
      is_loading:false,
      filtered_builds:[],
      build_purpose:'Универсальный',
      build_first_weapon:'Любое оружие',
      build_second_weapon:'Любое оружие',
      build_role:'Не указана',
      build_purpose_options: [
        'ПвП', 'ПвЕ', 'Осады', 'Данжи', 'Универсальный'
      ],
      build_first_weapon_options:[
        'Любое оружие','Меч и щит','Боевой молот','Секира','Топор','Лук','Мушкет','Рапира','Копье','Посох жизни','Посох огня','Ледяная перчатка'
      ],
      build_second_weapon_options:[
        'Любое оружие','Меч и щит','Боевой молот','Секира','Топор','Лук','Мушкет','Рапира','Копье','Посох жизни','Посох огня','Ледяная перчатка'
      ],
      build_role_options:['Не указана','Танк','Хил','ДД','РДД']
    }
  },
  methods: {
    async filterBuilds() {
      this.is_loading = true
      const response = await this.$api.post('/api/skill/builds_filter', {
        build_role: this.build_role,
        build_purpose: this.build_purpose,
        build_first_weapon: this.build_first_weapon,
        build_second_weapon: this.build_second_weapon,
      })
      this.filtered_builds = response.data
      this.is_filtered = true
      this.is_loading = false
    },
    resetFilters() {
      this.build_purpose = 'Универсальный'
      this.build_first_weapon = 'Любое оружие'
      this.build_second_weapon = 'Любое оружие'
      this.build_role = 'Не указана'
      this.is_filtered = false
    },
  },
    computed:{
      ...mapGetters('data',['builds']),
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
