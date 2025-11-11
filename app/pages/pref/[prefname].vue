<script setup>
const config = useRuntimeConfig()
const endpoint = config.public.weatherEndpoint
const route = useRoute()

const { data } = await useFetch(endpoint+`&q=${route.params.prefname}`)

function unixTime2DateHourDict(dt) {
  const t = new Date(dt*1000)
  return {
    month: t.getMonth()+1,
    day: t.getDate(),
    hour: t.getHours(),
  }
}
</script>

<template>
  <h1>{{ data.city.name }}の天気</h1>
  <div v-for="item in data.list">
    <ul>
      <li v-for="t in [unixTime2DateHourDict(item.dt)]">{{t.month}}月{{t.day}}日{{t.hour}}時</li>
      <li>気温：{{ item.main.temp }}度 体感気温：{{ item.main.feels_like }} 最高気温：{{ item.main.temp_max }}度 最低気温: {{ item.main.temp_min }}度</li>
      <li>気圧：{{ item.main.pressure }} 気圧(海面)：{{ item.main.sea_level }}</li>
      <li>湿度：{{ item.main.humidity }}</li>
      <li>空模様：{{ item.weather.length }} 曇り具合: {{ item.clouds.all }}</li>
      <li>風速：{{ item.wind.speed }} 風向き: {{ item.wind.deg }}</li>
    </ul>
  </div>
</template>
