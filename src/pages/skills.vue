<template>


  <q-page class="">
    <div class="container">

      <q-tab-panels v-model="panel" animated class="bg-dark">

        <q-tab-panel name="choose">
          <div class="flex items-center q-pt-lg no-wrap">
            <q-icon size="30px" class="q-mr-md" color="primary" name="perm_data_setting" />
            <h3 class="text-h5">Калькулятор умений <span class="text-caption">версия 0.1</span></h3>
          </div>
          <div class="text-h6 q-mb-md">Выберите оружие</div>

          <div class="weapon-grid">
            <q-card @click="getWeapon(item.name_slug)" v-for="item in weapons" :key="item.id" class="cursor-pointer shadow-4">
              <q-img :src="item.image" :ratio="16/9">
                <div class="text-h5 absolute-bottom text-right no-padding">
                  <p class="q-mb-none q-mr-sm">{{item.name}}</p>
                  <p class="text-caption q-mb-none q-mr-sm">Характеристики: {{item.main_char}}</p>
                </div>
              </q-img>
            </q-card>
          </div>
        </q-tab-panel>

        <q-tab-panel name="calc">
          <div @click="closeCalc" class="flex items-center q-mb-md cursor-pointer">
            <q-icon size="30px" name="west" class="q-mr-lg"/>
            <p class="q-mb-none text-h6">Выбор оружия</p>
          </div>
          <div class="skills-wrapper q-mb-lg">

            <div class="skill-tree" v-for="(tree,tree_index) in weapon.trees" :key="tree.id">

              <p class="text-center text-h5 q-mb-none">{{tree.name_en}} </p>
              <p class="text-center text-caption ">{{tree.name}}</p>
              <p class="text-center text-body1 ">Вложено очков :
                {{tree_index===0 ? points_spent_left : points_spent_right}} (Доступно {{avaiable_points}})
              </p>


              <div :ref="`row${row_index+1}tree${tree_index}`" class="skill-tree__row " v-for="(row,row_index) in 6">
                <div v-if="!item.is_empty"
                     @mouseenter="is_hover=true"
                     @click="item.is_can_check ? checkItem(tree_index,item.id) : null"
                     class="skill-tree__item"
                     :class="[
                     item.is_active_skill ? 'active-skill':'',
                     item.is_parent ? 'skill-is-parent':'',
                     item.is_has_parent ? 'skill-has-parent':'',
                     item.is_checked ? 'skill-is-checked':'',
                     item.is_can_check ? 'skill-is-can-check':'',
                     item.is_ultimate ? 'skill-is-ultimate':'',
                     item.is_has_left_parent ? 'skill-is-has-left-parent':'',
                      avaiable_points === 0 ? 'item-disabled' : ''
                     ]"
                     v-for="(item,item_index) in _.orderBy(tree.skills.filter(x=>x.row===row_index+1), ['col'],['asc'])"
                     :key="item_index">
                  <img :src="item.image"/>

                  <q-tooltip
                    transition-show="scale"
                    transition-hide="scale"
                    :content-style="{ background: '#000',border:'1px dashed #fff'}"
                  >
                    <p class="text-center text-body2 text-bold">{{item.name_en}}</p>
                    <p style="max-width: 350px" class="text-center text-body2">{{item.description}}</p>
                  </q-tooltip>
                </div>
                <div v-else class=""></div>

              </div>
            </div>
          </div>
          <div v-if="avaiable_points===0 " class="save-build q-mb-lg">
            <div v-if="!is_build_saved">
              <p class="text-h6">Сохранить билд</p>
              <q-input v-model="build_name" class="q-mb-md" filled label="Название" dark/>
              <q-input v-model="build_description" class="q-mb-md" filled label="Описание билда" dark type="textarea"/>
              <q-btn @click="saveBuild" :disable="!build_description || !build_name" :loading="is_loading" color="primary" text-color="dark" no-caps label="Сохранить"/>
            </div>
            <div v-else class="">
              <p>Ссылка на билд: <span class="text-primary inline-block q-mx-sm">https://www.nwfans.ru/build/{{build_slug}}</span>
                <span @click="copyCB(`https://www.nwfans.ru/build/${build_slug}`)" class="text-caption cursor-pointer"
                      style="border-bottom: 1px dashed #fff">{{is_copied ? 'скопировано' : 'скопировать в буфер'}}</span></p>
            </div>

          </div>
          <q-separator spaced="lg"/>
          <div class="skills-wrapper q-mb-lg">
            <div class="skill-tree" v-for="(tree,tree_index) in weapon.trees" :key="tree.id">
              <p v-if="item.is_checked" v-for="item in tree.skills">
                {{item.description}}
              </p>
            </div>
          </div>


        </q-tab-panel>


      </q-tab-panels>



    </div>


  </q-page>


</template>

<script>
import { copyToClipboard } from 'quasar'

export default {

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
          return `${ogTitle} - New World Fans | Калькулятор умений`
        }
      }
    }
  },


  data() {
    return {
      is_loading:false,
      is_build_saved:false,
      is_copied:false,
      build_name:null,
      build_description:null,
      build_slug:null,
      panel:'choose',
      is_hover:false,
      total_points:20,
      tree_left_rows:[
        {points:0},
        {points:0},
        {points:0},
        {points:0},
        {points:0},
        {points:0},
      ],
      tree_right_rows:[
        {points:0},
        {points:0},
        {points:0},
        {points:0},
        {points:0},
        {points:0},
      ],
      weapons:[],
      weapon:[]
    }
  },
  async mounted() {
    const response = await this.$api.get('/api/skill/weapons')
    this.weapons = response.data

  },
  methods:{
    copyCB(text){
      copyToClipboard(text)
        .then(() => {
          this.is_copied = true
        })
        .catch(() => {

        })
    },

    closeCalc(){
      this.panel = 'choose'
      this.total_points = 19
      for (let x in this.tree_left_rows){
        this.tree_left_rows[x].points=0
        this.tree_right_rows[x].points=0
      }
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
      this.$nextTick(function () {
        for (let x in this.weapon.trees){
          this.setRowActive(1,x)
        }

      })
      this.panel = 'calc'
    },
    setRowActive(row_index,tree_index){
      this.$refs[`row${row_index}tree${tree_index}`][0].classList.add('row-is-active')
      for (let i of this.weapon.trees[tree_index].skills){
        if (i.row===row_index){
          i.is_can_check = true
        }
      }
    },
    setRowInActive(row_index,tree_index){
      this.$refs[`row${row_index}tree${tree_index}`][0].classList.remove('row-is-active')
      for (let i of this.weapon.trees[tree_index].skills){
        if (i.row===row_index){
          i.is_can_check = false
          i.is_checked = false
        }
      }
      // for (let x in this.tree_left_rows){
      //   this.tree_left_rows[x].points=0
      // }
      if (row_index===0){
        this.tree_left_rows[row_index-1].points=0
      }else{
        this.tree_right_rows[row_index-1].points=0
      }

    },
    checkItem(tree_index,item_id){
      //console.log(tree_index,item_id)
      if(!this.weapon.trees[tree_index].checked_skills){
        this.weapon.trees[tree_index].checked_skills={}
      }

      let skill_item = this.weapon.trees[tree_index].skills.find(x=>x.id===item_id)
      let parent_item = skill_item.parent_skill
      let current_value = skill_item.is_checked
      let is_skill_is_parent = skill_item.is_parent

      if (is_skill_is_parent){
        let child=this.weapon.trees[tree_index].skills.find(x=>x.parent_skill===skill_item.id)
        if (child.is_checked){
          return
        }
      }

      if (!parent_item){
        skill_item.is_checked = !current_value
        if (tree_index===0){
          current_value ? this.tree_left_rows[skill_item.row-1].points -=1 : this.tree_left_rows[skill_item.row-1].points +=1

          this.weapon.trees[0].checked_skills[`skill_id_${skill_item.id}`] = skill_item.is_checked
        }
        else {
          current_value ? this.tree_right_rows[skill_item.row-1].points -=1 : this.tree_right_rows[skill_item.row-1].points +=1
          this.weapon.trees[1].checked_skills[`skill_id_${skill_item.id}`] = skill_item.is_checked
          // this.weapon.trees[1].checked_skills.push(skill_item.id)

        }
      }else{
        let parent = this.weapon.trees[tree_index].skills.find(x=>x.id===parent_item)
        console.log(parent.is_checked)
        if (parent.is_checked){
          skill_item.is_checked = !current_value
          if (tree_index===0){
            current_value ? this.tree_left_rows[skill_item.row-1].points -=1 : this.tree_left_rows[skill_item.row-1].points +=1
            this.weapon.trees[0].checked_skills[`skill_id_${skill_item.id}`] = skill_item.is_checked
          }
          else {
            current_value ? this.tree_right_rows[skill_item.row-1].points -=1 : this.tree_right_rows[skill_item.row-1].points +=1
            this.weapon.trees[1].checked_skills[`skill_id_${skill_item.id}`] = skill_item.is_checked
          }
        }
      }
    }
  },
  watch: {
    tree_left_row0(val){
      console.log(val)
      if(val===1){
        this.setRowActive(2,0)
      }
      if(val===0){
        this.setRowInActive(2,0)
      }
    },
    tree_left_row1(val){
      console.log(val)
      if(val===1){
        this.setRowActive(3,0)
      }
      if(val===0){
        this.setRowInActive(3,0)
      }
    },
    tree_left_row2(val){
      console.log(val)
      if(val===1){
        this.setRowActive(4,0)
      }
      if(val===0){
        this.setRowInActive(4,0)
      }
    },
    tree_left_row3(val){
      console.log(val)
      if(val===1){
        this.setRowActive(5,0)
      }
      if(val===0){
        this.setRowInActive(5,0)
      }
    },
    points_spent_left(val){
      if (val>=10){
        this.setRowActive(6,0)
      }
      else {
        this.setRowInActive(6,0)
      }
    },
    //-----
    tree_right_row0(val){
      console.log(val)
      if(val===1){
        this.setRowActive(2,1)
      }
      if(val===0){
        this.setRowInActive(2,1)
      }
    },
    tree_right_row1(val){
      console.log(val)
      if(val===1){
        this.setRowActive(3,1)
      }
      if(val===0){
        this.setRowInActive(3,1)
      }
    },
    tree_right_row2(val){
      console.log(val)
      if(val===1){
        this.setRowActive(4,1)
      }
      if(val===0){
        this.setRowInActive(4,1)
      }
    },
    tree_right_row3(val){
      console.log(val)
      if(val===1){
        this.setRowActive(5,1)
      }
      if(val===0){
        this.setRowInActive(5,1)
      }
    },
    points_spent_right(val){
      if (val>=10){
        this.setRowActive(6,1)
      }
      else {
        this.setRowInActive(6,1)
      }
    }

  },
  computed:{
    tree_left_row0(){
      return this.tree_left_rows[0].points
    },
    tree_left_row1(){
      return this.tree_left_rows[1].points
    },
    tree_left_row2(){
      return this.tree_left_rows[2].points
    },
    tree_left_row3(){
      return this.tree_left_rows[3].points
    },
    tree_left_row4(){
      return this.tree_left_rows[4].points
    },
    tree_left_row5(){
      return this.tree_left_rows[5].points
    },
    tree_right_row0(){
      return this.tree_right_rows[0].points
    },
    tree_right_row1(){
      return this.tree_right_rows[1].points
    },
    tree_right_row2(){
      return this.tree_right_rows[2].points
    },
    tree_right_row3(){
      return this.tree_right_rows[3].points
    },
    tree_right_row4(){
      return this.tree_right_rows[4].points
    },
    tree_right_row5(){
      return this.tree_right_rows[5].points
    },
    points_spent_left(){
      let total=0
      for (let x in this.tree_left_rows){
        total += this.tree_left_rows[x].points
      }
      return total
    },
    points_spent_right(){
      let total=0
      for (let x in this.tree_right_rows){
        total += this.tree_right_rows[x].points
      }
      return total
    },
    avaiable_points(){
      return this.total_points - (this.points_spent_left + this.points_spent_right )
    }




  }

};
</script>
<style lang="sass">
.weapon-grid
  display: grid
  grid-template-columns: repeat(3,1fr)
  grid-gap: 30px
.skills-wrapper
  display: grid
  grid-template-columns: repeat(2,1fr)
  grid-column-gap: 20px
.skill-tree
  &__row
    display: grid
    grid-template-columns: repeat(5,1fr)
    align-items: center
    padding: 15px 0
    &:last-child
      margin-top: 20px
    &.row-is-active
      background: #262626

  &__item
    position: relative
    text-align: center
    border: 1px solid white
    border-radius: 50%
    width: 50px
    height: 50px
    display: flex
    align-items: center
    justify-content: center
    justify-self: center
    z-index: 100
    background: #000
    img
      width: 50px
      height: 50px
      object-fit: contain
    &.active-skill
      border: 1px solid white
      border-radius: unset
      width: 75px
      height: 75px
      z-index: 100
      img
        width: 75px
        height: 75px
    &.skill-is-parent
      position: relative
      z-index: 100
      &::after
        position: absolute
        content: ''
        width: 1px
        height: 60px
        background: #fff
        bottom: -60px
        z-index: 0
    &.skill-has-parent
      position: relative
      &::before
        position: absolute
        content: ''
        width: 1px
        height: 100px
        background: #fff
        top: -100px
        z-index: 0
    &.skill-is-can-check
      cursor: pointer
    &.skill-is-checked
      background: $primary !important
      pointer-events: all !important

    &.item-disabled
      pointer-events: none
      background: red
    &.skill-is-ultimate
      border-radius: 100%
      width: 75px
      height: 75px
    &.skill-is-has-left-parent
      &::before
        position: absolute
        content: ''
        width: 1px
        height: 35px
        background: #fff
        top: -35px
        z-index: 0
      &::after
        position: absolute
        content: ''
        width: 113px
        height: 1px
        background: #fff
        top: -35px
        left: -89px
        z-index: 0

.save-build
  max-width: 600px
  margin: 0 auto
  text-align: center

@media (max-width: 850px)
  .skill-tree
    &__item
      width: 40px
      height: 40px
      img
        width: 35px
        height: 35px
      &.active-skill
        width: 65px
        height: 65px
        img
          width: 50px
          height: 50px
  .weapon-grid
    grid-template-columns: 1fr 1fr
  .skills-wrapper
    grid-template-columns: 1fr

@media (max-width: 640px)
  .weapon-grid
    grid-template-columns: 1fr

</style>
