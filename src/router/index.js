import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/timeline',
    name: 'Timeline',
    component: () => import('@/views/TimelineView.vue')
  },
  {
    path: '/timeline/:id',
    name: 'TimelineDetail',
    component: () => import('@/views/TimelineDetail.vue'),
    props: true
  },
  {
    path: '/albums',
    name: 'Albums',
    component: () => import('@/views/AlbumsView.vue')
  },
  {
    path: '/albums/:id',
    name: 'AlbumDetail',
    component: () => import('@/views/AlbumDetail.vue'),
    props: true
  },
  {
    path: '/anniversaries',
    name: 'Anniversaries',
    component: () => import('@/views/AnniversariesView.vue')
  },
  {
    path: '/letters',
    name: 'Letters',
    component: () => import('@/views/LettersView.vue')
  },
  {
    path: '/letters/:id',
    name: 'LetterDetail',
    component: () => import('@/views/LetterDetail.vue'),
    props: true
  },
  {
    path: '/wishlist',
    name: 'Wishlist',
    component: () => import('@/views/WishlistView.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFoundView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
