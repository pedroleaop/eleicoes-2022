<template>
      <v-container fluid>
    <v-row justify="center">

      <v-expansion-panels popout>
        <v-expansion-panel
          v-for="(message, i) in messages"
          :key="i"
          hide-actions
        >
          <v-expansion-panel-header>
            <v-row
              align="center"
              class="spacer"
              no-gutters
            >
              <v-col
                cols="2"
                sm="2"
                md="1"
              >
                <v-avatar
                  size="25px"
                >
                  <img
                    v-if="message.avatar"
                    alt="Avatar"
                    src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                  >
                </v-avatar>
              </v-col>

              <v-col
                class="hidden-xs-only"
                sm="5"
                md="3"
              >
                <strong v-html="message.name"></strong>
              </v-col>

              <v-col
                class="text-no-wrap"
                cols="5"
                sm="3"
              >
                <v-chip
                  v-if="message.new"
                  :color="`${message.color} lighten-4`"
                  class="ml-0 mr-2 black--text"
                  label
                  small
                >
                  {{ message.new }} new
                </v-chip>
                <strong v-html="message.title"></strong>
              </v-col>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-divider></v-divider>

             <v-toolbar
      height="72"
    >
      <v-switch
        v-model="$vuetify.theme.dark"
        label="Ativar/desat modo escuro"
        persistent-hint
      ></v-switch>
    </v-toolbar>
    
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>

<script>
export default {
    name: 'navbar',
    data: () => ({
      messages: [
        {
          avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
          title: 'Olá, Pedro Leão',
        },
      ],
      lorem: 'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.',
    }),

}
</script>

<style scoped>
.v-expansion-panel-header {
  font-size: 1.28rem;
}

.v-expansion-panels--popout > .v-expansion-panel {
  max-width: 100%; 
}
</style>