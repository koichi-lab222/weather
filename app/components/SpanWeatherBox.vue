<script setup>
const props = defineProps(['item'])

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc);
dayjs.extend(timezone);

function unixTime2DateHourDict(dt) {
  const t = dayjs(dt*1000)
  const tjtc = t.tz('Asia/Tokyo')
  return {
    month: tjtc.month()+1,
    day: tjtc.date(),
    hour: tjtc.hour(),
  }
}
</script>

<template>
  <div class="weather-wrapper">
    <div v-for="t in [unixTime2DateHourDict(item.dt)]">{{t.month}}月{{t.day}}日{{t.hour}}時</div>
    <div><img :src="'https://openweathermap.org/img/wn/'+item.weather[0].icon+'@2x.png'" /></div>
    <div>{{item.weather[0].description}}</div>
    <div>気温{{item.main.temp}}度</div>
  </div>
</template>

<style scoped>
.weather-wrapper {
  text-align: center;
  background: #efe;
  margin: 4px;
  box-shadow: 1px 1px 4px #000;
}
.weather-wrapper img{
  filter: drop-shadow(1px 1px 2px #080);
}
</style>