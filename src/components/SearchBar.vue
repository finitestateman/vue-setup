<template>
    <Panel :header="name" toggleable>
        <div class="grid grid-cols-6 items-center gap-4">
        <slot></slot>
        </div>
    </Panel>
</template>

<script setup lang="ts">
import { Panel } from 'primevue';
interface Props {
    name: string;
}
defineProps<Props>();

</script>

<style scoped>

</style>