<template>
   <q-card dark   class="bg-grey-10 shadow-2 cursor-pointer q-mb-md">
     <router-link  :to="`/companies/${item.name_slug}`">
       <q-card-section class="text-center">
            <div class="flex items-center " :class="[item.image ? 'justify-between' : 'justify-center']">
              <q-avatar square v-if="item.image" size="100px">
                <img style="object-fit: contain" :src="item.image" alt="">
              </q-avatar>
              <router-link style="text-decoration: none;" :to="`/companies/${item.name_slug}`">
                <p class="text-center text-h6 text-primary q-mb-none">{{item.name}}</p>
              </router-link>
            </div>

              <q-rating
                :size="'xs'"
                v-model="item.total_rating"
                color="primary"
                readonly
              />
              <q-card-section class="text-left">

                <p class="q-mb-none"><span class="text-primary">Состав </span> {{item.size}}</p>
                <p class="q-mb-none"><span class="text-primary">Фракция </span> {{item.fraction}}</p>
                <p class="q-mb-none"><span class="text-primary">Сервер </span> {{item.server}}</p>
                <p class="q-mb-none"><span class="text-primary">Направленность </span> {{item.style}}</p>
                <p class="q-mb-none"><span class="text-primary">Отзывов </span> {{item.feedbacks.length>0 ? item.feedbacks.length : 'Нет'}}</p>
              </q-card-section>
            </q-card-section>
     </router-link>



          </q-card>

</template>
<script>
export default {
  props:['item']
}
</script>
