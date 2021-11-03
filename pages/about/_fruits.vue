<template>
  <div>
    <h1 class="mx-4 display-1">{{ $store.state.fruits[$route.params.fruits].name }}</h1>
    <p class="mx-4">Coming all the way from {{ $store.state.fruits[$route.params.fruits].country }}!</p>
  </div>
</template>

<script>
import Vue from 'vue'
import { Component } from 'nuxt-property-decorator'

@Component({})

export default class FruitsPage extends Vue{
}
</script>