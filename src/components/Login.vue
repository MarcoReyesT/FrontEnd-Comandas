<template>
  <section>
    <div class="well">
      <form action="javascript:;" @submit.prevent="login(credentials)" class="form">
        <div class="form-group">
          <label for="email">Correo Electrónico</label>
          <input id="email" v-model="credentials.email" type="text" class="form-control">
        </div>
        <div class="form-group">
          <label for="pass">Contraseña</label>
          <input id="pass" v-model="credentials.password" type="password" class="form-control">
        </div>
        <div class="form-group">
          <input type="submit" class="btn btn-primary" value="Autentificar">
        </div>
      </form>
    </div>
  </section>
</template>
<script>
  import {loginService} from '@/services/Login.service.js'

  export default {
    data () {
      return {
        credentials: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      login (model) {
        loginService.authenticate(model).then(data => {
          console.log(data)
        })
      }
    }
  }
</script>
<style scoped>

</style>