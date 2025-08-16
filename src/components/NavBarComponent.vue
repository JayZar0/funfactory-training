<!-- This file will contain the navbar -->
<script setup lang="ts">
import { Button, Image } from 'primevue';
import { RouterLink } from 'vue-router';

interface menuitem {
  name:string
  url:string
}

/**
 * These are the different areas where the staff will be trained using the application
 */
const menulist: Array<menuitem> = [
  { name: 'Cleaning', url: '/clean' },
  { name: 'Front', url: '/front' },
  { name: 'Party Coach', url: '/coach' },
  { name: 'Kitchen Cash', url: '/kcash' },
  { name: 'Cook', url: '/cook' },
]
</script>

<template>
    <RouterLink to="/">
        <Image src="/public/logo.png" width="150"></Image>
    </RouterLink>
    <RouterLink v-for="item in menulist" :key="item.name" :to="item.url">
        <Button>{{ item.name }}</Button>
    </RouterLink>
</template>
