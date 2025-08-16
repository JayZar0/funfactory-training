<!-- This file will contain the navbar -->
<script setup lang="ts">
import { Button } from 'primevue';
import { RouterLink } from 'vue-router';

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
    <RouterLink v-for="item in menulist" :key="item.name" :to="item.url">
        <Button>{{ item.name }}</Button>
    </RouterLink>
</template>
