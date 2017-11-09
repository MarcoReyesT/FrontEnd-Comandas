<template>
	<nav class="navbar navbar-inverse fixed comandas-nav" type="dark">
	  <div class="container-fluid">
	    <div class="navbar-header">
	      <a class="navbar-brand ctexto" href="#">Sistema de Comandas</a>
	    </div>
	    <ul class="nav navbar-nav pull-right">
	      <li>
	      	<button class="btn btn-default">
	      		<router-link to="/empleados">Empleados</router-link>
	      	</button>
	      	
	      </li>
	      <li>
	      	<button class="btn btn-default">
	    			<router-link class="ctexto" to="/comandas">Comandas</router-link>
	    		</button>
	    	</li>
	    </ul>
	  </div>
	</nav>
</template>
<script>
	export default {}
</script>
<style scoped>
	.comandas-nav {
		width: 100%;
		background-color: #F18A4B;
		border-color: #F18A4B;
		border-radius: 0;
	}
	.ctexto {
		color: #111;
	}
</style>
