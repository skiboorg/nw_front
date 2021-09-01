import { api } from 'boot/axios'

const state = () => ({
  guilds:[],
  guild:{},
  posts:[],
  post:{},
  guides:[],
  guide:{},
  builds:[],
  build:{},
  poi:[],
  resourses:[],

})

const mutations = {
  updateGuilds(state,data){
    state.guilds = data
  },
  updateGuild(state,data){
    state.guild = data
  },
  updatePosts(state,data){
    state.posts = data
  },
  updatePost(state,data){
    state.post = data
  },
  updateGuides(state,data){
    state.guides = data
  },
  updateGuide(state,data){
    state.guide = data
  },
  updateBuilds(state,data){
    state.builds = data
  },
  updateBuild(state,data){
    state.build = data
  },
  setBuild(state,data){
    //{weapon:1,tree:0,skill_id})
    //this.build.weapon1.trees[0].skills.find(x=>x.id===skill_id).is_checked = true
    if (data.weapon===1){
      state.build.weapon1.trees[data.tree].skills.find(x=>x.id===data.skill_id).is_checked = true
    }
    if (data.weapon===2){
      state.build.weapon2.trees[data.tree].skills.find(x=>x.id===data.skill_id).is_checked = true
    }
  },
  updatePoi(state,data){
    state.poi = data
  },
  updateResourses(state,data){
    state.resourses = data
  },
  updateCategoryType(state,data){
    if (data.type === 'typeChange'){
      if(!state.resourses[data.index].is_visible){
        for (let  x of this.categoryTypes[data.index].category){
          x.is_visible = false
        }
      }
    }
    if (data.type === 'categoryChange'){
      state.resourses[data.index].is_visible = true
    }



      //state.resourses = data
    },


}

const actions = {

  async fetchGuilds({commit}){
    const response = await api.get('/api/guild/guilds?for=all')
    commit('updateGuilds', response.data)
  },
  async fetchGuild({commit},slug){
    const response = await api.get(`/api/guild/guild?slug=${slug}`)
    commit('updateGuild', response.data)
  },
  async fetchPosts({commit}){
    const response = await api.get('/api/post/posts?for=all')
    commit('updatePosts', response.data)
  },
  async fetchPost({commit},slug){
    const response = await api.get(`/api/post/post?slug=${slug}`)
    commit('updatePost', response.data)
  },
  async fetchGuides({commit}){
    const response = await api.get('/api/guide/guides')
    commit('updateGuides', response.data)
  },
  async fetchGuide({commit},slug){
    const response = await api.get(`/api/guide/guide?slug=${slug}`)
    commit('updateGuide', response.data)
  },
  async fetchBuilds({commit}){
    const response = await api.get('/api/skill/build?for=all')
    commit('updateBuilds', response.data)
  },
  async fetchBuild({commit},slug){
    const response = await api.get(`/api/skill/build?slug=${slug}&for=build`)
    commit('updateBuild', response.data)
  },
  updateBuild({commit},data){
    commit('setBuild', data)
  },
  async fetchPoi({commit},slug){
    const response = await api.get(`/api/map/poi`)
    commit('updatePoi', response.data)
  },
  async fetchResourses({commit},slug){
    const response = await api.get(`/api/map/resourse`)
    commit('updateResourses', response.data)
  },
  updateCategoryType({commit},data){
    commit('updateCategoryType', data)
  },




}

export const getters = {
  guilds: (state) => state.guilds,
  guild: (state) => state.guild,
  posts: (state) => state.posts,
  post: (state) => state.post,
  guides: (state) => state.guides,
  guide: (state) => state.guide,
  builds: (state) => state.builds,
  build: (state) => state.build,
  pois: (state) => state.poi,
  categoryTypes: (state) => state.resourses,


}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}