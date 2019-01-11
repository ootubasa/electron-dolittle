# electron-dolittle

electron-dolittle はプログラミング言語「ドリトル」を Electron で動くようにしたものです。<br>

<a href="http://github.com/kanemunelab/nodejs-dolittle">
nodejs-dolittle
</a>を基に開発しています。

・OS<br>
Windows10 のみ<br>
(それ以外ではテストを行っておりません。)<br>

・micro:bit との BLE 通信について<br>
electron-dolittle により，micro:bit と BLE 通信することができる。<br>

> ・条件<br>
> noble-uwp が使えること<br>
>
> > ・Windows10<br>
> > ・Bluetoth4.0<br>

> ・準備<br>
>
> > ・micro:bit には，micro:bit-setup フォルダ内にある HEX ファイル(microbit-bluetooth.hex)を書き込む。<br>
> > ・PC では，bluetoothの接続をONにする。<br>
> > ・ドリトルには，最初に「システム！"MBit"使う。」を書く。<br>

・利用しているもの一覧<br>

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

・以前使用していたもの一覧<br>

> NW.js :
> https://nwjs.io/<br>

・開発環境<br>

> \> ver<br>
> Microsoft Windows \[Version 10.0.17763.195\]<br>
> (Windows 10 October 2018 Update \[バージョン 1809\])<br>
 > \> node -v<br>
> v8.9.4 (noble-uwp のため version を下げている)<br>
 > \> npm -v<br>
> 5.10.0<br>
 > \> nvm version<br>
> 1.1.7<br>

・node_modules 一覧<br>

> \> npm install electron bootstrap-honoka brace jquery serialport<br>
 > \> npm install noble-uwp<br>
 > \> npm install bbc-microbit<br>
 > \> npm install -D electron-packager electron-rebuild<br>

・node_modules 書き換えメモ<br>

> bbc-microbit<br>
>
> > bbc-microbit/lib/bbc-microbit.js:20<br>
> > var localName = peripheral.advertisement.localName || "";<br>

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

・参考文献<br>

> micro:bit を Scratch 2 + Bluetooth で使う :<br>
 > https://qiita.com/memakura/items/11a0426f9060da1ded7e<br>
> Ace エディタ で日本語入力時のちらつきを解消する :<br>
 > https://qiita.com/RAWSEQ/items/7f9fc0fd4b3d572856ed<br>
> 最新版で学ぶ Electron 入門 – HTML5 で PC アプリを開発する利点と手順 :<br>
 > https://ics.media/entry/7298<br>
> nvm 環境で npm のアップデートができない時の対処法 :<br>
 > https://qiita.com/jshindo/items/cdbb67208c364b33e287<br>

・謝辞<br>
本プロジェクトに関連する方々へ感謝します
