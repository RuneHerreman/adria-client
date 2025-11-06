<script setup lang="ts">
import {ref, watch} from "vue";

const props = defineProps({
  modelValue: String,
  type: {type:String, required: true},
  placeholder: {type:String, required: false}
})
const emit = defineEmits(['update:modelValue']);
const code = ref(props.modelValue || "")

watch(code, (val) => {
  emit('update:modelValue', val);
});

watch(() => props.modelValue, val => {
  code.value = val || "";
}, { immediate: true });
</script>

<template>
  <input
      :type="type"
      :placeholder="placeholder"
      v-model="code"
  >
</template>

<style scoped>
input{
  font-family: "Inter", Arial, Helvetica, sans-serif;
  border-radius: 0.5rem;
  padding: 0.5rem;
  width: 100%;

  border: 0.1rem solid #D0D0D0;
  height: min-content;

  transition: 0.1s ease-in-out;
}

input:focus{
  outline: none;
  border-color: var(--tertiary-green);
  box-shadow: 0 0 0.1rem hsl(0, 0%, 90%);
}
</style>