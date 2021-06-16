<template>
<q-page >

  <div class="container">
    <div v-if="build.weapon.trees.length>0" class="">
        <div  class="flex items-center q-py-lg">
            <q-icon size="30px" class="q-mr-md" color="primary" name="app_registration" />
            <h3 class="text-h5">Билд {{build.name}}</h3>
          </div>

      <div class="skills-wrapper q-mb-lg">

            <div class="skill-tree" v-for="(tree,tree_index) in build.weapon.trees" :key="tree.id">

              <p class="text-center text-h5 q-mb-none">{{tree.name_en}} </p>
              <p class="text-center text-caption ">{{tree.name}}</p>
              <p class="text-center text-body1 ">Вложено очков : 0

              </p>


              <div :ref="`row${row_index+1}tree${tree_index}`" class="skill-tree__row " v-for="(row,row_index) in 6">
                <div v-if="!item.is_empty"
                     class="skill-tree__item"
                     :class="[
                     item.is_active_skill ? 'active-skill':'',
                     item.is_parent ? 'skill-is-parent':'',
                     item.is_has_parent ? 'skill-has-parent':'',
                     item.is_checked ? 'skill-is-checked':'',
                     item.is_can_check ? 'skill-is-can-check':'',
                     item.is_ultimate ? 'skill-is-ultimate':'',
                     item.is_has_left_parent ? 'skill-is-has-left-parent':'',

                     ]"
                     v-for="(item,item_index) in _.orderBy(tree.skills.filter(x=>x.row===row_index+1), ['col'],['asc'])"
                     :key="item_index">
                  <img :src="img_url+item.image"/>

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
     <p class="text-h6">Описание</p>
    <p>{{build.description}}</p>
    </div>
    <div v-else class="container">
      <q-inner-loading dark :showing="true">
        <q-spinner-gears size="50px" color="primary" />
      </q-inner-loading>
    </div>

  </div>
</q-page>
</template>

<script>



export default {
  name: 'MainLayout',
  meta: {
    // sets document title
    title: `New World Fans | Новости игры`,


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
          return `${ogTitle} - My Website`
        }
      }
    }
  },

  data () {
    return {
      img_url:process.env.API,
      slide:'first',
      autoplay:true,
      build:{
        weapon:{
          trees:[]
        }
      }

    }
  },
  async mounted() {
    try{
      const response = await this.$api.get(`/api/skill/build?slug=${this.$route.params.slug}&for=build`)
    this.build = response.data

    for(const [key, value] of Object.entries(this.build.checked_skills_left)){
      let skill_id = parseInt(key.split('_')[2])
      this.build.weapon.trees[0].skills.find(x=>x.id===skill_id).is_checked = true
    }
    for(const [key, value] of Object.entries(this.build.checked_skills_right)){
      let skill_id = parseInt(key.split('_')[2])
      this.build.weapon.trees[1].skills.find(x=>x.id===skill_id).is_checked = true
    }

    }catch (e) {
      this.$router.push('/404')
    }

  },
  methods:{

  },

}
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


</style>
