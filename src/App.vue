<script setup lang="ts">
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { ref } from 'vue';
import type { MenuItem } from 'primevue/menuitem';
import Menubar from 'primevue/menubar';
import Toast from 'primevue/toast';
import { useToast } from 'primevue';

const text = ref<string>('')
const toast = useToast()

const menuItems = ref<MenuItem[]>([
  {
    key: 'zelda',
    icon: 'pi pi-home',
    label: 'The Legend of Zelda',
    command: () => alert('Not Implemented'),
  },
  {
    key: 'mario',
    icon: 'pi pi-search',
    label: 'Super Mario',
    items: [
      {
        icon: 'pi pi-print',
        label: 'Super Mario World',
      },
      {
        icon: 'pi pi-plus',
        url: 'https://www.nintendo.com/us/store/products/super-mario-odyssey-switch/',
        target: '_blank',
        label: 'Super Mario Odyssey',
      },
      {
        icon: 'pi pi-file',
        label: 'Mario Kart 8 Deluxe',
      }
    ]

  },
  {
    key: 'pokemon',
    icon: 'pi pi-check',
    label: 'Pokémon',
  },
  { separator: true },
  {
    key: 'splatoon',
    icon: 'pi pi-cloud',
    label: 'Splatoon',
    command: () => toast.add({ severity: 'error', summary: 'Not Implemented', detail: 'Splatoon is not implemented yet', life: 3000 }),
  }
])

</script>

<template>
  <Toast />
  <Menubar :model="menuItems">
    <template #end>
        <InputText id="game_search" v-model="text" placeholder="Search" />
        <Button label="Submit" severity="info" variant="outlined" raised />
    </template>
  </Menubar>
</template>

<style scoped>
button, input {
  margin: 0 2px;
}
</style>
