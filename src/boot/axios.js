
import axios from 'axios'
import {Cookies} from "quasar";

const api = axios.create({ baseURL: process.env.API })

export default ({ app, router, Vue, store, ssrContext }) => {
  const cookies = process.env.SERVER
    ? Cookies.parseSSR(ssrContext)
    : Cookies
  let token = cookies.get('auth_token')
  if (token) {
    console.log('Token exists')
    api.defaults.headers.common['Authorization'] = 'Token ' + token
    console.log(api.defaults.headers.common)
  }
  Vue.prototype.$api = api
}
export { api }
