import {Cookies, LocalStorage} from 'quasar'

// const token = LocalStorage.getItem('auth_token')

export default async ({ app, router, Vue, store, ssrContext }) => {
  console.info('boot: init entered', store)
  const cookies = process.env.SERVER
    ? Cookies.parseSSR(ssrContext)
    : Cookies
    let token = cookies.get('auth_token')

  Vue.prototype.$cook = cookies
  if (token) {
   await store.dispatch('auth/getUser')
     // if (!process.env.SERVER) {
     //   store.dispatch('auth/connectWS', store.state.auth.user.id)
     // }
  }
  Vue.prototype.$user = store.state.auth
  console.info('boot: init exited')
}
