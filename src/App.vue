<template>
  <div id="app">
    <Header/>
    <Utils/>
    <router-view style="padding: 50px 10%; 0 10%;"/>
  </div>
</template>

<script>
import Header from '@/components/public/Header.vue';
import Index from '@/components/Index.vue';
import Utils from '@/components/public/Utils.vue';
export default {
  name: 'app',
  components: {
    Header,Utils
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 !important;
}
</style>
