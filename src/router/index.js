import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/visualdev',
      name: 'visual development',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/VisualDevView.vue'),
    },
    {
      path: '/demoreel',
      name: 'demo reel',
      component: () => import('../views/DemoReelView.vue'),
    },
    {
      path: '/comics',
      name: 'comics',
      component: () => import('../views/ComicView.vue'),
    },
    {
      path: '/personalwork',
      name: 'personal work',
      component: () => import('../views/PersonalWorkView.vue'),
    },
    {
      path: '/cv',
      name: 'cv',
      component: () => import('../views/CVView.vue'),
    },
  ],
});

export default router;
