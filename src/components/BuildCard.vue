<template>
 <q-card dark class="bg-grey-10 cursor-pointer q-mb-md">
   <router-link  :to="`/builds/${item.name_slug}`">
            <q-card-section>
              <div class="flex items-center justify-between">
                 <div class="flex items-center ">
                <q-avatar square size="150" class="q-mr-md">
                  <img style="object-fit: contain" :src="img_url+item.weapon1.image">
                </q-avatar>

                <div class="">

                <p class="q-mb-none text-caption">{{item.weapon1.name}}</p>
                </div>

              </div>
              <div class="flex items-center ">
                <q-avatar square size="150" class="q-mr-md">
                  <img style="object-fit: contain" :src="img_url+item.weapon2.image">
                </q-avatar>

                <div class="">

                <p class="q-mb-none text-caption">{{item.weapon2.name}}</p>
                </div>

              </div>
              </div>
              <p class="text-h6 no-margin text-center">{{item.name}}</p>
              <q-separator v-if="item.description" spaced="md"/>
              <p v-if="item.description" class="no-margin">{{item.description}}</p>
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
