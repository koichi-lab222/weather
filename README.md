# 天気のアプリ

## Setup

手元にクローンしてきた後、npm installで依存関係をインストールしてください。

```bash
# npm
npm install
```

.envで、天気を取得するAPIのURLを指定するようになっています。
package.jsonと同じ階層に、下記のような内容の.envファイルを配置してください。
`？？？？？` となっている部分には、APIキーが入ります。
（配置しないで実行した場合には、サーバ内のpublic/dummy.jsonを代わりに取得して表示します）

```
NUXT_PUBLIC_WEATHER_ENDPOINT=https://api.openweathermap.org/data/2.5/forecast?APPID=？？？？？&units=metric&lang=ja
```

## 開発サーバ

下記コマンドでサーバを起動する。デフォルトのアドレスは、 `http://localhost:3000`:

```bash
# npm
npm run dev
```

## 本番ビルド

本番環境としてアプリケーションをビルドし、起動するには下記の通り。(.envは以下の方法では取り込まれないので、別に環境変数をセットすること)

```bash
# npm
npm run build
node .output/server/index.mjs
```

本番環境サーバをプレビューするコマンドは下記の通り。

```bash
# npm
npm run preview
```
