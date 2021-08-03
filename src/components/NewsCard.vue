<template>
  <router-link :to="`/news/${post.name_slug}`">
    <q-card
    dark
    class="bg-grey-10 shadow-2 q-mb-md cursor-pointer">
    <q-card-section horizontal>
      <q-img
        class="col-4"
        :ratio="$q.screen.lt.md ? 4/3 : 16/9"
        :src="post.image"
      />
      <q-card-section class="flex column">
        <h3 class="text-h6">{{post.name}}</h3>
        <p>
          {{post.short_description}}
        </p>
        <q-space/>
        <q-separator color="primary" spaced="lg"/>
        <div class="flex justify-between items-center">
          <p class="no-margin">{{new Date(post.created_at).toLocaleDateString() }}</p>
          <q-btn :to="`/news/${post.name_slug}`" color="primary"  text-color="dark" no-caps label="Подробнее"/>
        </div>

      </q-card-section>
    </q-card-section>

    <q-separator />


  </q-card>
  </router-link>

</template>
<script>
export default {
  props:['post']
}
</script>
