<template>
 <q-card dark class="cursor-pointer q-mb-md">
   <router-link  :to="`/build/${item.name_slug}`">
            <q-card-section>
              <div class="flex items-center ">
                <q-avatar square size="100" class="q-mr-md">
                  <img style="object-fit: contain" :src="img_url+item.weapon.image">
                </q-avatar>

                <div class="">
                     <p style="max-width: 260px" class="ellipsis q-mb-sm">{{item.name}}</p>
                <p class="q-mb-none text-caption">{{item.weapon.name}}</p>
                </div>

              </div>
              <q-separator spaced="md"/>
              <p>{{item.description}}</p>
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
