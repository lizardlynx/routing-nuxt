<template>
  <div>
    <h1>{{ this.$route.params.name }}</h1>
  </div>
</template>

<script>
import Vue from 'vue'
import { Component } from 'nuxt-property-decorator'

@Component({})

export default class IndexPage extends Vue{
  param = this.$route.params;
  getParams() {
    console.log('param', this.param);
  }
}
</script>

<style scoped>
h1 {
  margin: 20px;
}
</style>
