<template>
<q-page >
  <div class="container">
    <div class="flex items-center q-py-lg">
            <q-icon size="30px" class="q-mr-md" color="primary" name="help" />
            <h3 class="text-h5">FAQ</h3>
          </div>
    <q-list dark padding  class="rounded-borders" style="max-width: 100%">
      <q-expansion-item
        group="somegroup"
        v-for="faq in faqs"
        :key="faq.id"
        :label="faq.question"
        class="text-h6 text-primary"
      >
        <q-card class="bg-grey-9">
          <q-card-section class="text-white" v-html="faq.answer">

          </q-card-section>
        </q-card>
      </q-expansion-item>


    </q-list>
  </div>
</q-page>
</template>

<script>



export default {
  name: 'MainLayout',
  meta: {
    // sets document title
    title: 'New World Fans | FAQ',


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
          return `New World Fans | FAQ`
        }
      }
    }
  },

  data () {
    return {
      faqs:[]

    }
  },
  async mounted() {
    const response = await this.$api.get('/api/faq')
    this.faqs = response.data

  },
  methods:{

  },

}
</script>
<style lang="sass" scoped>


</style>
