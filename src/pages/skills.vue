<template>


  <q-page class="">
    <div class="container">
      <p class="text-body2 text-center q-mb-none q-mt-md">Для сохранения билда выберите оба оружия и распределите все доступные очки</p>

      <Calculator weapon_title="Первое оружие" :weapon_num="1" @done="firstDone" @not_done="not_done" @changeFirstWeapon="changeFirstWeapon"/>
      <Calculator weapon_title="Второе оружие" :weapon_num="2" @done="secondDone" @not_done="not_done" @changeSecondWeapon="changeSecondWeapon"/>
      <!-- -->
<div  class="characteristics q-mb-md">
        <q-separator dark spaced="lg"></q-separator>
        <div class="characteristics-row" v-for="(characteristic,index) in characteristics" :key="characteristic.id">
          <div class="">
            <q-btn-group >
            <q-btn color="primary" label="-1" text-color="dark" @click="removePoints(index,1)"  />
            <q-btn color="primary" label="-10" text-color="dark"  @click="removePoints(index,10)" />
            <p class="q-mb-none text-h6 text-bold q-px-sm">{{characteristic.current_val}}</p>
          </q-btn-group>
          <q-btn-group >
            <q-btn color="primary" label="+1" text-color="dark"  @click="addPoints(index,1)"  />
            <q-btn color="primary" label="+10" text-color="dark" @click="addPoints(index,10)"  />
          </q-btn-group>
          </div>

          <div class="">
            <p class="q-mb-none text-h6 text-bold">{{characteristic.name_en}} ({{characteristic.name}}) <q-btn icon="help_outline" round flat color="primary">
        <q-tooltip>

          <span class="text-caption" v-html="characteristic.description"></span>
        </q-tooltip>
      </q-btn></p>
             <q-linear-progress stripe rounded size="18px" :value="characteristic.current_val/3*0.01" color="primary" class="relative-position" >
          <div class="absolute-full flex justify-between">
            <div class=""></div>
            <q-btn
              :color="characteristic.current_val >= characteristic.step1_val ? 'dark' : 'white'"
                   round
                   :outline="characteristic.current_val >= characteristic.step1_val ? false : true"
                   size="8px" dense class="characteristics-row-dot" label="" >
              <q-tooltip>
                <div class="text-caption" v-html="characteristic.step1_description"></div>

            </q-tooltip>
            </q-btn>

            <q-btn
              :color="characteristic.current_val >= characteristic.step2_val ? 'dark' : 'white'"
                   round
                   :outline="characteristic.current_val >= characteristic.step2_val ? false : true"
                   size="8px" dense class="characteristics-row-dot" label="" >
              <q-tooltip>
                 <div class="text-caption" v-html="characteristic.step2_description"></div>

            </q-tooltip>
            </q-btn>

            <q-btn
              :color="characteristic.current_val >= characteristic.step3_val ? 'dark' : 'white'"
                   round
                   :outline="characteristic.current_val >= characteristic.step3_val ? false : true"
                   size="8px" dense class="characteristics-row-dot" label="" >
              <q-tooltip>
                 <div class="text-caption" v-html="characteristic.step3_description"></div>

            </q-tooltip>
            </q-btn>

            <q-btn
              :color="characteristic.current_val >= characteristic.step4_val ? 'dark' : 'white'"
                   round
                   :outline="characteristic.current_val >= characteristic.step4_val ? false : true"
                   size="8px" dense class="characteristics-row-dot" label="" >
              <q-tooltip>
                 <div class="text-caption" v-html="characteristic.step4_description"></div>

            </q-tooltip>
            </q-btn>

            <q-btn
              :color="characteristic.current_val >= characteristic.step5_val ? 'dark' : 'white'"
                   round
                   :outline="characteristic.current_val >= characteristic.step5_val ? false : true"
                   size="8px" dense class="characteristics-row-dot" label="" >
              <q-tooltip>
                 <div class="text-caption" v-html="characteristic.step5_description"></div>

            </q-tooltip>
            </q-btn>

            <q-btn
              :color="characteristic.current_val >= characteristic.step6_val ? 'dark' : 'white'"
                   round
                   :outline="characteristic.current_val >= characteristic.step6_val ? false : true"
                   size="8px" dense class="characteristics-row-dot" label="" >
              <q-tooltip>
                 <div class="text-caption" v-html="characteristic.step6_description"></div>

            </q-tooltip>
            </q-btn>


          </div>
          </q-linear-progress>
          </div>

        </div>
        <div class="flex items-center justify-between q-mt-md">
           <p class="text-bold text-h6 q-mb-none">Осталось очков: {{can_add}}</p>
          <q-btn color="primary" text-color="dark" @click="resetPoints" label="Сброс"/>
        </div>
      </div>
     <div v-if="showForm && done" class="">

       <div  class=" q-mb-lg">
        <div v-if="!is_build_saved">

          <div class="flex justify-between">
            <q-checkbox v-model="build_private" color="red" class="q-mb-sm" dark label="Приватный билд (доступен только по ссылке и не отображается в общем списке)" />
            <q-input style="flex-basis: 49%" v-model="build_name" class="q-mb-md" filled label="Название" dark/>
           <q-select style="flex-basis: 49%" dark v-model="build_purpose" filled :options="options" label="Назначение" />
          </div>


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
          <p class="text-h6 text-bold">Ссылка на билд: <span class="text-primary  inline-block q-mx-sm">https://www.nwfans.ru/builds/{{build_slug}}</span>
            <span @click="copyCB(`https://www.nwfans.ru/builds/${build_slug}`)" class="text-caption cursor-pointer"
                  style="border-bottom: 1px dashed #fff">{{is_copied ? 'скопировано' : 'скопировать в буфер'}}</span></p>
        </div>
      </div>
     </div>


<!---->

    </div>


  </q-page>


</template>

<script>
import { copyToClipboard } from 'quasar'
import Calculator from "components/Calculator";
import {mapActions,mapGetters} from "vuex"
import {api} from "boot/axios";

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
      total_points:190,
      points_spent:0,
      firstWeapon:{weapon:null},
      secondWeapon:{weapon:null},
      firstWeaponDone:false,
      secondWeaponDone:false,
      done:false,
      is_loading:false,
      is_build_saved:false,
      is_copied:false,
      build_name:null,
      build_purpose:'Универсальный',
      build_private:false,
      build_description:null,
      build_slug:null,
      characteristics:[],
       options: [
        'ПвП', 'ПвЕ', 'Осады', 'Данжи', 'Универсальный'
      ]


    }
  },
  async mounted() {
    await this.fetchWeapons()
    const response = await api.get('/api/skill/characteristics')
    this.characteristics = response.data
  },
  methods:{
    ...mapActions('weapons',['fetchWeapons']),
    resetPoints(){
      this.points_spent = 0
      this.total_points = 190
      for (let i of this.characteristics){
        i.current_val = 5
      }
    },
    removePoints(index,val){
      let current_val = this.characteristics[index].current_val
      if (current_val-val >= this.characteristics[index].min){
        this.characteristics[index].current_val = current_val-val
        this.points_spent -= val
      }

    },
    addPoints(index,val){
      if(this.can_add>=val){
        let current_val = this.characteristics[index].current_val
      if (current_val+val <= this.characteristics[index].max){
        this.characteristics[index].current_val = current_val+val
        this.points_spent += val
      }
      }


    },
    not_done(){
      this.done=false
      console.log(this.showForm)
    },
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
      this.done=true
      this.firstWeapon = data

    },
    secondDone(data){
      console.log('SecondDOne',data)
      this.done=true
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
        purpose:this.build_purpose,
        weapon1:this.firstWeapon.weapon,
        weapon2:this.secondWeapon.weapon,
        characteristics:this.characteristics,
        is_private:this.build_private
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
    ,
    can_add(){
      return this.total_points - this.points_spent
    }
  }

};
</script>
<style lang="sass">
.characteristics
  &-row
    display: grid
    grid-template-columns: 1fr 3fr
    align-items: flex-end
    margin-bottom: 15px
    &-dot
      width: 10px
      height: 10px
      margin-top: 4px
</style>
