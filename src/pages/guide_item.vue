<template>
<q-page >
   <q-parallax :height="300" :speed="1" class="q-mb-lg">
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
    if (!store.state.data.guide.name){
      redirect({ path: '/404' })
    }
  },
   meta() {
    return {
      title : `New World Fans | Компания ${this.title}`,
      meta: {
        description: {name: 'description', content: this.description},
        ogTitle: {
          name: 'og:title',
          content: `New World Fans | Компания ${this.title}`
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
    ...mapGetters('data',['guide']),
  }


}
</script>
<style lang="sass">
.post-content
  img
    max-width: 100% !important
    height: auto !important
</style>
