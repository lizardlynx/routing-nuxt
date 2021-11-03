<template>
<div>
  <div v-for="fruit of $store.state.fruits" :key="fruit.id" class="mx-4">
    <nuxt-link :to="{name: 'about-fruits', params: {fruits: fruit.id}}">{{ fruit.name }}</nuxt-link>
  </div>
</div>
</template>

<script>
import Vue from 'vue'
import { Component } from 'nuxt-property-decorator'

@Component({})

export default class IndexPage extends Vue{
  
}
</script>
