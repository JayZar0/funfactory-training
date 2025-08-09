<!-- This component will be used as a selection for the menu items in the main menu -->
<script setup lang="ts">
import { RouterLink } from 'vue-router';

/**
 * Prop declarations
 */
const { location, label } = defineProps<{
    location: string,
    label: string
}>()

</script>

<template>
    <div>
        <RouterLink :to="location">{{label}}</RouterLink>
    </div>
</template>