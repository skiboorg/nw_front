<template>
<q-page >
   <q-parallax :height="300" :speed="1" class="q-mb-lg">
      <template v-slot:media>
        <img :src="post.image" :alt="post.name">
      </template>
      <h1 class="text-white text-h3">{{post.name}}</h1>
    </q-parallax>
  <div class="container">
    <div class="post-content" v-html="post.description"></div>
  </div>
</q-page>
</template>

<script>



import {mapGetters} from "vuex";

export default {
 async preFetch ({ store, currentRoute, redirect, ssrContext}) {
    await store.dispatch('data/fetchPost',currentRoute.params.slug)
    if (!store.state.data.post.name){
      redirect({ path: '/404' })
    }
  },
  meta() {
    return {
      title : `${this.title} |  New World Fans`,
      meta: {
        description: {name: 'description', content: this.description},
        ogTitle: {
          name: 'og:title',
          content: `${this.title} |  New World Fans`
        }
      }
    }
  },

  data () {
    return {
      title: this.$store.state.data.post.name,
      description: this.$store.state.data.post.description.substring(0,220).replace(/<[^>]*>?/gm, ''),
    }
  },
  computed: {
    ...mapGetters('data',['post']),
  }


}
</script>
<style lang="sass">
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
.post-content
  img
    max-width: 100% !important
    height: auto !important
</style>
