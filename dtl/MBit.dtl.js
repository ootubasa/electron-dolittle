(function() {
  root.MBit = root.create();
  root.MBit.ステータス = "検索中";
  root.MBit.加速度X = 0;
  root.MBit.加速度Y = 0;
  root.MBit.加速度Z = -1;
  root.MBit.振動計 = 1;
  root.MBit.Aボタン = 0;
  root.MBit.Bボタン = 0;
  root.MBit.温度 = 0;
  root.MBit.磁力X = 0;
  root.MBit.磁力Y = 0;
  root.MBit.磁力Z = 0;
  root.MBit.方位 = 0;
  root.MBit.ピン0 = 0;
  root.MBit.ピン1 = 0;
  root.MBit.ピン2 = 0;
  root.MBit.IO設定ピン0 = "入力";
  root.MBit.IO設定ピン1 = "入力";
  root.MBit.IO設定ピン2 = "入力";
  root.MBit.AD設定ピン0 = "アナログ";
  root.MBit.AD設定ピン1 = "アナログ";
  root.MBit.AD設定ピン2 = "アナログ";

  var BBCMicrobit = require("bbc-microbit");

  BBCMicrobit.discover(function(microbit) {
    root.MBit.ステータス = "準備中";
    microbit.on("disconnect", function() {
      root.MBit.ステータス = "切断";
      process.exit(0);
    });

    microbit.on("accelerometerChange", function(x, y, z) {
      root.MBit.加速度X = x;
      root.MBit.加速度Y = y;
      root.MBit.加速度Z = z;
      root.MBit.振動計 = x * x + y * y + z * z;
    });
    microbit.on("buttonAChange", function(val) {
      root.MBit.Aボタン = val;
    });
    microbit.on("buttonBChange", function(val) {
      root.MBit.Bボタン = val;
    });
    microbit.on("temperatureChange", function(tmp) {
      root.MBit.温度 = tmp;
    });
    microbit.on("magnetometerChange", function(x, y, z) {
      root.MBit.磁力X = x;
      root.MBit.磁力Y = y;
      root.MBit.磁力Z = z;
    });
    microbit.on("magnetometerBearingChange", function(val) {
      root.MBit.方位 = val;
    });
    microbit.on("pinDataChange", function(pin, val) {
      if (pin === 0) root.MBit.ピン0 = val;
      if (pin === 1) root.MBit.ピン1 = val;
      if (pin === 2) root.MBit.ピン2 = val;
    });

    microbit.connectAndSetUp(function() {
      root.MBit.ステータス = "接続中";
      microbit.writeAccelerometerPeriod(80, function() {
        microbit.subscribeAccelerometer();
      });
      microbit.subscribeButtons();
      microbit.writeTemperaturePeriod(80, function() {
        microbit.subscribeTemperature();
      });
      microbit.writeMagnetometerPeriod(80, function() {
        microbit.subscribeMagnetometer();
        microbit.subscribeMagnetometerBearing();
      });
      if (root.MBit.IO設定ピン0 === "入力") {
        microbit.pinInput(0, function() {
          if (root.MBit.AD設定ピン0 === "アナログ") {
            microbit.pinAnalog(0, function() {
              microbit.subscribePinData();
            });
          } else {
            microbit.pinDigital(0, function() {
              microbit.subscribePinData();
            });
          }
        });
      } else {
        microbit.pinOutput(0, function() {
          if (root.MBit.AD設定ピン0 === "アナログ") {
            microbit.pinDigital(0, function() {});
          } else {
            microbit.pinAnalog(0, function() {});
          }
        });
      }
      if (root.MBit.IO設定ピン1 === "入力") {
        microbit.pinInput(1, function() {
          if (root.MBit.AD設定ピン1 === "アナログ") {
            microbit.pinAnalog(1, function() {
              microbit.subscribePinData();
            });
          } else {
            microbit.pinDigital(1, function() {
              microbit.subscribePinData();
            });
          }
        });
      } else {
        microbit.pinOutput(1, function() {
          if (root.MBit.AD設定ピン1 === "アナログ") {
            microbit.pinDigital(1, function() {});
          } else {
            microbit.pinAnalog(1, function() {});
          }
        });
      }
      if (root.MBit.IO設定ピン2 === "入力") {
        microbit.pinInput(2, function() {
          if (root.MBit.AD設定ピン2 === "アナログ") {
            microbit.pinAnalog(2, function() {
              microbit.subscribePinData();
            });
          } else {
            microbit.pinDigital(2, function() {
              microbit.subscribePinData();
            });
          }
        });
      } else {
        microbit.pinOutput(2, function() {
          if (root.MBit.AD設定ピン2 === "アナログ") {
            microbit.pinDigital(2, function() {});
          } else {
            microbit.pinAnalog(2, function() {});
          }
        });
      }
      root.MBit.LED表示 = function(_t0, _t1, _t2, _t3, _t4) {
        var buffer = new Uint8Array(5);
        var text = _t0 + _t1 + _t2 + _t3 + _t4;
        for (var s = 0; s < 5; s++)
          for (var t = 0; t < 5; t++) {
            buffer[s] *= 2;
            if (text.substr(s * 5 + t + 1, 1) === "*") {
              buffer[s] += 1;
            }
          }
        microbit.writeLedMatrixState(new Buffer(buffer));
      };
      root.MBit.LED文字 = function(t) {
        microbit.writeLedText(t);
      };
      root.MBit.ピン出力 = function(pin, val) {
        microbit.writePin(pin, val);
      };
      root.MBit.送る = function(val) {
        microbit.writeUart(val);
      };
    });
  });
}
  .checkerror()
  .apply(root, []));
