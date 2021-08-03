<template>
  <q-page >

    <div class="container">
      <div  class="">
        <div  class="flex items-center q-py-lg">
          <q-icon size="30px" class="q-mr-md" color="primary" name="app_registration" />
          <h1 class="text-h5 q-mr-sm">Билд: {{build.name.toLowerCase()}} | Назначение: {{build.purpose.toLowerCase()}} | Рейтинг: </h1>
          <q-rating
            v-model="build.rating"
            size="18px"
            color="primary"
            readonly
          />
        </div>
        <Build :weapon="build.weapon1" />
        <Build :weapon="build.weapon2" />
        <div class="characteristics">
          <div class="characteristics-row" v-for="(characteristic,index) in build.characteristics" :key="characteristic.id">
            <div class="">
              <p class="q-mb-none text-h6 text-bold">
                Вложено очков
                {{characteristic.current_val}}
              </p>
            </div>

            <div class="">
              <p class="q-mb-none text-h6 text-bold">{{characteristic.name_en}} ({{characteristic.name}}) <q-btn icon="help_outline" round flat color="primary">
                <q-tooltip>

                  <span class="text-caption" v-html="characteristic.description"></span>
                </q-tooltip>
              </q-btn></p>
              <q-linear-progress stripe rounded size="18px" :value="characteristic.current_val/3*0.01" color="primary" class="relative-position" >
                <div class="absolute-full flex justify-between">
                  <div class=""></div>
                  <q-btn
                    :color="characteristic.current_val >= characteristic.step1_val ? 'dark' : 'white'"
                    round
                    :outline="characteristic.current_val >= characteristic.step1_val ? false : true"
                    size="8px" dense class="characteristics-row-dot" label="" >
                    <q-tooltip>
                      <div class="text-caption" v-html="characteristic.step1_description"></div>

                    </q-tooltip>
                  </q-btn>

                  <q-btn
                    :color="characteristic.current_val >= characteristic.step2_val ? 'dark' : 'white'"
                    round
                    :outline="characteristic.current_val >= characteristic.step2_val ? false : true"
                    size="8px" dense class="characteristics-row-dot" label="" >
                    <q-tooltip>
                      <div class="text-caption" v-html="characteristic.step2_description"></div>

                    </q-tooltip>
                  </q-btn>

                  <q-btn
                    :color="characteristic.current_val >= characteristic.step3_val ? 'dark' : 'white'"
                    round
                    :outline="characteristic.current_val >= characteristic.step3_val ? false : true"
                    size="8px" dense class="characteristics-row-dot" label="" >
                    <q-tooltip>
                      <div class="text-caption" v-html="characteristic.step3_description"></div>

                    </q-tooltip>
                  </q-btn>

                  <q-btn
                    :color="characteristic.current_val >= characteristic.step4_val ? 'dark' : 'white'"
                    round
                    :outline="characteristic.current_val >= characteristic.step4_val ? false : true"
                    size="8px" dense class="characteristics-row-dot" label="" >
                    <q-tooltip>
                      <div class="text-caption" v-html="characteristic.step4_description"></div>

                    </q-tooltip>
                  </q-btn>

                  <q-btn
                    :color="characteristic.current_val >= characteristic.step5_val ? 'dark' : 'white'"
                    round
                    :outline="characteristic.current_val >= characteristic.step5_val ? false : true"
                    size="8px" dense class="characteristics-row-dot" label="" >
                    <q-tooltip>
                      <div class="text-caption" v-html="characteristic.step5_description"></div>

                    </q-tooltip>
                  </q-btn>

                  <q-btn
                    :color="characteristic.current_val >= characteristic.step6_val ? 'dark' : 'white'"
                    round
                    :outline="characteristic.current_val >= characteristic.step6_val ? false : true"
                    size="8px" dense class="characteristics-row-dot" label="" >
                    <q-tooltip>
                      <div class="text-caption" v-html="characteristic.step6_description"></div>

                    </q-tooltip>
                  </q-btn>


                </div>
              </q-linear-progress>
            </div>

          </div>
        </div>
        <q-card dark class="q-mb-md">
          <q-card-section>
            <p class="text-h6 text-bold">Описание билда</p>
            <p v-html="build.description"></p>
          </q-card-section>
        </q-card>
      </div>
      <p class="text-h6 text-bold">Отзывы </p>
      <p v-if="!build.feedbacks.length>0">Отзывов пока нет</p>
      <q-list class="q-mb-lg" dark>
        <q-item v-for="fb in build.feedbacks" :key="fb.id">
          <q-item-section>
            <q-item-label>{{fb.user.nickname}}</q-item-label>
            <q-item-label caption>{{fb.text}}</q-item-label>
          </q-item-section>
          <q-item-section side top>
            <q-item-label caption>{{new Date(fb.created_at).toLocaleDateString() }}</q-item-label>
            <q-rating
              v-model="fb.value"
              size="1em"
              color="orange"
              readonly
            />
          </q-item-section>
        </q-item>
      </q-list>
      <q-btn v-if="$user.loggedIn && !addFeedback" @click="addFeedback = true" icon="add" no-caps color="primary" text-color="dark" label="Добавить отзыв"/>
      <q-btn v-if="!$user.loggedIn" @click="changeauthModalVisible(true)" icon="add" no-caps color="primary" text-color="dark" label="Добавить отзыв"/>
      <div v-if="addFeedback" class="addFeedback q-mt-lg">
        <div class="flex q-mb-md"><p class="q-mb-none q-mr-md text-bold">Рейтинг</p>
          <q-rating
            v-model="feedbackData.rating"
            size="18px"
            color="primary"
          /></div>
        <p class="text-bold">Отзыв</p>
        <q-input
          v-model="feedbackData.text"
          filled
          dark
          class="q-mb-md text-white"
          type="textarea"
        />
        <q-btn  :loading="is_loading" :disable="!feedbackData.text.length>0 || !feedbackData.rating>0"
                @click="createFeedback"
                icon="add" no-caps color="primary" text-color="dark" label="Отправить"/>

      </div>
      <!--    <div v-else class="container">-->
      <!--      <q-inner-loading dark :showing="true">-->
      <!--        <q-spinner-gears size="50px" color="primary" />-->
      <!--      </q-inner-loading>-->
      <!--    </div>-->

    </div>
  </q-page>
</template>

<script>



import Build from "components/Build";
import {mapActions, mapGetters} from "vuex";
export default {
  async preFetch ({ store, currentRoute, redirect}) {
    await store.dispatch('data/fetchBuild',currentRoute.params.slug)
    if (!store.state.data.build.name){
      redirect({ path: '/404' })
    }else{
      for(const [key, value] of Object.entries(store.state.data.build.checked_skills_left_w1)){
      let skill_id = parseInt(key.split('_')[2])
      if (value){
        store.dispatch('data/updateBuild',{weapon:1,tree:0,skill_id})
        //this.build.weapon1.trees[0].skills.find(x=>x.id===skill_id).is_checked = true
      }
    }
    for(const [key, value] of Object.entries(store.state.data.build.checked_skills_right_w1)){
      let skill_id = parseInt(key.split('_')[2])
      if (value){
        store.dispatch('data/updateBuild',{weapon:1,tree:1,skill_id})
      }
    }
    for(const [key, value] of Object.entries(store.state.data.build.checked_skills_left_w2)){
      let skill_id = parseInt(key.split('_')[2])
      if (value){
       store.dispatch('data/updateBuild',{weapon:2,tree:0,skill_id})
      }
    }
    for(const [key, value] of Object.entries(store.state.data.build.checked_skills_right_w2)){
      let skill_id = parseInt(key.split('_')[2])
      if (value){
        store.dispatch('data/updateBuild',{weapon:2,tree:1,skill_id})
      }
    }
    }
  },
  name: 'MainLayout',
  components: {Build},
  meta() {
    return {
      title : `New World Fans | Билд ${this.role.toLowerCase()} для ${this.purpose.toLowerCase()}`,
      meta: {
        description: {name: 'description', content: this.description},
        ogTitle: {
          name: 'og:title',
          content: `New World Fans | Билд ${this.role.toLowerCase()} для ${this.purpose.toLowerCase()}`
        }
      }
    }
  },

  data () {
    return {
      title: this.$store.state.data.build.name,
      role: this.$store.state.data.build.role,
      purpose: this.$store.state.data.build.purpose,
      description: this.$store.state.data.build.description.substring(0,220).replace(/<[^>]*>?/gm, ''),
      img_url:process.env.API,
      addFeedback:false,
      is_loading:false,
      feedbackData:{
        rating:0,
        text:'',
        build_id:null
      },

    }
  },
   beforeMount() {
    this.feedbackData.build_id = this.build.id

  },
  methods:{
    ...mapActions('componentState',['changeauthModalVisible','changeguildCreateModalVisible']),
    async createFeedback(){
      this.is_loading = true


      const response = await this.$api.post('/api/skill/feedback',this.feedbackData)
      this.$q.notify({
        message: 'Спасибо за отзыв',
        position: this.$q.screen.lt.sm ? 'bottom' : 'bottom-right',
        color: 'positive',
        icon: 'announcement'
      })
      this.is_loading = false
      this.addFeedback = false
      this.feedbackData.text=''
      this.feedbackData.rating=0
      const response_b = await this.$api.get(`/api/skill/build?slug=${this.$route.params.slug}&for=build`)
      this.build = response_b.data
    },
  },
  computed: {
    ...mapGetters('data',['build'])

  }

}
</script>
<style lang="sass">
.characteristics
  margin-bottom: 30px
  &-row
    display: grid
    grid-template-columns: 1fr 3fr
    align-items: flex-end
    margin-bottom: 15px
    &-dot
      width: 10px
      height: 10px
      margin-top: 4px
</style>
