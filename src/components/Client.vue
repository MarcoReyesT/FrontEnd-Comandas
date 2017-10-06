<template>
  <section class="container well">
    <h3> Usuarios</h3>
    <table class="table table-bordered table-hovered">
      <thead>
        <th>Nombre</th>
        <th>Email</th>
        <th>Acciones</th>
      </thead>
      <tbody>
        <tr v-for="user in users">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td><button>Editar</button><button>Eliminar</button> </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
<script>
import {clientService} from '@/services/Client.service.js'
export default {
  data: () => ({
    users: []
  }),
  mounted () {
    clientService.query().then(data => {
      this.users = data.body
    })
  }
}
</script>
<style scoped>

</style>
