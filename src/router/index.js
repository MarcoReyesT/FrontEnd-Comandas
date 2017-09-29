import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Pokemons from '@/components/Pokemons'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      redirect: '/login'
    },
    {
      path: '/pokemons',
      name: 'Pokemons',
      component: Pokemons
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
