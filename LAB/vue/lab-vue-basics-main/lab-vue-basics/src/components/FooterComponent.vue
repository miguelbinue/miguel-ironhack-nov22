<template>
  <h4 v-if="approvedCondition">HI!</h4>
</template>

<script setup>
import { ref } from 'vue' 
const approvedCondition = ref(true); //si cambias estado, se ve y no se ve


</script>

<style>

</style>