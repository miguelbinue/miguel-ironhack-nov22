<template>
  <!-- <h1>{{ saludo }}</h1> -->
  <button @click="hello">{{ saludo }}</button>
  
</template>

<script setup>
//el export default no puede ir dentro del mismo script junto a "<script steup>"
const saludo = "Hola soy Miguel";
function hello() {
    console.log(saludo + " en consola");
}

// export default {
// }
</script>


<style>

</style>