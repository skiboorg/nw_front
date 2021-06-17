
const routes = [
  {
    path: '/map',
    component: () => import('layouts/mapLayout.vue'),
    children: [
      { path: '', component: () => import('pages/map.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/mainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/index.vue') },
      { path: 'skills', component: () => import('pages/skills.vue') },
      { path: 'faq', component: () => import('pages/faq.vue') },
      { path: 'trade', component: () => import('pages/trade.vue') },
      { path: 'guides', component: () => import('pages/guides.vue') },
      { path: 'guides/:slug', component: () => import('pages/guilde_item.vue') },
      { path: 'news', component: () => import('pages/news.vue') },
      { path: 'news/:slug', component: () => import('pages/news_item.vue') },
      { path: 'build/:slug', component: () => import('pages/build.vue') },
      { path: 'companies', component: () => import('pages/guilds.vue') },
      { path: 'companies/:slug', component: () => import('pages/guild_item.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
