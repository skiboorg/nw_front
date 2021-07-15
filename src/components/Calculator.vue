<template>
   <q-tab-panels v-model="panel" animated class="bg-dark">

        <q-tab-panel name="choose">

          <div class="text-h5 text-bold text-primary q-mb-md">{{weapon_title}}</div>

          <div class="weapon-grid">
            <q-card  flat v-if="!item.is_selected" @click="selectWeapon(index)" v-for="(item,index) in weapons" :key="item.id" class="weapon-card cursor-pointer bg-grey-5 ">
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
          <div  class="flex items-center justify-between">
            <div @click="closeCalc" class="flex items-center q-mb-md cursor-pointer">
              <q-icon size="30px" name="west" color="primary" class="q-mr-lg"/>
            <p class="q-mb-none text-h6 text-bold text-primary ">Выбрать другое оружие</p>
            </div>


            <q-btn @click="reset" color="primary" text-color="dark" label="Сброс вложенных очков"/>
          </div>
          <div class="text-center">
             <p class="q-mb-none text-h5 text-bold text-primary">{{weapon.name}}</p>
          <p class="q-mb-none text-body2" v-html="weapon.description"></p>
          </div>

          <div  class="skills-wrapper q-mb-lg">

            <div  class="skill-tree" v-for="(tree,tree_index) in weapon.trees" :key="tree.id">

              <p class="text-center text-h5 q-mb-none text-primary text-bold">{{tree.name_en}} </p>
              <p class="text-center text-caption ">{{tree.name}}</p>
              <p class="text-center text-body1 ">Вложено очков :
                {{tree_index===0 ? points_spent_left : points_spent_right}} (Доступно {{avaiable_points}})
              </p>


              <div :ref="`row${row_index+1}tree${tree_index}`" class="skill-tree__row " v-for="(row,row_index) in 6">
                <div v-if="!item.is_empty"
                     @mouseenter="is_hover=true"
                     @click="avaiable_points > 0   && item.is_can_check || item.is_checked ? checkItem(tree_index,item.id) : null"
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
                  <img draggable="false" :src="item.image"/>

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



<!--          <q-separator spaced="lg"/>-->
<!--          <div class="skills-wrapper q-mb-lg">-->
<!--            <div class="skill-tree" v-for="(tree,tree_index) in weapon.trees" :key="tree.id">-->
<!--              <p v-if="item.is_checked" v-for="item in tree.skills">-->
<!--                {{item.description}}-->
<!--              </p>-->
<!--            </div>-->
<!--          </div>-->


        </q-tab-panel>


      </q-tab-panels>
</template>
<script>

import {mapActions,mapGetters} from "vuex"

export default {
  props:['weapon_title','weapon_num'],
  data() {
    return {
      selectedWeapon:null,

      panel:'choose',
      is_hover:false,
      total_points:19,
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
      // weapons:[],
      weapon:[]
    }
  },
  async mounted() {
    // const response = await this.$api.get('/api/skill/weapons')
    // this.weapons = response.data

  },
  methods:{
    ...mapActions('weapons',['changeSelectedWeapon']),
    async selectWeapon(index){
      this.selectedWeapon = index
      this.changeSelectedWeapon({index:index})
      await this.getWeapon(this.weapons[index].name_slug)
      if (this.weapon_num===1){
        this.$emit('changeFirstWeapon')
      }else {
        this.$emit('changeSecondWeapon')
      }

    },
    closeCalc(){
      if (this.weapon_num===1){
        this.$emit('changeFirstWeapon')
      }else {
        this.$emit('changeSecondWeapon')
      }
      this.changeSelectedWeapon({index:this.selectedWeapon})
      this.panel = 'choose'
      this.total_points = 19
      for (let x in this.tree_left_rows){
        this.tree_left_rows[x].points=0
        this.tree_right_rows[x].points=0
      }
    },
    reset(){
      this.total_points = 19
      for (let i of this.weapon.trees[0].skills){
          i.is_checked = false
      }
      for (let i of this.weapon.trees[1].skills){
          i.is_checked = false
      }
      for (let x in this.tree_left_rows){
        this.tree_left_rows[x].points=0
        this.tree_right_rows[x].points=0
      }
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
     console.log('row_index',row_index)
     // console.log('tree_index',tree_index)
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
      if (tree_index===0){
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
    'avaiable_points'(val){
      if(val===0){
        console.log('done')
        this.$emit('done',
        {
        checked_skills_left:this.weapon.trees[0].checked_skills,
        checked_skills_right:this.weapon.trees[1].checked_skills,
        description:this.build_description,
        name:this.build_name,
        weapon:this.weapon.id,
      }
        )
      }else{
        console.log('not_done')
        this.$emit('not_done')
      }

},
    tree_left_row0(val){
      console.log('tree_left_row0',val)

      if(val===1){
        this.setRowActive(2,0)
      }
      if(val===0){
        console.log('setRowInActive(2,0)',)
        this.setRowInActive(2,0)




      }
    },
    tree_left_row1(val){
      console.log('tree_left_row1',val)
      if(val===1){
        this.setRowActive(3,0)
      }
      if(val===0){
        console.log('setRowInActive(3,0)',)
        this.setRowInActive(3,0)

      }
    },
    tree_left_row2(val){
      console.log('tree_left_row2',val)
      if(val===1){
        this.setRowActive(4,0)
      }
      if(val===0){
        this.setRowInActive(4,0)

      }
    },
    tree_left_row3(val){
      console.log('tree_left_row3',val)
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
      console.log('tree_right_row0',val)
      if(val===1){
        this.setRowActive(2,1)
      }
      if(val===0){
        console.log('R setRowInActive(2,0)',)
        this.setRowInActive(2,1)
      }
    },
    tree_right_row1(val){
       console.log('tree_right_row1',val)
      if(val===1){
        this.setRowActive(3,1)
      }
      if(val===0){
        console.log('R setRowInActive(3,0)',)
        this.setRowInActive(3,1)
      }
    },
    tree_right_row2(val){
       console.log('tree_right_row2',val)
      if(val===1){
        this.setRowActive(4,1)
      }
      if(val===0){
        this.setRowInActive(4,1)
      }
    },
    tree_right_row3(val){
       console.log('tree_right_row3',val)
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
    ...mapGetters('weapons',['weapons']),
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
.weapon-card
  &:hover
    box-shadow: 0 0px 30px 0px #ffb10f78 !important
</style>
