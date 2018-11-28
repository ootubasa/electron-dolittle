(function() {
  root.Serialport = root.create();

  root.Serialport.Port = "";
  root.Serialport.PortName = "COM1";
  root.Serialport.BaudRate = 115200;
  root.Serialport.Parity = "none";
  root.Serialport.DataBits = 8;
  root.Serialport.StopBits = 1;
  root.Serialport.flowControl = false;

  root.Serialport.spVendorId = "";
  root.Serialport.spProductId = "";

  root.Serialport.readText = "";

  sp = require("serialport");
  spButton = [];
  spPortName = [];

  spOpen = (self, portName) => {
    if (!portName) alert("シリアルポートを選択されませんでした");
    self.Port = new sp(
      portName,
      {
        baudRate: self.BaudRate,
        parity: self.Parity,
        dataBits: self.DataBits,
        stopBits: self.StopBits,
        flowControl: self.flowControl
      },
      err => {
        if (err) alert("シリアルポートを開けませんでした");
      }
    );

    self.Port.on("readable", () => {
      self.readText = self.Port.read();
      self.action(self.readText);
      // console.log(self.readText);
    });
    self.read = () => {
      return self.readText;
    };
    self.close = () => {
      self.Port.close();
    };

    root.Serialport.write = _Text => {
      self.Port.write(_Text);
    };

    root.Serialport.send = _num => {
      self.Port.write(String.fromCharCode(_num));
    };
  };

  root.system.SerialportSelect = () => {
    return "spSelect";
  };

  root.Serialport.create = function(_B, _P, _D, _S, _f) {
    let r = Object.create(this);
    let init = r.initialize || r["初期化"] || {};
    init.apply(r, arguments);

    this.BaudRate = _B || this.BaudRate || 115200;
    this.Parity = _P || this.Parity || "none";
    this.DataBits = _D || this.DataBits || 8;
    this.StopBits = _S || this.StopBits || 1;
    this.flowControl = _f || this.flowControl || false;

    return r;
  };

  root.Serialport.open = function(port) {
    self = this;
    if (port === "spSelect") {
      sp.list((err, ports) => {
        ports.forEach(port => {
          // console.log(JSON.stringify(port));
          if (
            (!self.spVendorId || self.spVendorId === port.vendorId) &&
            (!self.spProductId || self.spProductId === port.productId)
          ) {
            spButton.push(port.comName + " (" + port.locationId + ")");
            spPortName.push(port.comName);
          }
        });
        dialog.showMessageBox(
          null,
          {
            type: "info",
            buttons: spButton,
            title: "Serialport",
            message: "シリアルポート選択",
            detail: "使用するデバイスを選択してください"
          },
          portNum => spOpen(self, spPortName[portNum])
        );
      });
    } else {
      spOpen(this, port);
    }
  };

  this["addAliasFromTable"]("root", "シリアルポート", "Serialport");
  this["system"]["addAlias"](
    "SerialportSelect",
    "シリアルポート選択",
    "ポート選択"
  );
  this["addAliasFromTable"]("root", "シリアルポート", "Serialport");
  this["Serialport"]["addAlias"]("open", "開く", "ひらけごま");
  this["Serialport"]["addAlias"]("close", "閉じる", "とじろごま");
  this["Serialport"]["addAlias"]("read", "読む");
  this["Serialport"]["addAlias"]("write", "書く");
  this["Serialport"]["addAlias"]("send", "送信");
}
  .checkerror()
  .apply(root, []));
