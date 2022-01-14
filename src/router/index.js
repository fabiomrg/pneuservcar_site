import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/home/Index.vue'),
    },
    {
      path: '/about',
      name: 'Sobre nos',
      component: () => import('@/views/about/Index.vue'),
    },
    {
      path: '/Pneus',
      name: 'Pneus',
      component: () => import('@/views/Pneus/Index.vue'),
    },
    {
      path: '/dicas',
      name: 'dicas',
      component: () => import('@/views/dicas/Index.vue'),
    },
    {
      path: '/dicas-post',
      name: 'dicas Post',
      component: () => import('@/views/dicas-post/Index.vue'),
    },
    {
      path: '/contato',
      name: 'contato',
      component: () => import('@/views/contato/Index.vue'),
    },
  ],
})
