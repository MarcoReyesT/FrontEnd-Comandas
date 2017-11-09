<template>
  <section class="container well">
    <h3> Usuarios</h3>
    <table class="table table-bordered table-hovered">
      <thead>
        <th>Nombre</th>
        <th>Rut</th>
        <th>Acciones</th>
      </thead>
      <tbody>
        <tr v-for="user in users">
          <td>{{ user.nombre }}</td>
          <td>{{ user.rut }}</td>
          <td><button>Editar</button><button>Eliminar</button> </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
<script>
import {empleadoService} from '@/services/Empleado.service.js'
export default {
  data: () => ({
    users: []
  }),
  mounted () {
    empleadoService.query().then(data => {
      this.users = data.body
      console.log('--EMPLEADOS--')
      console.log(this.users)
    })
  }
}
</script>
<style scoped>

</style>
