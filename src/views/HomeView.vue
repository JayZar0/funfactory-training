<script setup lang="ts">
import MainMenuItem from '../components/MenuItemComponent.vue'

interface menuitem {
  name:string
  url:string
}

/**
 * These are the different areas where the staff will be trained using the application
 */
const menulist: Array<menuitem> = [
  { name: 'Cleaning', url: '' },
  { name: 'Front', url: '' },
  { name: 'Party Coach', url: '' },
  { name: 'Kitchen Cash', url: '' },
  { name: 'Cook', url: '' },
]
</script>

<template>
  <main>
    <MainMenuItem v-for="value in menulist" :key="value.name" :label="value.name" :location="value.url" />
  </main>
</template>
