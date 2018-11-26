(function() {
  root.Bluetooth = root.create();

  const LED_SERVICE_UUID = "e95dd91d-251d-470a-a062-fa1922dfa9a8";
  const LED_TEXT_CHARACTERISTIC_UUID = "e95d93ee-251d-470a-a062-fa1922dfa9a8";
  const LED_MATRIX_CHARACTERISTIC_UUID = "e95d7b77-251d-470a-a062-fa1922dfa9a8";

  const BUTTON_SERVICE_UUID = "e95d9882-251d-470a-a062-fa1922dfa9a8";
  const BUTTON_A_CHARACTERISTIC_UUID = "e95dda90-251d-470a-a062-fa1922dfa9a8";
  const BUTTON_B_CHARACTERISTIC_UUID = "e95dda91-251d-470a-a062-fa1922dfa9a8";

  const ACCELEROMETERSERVICE_SERVICE_UUID =
    "e95d0753-251d-470a-a062-fa1922dfa9a8";
  const ACCELEROMETERDATA_CHARACTERISTIC_UUID =
    "e95dca4b-251d-470a-a062-fa1922dfa9a8";

  const TEMPERATURE_SERVICE_UUID = "e95d6100-251d-470a-a062-fa1922dfa9a8";
  const TEMPERATURE_PERIOD_UUID = "e95d1b25-251d-470a-a062-fa1922dfa9a8";
  const TEMPERATURE_DATA_UUID = "e95d9250-251d-470a-a062-fa1922dfa9a8";

  root.ButtonBlue = root.Button.create("デバイスに接続");
  root.ButtonBlue.action = dtlbind(this, function() {
    navigator.bluetooth
      .requestDevice({
        acceptAllDevices: true,
        optionalServices: [
          LED_SERVICE_UUID,
          BUTTON_SERVICE_UUID,
          ACCELEROMETERSERVICE_SERVICE_UUID,
          TEMPERATURE_SERVICE_UUID
        ]
      })
      .then(device => {
        root.ButtonBlue.write("しばらくお待ちください");
        bluetoothDevice = device;
        return device.gatt.connect();
      })
      .then(server => {
        return Promise.all([
          server.getPrimaryService(LED_SERVICE_UUID),
          server.getPrimaryService(BUTTON_SERVICE_UUID),
          server.getPrimaryService(ACCELEROMETERSERVICE_SERVICE_UUID),
          server.getPrimaryService(TEMPERATURE_SERVICE_UUID)
        ]);
      })
      .then(service => {
        return Promise.all([
          service[0].getCharacteristic(LED_TEXT_CHARACTERISTIC_UUID),
          service[0].getCharacteristic(LED_MATRIX_CHARACTERISTIC_UUID),
          service[1].getCharacteristic(BUTTON_A_CHARACTERISTIC_UUID),
          service[1].getCharacteristic(BUTTON_B_CHARACTERISTIC_UUID),
          service[2].getCharacteristic(ACCELEROMETERDATA_CHARACTERISTIC_UUID),
          service[3].getCharacteristic(TEMPERATURE_PERIOD_UUID),
          service[3].getCharacteristic(TEMPERATURE_DATA_UUID)
        ]);
      })
      .then(chara => {
        characteristic = chara;
        return chara;
      })
      .then(() => root.ButtonBlue.write("接続に成功しました"))
      .catch(error => {
        console.log(error);
        root.ButtonBlue.write("接続に失敗しました");
      });
  });

  root.Bluetooth.write = _t => {
    var arrayBuffe = new TextEncoder().encode(_t);
    characteristic[0].writeValue(arrayBuffe);
  };
  root.Bluetooth.draw = (_t0, _t1, _t2, _t3, _t4) => {
    var buffer = new Uint8Array(5);
    var text = _t0 + _t1 + _t2 + _t3 + _t4;
    for (var s = 0; s < 5; s++)
      for (var t = 0; t < 5; t++) {
        buffer[s] *= 2;
        if (text.substr(s * 5 + t + 1, 1) === "*") {
          buffer[s] += 1;
        }
      }
    characteristic[1].writeValue(buffer);
  };
}
  .checkerror()
  .apply(root, []));
