# electron-dolittle API

## ドリトルの基本

[ここ（オンライン版ドリトル）](https://dolittle.eplang.jp/manualjs)をご覧ください。

## micro:bit と通信しよう

### dolittle micro:bit HEX をインストールする

1. micro:bit をコンピュータと USB ケーブルで保存します。
2. [doittle micro:bit HEX ファイルをダウンロードします。](https://github.com/ootubasa/electron-dolittle/blob/master/microbit-setup/microbit-bluetooth-full.hex)
このリンクの上で右クリック →「名前を付けてリンク先を保存」をするとダウンロードできます。
3. HEX ファイルを micro:bit へドラッグします。

### プログラムの入力から実行までの手順

1. 「dolittle micro:bit HEX をインストールする」を行う。
2. プログラムを編集画面に記述する。

    ```sh
    システム！"MBitBLE"使う。
    基板名＝""。

    かめた＝タートル！作る　5　拡大する。
    振動計前＝1.

    動いているとき＝「
    　　かめた！（Aボタン＊100）歩く。
    　　かめた！（Bボタン＊-100）歩く。
    　　かめた！（振動計/振動計前）拡大する。
    　　かめた！（方位）向き。
    　　振動計前＝振動計。
    」。
    ```

3. プログラムを実行する。(実行ボタンを押す)

## micro:bitのプログラムの基本

ドリトルからmicro:bitを制御するプログラムは次の形で記述する。

```sh
システム！"MBitBLE"使う。
基板名＝""。
・・・

動いているとき＝「
　　・・・
」。
```