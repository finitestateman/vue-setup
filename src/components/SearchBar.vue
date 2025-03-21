<template>
    <Panel :header="menuStore.selectedMenu" toggleable>
        <div :class="gridCols" class="grid gap-4" id="fadfjadfdksfjdskfajdsfkdsajf">
        <slot>
        </slot>
        <span class="flex col-start-6 justify-self-end gap-2">
            <Button class="" :label="name" variant="outlined" raised />
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
import { useMenuStore } from '../stores/counter';
interface Props {
    name: string;
}
const Dsdf = defineProps<Props>();
console.log(Dsdf.name);
const menuStore = useMenuStore();
const isgood = true;
console.log(isgood);

const slots = useSlots();
let gridCols = 'grid-cols-';

(function Abc() {

})();

onMounted(() => {
  gridCols += (slots.default?.().length ?? 6);
});
</script>

<style scoped>

</style>
