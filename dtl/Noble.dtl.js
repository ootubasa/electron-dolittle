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
      // microbit.writeLedMatrixState(new Buffer('000000000F','hex'));
      microbit.writeLedMatrixState(new Buffer([2,1,1,1,1]));

    });
  });
}
  .checkerror()
  .apply(root, []));
