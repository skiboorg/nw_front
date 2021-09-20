<template>
<q-page >
  <div class="container">
     <q-breadcrumbs>
      <q-breadcrumbs-el to="/" label="Главная" />
      <q-breadcrumbs-el to="/guides" label="Гайды" />
      <q-breadcrumbs-el :to="`/guides/${guides.find(x=>x.name_slug===$route.params.category_slug).name_slug}`"
                        :label="guides.find(x=>x.name_slug===$route.params.category_slug).name" />
      <q-breadcrumbs-el :label="title" />
  </q-breadcrumbs>
  </div>

   <q-parallax :height="300" :speed="1" class="q-mb-lg q-mt-lg">
      <template v-slot:media>
        <img :src="guide.image" :alt="guide.name">
      </template>

      <h1 class="text-white text-h3">{{guide.name}}</h1>
    </q-parallax>
  <div class="container">
    <div class="post-content" v-html="guide.description"></div>
  </div>
</q-page>
</template>

<script>



import {mapGetters} from "vuex";

export default {
  async preFetch ({ store, currentRoute, redirect}) {
    await store.dispatch('data/fetchGuide',currentRoute.params.slug)
    if (store.state.data.guides.length === 0){
      await store.dispatch('data/fetchGuides')
    }
    if (!store.state.data.guide.name){
      redirect({ path: '/404' })
    }
  },
   meta() {
    return {
      title : `New World Fans | Гайд ${this.title}`,
      meta: {
        description: {name: 'description', content: this.description},
        ogTitle: {
          name: 'og:title',
          content: `New World Fans | Гайд ${this.title}`
        }
      }
    }
  },

  data () {
    return {
      title: this.$store.state.data.guide.name,
      description: this.$store.state.data.guide.description.substring(0,220).replace(/<[^>]*>?/gm, ''),
    }
  },
  computed: {
    ...mapGetters('data',['guide','guides']),
  }


}
</script>
<style lang="sass">
.post-content
  img
    max-width: 100% !important
    height: auto !important
</style>
