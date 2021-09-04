<template>
<q-page >
  <div class="container">

    <q-card flat dark>
      <q-card-section class="no-padding">
        <div class="row ">
                    <q-img class="col-12 col-md-6 " :class="`item-rarity-${item.rarity}`" :ratio="16/9" contain :src="item.image" alt=""/>
        <div class="col-12 col-md-6 q-pl-md-lg">
          <h1 class="text-bold text-h4 no-padding q-mt-none" :class="`item-color-rarity-${item.rarity}`">{{item.subcategory.name}} {{item.name}} </h1>
          <p> </p>
          <p v-if="item.rarity"> <span class="text-bold" :class="`item-color-rarity-${item.rarity}`">{{item.rarity | rarity}}</span> </p>
          <p v-if="item.tier"> <span class="text-bold" >Тир: {{item.tier | tier}}</span> </p>
          <div v-if="item.gearScore" class="q-mb-sm flex items-center"> <span class="text-bold text-h2" >{{item.gearScore }}</span> <span class="inline-block q-ml-sm">Gear<br>Score</span> </div>
          <p v-if="item.gearScoreMin" class="q-mb-none"> <span class="text-bold" >Gear Score (min): {{item.gearScoreMin }}</span> </p>
          <p v-if="item.gearScoreMax" class="q-mb-none"> <span class="text-bold" >Gear Score (max): {{item.gearScoreMax }}</span> </p>
        </div>
        </div>
      </q-card-section>
      <q-separator spaced="lg" dark/>
      <q-card-section class="no-padding">
        <p v-if="item.baseDamage" class="q-mb-none"><span class="text-bold text-h6">{{item.baseDamage}}</span> Базовый урон</p>
        <p v-if="item.critChance" class="q-mb-none"><span class="text-bold text-h6">{{item.critChance * 100}}%</span> Шанс критического удара</p>
        <p v-if="item.critDamageMultiplier" class="q-mb-none"><span class="text-bold text-h6">{{item.critDamageMultiplier}}</span> Множитель критического удара</p>
        <p v-if="item.blockStaminaDamage" class="q-mb-none"><span class="text-bold text-h6">{{item.blockStaminaDamage}}</span> Block Stamina Damage</p>
        <p v-if="item.staggerDamage" class="q-mb-none"><span class="text-bold text-h6">{{item.staggerDamage}}</span> Stagger Damage</p>
        <p v-if="item.blockStability" class="q-mb-none"><span class="text-bold text-h6">{{item.blockStability}}</span> Block Stability</p>

         <p v-if="item.weight" class="q-mb-none"><span class="text-bold text-h6">{{item.weight/10}}</span> Вес</p>
         <p v-if="item.durability" class="q-mb-none"><span class="text-bold text-h6">{{item.durability}}</span> Прочность</p>
         <p class="q-mb-none" v-if="item.bindOnEquip"><span class="text-bold text-h6 text-positive">Привязывается при одевании</span></p>
         <p class="q-mb-none" v-if="item.bindOnPickup"><span class="text-bold text-h6 text-positive">Привязывается при поднятии</span></p>
         <p class="q-mb-none" v-if="item.namedItem"><span class="text-bold text-h6 text-positive">Именной предмет</span></p>
         <p class="q-mb-none" v-if="item.can_be_crafted"><span class="text-bold text-h6 text-positive">Можно скрафтить</span></p>
         <p class="q-mb-none" v-if="item.quest_reward"><span class="text-bold text-h6 text-positive">Награда за квест</span></p>
         <q-separator spaced="lg" dark/>
        <p v-if="item.description">{{item.description}}</p>
        <q-separator spaced="lg" dark/>
        <div class="perk" v-for="perk in item.perks" :key="perk.id">
          <q-avatar class="q-mr-md">
            <img  :src="perk.icon" alt="">
          </q-avatar>



             <p v-if="perk.type!==1" class="no-margin "><span class="text-bold">{{perk.name}}</span> : {{perk.description | calcPerk(perk.scalingPerGearScore,item.gearScore) }}</p>
             <div v-else >
               <p class="no-margin text-bold" v-for="attr in perk.perk_attributes" :key="attr.id">{{attr.attribute | attr}} +{{parseFloat(attr.value) * 10}}</p>

            </div>

        </div>
      </q-card-section>
    </q-card>
  </div>
</q-page>
</template>

<script>



import {mapGetters} from "vuex";

export default {
  async preFetch ({store,currentRoute,redirect}) {
       await store.dispatch('data/fetchItem',currentRoute.params.item_slug)
    if (!store.state.data.item.name){
      redirect({ path: '/404' })
    }
  },
   meta() {
    return {
      title : this.title,
      meta: {
        description: {name: 'description', content: this.description},
        ogTitle: {
          name: 'og:title',
          content: this.title
        }
      }
    }
  },

  data () {
    return {

    }
  },

  filters:{
    attr(val){
      if(val==='con'){
        return 'Телосложение'
      }
      if(val==='foc'){
        return 'Фокус'
      }
      if(val==='str'){
        return 'Сила'
      }
      if(val==='dex'){
        return 'Ловкость'
      }
      if(val==='int'){
        return 'Интеллект'
      }
    },
    tier(val){
      if (val===1){
        return 'I'
      }
      if (val===2){
        return 'II'
      }
      if (val===3){
        return 'III'
      }
      if (val===4){
        return 'IV'
      }
      if (val===5){
        return 'V'
      }
    },
    rarity(val){
      if (val===0){
        return 'Обычный'
      }
      if (val===1){
        return 'Необычный'
      }
      if (val===2){
        return 'Редкий'
      }
      if (val===3){
        return 'Эпический'
      }
      if (val===4){
        return 'Легендарный'
      }
    },
    calcPerk(val,multiplier,gs){
      console.log(gs)

      let is_need_multiple = val.indexOf('*')
      console.log(is_need_multiple)
      let value = val.slice(val.indexOf('{')+1, val.indexOf('}')).split('*')[0]
      let is_float = value.split('.').length

      let final_value = is_float===1 ? parseInt(value) : parseFloat(value)
      console.log(final_value)
      if(is_need_multiple!==-1){

        return val.replace(/\{([^}]+)\}/g, (final_value * multiplier*gs).toFixed(2)).replace('$','')
      }else {
        return val.replace(/\{([^}]+)\}/g, value).replace('$','')
      }







    }
  },

  computed:{
    ...mapGetters('data',['item','title','description']),
   }
}
</script>
<style lang="sass" scoped>
.perk
  display: grid
  grid-template-columns: 1fr 7fr
  grid-gap: 10px
  max-width: 500px
  margin-bottom: 20px

</style>
