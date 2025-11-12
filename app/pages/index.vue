<script setup>
const config = useRuntimeConfig()
const endpoint = config.public.weatherEndpoint
const prefs = config.public.prefs

</script>

<template>
  <div>
    <div v-for="pref in prefs"><a v-bind:href="'/pref/'+pref.q">{{ pref.name }}</a></div>
  </div>
</template>
