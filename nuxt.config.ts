const prefs = [
  {q :'tokyo', name: '東京'},
  {q :'hyogo', name: '兵庫'},
  {q :'oita', name: '大分'},
  {q :'hokkaido', name: '北海道'}
]

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      weatherEndpoint: '/dummy.json?dummy=dummy',
      prefs: prefs,
      prefNameDict: Object.fromEntries(prefs.map(n=>[n.q, n.name])),
      cacheExpire: 1*60*1000,
    }
  },
})
