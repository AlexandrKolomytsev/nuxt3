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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1007;
}
</style>


