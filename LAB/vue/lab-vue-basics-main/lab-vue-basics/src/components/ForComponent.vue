<template>
  <li v-for ="titlePrint in posts" v-bind:class="{ 'red-text': titlePrint.isRed }"> 
   {{ titlePrint.title }}
  </li>

</template>

<script>
export default {
    data() {
        return {
            posts: [
                {
                    title: "Lightyear",
                    description: "Toy Story Theme" ,
                    content: "Astronaut",
                    isRed: true,
                },
                {
                    title: "Monstruos SA",
                    description: "Blue and green monster" ,
                    content: "Very scary things",
                    isRed: false,
                },
                {
                    title: "Aladin",
                    description: "A lot of magic carpets" ,
                    content: "Sultan things",
                    isRed: true,
                },
            ]
        }
    }
}
</script>

<style>
    .red-text {
        color: red;
    }
</style>