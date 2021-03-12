<template>
<div class="app">
 <v-app>
    <navbar/>
   <v-main>
     <v-container>
       <router-view/>
     </v-container>
   </v-main>
   <bottomnav/>
 </v-app>
</div>
</template>

<script>
import bottomnav from './components/shared/bottomnav.vue';
import navbar from './components/shared/navbar';

export default {
  components: {
    navbar,
    bottomnav
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
