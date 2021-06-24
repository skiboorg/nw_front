<template>
  <q-page class="">
    <div class="container">

      <div class="flex items-center q-pt-lg no-wrap">
        <q-icon size="30px" class="q-mr-md" color="primary" name="perm_data_setting" />
        <h3 class="text-h5">Калькулятор умений <span class="text-caption">версия 0.2</span></h3>
      </div>
       <q-tabs
          v-model="currentTab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator >
         <q-tab name="first" :label="`Первое оружие : ${firstWeapon.name ? firstWeapon.name : 'Выберите'}`" />
         <q-tab name="second" :label="`Второе оружие : ${secondWeapon.name ? secondWeapon.name : 'Выберите'}`" />
       </q-tabs>
      <q-tab-panels  v-model="currentTab" animated>
          <q-tab-panel class="bg-dark" name="first">
            <Calculator :weapon_num="1" :weapon_type="firstWeapon"/>
          </q-tab-panel>

          <q-tab-panel class="bg-dark"  name="second">
            <Calculator :weapon_num="2" :weapon_type="secondWeapon"/>
          </q-tab-panel>


        </q-tab-panels>
    </div>
  </q-page>
</template>
<script>
import { copyToClipboard } from 'quasar'
import Calculator from "components/Calculator";
import {mapActions,mapGetters} from "vuex"
export default {
  components: {Calculator},
  meta: {
    // sets document title
    title: 'New World Fans | Калькулятор умений',


    // meta tags
    meta: {
      description: {name: 'Калькулятор билдов и описание скилов игры New World'},
      keywords: {name: 'keywords', content: 'Калькулятор билдов и описание скилов игры New World'},

      ogTitle: {
        name: 'og:title',
        // optional; similar to titleTemplate, but allows templating with other meta properties
        template(ogTitle) {
          return `New World Fans | Калькулятор умений`
        }
      }
    }
  },


  data() {
    return {
      currentTab:'first',

    }
  },
  async mounted() {
    console.log('skills mount')
    await this.fetchWeapons()

  },
  methods:{
    ...mapActions('weapons',['fetchWeapons']),
    copyCB(text){
      copyToClipboard(text)
        .then(() => {
          this.is_copied = true
        })
        .catch(() => {

        })
    },


    async saveBuild(){
      this.is_loading = true
      const response = await this.$api.post(`/api/skill/build`,{
        checked_skills_left:this.weapon.trees[0].checked_skills,
        checked_skills_right:this.weapon.trees[1].checked_skills,
        description:this.build_description,
        name:this.build_name,
        weapon:this.weapon.id,
      })
      this.is_build_saved = true
      this.build_slug = response.data.slug
       this.$q.notify({
          message: 'Спасибо, ссылка будет активна после модерации',
          position: this.$q.screen.lt.sm ? 'bottom' : 'bottom-right',
          color: 'positive',
          icon: 'announcement'
        })
    },
    async getWeapon(slug){
      const response = await this.$api.get(`/api/skill/weapon?slug=${slug}`)
      this.weapon = response.data

      this.panel = 'calc'
    },

  },
  watch: {


  },
  computed:{
    ...mapGetters('weapons',['firstWeapon','secondWeapon'])





  }

};
</script>
