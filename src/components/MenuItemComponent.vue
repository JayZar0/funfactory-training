<!-- This component will be used as a selection for the menu items in the main menu -->
<script setup lang="ts">
import router from '@/router';
import { Button } from 'primevue';

/**
 * These are the constant parameters that are taken for the buttons
 */
const location:string = ''
const label:string = ''

/**
 * This function will redirect the user based if they press the button
 * @param location this is where the user will be redirected
 */
function redirect () {
    router.push(location)
}
</script>

<template>
    <div>
        <Button v-on:click="redirect" v-bind:label="label"></Button>
    </div>
</template>