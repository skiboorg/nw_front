import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function ({ store, ssrContext }) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  // Router.beforeEach((to, from, next) => {
  //   // See if any of the matched routes has meta "requiresAuth"
  //   if (to.matched.some(route => route.meta.requiresAuth)) {
  //     // Yes this route requires authentication. See if the user is authenticated.
  //     console.log(store.getters['auth/isLoggedIn'])
  //     if (store.getters['auth/isLoggedIn']) {
  //       // User is authenticated, we allow access.
  //       next();
  //     } else {
  //       // User is not authenticated. We can redirect her to
  //       // our login page. Or wherever we want.
  //       next("/");
  //     }
  //   } else {
  //     next();
  //   }
  // });

  return Router
}
