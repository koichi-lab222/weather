<script setup>
const config = useRuntimeConfig()
const endpoint = config.public.weatherEndpoint
const route = useRoute()
const appConfig = useAppConfig()
const prefname = route.params.prefname

if(!(prefname in appConfig.prefNameDict)) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

useHead({
  title: `天気予報[ ${appConfig.prefNameDict[route.params.prefname]} ]`
})

const data = ref(null)

function getCache(key) {
  const cacheJson = sessionStorage.getItem(key)
  if(!cacheJson) {
    return null
  }else{
    const cache = JSON.parse(cacheJson)
    if(cache.expire < Date.now()) {
      return null
    }else{
      return cache.data
    }
  }
}

function setCache(key, data) {
  const cache = {
    data: data,
    expire: Date.now() + appConfig.cacheExpire,
  }
  sessionStorage.setItem(key, JSON.stringify(cache))
}

onMounted(async ()=>{
  const cacheData = getCache('weathercache-'+prefname)
  if(cacheData) {
    data.value = cacheData
  }else{
    const fetched = await $fetch(endpoint+`&q=${route.params.prefname}`)
    data.value = fetched
    setCache('weathercache-'+prefname, fetched)
  }
})
</script>

<template>
  <h1 v-if="data">{{ data.city.name }}の天気</h1>
  <div v-if="data">
    <SpanWeatherBox v-for="item in data.list" :item="item" />
  </div>
</template>
