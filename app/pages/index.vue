<script setup>
const config = useRuntimeConfig()
const endpoint = config.public.weatherEndpoint

async function onButtonClick() {
  console.log(endpoint+"&q=Tokyo")
  const res = await $fetch(endpoint+"&q=Tokyo")
  console.log(res)
}

async function onDummyButtonClick() {
  const url = "http://localhost:3000/dummy.json?dummy=dummy"
  const res = await $fetch(url)
  console.log(res)
}
</script>

<template>
  <div>
    <button @click="onButtonClick">tokyo tenki</button>
    <button @click="onDummyButtonClick">tokyo tenki(dummy)</button>
  </div>
</template>
