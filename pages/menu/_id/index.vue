<template>
  <div>
  <v-btn class="mx-4"
    :to="{name: 'menu-id-desc', params: {id: $route.params.id}}">
    Description</v-btn>
  </div>
</template>