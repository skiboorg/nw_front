<template>
<q-page >

  <div class="container">
    <div  class="">
        <div  class="flex items-center q-py-lg">
            <q-icon size="30px" class="q-mr-md" color="primary" name="app_registration" />
            <h3 class="text-h5">Билд {{build.name}}</h3>
          </div>

   <Build :weapon="build.weapon1" />
   <Build :weapon="build.weapon2" />





     <p class="text-h6">Описание</p>
    <p>{{build.description}}</p>
    </div>
<!--    <div v-else class="container">-->
<!--      <q-inner-loading dark :showing="true">-->
<!--        <q-spinner-gears size="50px" color="primary" />-->
<!--      </q-inner-loading>-->
<!--    </div>-->

  </div>
</q-page>
</template>

<script>



import Build from "components/Build";
export default {
  name: 'MainLayout',
  components: {Build},
  meta: {
    // sets document title
    title: `New World Fans | Билды`,


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
      img_url:process.env.API,
      slide:'first',
      autoplay:true,
      build:{
        weapon1:{
          trees:[]
        },
         weapon2:{
          trees:[]
        },
      }

    }
  },
  async mounted() {
     const response = await this.$api.get(`/api/skill/build?slug=${this.$route.params.slug}&for=build`)
    this.build = response.data
    for(const [key, value] of Object.entries(this.build.checked_skills_left_w1)){
      let skill_id = parseInt(key.split('_')[2])
      this.build.weapon1.trees[0].skills.find(x=>x.id===skill_id).is_checked = true
    }
    for(const [key, value] of Object.entries(this.build.checked_skills_right_w1)){
      let skill_id = parseInt(key.split('_')[2])
      this.build.weapon1.trees[1].skills.find(x=>x.id===skill_id).is_checked = true
    }
    for(const [key, value] of Object.entries(this.build.checked_skills_left_w2)){
      let skill_id = parseInt(key.split('_')[2])
      this.build.weapon2.trees[0].skills.find(x=>x.id===skill_id).is_checked = true
    }
    for(const [key, value] of Object.entries(this.build.checked_skills_right_w2)){
      let skill_id = parseInt(key.split('_')[2])
      this.build.weapon2.trees[1].skills.find(x=>x.id===skill_id).is_checked = true
    }
      console.log(this.build)

    // try{
    //
    //
    //
    // for(const [key, value] of Object.entries(this.build.checked_skills_left)){
    //   let skill_id = parseInt(key.split('_')[2])
    //   this.build.weapon.trees[0].skills.find(x=>x.id===skill_id).is_checked = true
    // }
    // for(const [key, value] of Object.entries(this.build.checked_skills_right)){
    //   let skill_id = parseInt(key.split('_')[2])
    //   this.build.weapon.trees[1].skills.find(x=>x.id===skill_id).is_checked = true
    // }
    //
    // }catch (e) {
    //   this.$router.push('/404')
    // }

  },
  methods:{

  },

}
</script>

