import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

export const useMenuStore = defineStore('menu', () => {
  const selectedMenu = ref<string>('');
  const _breadCrumb = ref<string[]>([]);
  const itGood =  true;
  console.log(itGood);

  function setMenu(menu: string) {
    selectedMenu.value = menu;
  }

  function setBreadCrumb(breadCrumb: string[]) {
    _breadCrumb.value = breadCrumb;
  }

  return { selectedMenu, setMenu, setBreadCrumb };
})
