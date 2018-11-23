(function() {
  let BBCMicrobit = require("bbc-microbit");

  let period = 160;

  BBCMicrobit.discover(function(microbit) {
    console.log(microbit);

    microbit.on("disconnect", function() {
      process.exit(0);
    });

    microbit.on("accelerometerChange", function(x, y, z) {
      console.log("accel = %f %f %f G", x, y, z);
    });
    microbit.on("buttonAChange", function(val) {
      console.log("Abtn = " + val);
    });
    microbit.on("buttonBChange", function(val) {
      console.log("Bbtn = " + val);
    });
    microbit.on("temperatureChange", function(tmp) {
      console.log("tmp = " + tmp);
    });
    microbit.on("magnetometerChange", function(x, y, z) {
      console.log("mag = %d %d %d", x, y, z);
    });
    microbit.on("pinDataChange", function(pin, value) {
      console.log("pin = %d, value = %d", pin, value);
    });

    microbit.connectAndSetUp(function() {
      microbit.writeAccelerometerPeriod(period, function() {
        microbit.subscribeAccelerometer();
      });
      microbit.subscribeButtons();
      microbit.writeTemperaturePeriod(period, function() {
        microbit.subscribeTemperature();
      });
      microbit.writeMagnetometerPeriod(period, function() {
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
      microbit.writeLedMatrixState(new Buffer([0, 0, 0, 0, 0]));
      // microbit.writeLedText("Dolittle");
    });
  });
}
  .checkerror()
  .apply(root, []));
