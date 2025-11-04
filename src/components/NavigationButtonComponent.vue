<script setup lang="ts">
const props = defineProps({
  name: {type: String, required: true},
  path: {type: String, required: true},
  iconUrl: {type: String, required: true}
})
</script>

<template>
  <router-link
    class="nav-link"
    :to="props.path"
    :style="{backgroundImage: `url(${props.iconUrl})`}">
      {{name}}
  </router-link>
</template>

<style scoped>
.nav-link {
  text-decoration: none;
  color: var(--dark-green);
  font-weight: bold;
  border-radius: 0.5rem;
  padding: 0.5rem 0.5rem 0.5rem 2rem;
  font-size: 1.2rem;
  background: no-repeat left center;
  width: 7.8rem;
  height: 2.5rem;
}

.nav-link:hover {
  cursor: pointer;
  background-color: rgba(204, 204, 204, 0.3);
}
</style>