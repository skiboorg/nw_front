<template>
<q-page >
 <div class="container">
          <div class="flex items-center q-py-lg">
            <q-icon size="30px" class="q-mr-md" color="primary" name="campaign" />
            <h1 class="text-h5">Новости New World</h1>
          </div>
          <NewsCard
            v-for="post in posts"
            :key="post.id"
            :post="post"
          />
    </div>
</q-page>
</template>

<script>


import NewsCard from "components/NewsCard";
import {mapGetters} from "vuex";
export default {
  components: {NewsCard},
  async preFetch ({store}) {
    if (store.state.data.posts.length === 0){
       await store.dispatch('data/fetchPosts')
    }
  },
  meta: {
    title: 'New World Fans | Новости игры и последние обновления',
    meta: {
      description: {name: 'description', content: 'Узнай самые свежие новости и гайды New World, пользуйся самым актуальным ' +
          'калькулятором умений New World, получай лафхаки NW на New World Fans'},
      ogTitle: {
        name: 'og:title',
        template(ogTitle) {
          return `New World Fans | Новости игры и последние обновления`
        }
      }
    }
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters('data', ['posts']),
  }



}
</script>
<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)

</style>
