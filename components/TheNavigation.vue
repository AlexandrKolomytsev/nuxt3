<template>
  <div>
    <nav class="nav">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="about">About</NuxtLink>
      <p>Cart ({{cart.length}})</p>
      <NuxtLink to="/profile">Profile</NuxtLink>
    </nav>
  </div>
</template>

<script setup>
const cart = useCart();
</script>

<style lang="scss" scoped>
.nav {
  background-color: #7f7fd7;
  display: flex;
  justify-content: space-around;
}
</style>


