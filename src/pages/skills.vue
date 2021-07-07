<template>


  <q-page class="">
    <div class="container">
      <p class="text-body2 text-center q-mb-none q-mt-md">Для сохранения билда выберите оба оружия и распределите все доступные очки</p>

     <Calculator weapon_title="Выберите первый набор" :weapon_num="1" @done="firstDone" @changeFirstWeapon="changeFirstWeapon"/>
    <Calculator weapon_title="Выберите второй набор" :weapon_num="2" @done="secondDone" @changeSecondWeapon="changeSecondWeapon"/>
<!-- -->


          <div v-if="showForm" class="save-build q-mb-lg">
            <div v-if="!is_build_saved">
              <p class="text-h6">Сохранить билд</p>
              <q-input v-model="build_name" class="q-mb-md" filled label="Название" dark/>
                  <q-editor
      v-model="build_description"
        label="Описание билда"
      dark
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

              <q-btn @click="saveBuild" :disable="!build_description || !build_name" :loading="is_loading" color="primary" text-color="dark" no-caps label="Сохранить"/>
            </div>
            <div v-else class="">
              <p>Ссылка на билд: <span class="text-primary inline-block q-mx-sm">https://www.nwfans.ru/build/{{build_slug}}</span>
                <span @click="copyCB(`https://www.nwfans.ru/build/${build_slug}`)" class="text-caption cursor-pointer"
                      style="border-bottom: 1px dashed #fff">{{is_copied ? 'скопировано' : 'скопировать в буфер'}}</span></p>
            </div>
          </div>
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
      firstWeapon:{weapon:null},
      secondWeapon:{weapon:null},
      firstWeaponDone:false,
      secondWeaponDone:false,
      is_loading:false,
      is_build_saved:false,
      is_copied:false,
      build_name:null,
      build_description:null,
      build_slug:null,



    }
  },
   async mounted() {
     await this.fetchWeapons()

  },
  methods:{
    ...mapActions('weapons',['fetchWeapons']),
    changeFirstWeapon(){
      console.log('changeFirstWeapon')
      this.firstWeapon = {}
    },
    changeSecondWeapon(){
      console.log('changeSecondWeapon')
      this.secondWeapon = {}
    },
    firstDone(data){
      console.log('firstDone',data)
      this.firstWeapon = data

    },
    secondDone(data){
      console.log('firstDone',data)
      this.secondWeapon = data

    },
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
        checked_skills_left_w1:this.firstWeapon.checked_skills_left,
        checked_skills_right_w1:this.firstWeapon.checked_skills_right,
        checked_skills_left_w2:this.secondWeapon.checked_skills_left,
        checked_skills_right_w2:this.secondWeapon.checked_skills_right,
        description:this.build_description,
        name:this.build_name,
        weapon1:this.firstWeapon.weapon,
        weapon2:this.secondWeapon.weapon,
      })
      this.is_build_saved = true
      this.build_slug = response.data.slug
       this.$q.notify({
          message: 'Спасибо, ссылка активна и ей можно делиться с друзьями',
          position: this.$q.screen.lt.sm ? 'bottom' : 'bottom-right',
          color: 'positive',
          icon: 'announcement'
        })
    },



  },
  watch:{
    'firstWeapon.weapon'(val){
      if(val){
        this.firstWeaponDone = true
      }else{
        this.firstWeapon = {}
        this.firstWeaponDone = false
      }

       console.log('changeFirstWeapon',this.firstWeapon)
      console.log('changeFirstWeapon',this.firstWeaponDone)
    },
    'secondWeapon.weapon'(val){
      if(val){
        this.secondWeaponDone = true
      }else{
        this.secondWeapon = {}
        this.secondWeaponDone = false
      }

      console.log('changeFirstWeapon',this.secondWeapon)
      console.log('changeFirstWeapon',this.secondWeaponDone)
    },


    },

  computed:{
    showForm(){

      return this.firstWeaponDone && this.secondWeaponDone
    }
  }

};
</script>
