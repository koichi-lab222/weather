<script setup>
const config = useRuntimeConfig()
const endpoint = config.public.weatherEndpoint
const prefs = config.public.prefs

useHead({
  title: "各地の天気"
})
</script>

<template>
  <h1 class="top-title">各地の天気</h1>
  <div>
    <div class="pref-link" v-for="pref in prefs"><a v-bind:href="'/pref/'+pref.q">{{ pref.name }}の天気</a></div>
  </div>
</template>

<style scoped>
.top-title {
  text-align: center;
}
.pref-link {
  font-size: 24px;
  text-align: center;
  background: linear-gradient(to right, #00c, #08f);
  margin: 5px;
}
.pref-link:hover {
  opacity: 0.8;
}
.pref-link a {
  display: block;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
}
</style>