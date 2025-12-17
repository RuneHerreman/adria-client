<script setup>

import LoadingComponent from "@/components/LoadingComponent.vue";
import ShopComponent from "@/components/shop-components/ShopComponent.vue";
const emit = defineEmits(['profileUpdated']);
function handleProfileUpdate() {
  emit("profileUpdated");
}
</script>

<template>
  <main>
    <h1>Shop</h1>
    <Suspense>
      <template #default>
        <ShopComponent
            id="shop-page"
            @profile-updated="handleProfileUpdate"
        />
      </template>
      <template #fallback>
        <LoadingComponent>
          <template #loading>
            cosmetics
          </template>
        </LoadingComponent>
      </template>
    </Suspense>
  </main>
</template>

<style scoped>

</style>