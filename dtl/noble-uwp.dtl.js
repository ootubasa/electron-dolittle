var noble = require("noble-uwp");

var LED_SERVICE_UUID = "e95dd91d251d470aa062fa1922dfa9a8";
var LED_MATRIX_STATE_CHARACTERISTIC_UUID = "e95d7b77251d470aa062fa1922dfa9a8";
var LED_TEXT_CHARACTERISTIC_UUID = "e95d93ee251d470aa062fa1922dfa9a8";
var LED_SCROLLING_DELAY_CHARACTERISTIC_UUID =
  "e95d0d2d251d470aa062fa1922dfa9a8";

var LED_TEXT_CHARACTERISTIC;

// 状態がパワーONだったらスキャンに移行
noble.on("stateChange", function(state) {
  console.log("on -> stateChange: " + state);

  if (state === "poweredOn") {
    noble.startScanning();
  } else {
    noble.stopScanning();
  }
});

noble.on("scanStart", function() {
  console.log("on -> scanStart");
});

noble.on("scanStop", function() {
  console.log("on -> scanStop");
});

// discover 機器が発見されたら
noble.on("discover", function(peripheral) {
  console.log("on -> discover: " + peripheral);
  // まずスキャンをとめる
  noble.stopScanning();

  // KONASHI接続時のイベント
  peripheral.on("connect", function() {
    console.log("on -> connect");
    this.discoverServices();
  });
  // KONASHI切断時のイベント
  peripheral.on("disconnect", function() {
    console.log("on -> disconnect");
  });

  // 見つけたサービス（機器）へのアクセス
  peripheral.on("servicesDiscover", function(services) {
    for (i = 0; i < services.length; i++) {
      // サービスがUUIDと一致した時だけ処理
      if (services[i]["uuid"] == LED_SERVICE_UUID) {
        // サービスのcharacteristic捜索
        services[i].on("includedServicesDiscover", function(
          includedServiceUuids
        ) {
          console.log(
            "on -> service included services discovered [" +
              includedServiceUuids +
              "]"
          );
          this.discoverCharacteristics();
        });

        // characteristic取得イベント
        services[i].on("characteristicsDiscover", function(characteristics) {
          // characteristics配列から必要なCHARACTERISTICSをUUIDから判断してcharacteristic格納
          for (j = 0; j < characteristics.length; j++) {
            if (LED_TEXT_CHARACTERISTIC_UUID == characteristics[j].uuid) {
              console.log("LED_TEXT_CHARACTERISTIC exist!!");

              LED_TEXT_CHARACTERISTIC = characteristics[j];

              console.log("LED_TEXT_CHARACTERISTIC write WOMBAT! buffer");
              var buf = new Buffer("WOMBAT!");
              LED_TEXT_CHARACTERISTIC.write(buf, false, function(error) {
                console.log(error);
              });
            }
          }
        });

        services[i].discoverIncludedServices();
      }
    }
  });

  // 機器との接続開始
  peripheral.connect();
});
