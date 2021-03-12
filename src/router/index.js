import Vue from 'vue';
import VueRouter from 'vue-router';
import homepage from '../views/homepage';
import noticia1 from '../views/noticia1';

Vue.use(VueRouter)

const routes = [
 {
    path: '/',
    name: 'homepage',
    component: homepage
  },
  {
    path: '/noticia',
    name: 'noticia-1',
    component: noticia1
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
