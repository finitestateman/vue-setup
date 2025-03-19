<script setup lang="ts">
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { ref } from 'vue';

const text = ref<string>('')
</script>

<template>
  <InputText v-model="text"></InputText>
  <Button label="Save" />
  {{ text }}
</template>

<style scoped>
</style>
