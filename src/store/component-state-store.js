const state = () => ({
  is_poi_visible:true,
  is_authModal_visible:false,
  is_guildCreateModal_visible:false,

})

const mutations = {
  updatePoiVisible(state,data){
    state.is_poi_visible = data
  },
 updateauthModalVisible(state,data){
    state.is_authModal_visible = data
  },
  updateguildCreateModalVisible(state,data){
    state.is_guildCreateModal_visible = data
  },


}

const actions = {
  changePoiVisible({commit},data){
    commit('updatePoiVisible', data)
  },
  changeauthModalVisible({commit},data){
    commit('updateauthModalVisible', data)
  },
  changeguildCreateModalVisible({commit},data){
    commit('updateguildCreateModalVisible', data)
  },

}

export const getters = {
  is_poi_visible: (state) => state.is_poi_visible,
  is_authModal_visible: (state) => state.is_authModal_visible,
  is_guildCreateModal_visible: (state) => state.is_guildCreateModal_visible,

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
