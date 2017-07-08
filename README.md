# static_pages_env
Static web page development environment


## Requirement

- Node.js `v8.1.3` ~
- npm `v4.4.4` ~
- yarn `v0.21.3` ~
- Gulp `v3.9.1` ~

※ Windows 環境の場合は `Git Bash` を使用する前提となります。


## Workflow of development

`yarn` の `start` コマンドを実行します。

```
$ yarn start
```

しばらくすると `http://localhost:3000` が立ち上がります。起動中は `watch` 状態となっており、`*.pug`, `*.scss`, `.js` ファイルを編集すると自動的にコンパイルが再実行されてブラウザがリロードします。


## Installation

以下のコマンド実行で Node パッケージをインストールします。

```
$ yarn install
```
