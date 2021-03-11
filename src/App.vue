<template>
<div class="app">
 <v-app>
    <navbar/>
    <carousel/>
    <gatinhasmanhosas/>
   <v-main>
     <v-container>
       <maintablehome/>
     </v-container>
   </v-main>
   <bottomnav/>
 </v-app>
</div>
</template>

<script>
import bottomnav from './components/bottomnav.vue';
import carousel from './components/carousel.vue';
import gatinhasmanhosas from './components/gatinhasmanhosas.vue';
import navbar from './components/navbar';
import maintablehome from './/components/maintablehome';

export default {
  components: {
    navbar,
    bottomnav,
    carousel,
    gatinhasmanhosas,
    maintablehome
  }
  
}
</script>

<style lan,
    Gatinhasmanhosasg="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
