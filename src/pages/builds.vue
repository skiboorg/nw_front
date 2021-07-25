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

      <q-card dark class="q-mb-lg">
        <q-card-section>
          <p class="q-mb-md text-h6 text-bold text-primary">Фильтры</p>

          <div class=" row q-mb-md">

             <q-select class="col-6 q-pr-xs" style="flex-basis: 49%" dark v-model="build_purpose" filled :options="build_purposes" label="Назначение" />
            <q-select class="col-6 q-pl-xs"  style="flex-basis: 49%" dark v-model="build_weapon" filled :options="build_weapons"  label="Оружие" >

            </q-select>
          </div>

          <q-btn text-color="dark" color="primary" @click="filterBuilds" label="Показать"/>
        </q-card-section>
      </q-card>


      <q-list dark>

        <div class="" v-for="build in fiter_builds"
             :key="build.id">
          <q-item clickable :to="`/builds/${build.name_slug}`">
            <q-item-section>
              <q-item-label>{{build.name}}</q-item-label>

            </q-item-section>
             <q-item-section>
              <q-item-label >{{build.purpose}} </q-item-label>
            </q-item-section>


            <q-item-section>
              <q-item-label >{{build.weapon1.name}} / {{build.weapon2.name}}</q-item-label>
            </q-item-section>
            <q-item-section class="">
              <div class="flex">
                <p class="q-mb-none  q-mr-sm"> Рейтинг:</p>
                 <q-rating
                v-model="build.rating"
                size="12px"
                color="primary"
                readonly
              />
              </div>


            </q-item-section>

            <q-item-section side >
              <q-item-label >{{new Date(build.created_at).toLocaleString() }}</q-item-label>

            </q-item-section>
          </q-item>

          <q-separator dark   />
        </div>



      </q-list>




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
      builds:[],
      fiter_builds:[],
      build_purpose:'Любое назначение',
      build_weapon:'Любое оружие',
      build_purposes: [
        'Любое назначение', 'ПвП', 'ПвЕ', 'Осады', 'Данжи', 'Универсальный'
      ],
      build_weapons:[
        'Любое оружие','Меч и щит','Боевой молот','Секира','Топор','Лук','Мушкет','Рапира','Копье','Посох жизни','Посох огня','Ледяная перчатка']

    }
  },
  async mounted() {

    const response = await this.$api.get(`/api/skill/build?for=all`)
    this.builds = response.data
    this.fiter_builds = this.builds

  },
  methods:{

    filterBuilds(){
      console.log(this.builds)
      if (this.build_weapon !=='Любое оружие'){
        this.fiter_builds=[]
        for(let i of this.builds){
          if (i.weapon1.name === this.build_weapon || i.weapon2.name === this.build_weapon){
            this.fiter_builds.push(i)
          }
        }
      }else {
        this.fiter_builds=this.builds
      }

      if (this.build_purpose !=='Любое назначение'){
        this.fiter_builds = this.fiter_builds.filter(x=> x.purpose === this.build_purpose)
      }


    }
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
