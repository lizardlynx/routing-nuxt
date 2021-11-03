<template>
<div>
  <p class="display-1">{{ $store.state.fruits[$route.params.id].description }}</p>
</div>
</template>