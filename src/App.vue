<template>
  <section>
    <navigation></navigation>
    <br><br>
    <router-view></router-view>
  </section>
</template>

<script>
  import navigation from '@/components/Navbar'
  export default {
    components: {
      navigation
    }
  }
</script>

<style>
</style>
