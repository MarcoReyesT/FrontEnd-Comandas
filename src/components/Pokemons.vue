<template>
  <section class="container well">
    <h3>Pokemons: </h3>
    <hr>
    <div class="row">
      <div class="col-md-10 col-md-offset-1">
        <table class="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th>id</th>
              <th class="name-pokemon">Nombre</th>
              <th class="url-pokemon">Url Pokemons</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(pokemon, index) in pokemons">
              <td> {{ index + 1 }}</td>
              <td>{{ pokemon.name }}</td>
              <td><a :href="pokemon.url" target="_blank">{{ pokemon.url }}</a> </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    data () {
      return {
        pokemons: []
      }
    },
    mounted () {
      let vm = this
      let pokemons = vm.$resource('http://www.pokeapi.co/api/v2/pokemon/')
      pokemons.query().then(data => {
        vm.pokemons = data.body.results
      })
    }
  }
</script>
<style scoped>
  .url-pokemon {
    width: 60%;
  }
  .name-pokemon {
    width: 40%;
  }
  th, td {
    text-align: center;
  }
</style>