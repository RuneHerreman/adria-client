<script setup>
const props = defineProps({
  name: {type: String, required: true},
  path: {type: String, required: true},
  iconUrl: {type: String, required: true}
});
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
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  background: no-repeat left+0.5rem center;
  height: fit-content;
}

.nav-link:hover {
  cursor: pointer;
  background-color: rgba(204, 204, 204, 0.3);
}
</style>