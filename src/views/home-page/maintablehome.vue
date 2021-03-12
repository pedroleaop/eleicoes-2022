<template>
<div>
 <h2>Últimas notícias</h2>
 <router-view/>

 <tr v-for="noticia of noticias" :key="noticia.id"> 
 <td><v-alert
      border="left"
      color="grey lighten-2"
      dark>
        <img id="imgnoticia" :src="noticia.picture">
      <div id="manchete">{{noticia.manchete}}</div>
      <div id="buttonnot" class="text-center">
    <router-link to="/noticia"><v-btn
      rounded
      color="primary"
      dark
    >
     Leia mais
    </v-btn></router-link>
  </div>     
    </v-alert></td>
    </tr>
    
</div>
</template>

<script>
export default {
    name: 'maintablehome',
    data() {
        return {
            noticias: []
        }
    },
    created() {
        fetch('https://raw.githubusercontent.com/pedroleaop/eleicoes-2022/main/src/assets/noticias.json')
        .then(response => response.json())
        .then(json => {
            this.noticias = json;
        })
    }
}
</script>

<style scoped>

.theme--dark.v-sheet {
    color:rgb(59, 59, 59);
}

.v-alert {
    font-size: 18px;
    font-weight: bold;
    max-height: 150px;
}

h2 {
    text-align: left;
}
img {
    max-width: 10vw;
}

#manchete {
    position: relative;
    top: -75px;
    padding-left: 25vw;
}

#buttonnot {
    position: relative;
    top: -60px;
    right: -90px;
}

#imgnoticia {
    display: flex;
    max-width: 25vw;
    min-height: 25vw;
}
</style>