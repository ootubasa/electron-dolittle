(function() {
  this["システム"]["使う"]("MBit");
  this["ラベル"]["作る"]("通信状態");
  this["ステータスF"] = this["フィールド"]["作る"]();
  this["ラベル"]["作る"]("　　方位")["次の行"]();
  this["方位F"] = this["フィールド"]["作る"]("0");
  this["ラベル"]
    ["作る"]("かめた")
    ["文字色"](this["色"]["作る"](194, 194, 255))
    ["文字サイズ"](15)
    ["位置"](-40, 20);
  this["かめた"] = this["タートル"]["作る"]()["拡大する"](5);
  this["ラベル"]
    ["作る"]("0")
    ["文字サイズ"](15)
    ["位置"](-10, 130);
  this["ラベル"]
    ["作る"]("90")
    ["文字サイズ"](15)
    ["位置"](90, 20);
  this["ラベル"]
    ["作る"]("180")
    ["文字サイズ"](15)
    ["位置"](-25, -90);
  this["ラベル"]
    ["作る"]("270")
    ["文字サイズ"](15)
    ["位置"](-140, 20);
  this["お絵描きかめた"] = this["タートル"]["作る"]();
  this["お絵描きかめた"]
    ["線の太さ"](60)
    ["線の色"](this["色"]["作る"](255, 194, 194))
    ["ペンなし"]()
    ["位置"](-360, 150)
    ["ペンあり"]()
    ["位置"](360, 150)
    ["図形を作る"]();
  this["ラベル"]["作る"]("0")["位置"](-368, 145);
  this["ラベル"]["作る"]("90")["位置"](-195, 145);
  this["ラベル"]["作る"]("180")["位置"](-20, 145);
  this["ラベル"]["作る"]("270")["位置"](160, 145);
  this["ラベル"]["作る"]("359")["位置"](340, 145);
  this["線"] = this["お絵描きかめた"]
    ["線の太さ"](3)
    ["線の色"](this["黒"])
    ["移動する"](0, 60)
    ["図形を作る"]();
  this["お絵描きかめた"]["消える"]();
  this["線"]["位置"](-360, 120);
  this["ステータス"] = "";
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
        this["方位"] = this["MBit"]["方位"];
        this["線"]["位置"](this["方位"] * 2 - 360, 120);
        this["動いているとき"]["実行"]();
        this["ステータスF"]["書く"](this["ステータス"]);
        return this["方位F"]["書く"](this["方位"]);
      })
    );
  return this["ラベル"]
    ["作る"]("")
    ["位置"](
      this["画面"]["幅?"]() / -2 + 10,
      this["画面"]["高さ?"]() / 2 - 160
    );
}
  .checkerror()
  .apply(root, []));
