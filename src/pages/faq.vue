<template>
<q-page >
  <div class="container">
    <div class="flex items-center q-py-lg">
            <q-icon size="30px" class="q-mr-md" color="primary" name="help" />
            <h1 class="text-h5">New World FAQ</h1>
          </div>
    <q-list dark padding  class="rounded-borders" style="max-width: 100%">
      <q-expansion-item
        group="somegroup"
        v-for="faq_item in faq"
        :key="faq_item.id"
        :label="faq_item.question"
        class="text-h6 text-primary"
      >
        <q-card class="bg-grey-9">
          <q-card-section class="text-white" v-html="faq_item.answer">

          </q-card-section>
        </q-card>
      </q-expansion-item>


    </q-list>
  </div>
</q-page>
</template>

<script>



import {mapGetters} from "vuex";

export default {
  async preFetch ({store}) {
    if (store.state.data.faq.length === 0){
       await store.dispatch('data/fetchFaq')
    }
  },
   meta: {
    title: 'New World FAQ',
    // meta tags
    meta: {
      description: {name: 'description', content: 'Ответы на частозадаваемые ответы по игре New World'},
      ogTitle: {
        name: 'og:title',
        template(ogTitle) {
          return `New World FAQ`
        }
      }
    }
  },

  data () {
    return {

    }
  },

  computed:{
    ...mapGetters('data',['faq']),
   }
}
</script>
<style lang="sass" scoped>


</style>
