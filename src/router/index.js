import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Comandas from '@/components/Comandas'
import Login from '@/components/Login'
import Empleado from '@/components/Empleado'

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
      path: '/comandas',
      name: 'Comandas',
      component: Comandas
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/empleados',
      name: 'empleados',
      component: Empleado
    }
  ]
})
