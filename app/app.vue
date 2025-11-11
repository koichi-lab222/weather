<script setup>
const config = useRuntimeConfig()
const endpoint = config.public.weatherEndpoint

function onButtonClick() {
  console.log(endpoint)
}
</script>

<template>
  <div>
    <button @click="onButtonClick">tenki</button>
  </div>
</template>
