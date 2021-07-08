import { LocalStorage } from 'quasar'
import { api } from 'boot/axios'
import { Notify } from 'quasar'
import { Screen } from 'quasar'
import { Cookies } from 'quasar'



const state = () => ({
  user:{},
  loggedIn:false,
  ws_connected:false,
  socket:null


})

const mutations = {
  updateUser(state,data){
    state.user = data
  },
  updateUserStatus(state,data){
    state.loggedIn = data
  },
  updateWSStatus(state,data){
    state.ws_connected = data
  },
  updateSocket(state,data){
      state.socket = data
    },
}

const actions = {
   connectWS({commit,dispatch},id) {

     const socket = new WebSocket(process.env.WS+'/ws/user/online/')
     commit('updateSocket',socket)
       socket.onopen = () => {
        console.log('ws connected')
         commit('updateWSStatus',true)
        socket.send(JSON.stringify({'user_id':id,'message':'user online'}))
        socket.onmessage = (res) =>{
          dispatch('fetchUserNotifications',id)
          console.log('message',JSON.parse(res.data))
          let data = JSON.parse(res.data)
          console.log('cur path',this.$router.currentRoute.path)
          if (data.event==='chat' && this.$router.currentRoute.path!=='/profile/chats'){
             Notify.create({
              message: data.message,
              color: 'primary',
                icon: 'chat',
               progress: true,
               position:'top-right',
               classes: 'glossy',
               actions: [
                { label: 'Открыть', color: 'primary', handler: () => { this.$router.push('/profile/chats') } }
              ]
            })
          }
          if(data.event==='order'){
            Notify.create({
              message: data.message,
              color: 'primary',
                icon: 'chat',
               progress: true,
               position:'top-right',
               classes: 'glossy',
               actions: [
                { label: 'Открыть', color: 'white', handler: () => { this.$router.push('/profile/notifications') } }
              ]
            })
          }
        }
      }
  },
  async loginUser({dispatch,ssrContext},data){
    try{
      const response = await api.post('/auth/token/login/',data)
     this._vm.$cook.set('auth_token',response.data.auth_token)
       api.defaults.headers.common['Authorization'] = 'Token ' + response.data.auth_token
      Notify.create({
        message:'Успешная авторизация',
        color:'positive',
        position: Screen.lt.sm ? 'bottom' : 'bottom-right',
      })
       dispatch('getUser')
    }catch (e){
      console.log(e)
      Notify.create({
        message:'Проверьте введеные данные',
        color:'red',
        position: Screen.lt.sm ? 'bottom' : 'bottom-right',
      })
    }
  },
  async getUser ({commit,dispatch,getters}){
    const response = await api.get( '/api/user/me')
    console.log('getUser', response)
    commit('updateUser', response.data)
    commit('updateUserStatus', true)
    this.dispatch('componentState/changeauthModalVisible',false)
    // if (!getters.ws_connected){
    //    console.log('coneecting WS')
    //   if (!process.env.SERVER) {
    //     dispatch('connectWS', response.data.id)
    //   }
    // }

  },
  logoutUser({commit}){
    api.post( '/auth/token/logout/')
      .then(response=>{
        console.log('logoutUser', response)
        api.defaults.headers.common['Authorization'] = null
        this._vm.$cook.remove('auth_token')
        commit('updateUser', {})
        commit('updateUserStatus', false)
        this.$router.push('/enter')
      })
      .catch(function (error) {
        console.log('logoutUser error')
      })
  }
}

export const getters = {
  isLoggedIn: (state) => state.loggedIn,
  ws_connected: (state) => state.ws_connected,
  user: (state) => state.user,
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
