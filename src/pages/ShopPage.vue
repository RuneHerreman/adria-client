<script setup>

import SettingsComponent from "@/components/settings-component/SettingsComponent.vue";
import LoadingComponent from "@/components/LoadingComponent.vue";
import ShopComponent from "@/components/shop-components/ShopComponent.vue";
</script>

<template>
  <main>
    <h1>Shop</h1>
    <Suspense>
      <template #default>
        <ShopComponent
            id="shop-page"
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