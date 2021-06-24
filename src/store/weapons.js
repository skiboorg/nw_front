import { api } from 'boot/axios'

const state = () => ({
  weapons:[],
  firstWeapon:{},
  secondWeapon:{}

})

const mutations = {
  updateWeapons(state,data){
    state.weapons = data
  },
  updateSelectedWeapons(state,data){




      // let old_val = state.weapons.find(x=>x.id === state.firstWeapon.id)
      // if (old_val){
      //   old_val.is_selected = false
      // }

      state.weapons[data.index].is_selected = !state.weapons[data.index].is_selected
      console.log(state.weapons)


  },



}

const actions = {

  async fetchWeapons({commit}){
    const response = await api.get('/api/skill/weapons')
    commit('updateWeapons', response.data)
  },
  changeSelectedWeapon({commit},data){
    console.log('changeSelectedWeapon',data)
    commit('updateSelectedWeapons', data)
  }

}

export const getters = {
  weapons: (state) => state.weapons,
  firstWeapon: (state) => state.firstWeapon,
  secondWeapon: (state) => state.secondWeapon,


}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
