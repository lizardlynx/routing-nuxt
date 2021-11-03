<template>
  <div>
    <v-list class="indigo lighten-3" dark>
      <v-list-item v-for="fruit of $store.state.fruits" :key="fruit.id" 
      :to="{ name: 'menu-id', params: {id: fruit.id}}">
        <v-icon>{{ fruit.icon }}</v-icon>
        <v-list-item-content class="mx-4">
          <v-list-item-title >{{ fruit.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import Vue from 'vue'
import { Component} from 'nuxt-property-decorator'

@Component
export default class IndexPage extends Vue{
}
</script>

