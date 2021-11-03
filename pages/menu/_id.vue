<template>
  <div>
    <v-container class="indigo lighten-5">
      <v-row>
        <v-col align-self="center">
          <v-icon class="mx-4" x-large>{{ $store.state.fruits[$route.params.id].icon }}</v-icon>
        </v-col>
        <v-col align-self="center">
          <p class="gray mx-4 display-1">{{ $store.state.fruits[$route.params.id].name }}</p>
        </v-col>
        <v-col align-self="center">
          <nuxt-child/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Vue from 'vue'
import { Component } from 'nuxt-property-decorator'

@Component
export default class IndexPage extends Vue{
}
</script>

<style scoped>
h1 {
  margin: 20px;
}
</style>
