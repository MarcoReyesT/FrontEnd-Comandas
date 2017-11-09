<template>
  <section class="container well">
    <h3> Comandas</h3>
    <table class="table table-bordered table-hovered">
      <thead>
        <th>Hora</th>
        <th>Fecha</th>
        <th>Garzon</th>
        <th>Acciones</th>
      </thead>
      <tbody>
        <tr v-for="comanda in comandas">
          <td>{{ comanda.hora }}</td>
          <td>{{ comanda.fecha }}</td>
          <td>{{ comanda.empleado.nombre }}</td>
          <td><button>Editar</button><button>Eliminar</button> </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
<script>
import {comandaService} from '@/services/Comanda.service.js'
export default {
  data: () => ({
    comandas: []
  }),
  mounted () {
    comandaService.query().then(data => {
      this.comandas = data.body
      console.log('--COMANDAS--')
      console.log(this.comandas)
    })
  }
}
</script>
<style scoped>

</style>
