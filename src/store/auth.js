import { LocalStorage } from 'quasar'
import { api } from 'boot/axios'
import { Notify } from 'quasar'
import { Screen } from 'quasar'
import { Cookies } from 'quasar'



const state = () => ({
  user:{},
  loggedIn:false

})

const mutations = {
  updateUser(state,data){
    state.user = data
  },
  updateUserStatus(state,data){
    state.loggedIn = data
  }
}

const actions = {
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
  async getUser ({commit,dispatch}){
    const response = await api.get( '/api/user/me')
    console.log('getUser', response)
    commit('updateUser', response.data)
    commit('updateUserStatus', true)
    this.dispatch('componentState/changeauthModalVisible',false)

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
  user: (state) => state.user,
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
