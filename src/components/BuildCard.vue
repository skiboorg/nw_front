<template>
 <q-card dark class="bg-grey-10 cursor-pointer q-mb-md">
   <router-link  :to="`/builds/${item.name_slug}`">
            <q-card-section>

              <div class="flex items-center justify-between">
                 <div class="flex items-center justify-evenly">
                <q-avatar square size="50px" class="q-mr-md">
                  <img style="object-fit: contain" :src="img_url+item.weapon1.image">
                </q-avatar>

                <div class="">

                <p class="q-mb-none text-body2 text-primary">{{item.weapon1.name}}</p>
                </div>

              </div>
              <div class="flex items-center justify-evenly">
                <q-avatar square size="50px" class="q-mr-md">
                  <img style="object-fit: contain" :src="img_url+item.weapon2.image">
                </q-avatar>

                <div class="">

                <p class="q-mb-none text-body2 text-primary">{{item.weapon2.name}}</p>
                </div>

              </div>
              </div>
              <q-separator dark v-if="item.description" spaced="md"/>
              <p class="text-h6 no-margin  ">{{item.name}}</p>
              <p class="text-body2 no-margin  ">Назначение: {{item.purpose}}</p>
              <q-separator dark v-if="item.description" spaced="md"/>
              <q-scroll-area style="height: 100px;">
              <p v-if="item.description" class="no-margin text-caption" v-html="item.description"></p>
              </q-scroll-area>
            </q-card-section>
   </router-link>
          </q-card>
</template>
<script>
export default {
  props:['item'],
  data () {
    return {
      img_url: process.env.API,
    }
  }
}
</script>
