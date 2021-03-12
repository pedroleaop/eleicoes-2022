<template>
  <div>
      <carousel/>
       <gatinhasmanhosas/>
    <maintablehome/>
  </div>
</template>

<script>

import carousel from '../views/home-page/carousel.vue'
import gatinhasmanhosas from '../views/home-page/gatinhasmanhosas.vue'
import maintablehome from '../views/home-page/maintablehome'

export default {
    name: 'homepage',
  components: { 
      carousel,
      gatinhasmanhosas,
      maintablehome
   },
}
</script>