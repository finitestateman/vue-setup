<script setup lang="ts">
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { ref } from 'vue';
import type { MenuItem } from 'primevue/menuitem';
import Menubar from 'primevue/menubar';
import PanelMenu from 'primevue/panelmenu';
import Select from 'primevue/select';
import Toast from 'primevue/toast';
import { useToast } from 'primevue';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import FloatLabel from 'primevue/floatlabel';
import SearchBar from './components/SearchBar.vue';
import DataPicker from 'primevue/datepicker';
import AutoComplete from 'primevue/autocomplete';

const text = ref<string>('')
const toast = useToast()

const panelItems = ref<MenuItem[]>([
  {
    key: 'zelda',
    icon: 'pi pi-image',
    label: 'The Legend of Zelda',
    items: [
      {
        icon: 'pi pi-image',
        label: 'Breath of the Wild',
      },
      {
        icon: 'pi pi-plus',
        url: 'https://www.nintendo.com/us/store/products/super-mario-odyssey-switch/',
        target: '_blank',
        label: 'Tears of the Kingdom',
      },
      {
        icon: 'pi pi-file',
        label: 'Echoes of Wisdom',
      }
    ]
  },
  {
    key: 'mario',
    icon: 'pi pi-sync',
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
    icon: 'pi pi-phone',
    label: 'Pokémon',
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
    key: 'splatoon',
    icon: 'pi pi-mobile',
    label: 'Splatoon',
    command: () => toast.add({ severity: 'error', summary: 'Not Implemented', detail: 'Splatoon is not implemented yet', life: 3000 }),
  }
]);


const menubarItems = ref<MenuItem[]>([
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

const menuName = ref<string>('Pokemon');
const types = ref<string[]>(['Grass', 'Fire', 'Water', 'Electric']);
const selectedType = ref<string>('')
const dates = ref();
const searchItems = ref<string[]>([]);

const search = (e: { query: string }) => { searchItems.value = [...Array(2).keys()].map((item) => e.query + '-' + item) }

</script>

<template>
  <Toast />
  <Splitter style="height: 900px" class="mb-8">
    <SplitterPanel class="flex justify-center p-4" :size="15">
      <div class="card flex justify-center">
        <!-- <PanelMenu :model="panelItems" multiple class="w-full md:w-80" /> -->
        <PanelMenu :model="panelItems" multiple class="md:w-60" />
      </div>
    </SplitterPanel>
    <!-- <SplitterPanel class="flex items-center justify-center" :size="85"> -->
      <SplitterPanel class="p-4" :size="85">
      <Menubar :model="menubarItems">
        <template #end>
          <FloatLabel variant="on">
            <InputText id="game_search" v-model="text" />
            <label for="game_search">Search</label>
            <Button label="Submit" variant="outlined" raised />
          </FloatLabel>
        </template>
      </Menubar>
      <SearchBar v-bind:name="menuName" class="mt-4">
          <Select v-model="selectedType" :options="types" class="" placeholder="Type" />
          <Select class="" placeholder="Name" />
          <FloatLabel variant="on">
            <DataPicker input-id="period" v-model="dates" selection-mode="range" :manual-input="false" show-time fluid />
            <label for="period">Date</label>
          </FloatLabel>
          <AutoComplete v-model="selectedType" dropdown :suggestions="searchItems" @complete="search" />
      </SearchBar>
    </SplitterPanel>
  </Splitter>
</template>

<style scoped>
button, input {
  margin: 0 2px;
}

</style>
