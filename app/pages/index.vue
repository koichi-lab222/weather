<script setup>
const config = useRuntimeConfig()
const endpoint = config.public.weatherEndpoint
const appConfig = useAppConfig()

</script>

<template>
  <div>
    <div v-for="pref in appConfig.prefs"><a v-bind:href="'/pref/'+pref.q">{{ pref.name }}</a></div>
  </div>
</template>
