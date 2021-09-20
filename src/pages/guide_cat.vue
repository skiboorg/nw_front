<template>
  <q-page >
    <div class="container">
      <q-breadcrumbs>
      <q-breadcrumbs-el to="/" label="Главная" />
      <q-breadcrumbs-el to="/guides" label="Гайды" />
      <q-breadcrumbs-el :label="title" />
    </q-breadcrumbs>

      <div class="flex items-center  q-pt-mg q-pb-lg">
        <q-icon size="30px" class="q-mr-md" color="primary" name="people_alt" />
        <h1 class="text-h5">{{title}}</h1>
      </div>


        <div class="companies-grid">

            <GuideCard
              v-for="(guide,index) in guides.find(x=>x.name_slug===$route.params.category_slug).guides"
              :key="guide.id"
              :category="$route.params.category_slug"
              :item = "guide"
            />




        </div>



    </div>

  </q-page>
</template>

<script>



import GuideCard from "components/GuideCard";
import {mapGetters} from "vuex";
export default {
  components: {GuideCard},
  async preFetch ({store,currentRoute, redirect}) {
    if (store.state.data.guides.length === 0){
      await store.dispatch('data/fetchGuides')
    }
    if (store.state.data.guides.filter(x=>x.name_slug===currentRoute.params.category_slug).length===0 ){
      redirect({ path: '/404' })
    }

  },
  meta() {
    return{
       title: `New World гайды ${this.title}`,
    // meta tags
    meta: {
      description: {name: 'description', content: 'Гайды и обзоры классов и оружия New World для новичков и про игроков! Здесь вы найдете рапира гайд, танк гайд, копье гайд и многие другие! Только актуальные гайды по прокачке!'},
      ogTitle: {
        name: 'og:title',
        template(ogTitle) {
          return `New World гайды по классам и оружию на NW Fans`
        }
      }
    }
    }

  },
  data () {
    return {
      title: this.$store.state.data.guides.find(x=>x.name_slug===this.$route.params.category_slug).name
    }
  },
  computed:{
    ...mapGetters('data',['guides']),
  }

}
</script>
<style lang="sass" scoped>
.companies-grid
  display: grid
  grid-template-columns: repeat(auto-fill,minmax(300px,1fr))
  grid-gap: 20px

</style>
