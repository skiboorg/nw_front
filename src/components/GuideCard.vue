<template>
  <div class="">
   <q-card dark>
    <div v-if="item.is_video" class="cursor-pointer" @click="cur_video=item.video_link, videoModal=!videoModal">
<!--      -->
      <q-img :ratio="16/9" :src="`https://img.youtube.com/vi/${item.video_link}/maxresdefault.jpg`"/>
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
     <q-dialog

      v-model="videoModal"
    >
      <q-card dark style="width: 700px; max-width: 80vw;">
        <q-card-section>
        <q-video :ratio="16/9" :src="`https://www.youtube.com/embed/${cur_video}`" />
        </q-card-section>




      </q-card>
    </q-dialog>
  </div>

</template>
<script>
export default {
  props:['item'],
  data () {
    return {
      videoModal:false,
      cur_video:null

    }
  }
}
</script>
