<script setup>
const config = useRuntimeConfig()
const endpoint = config.public.weatherEndpoint
const route = useRoute()

const { data } = await useFetch(endpoint+`&q=${route.params.prefname}`)
</script>

<template>
  <h1>{{ data.city.name }}の天気</h1>
  <SpanWeatherBox v-for="item in data.list" :item="item" />
</template>
