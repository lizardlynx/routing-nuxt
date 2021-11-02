<template>
  <v-app>
    <v-app-bar app class="indigo accent-1">
      <v-btn-toggle tile dark color="white" group>
        <v-btn to="/">Home</v-btn>
        <v-btn to="/menu">Menu</v-btn>
        <v-btn to="about">About</v-btn>
      </v-btn-toggle>
    </v-app-bar>
    <v-main >
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style scoped>
</style>
