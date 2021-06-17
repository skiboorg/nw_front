<template>
    <q-card
           dark
           class="bg-grey-10 shadow-2 q-mb-md"

         >
      <q-card-section horizontal>
        <q-img
          class="col-4"
          :ratio="16/9"
          :src="post.image"
        />

        <q-card-section class="flex column">
          <p>
            {{post.short_description}}
          </p>

          <q-space/>
          <q-separator color="primary" spaced="lg"/>
          <div class="text-right">
            <q-btn :to="`/news/${post.name_slug}`" color="primary"  text-color="dark" no-caps label="Подробнее"/>
          </div>

        </q-card-section>
      </q-card-section>

      <q-separator />


    </q-card>
</template>
<script>
export default {
  props:['post']
}
</script>
