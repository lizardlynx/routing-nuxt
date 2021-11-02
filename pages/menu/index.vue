<template>
  <div>
    <v-list>
      <v-list-item v-for="(value, key) in links" :key="key" :to="{ name: 'menu-id', params: {id: key, name: value}}">
        <v-list-item-content>
          <v-list-item-title >{{ value }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import Vue from 'vue'
import { Component } from 'nuxt-property-decorator'

@Component({})

export default class IndexPage extends Vue{
  links = ['Link1', 'Link2', 'Link3']
}
</script>

