import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Pokemons from '@/components/Pokemons'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/pokemons',
      name: 'Pokemons',
      component: Pokemons
    }
  ]
})
