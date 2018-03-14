import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/components/App'
import Joke from '@/components/Joke'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
    	path:'/joke',
    	name: 'Joke',
    	component: Joke
    }
  ],
  // mode: 'history'
})

export default router
