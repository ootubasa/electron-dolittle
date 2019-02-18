(function() {
  this["システム"]["使う"]("MBit");
  this["ラベル"]["作る"]("通信状態");
  this["ステータスF"] = this["フィールド"]["作る"]();
  this["ラベル"]["作る"]("　振動計")["次の行"]();
  this["振動計F"] = this["フィールド"]["作る"]("0");
  this["ラベル"]["作る"]("　　方位")["次の行"]();
  this["方位F"] = this["フィールド"]["作る"]("0");
  this["ラベル"]["作る"]("Ａボタン")["次の行"]();
  this["AボタンF"] = this["フィールド"]["作る"]("0");
  this["ラベル"]["作る"]("Ｂボタン")["次の行"]();
  this["BボタンF"] = this["フィールド"]["作る"]("0");
  this["ラベル"]["作る"]("　　温度")["次の行"]();
  this["温度F"] = this["フィールド"]["作る"]("0");
  this["動いているとき"] = dtlbind(this, function() {
    var self = this;
    var 自分 = self;
    return;
  });
  this["タイマー"]
    ["作る"]()
    ["間隔"](0.08)
    ["回数"](60000)
    ["実行"](
      dtlbind(this, function() {
        var self = this;
        var 自分 = self;
        this["ステータス"] = this["MBit"]["ステータス"];
        this["振動計"] = this["MBit"]["振動計"];
        this["方位"] = this["MBit"]["方位"];
        this["Aボタン"] = this["MBit"]["Aボタン"];
        this["Bボタン"] = this["MBit"]["Bボタン"];
        this["温度"] = this["MBit"]["温度"];
        this["動いているとき"]["実行"]();
        this["ステータスF"]["書く"](this["ステータス"]);
        this["振動計F"]["書く"](this["振動計"]);
        this["方位F"]["書く"](this["方位"]);
        this["AボタンF"]["書く"](this["Aボタン"]);
        this["BボタンF"]["書く"](this["Bボタン"]);
        return this["温度F"]["書く"](this["温度"]);
      })
    );
  return this["ラベル"]
    ["作る"]("")
    ["位置"](
      this["画面"]["幅?"]() / -2 + 10,
      this["画面"]["高さ?"]() / 2 - 180
    );
}
  .checkerror()
  .apply(root, []));
