<template>
	<nav class="navbar navbar-inverse wolf-nav">
	  <div class="container-fluid">
	    <div class="navbar-header">
	      <a class="navbar-brand" href="#">FirstExampleWithVue</a>
	    </div>
	    <ul class="nav navbar-nav pull-right">
	      <li>
	      	<router-link to="/">Vue APP</router-link>
	      </li>
	      <li>
	    		<router-link to="/pokemons">Pokemons</router-link>
	    	</li>
	    </ul>
	  </div>
	</nav>
</template>
<script>
	export default {}
</script>
<style scoped>
	.wolf-nav {
		position: fixed;
		z-index: 2;
		width: 100%;
		background-color: #122f2b;
		border-color: #0e2522;
		border-radius: 0;
	}
</style>
