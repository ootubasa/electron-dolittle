# electron-dolittle

electron-dolittle は
[プログラミング言語「ドリトル」](URL " https://dolittle.eplang.jp")
を Electron で動くようにしたものです。

[nodejs-dolittle](URL "http://github.com/kanemunelab/nodejs-dolittle")を基に開発しています。

## インストール

[ここ]("https://github.com/ootubasa/electron-dolittle/releases")にある最新版のzipファイルをダウンロードし，展開してください。

その後，ファイルの中にあるdolittle.exeを起動するとドリトルを動かすことができます。

## 開発環境

```sh
>ver

Microsoft Windows [Version 10.0.17763.316]

>node -v
v8.9.4

>npm -v
6.8.0

>nvm version
1.1.7

>git --version
git version 2.20.1.windows.1

>npm -g ls -depth=0
C:\Program Files\nodejs
+-- npm@6.8.0
+-- npm-check-updates@2.15.0
`-- windows-build-tools@5.1.0

```

## 利用しているもの一覧

```sh
> npm ls -depth=0
electron-dolittle@0.0.4 C\electron-dolittle
+-- bbc-microbit@0.2.0
+-- bootstrap-honoka@4.1.3
+-- brace@0.11.1
+-- electron@4.0.5
+-- electron-packager@13.0.1
+-- jquery@3.3.1
+-- noble-uwp@0.6.2
`-- serialport@7.1.4
```

- [PolyK(polyk.js)](URL "http://polyk.ivank.net")
- [Mersenne Twister(mt.js)](URL "http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/mt.html")

- [micro:bit の firmware](URL "https://github.com/ARMmbed/DAPLink/releases")

## 以前使用していたもの一覧

- [NW.js](URL "https://nwjs.io")

## node_modules 一覧

```sh
npm install bootstrap-honoka brace jquery serialport
npm install noble-uwp
npm install bbc-microbit
npm install -D electron electron-packager electron-rebuild
```

## VSCode拡張機能一覧

```sh
> code --list-extensions
christian-kohler.npm-intellisense
christian-kohler.path-intellisense
chrmarti.regex
CoenraadS.bracket-pair-colorizer
DavidAnson.vscode-markdownlint
donjayamanne.githistory
eamodio.gitlens
eg2.vscode-npm-script
esbenp.prettier-vscode
GitHub.vscode-pull-request-github
keroc.hex-fmt
mechatroner.rainbow-csv
MS-CEINTL.vscode-language-pack-ja
ms-vscode.cpptools
naumovs.color-highlight
PKief.material-icon-theme
ritwickdey.LiveServer
Shan.code-settings-sync
```

## node_modules 書き換えメモ

- bbc-microbit

  - bbc-microbit/lib/bbc-microbit.js:20

    ```js
    var localName = peripheral.advertisement.localName || "";
    ```

- noble-device

  - noble-device/lib/util.js:4

    ```js
    var noble = require("noble-uwp");
    ```

- usb

  - usb/libusb/libusb/strerror.c:108<

    ```js
    "Успех ",
    ```

  - usb/libusb/libusb/strerror.c:114

    ```js
    "Ресурс занят ",
    ```

- noble-uwp

  - noble-uwp/lib/bindings.js:203

    ```js
    try {
      this.emit("servicesDiscover", deviceUuid, ex);
    } catch (e) {
      console.log(e);
      alert("micro:bitの接続をやり直して下さい。");
    }
    ```

- brace
  - brace/mode/dolittle.js
    `(backupからコピー＆ペースト)`

## 参考文献

- [micro:bit を Scratch 2 + Bluetooth で使う](URL "https://qiita.com/memakura/items/11a0426f9060da1ded7e")
- [Ace エディタ で日本語入力時のちらつきを解消する](URL "https://qiita.com/RAWSEQ/items/7f9fc0fd4b3d572856ed")
- [最新版で学ぶ Electron 入門 – HTML5 で PC アプリを開発する利点と手順](URL "https://ics.media/entry/7298")
- [nvm 環境で npm のアップデートができない時の対処法](URL "https://qiita.com/jshindo/items/cdbb67208c364b33e287")

## 謝辞

本プロジェクトに関連する方々へ感謝します
