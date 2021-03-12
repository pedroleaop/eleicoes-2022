<template>
  <div>
    <v-card
  elevation="1"
><div v-for="noticia of manchete" :key="noticia.id">
  <div v-if="noticia.id<=1">
<h2>{{noticia.manchete}}</h2>
<img style="max-width: 90vw" :src="noticia.picture"></div></div>
<v-divider></v-divider>
<p style="text-align: justify; padding: 10px">  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus blandit lorem vel fermentum. Morbi porttitor ligula eu pulvinar laoreet. Curabitur laoreet porta lorem ut eleifend. Morbi iaculis lobortis orci quis gravida. Phasellus elementum dolor quis nunc hendrerit, et consequat quam tempus. Vivamus interdum sagittis turpis id malesuada. Morbi dolor dolor, dapibus id tincidunt in, venenatis vel ligula. Nullam tincidunt nulla vitae dolor fermentum hendrerit. Sed in ultricies velit. Nullam commodo blandit purus. Duis molestie eu ligula faucibus tristique. Morbi iaculis diam vel eleifend porta. Phasellus hendrerit, purus eu dignissim feugiat, eros tortor luctus ante, sed venenatis tortor ligula non neque. Suspendisse et congue est, vitae mattis nunc. Vestibulum dapibus orci non ullamcorper finibus.</p>
</v-card>
  </div>
</template>

<script>
export default {
    name:'noticia-1',
    data(){
      return {
        manchete: []
      }
    },
    created(){
      fetch('https://raw.githubusercontent.com/pedroleaop/eleicoes-2022/main/src/assets/noticias.json')
      .then(response => response.json())
      .then(json =>
          this.manchete = json)
    }

}
</script>