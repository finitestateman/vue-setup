<template>
    <Panel :header="name" toggleable>
        <div :class="gridCols" class="grid gap-4" id="fadfjadfdksfjdskfajdsfkdsajf">
        <slot>
        </slot>
        <span class="flex col-start-6 justify-self-end gap-2">
            <Button class="" label="Export" variant="outlined" raised />
            <Button class="" label="Import" variant="outlined" raised />
            <Button class="" label="Save" variant="outlined" raised />
        </span>
        </div>
    </Panel>
</template>

<script setup lang="ts">
import { Panel } from 'primevue';
import Button from 'primevue/button';
import { useSlots, onMounted } from 'vue';
interface Props {
    name: string;
}
defineProps<Props>();

const slots = useSlots();
let gridCols = 'grid-cols-';

onMounted(() => {
//   gridCols += slots.default ? slots.default().length : 6;
  gridCols += (slots.default?.().length ?? 6);
});
</script>

<style scoped>

</style>