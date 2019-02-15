# electron-dolittle

electron-dolittle は
[プログラミング言語「ドリトル」](URL " https://dolittle.eplang.jp")
を Electron で動くようにしたものです。

[nodejs-dolittle](URL "http://github.com/kanemunelab/nodejs-dolittle")を基に開発しています。

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
electron-dolittle@0.0.4 ..\electron-dolittle
+-- bbc-microbit@0.2.0
+-- bootstrap-honoka@4.1.3
+-- brace@0.11.1
+-- electron@4.0.5
+-- electron-packager@13.0.1
+-- jquery@3.3.1
+-- noble-uwp@0.6.2
`-- serialport@7.1.4
```

> プログラミング言語「ドリトル」 :
> https://dolittle.eplang.jp<br>

> nodejs-dolittle :
> https://github.com/kanemunelab/nodejs-dolittle<br>
>
> > JQuery : https://jquery.com<br>
> > Bootstrap-honoka : http://honokak.osaka<br>
> > PolyK(polyk.js) : http://polyk.ivank.net<br>
> > Mersenne Twister(mt.js) :<br>
 > > http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/mt.html<br>
> > ace-editor(editor) : https://ace.c9.io<br>

> Electron : https://electronjs.org<br>
> Node.js : https://nodejs.org<br>
>
> > nvm-windows : https://github.com/coreybutler/nvm-windows<br>
> > windows-build-tools :
> > https://github.com/felixrieseberg/windows-build-tools<br>

> node-bbc-microbit :
> https://github.com/sandeepmistry/node-bbc-microbit<br>
> noble-uwp :
> https://github.com/jasongin/noble-uwp<br>
> node-serialport :
> https://github.com/node-serialport/node-serialport<br>

> micro:bit の firmware :
> https://github.com/ARMmbed/DAPLink/releases<br>

## OS

Windows10 のみ<br>
(それ以外ではテストを行っておりません。)<br>

## micro:bit との BLE 通信について

electron-dolittle により，micro:bit と BLE 通信することができる。<br>

### 条件

noble-uwp が使えること<br>
>
> > ・Windows10<br>
> > ・Bluetoth4.0<br>

> ・準備<br>
>
> > ・micro:bit には，micro:bit-setup フォルダ内にある HEX ファイル(microbit-bluetooth.hex)を書き込む。<br>
> > ・PC では，bluetoothの接続をONにする。<br>
> > ・ドリトルには，最初に「システム！"MBit"使う。」を書く。<br>

## 以前使用していたもの一覧

> NW.js :
> https://nwjs.io/<br>

## node_modules 一覧

```sh
npm install bootstrap-honoka brace jquery serialport
npm install noble-uwp
npm install bbc-microbit
npm install -D electron electron-packager electron-rebuild
```

## node_modules 書き換えメモ

bbc-microbit

bbc-microbit/lib/bbc-microbit.js:20

```js
var localName = peripheral.advertisement.localName || "";
```

> noble-device<br>
>
> > noble-device/lib/util.js:4<br>
> > var noble = require('noble-uwp');

> usb<br>
>
> > usb/libusb/libusb/strerror.c:108<br>
> > "Успех ",<br>
>
> > usb/libusb/libusb/strerror.c:114<br>
> > "Ресурс занят ",

> noble-uwp<br>
>
> > noble-uwp/lib/bindings.js:203<br>
> > try{this.emit('servicesDiscover', deviceUuid, ex);}catch(e){console.log(e);alert("micro:bitの接続をやり直して下さい。")}

> brace<br>
>
> > brace/mode/dolittle.js<br>
> > (backupからコピー＆ペースト)

## 参考文献

* [micro:bit を Scratch 2 + Bluetooth で使う](URL "https://qiita.com/memakura/items/11a0426f9060da1ded7e")
* [Ace エディタ で日本語入力時のちらつきを解消する](URL "https://qiita.com/RAWSEQ/items/7f9fc0fd4b3d572856ed")
* [最新版で学ぶ Electron 入門 – HTML5 で PC アプリを開発する利点と手順](URL "https://ics.media/entry/7298")
* [nvm 環境で npm のアップデートができない時の対処法](URL "https://qiita.com/jshindo/items/cdbb67208c364b33e287")

## 謝辞

本プロジェクトに関連する方々へ感謝します
