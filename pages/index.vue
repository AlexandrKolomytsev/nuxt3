<template>
  <div class="d-flex justify-space-around mt-10">
    <v-color-picker
        v-model="c1"
        hide-canvas
        hide-sliders
    ></v-color-picker>

    <v-color-picker
        v-model="c2"
        hide-inputs
        show-swatches
        @update:modelValue="handleChangedColor"
    ></v-color-picker>
  </div>
</template>

<script setup>
/*useHead({
  title: "Главная"
})*/

let c1 = ref('#ff00ff')
const c2 = ref('#00ff00')
function handleChangedColor(color){
  console.log(color, 'color')
  c1 = color
}
</script>

<style scoped>

</style>
