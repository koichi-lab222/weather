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
  <div>
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
