<script setup>
const config = useRuntimeConfig()
const endpoint = config.public.weatherEndpoint
const route = useRoute()
const appConfig = useAppConfig()

if(!(route.params.prefname in appConfig.prefNameDict)) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

useHead({
  title: `天気予報[ ${appConfig.prefNameDict[route.params.prefname]} ]`
})

const { data } = await useFetch(endpoint+`&q=${route.params.prefname}`)
</script>

<template>
  <h1>{{ data.city.name }}の天気</h1>
  <SpanWeatherBox v-for="item in data.list" :item="item" />
</template>
