<template>
  <div>
    <!--    <TheNavigation />-->
    <!--    <HomeWelcome />-->
    <button @click="toggle">Toggle</button>
    <component :is="ChoiseComponent"></component>
  </div>
</template>

<script setup>
const ChoiseComponent = shallowRef(resolveComponent("TheNavigation"))
function toggle() {
  ChoiseComponent.value = resolveComponent("HomeWelcome")
}
</script>
