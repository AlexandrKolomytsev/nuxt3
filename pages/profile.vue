<template>
  <div>
    My profile
  </div>
</template>

<script setup>
definePageMeta({
  middleware: () => {
    const isAuth = userAuth()
    console.log(isAuth.value)
    return isAuth.value
  }
})
</script>
