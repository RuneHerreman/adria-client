<script setup>
import LoadingComponent from "@/components/LoadingComponent.vue";
import SettingsComponent from "@/components/settings-component/SettingsComponent.vue";
const emit = defineEmits(['profileUpdated']);
</script>

<template>
  <main>
    <h1>Settings</h1>
    <Suspense>
      <template #default>
        <SettingsComponent
            id="settings-personalInfo"
            @profileUpdated="emit('profileUpdated')"
        />
      </template>
      <template #fallback>
        <LoadingComponent>
          <template #loading>
            user's data
          </template>
        </LoadingComponent>
      </template>
    </Suspense>
  </main>
</template>

<style scoped>
main {
  padding-bottom: 5rem;
}
</style>