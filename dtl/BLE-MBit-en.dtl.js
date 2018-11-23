(function() {
  root.MBit = root.create();
  root.MBit.status = "search";
  root.MBit.accelX = 0;
  root.MBit.accelY = 0;
  root.MBit.accelZ = 0;
  root.MBit.Abtn = 0;
  root.MBit.Bbtn = 0;
  root.MBit.tmp = 0;
  root.MBit.magX = 0;
  root.MBit.magY = 0;
  root.MBit.magZ = 0;
  root.MBit.P0 = 0;
  root.MBit.P1 = 0;
  root.MBit.P2 = 0;

  let BBCMicrobit = require("bbc-microbit");

  BBCMicrobit.discover(function(microbit) {
    root.MBit.status = "setup";
    microbit.on("disconnect", function() {
      root.MBit.status = "disconnect";
      process.exit(0);
    });

    microbit.on("accelerometerChange", function(x, y, z) {
      root.MBit.accelX = x;
      root.MBit.accelY = y;
      root.MBit.accelZ = z;
    });
    microbit.on("buttonAChange", function(val) {
      root.MBit.Abtn = val;
    });
    microbit.on("buttonBChange", function(val) {
      root.MBit.Bbtn = val;
    });
    microbit.on("temperatureChange", function(tmp) {
      root.MBit.tmp = tmp;
    });
    microbit.on("magnetometerChange", function(x, y, z) {
      root.MBit.magX = x;
      root.MBit.magY = y;
      root.MBit.magZ = z;
    });
    microbit.on("pinDataChange", function(pin, val) {
      if (pin === 0) root.MBit.P0 = val;
      if (pin === 1) root.MBit.P1 = val;
      if (pin === 2) root.MBit.P2 = val;
    });

    microbit.connectAndSetUp(function() {
      root.MBit.status = "connect";
      microbit.writeAccelerometerPeriod(160, function() {
        microbit.subscribeAccelerometer();
      });
      microbit.subscribeButtons();
      microbit.writeTemperaturePeriod(160, function() {
        microbit.subscribeTemperature();
      });
      microbit.writeMagnetometerPeriod(160, function() {
        microbit.subscribeMagnetometer();
      });
      microbit.pinInput(0, function() {
        microbit.pinAnalog(0, function() {
          microbit.subscribePinData();
        });
      });
      microbit.pinInput(1, function() {
        microbit.pinAnalog(1, function() {
          microbit.subscribePinData();
        });
      });
      microbit.pinInput(2, function() {
        microbit.pinAnalog(2, function() {
          microbit.subscribePinData();
        });
      });
      root.MBit.write = function(_t0, _t1, _t2, _t3, _t4) {
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
      root.MBit.draw = function(t) {
        microbit.writeLedText(t);
      };
    });
  });
}
  .checkerror()
  .apply(root, []));
