<template>
<q-page >
  <div class="container">

          <div class="flex items-center  q-py-lg">
            <q-icon size="30px" class="q-mr-md" color="primary" name="people_alt" />
            <h1 class="text-h5">Гайды New World</h1>
          </div>
    <div class="q-gutter-md">
      <q-btn color="primary" @click="$scrollTo(`#cat_${category.id}`, 200, {offset: -90})" text-color="dark" :label="category.name" v-for="category in guides" :key="category.id"/>
    </div>
    <div :id="`cat_${category.id}`" class="" v-for="category in guides" :key="category.id">
      <h3 class="text-h5 text-primary text-bold">{{category.name}}</h3>
      <q-separator spaced="lg"/>
       <div class="companies-grid">
        <GuideCard
          v-for="guide in category.guides"
          :key="guide.id"
          :item = "guide"
        />
      </div>
    </div>


        </div>

</q-page>
</template>

<script>



import GuideCard from "components/GuideCard";
import {mapGetters} from "vuex";
export default {
  components: {GuideCard},
  async preFetch ({store}) {
    if (store.state.data.guides.length === 0){
       await store.dispatch('data/fetchGuides')
    }
  },
    meta: {
    title: 'New World гайды по классам и оружию на NW Fans',
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
  },
  data () {
    return {
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
