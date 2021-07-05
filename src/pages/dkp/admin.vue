<template>
  <q-page padding >
    <div class="container text-white">

      <div class="page-wrapper">
        <div class="page-events">
          <p class="text-h6">События</p>
          <q-btn  color="primary" @click="add_event=!add_event" text-color="dark" label="Новое событие"/>
          <div v-if="add_event" class="q-mt-md">
            <p class="text-h6">Новое событие</p>
            <q-card dark>


              <q-card-section>
                <q-form
                  @submit="createEvent"

                >

                  <q-input
                    filled
                    dark

                    v-model="eventData.name"
                    label="Название *"
                    class="form-control "
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Введите название'
              ]"/>
                  <div class="flex items-center">
                    <q-toggle
                      v-model="need_code"
                      color="primary"
                      label="Нужен код"
                      left-label
                    />
                    <p v-if="need_code" class="text-h6 no-margin">{{eventData.code}}</p>
                  </div>
                  <div class="row">
                    <q-input dark class="col-4" label="Дата" filled v-model="eventData.date" mask="date" :rules="['date']">
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                            <q-date v-model="eventData.date" mask="YYYY-MM-DD" :options="dateFn">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Выбрать"  color="dark" flat />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>

                    <q-input  dark class="col-4 q-pl-sm" label="Время" filled v-model="eventData.time">


                      <template v-slot:append>
                        <q-icon name="access_time" class="cursor-pointer">
                          <q-popup-proxy transition-show="scale" transition-hide="scale">
                            <q-time v-model="eventData.time" mask="HH:mm" format24h>
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Выбрать" color="primary" flat />
                              </div>
                            </q-time>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                    <q-input
                      dark
                      class="col-4 q-pl-sm"
                      v-model.number="eventData.dpk_points"
                      type="number"
                      filled
                      label="DKP"

                    />
                  </div>
                  <p class="text-h6 q-mt-md full-width">Описание </p>
                  <div style="overflow-y: auto">
                    <q-editor
                      dark
                      v-model="eventData.description"

                      :dense="$q.screen.lt.md"
                      class="q-mb-md"
                      :toolbar="[

        ['bold', 'italic', 'strike','hr', 'underline', 'subscript', 'superscript'],


        [
          {
            label: $q.lang.editor.formatting,
            icon: $q.iconSet.editor.formatting,
            list: 'no-icons',
            options: [
              'p',
              'h1',
              'h2',
              'h3',
              'h4',
              'h5',
              'h6',
              'code'
            ]
          },
          {
            label: $q.lang.editor.fontSize,
            icon: $q.iconSet.editor.fontSize,
            fixedLabel: true,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'size-1',
              'size-2',
              'size-3',
              'size-4',
              'size-5',
              'size-6',
              'size-7'
            ]
          },
          {
            label: $q.lang.editor.defaultFont,
            icon: $q.iconSet.editor.font,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'default_font',
              'arial',
              'arial_black',
              'comic_sans',
              'courier_new',
              'impact',
              'lucida_grande',
              'times_new_roman',
              'verdana'
            ]
          },
          'removeFormat'
        ],
        ['quote', 'unordered', 'ordered', 'outdent', 'indent'],


      ]"
                      :fonts="{
        arial: 'Arial',
        arial_black: 'Arial Black',
        comic_sans: 'Comic Sans MS',
        courier_new: 'Courier New',
        impact: 'Impact',
        lucida_grande: 'Lucida Grande',
        times_new_roman: 'Times New Roman',
        verdana: 'Verdana'
      }"
                    />
                  </div>

                  <!--      <q-toggle v-model="accept" label="I accept the license and terms" />-->

                  <div>
                    <div class="text-center">
                      <q-btn label="Добавить" :loading="is_loading" text-color="dark" no-caps type="submit" class="q-px-xl q-mb-md" color="primary "/>

                    </div>


                  </div>
                </q-form>

              </q-card-section>
            </q-card>
          </div>

          <q-card dark v-for="event in events" :key="event.id" class="q-mb-lg">
            <q-card-section >
              <div class="flex items-center justify-between"><p class="no-margin text-h6">{{event.name}}</p>
                <p :class="[event.is_active ? 'text-positive':'text-negative']">{{event.is_active ? 'Выполняется':'Выполнено'}}</p></div>
              <div class="text-subtitle2">Дата/Время : {{`${event.date.split('-')[2]} / ${event.date.split('-')[1]} / ${event.date.split('-')[0]} | ${event.time}`}} </div>
              <div class="text-subtitle2">DKP : {{event.dpk_points}}</div>
              <div class="text-subtitle2">Участников: {{event.players.length}}</div>
              <q-expansion-item

                group="test"
                expand-separator
                dark
                label="Описание"

              >
                <q-card dark style="height: fit-content">
                  <q-card-section v-html="event.description">

                  </q-card-section>
                </q-card>
              </q-expansion-item>
              <q-expansion-item
                group="test1"
                expand-separator
                dark
                label="Участники"
              >
                <q-card dark style="height: fit-content">
                  <q-list  class="rounded-borders" >

                    <q-item class="items-center" v-for="(player,index) in event.players" :key="event.id">
                      <q-item-section avatar top>
                        <p class="no-margin text-h6">{{index+1}}</p>
                      </q-item-section>

                      <q-item-section top class="col-6 ">
                        <q-item-label class="q-mt-sm">{{player.player.nickname}}</q-item-label>
                        <q-item-label class="q-mt-sm">{{player.player.discord}}</q-item-label>
                      </q-item-section>

                      <q-item-section top class="col-2">
                        <q-input dense dark label="Начислить DKP" type="number" v-model="player.amount"/>
                      </q-item-section>

                      <q-item-section top side class="col-3">
                        <div class="text-grey-8 q-gutter-xs">
                          <q-btn  size="12px" @click="eventUserAction(event.id,player.id,player.amount,'save')" flat dense round color="positive" icon="done" />
                          <q-btn  size="12px" @click="eventUserAction(event.id,player.id,0,'delete')" flat dense color="negative" round icon="delete" />


                        </div>
                      </q-item-section>
                    </q-item>



                  </q-list>
                  <q-separator spaced="lg"/>

 <q-btn @click="addUsers(event.id)" class="q-mb-lg" v-if="add_users.length>0" color="primary" text-color="dark" label="Добавить"/>
                  <q-select
                    filled
                    v-model="add_users"
                    multiple
                    dark
                    :options="users"
                    :option-label="(item) =>  item.nickname"
                    use-chips

                    stack-label
                    label="Добавить участников"
                  >
                    <template v-slot:option="scope" >

                      <q-item v-if="!event.players.filter(x=>x.player.id===scope.opt.id).length>0" v-bind="scope.itemProps" v-on="scope.itemEvents">

                        <q-item-section>
                          <q-item-label >{{scope.opt.id}} {{scope.opt.nickname}} DKP:{{scope.opt.dkp_balance}}</q-item-label>
                          <q-item-label caption>{{ scope.opt.discord }}</q-item-label>
                        </q-item-section>
                      </q-item>
                    </template>
                  </q-select>

                </q-card>
              </q-expansion-item>
            </q-card-section>

            <q-separator />

            <q-card-actions align="right">
              <q-btn  @click=""
                      flat
                      color="positive"
                      label="Завешить"/>

              <q-btn  @click=""
                      flat
                      color="primary"
                      label="Редактировать"/>
              <q-btn  @click=""
                      flat
                      color="negative"
                      label="Удалить"/>



            </q-card-actions>
          </q-card>
        </div>
        <div class="page-users">
          <p class="text-h6">Игроки</p>
          <q-list dark >

            <q-item v-for="user in users" :key="user.id">

              <q-item-section>
                <q-item-label>{{user.nickname}}</q-item-label>
                <q-item-label caption>{{user.discord}}</q-item-label>
              </q-item-section>

              <q-item-section side top>
                <q-badge :label="user.dkp_balance" />
              </q-item-section>
            </q-item>


          </q-list>
        </div>
      </div>

    </div>
  </q-page>
</template>
<script>


import { date } from 'quasar'
export default {

  data () {
    return {
      users:[  ],
      add_users:[],
      is_loading:false,
      add_event:false,
      need_code:false,
      events:[],
      eventData:{
        description:'',
        name:null,
        date: '',
        time: '',
        code:null,
        dpk_points:0,
      },



    }
  },
  async mounted() {
    await this.getUsers()
    await this.getEvents()
  },

  methods:{
    async addUsers(event_id){
      await this.$api.post('/api/dkp/add_users',{
        event_id,
        add_users: this.add_users

      })
      this.add_users=[]
      this.$q.notify({
        message: 'Действие выполнено',
        position: this.$q.screen.lt.sm ? 'bottom' : 'bottom-right',
        color: 'positive',
        icon: 'announcement'
      })
      await this.getEvents()

    },

    dateFn (date) {
      return date >= new Date().toISOString().split('T')[0].replace('-','/').replace('-','/')
    },
    async eventUserAction(event_id,player_id,amount,action){
      await this.$api.post('/api/dkp/event_user',{
        event_id,
        player_id,
        amount,
        action
      })
      this.$q.notify({
        message: 'Действие выполнено',
        position: this.$q.screen.lt.sm ? 'bottom' : 'bottom-right',
        color: 'positive',
        icon: 'announcement'
      })
      await this.getEvents()
    },

    async getUsers(){
      const responce = await this.$api('/api/user/members')
      this.users = responce.data
    },
    async getEvents(){
      const response = await this.$api.get('/api/dkp/events_full')
      this.events = response.data
      console.log(response.data)
    },
    makeCode(length) {
      var result           = '';
      var characters       = '0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() *
          charactersLength));
      }
      return result;
    },
    async createEvent(){
      this.is_loading = true
      await this.$api.post('/api/dkp/event',this.eventData)
      this.is_loading = false
      this.add_event = false
      this.$q.notify({
        message: 'Событие создано',
        position: this.$q.screen.lt.sm ? 'bottom' : 'bottom-right',
        color: 'positive',
        icon: 'announcement'
      })
    }

  },
  watch:{
    need_code(val){
      if (val){
        this.eventData.code =  this.makeCode(5)
      }
    }
  }

}
</script>
