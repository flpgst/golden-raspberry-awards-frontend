import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/movies',
    name: 'MovieList',
    component: () => import(/* webpackChunkName: "movies" */ '../views/MovieList.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
