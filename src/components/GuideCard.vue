<template>
  <q-card dark>
    <div v-if="item.is_video">
      <q-video  :src="`https://www.youtube.com/embed/${item.video_link}`" />
      <q-card-section>
        <div class="text-h6">{{item.name}}</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        {{item.video_description}}
      </q-card-section>
    </div>
    <div v-else class="cursor-pointer">
      <router-link :to="`/guides/${item.name_slug}`">
        <q-img :ratio="16/9" :src="item.image" :alt="item.short_description"/>

      <q-card-section>
        <div class="text-h6">{{item.name}}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{item.short_description}}...
      </q-card-section>
      </router-link>


    </div>

  </q-card>
</template>
<script>
export default {
  props:['item'],
  data () {
    return {

    }
  }
}
</script>
