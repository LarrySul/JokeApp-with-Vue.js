import Vue from 'vue'
import App from '@/components/App'
import Joke from '@/components/Joke'
import Router from './routes'
import store from './store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:Router,
  store,
  render: h => h(App)
})
