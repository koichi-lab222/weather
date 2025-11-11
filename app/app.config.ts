const prefs = [
  {q :'tokyo', name: '東京'},
  {q :'hyogo', name: '兵庫'},
  {q :'oita', name: '大分'},
  {q :'hokkaido', name: '北海道'}
]

const prefNameDict = Object.fromEntries(prefs.map(n=>[n.q, n.name]))

export default defineAppConfig({
  prefs: prefs,
  prefNameDict: prefNameDict,
})
