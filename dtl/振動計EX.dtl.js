(function() {
  this["システム"]["使う"]("MBit");
  this["ラベル"]["作る"]("通信状態");
  this["ステータスF"] = this["フィールド"]["作る"]();
  this["ラベル"]["作る"]("　振動計")["次の行"]();
  this["振動計F"] = this["フィールド"]["作る"]("0");
  this["ラベル"]["作る"]("　最大値")["次の行"]();
  this["最大値F"] = this["フィールド"]["作る"]("0");
  this["かめた"] = this["タートル"]["作る"]();
  this["メモリ"] = this["かめた"]
    ["ペンなし"]()
    ["位置"](250, -250)
    ["ペンあり"]()
    ["位置"](350, -250)
    ["位置"](350, -125)
    ["位置"](250, -125)
    ["図形を作る"]()
    ["消える"]();
  this["メモリ"]["作る"]()["塗る"](this["色"]["作る"](255, 255, 255));
  this["メモリ"]
    ["作る"]()
    ["塗る"](this["色"]["作る"](255, 223, 223))
    ["位置"](250, -125);
  this["メモリ"]
    ["作る"]()
    ["塗る"](this["色"]["作る"](255, 192, 192))
    ["位置"](250, 0);
  this["メモリ"]
    ["作る"]()
    ["塗る"](this["色"]["作る"](255, 128, 128))
    ["位置"](250, 125);
  this["かめた"]
    ["ペンなし"]()
    ["位置"](250, -250)
    ["ペンあり"]()
    ["位置"](350, -250)
    ["位置"](350, 250)
    ["位置"](250, 250)
    ["位置"](250, -250)
    ["図形を作る"]();
  this["ラベル"]
    ["作る"]("0.0")
    ["文字サイズ"](16)
    ["位置"](200, -220);
  this["ラベル"]
    ["作る"]("0.5")
    ["文字サイズ"](16)
    ["位置"](200, -100);
  this["ラベル"]
    ["作る"]("1.0")
    ["文字サイズ"](16)
    ["位置"](200, 20);
  this["ラベル"]
    ["作る"]("1.5")
    ["文字サイズ"](16)
    ["位置"](200, 150);
  this["ラベル"]
    ["作る"]("2.0")
    ["文字サイズ"](16)
    ["位置"](200, 260);
  this["線"] = this["かめた"]
    ["歩く"](100)
    ["図形を作る"]()
    ["位置"](250, -250);
  this["線max"] = this["線"]
    ["作る"]()
    ["塗る"](this["赤"])
    ["位置"](250, -250);
  this["かめた"]
    ["ペンなし"]()
    ["位置"](-100, -50)
    ["拡大する"](5);
  this["ステータス"] = "";
  this["振動0"] = 1;
  this["振動1"] = 1;
  this["振動2"] = 1;
  this["振動3"] = 1;
  this["振動4"] = 1;
  this["振動Max"] = 1;
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
        this["振動4"] = this["振動3"];
        this["振動3"] = this["振動2"];
        this["振動2"] = this["振動1"];
        this["振動1"] = this["振動0"];
        this["振動0"] = this["MBit"]["振動計"];
        this["振動計"] = this["振動0"];
        this["振動Max"] = this["振動0"];
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return this["振動Max"] < this["振動1"];
        })
          ["なら"]()
          ["実行"](
            dtlbind(this, function() {
              var self = this;
              var 自分 = self;
              return (this["振動Max"] = this["振動1"]);
            })
          );
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return this["振動Max"] < this["振動2"];
        })
          ["なら"]()
          ["実行"](
            dtlbind(this, function() {
              var self = this;
              var 自分 = self;
              return (this["振動Max"] = this["振動2"]);
            })
          );
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return this["振動Max"] < this["振動3"];
        })
          ["なら"]()
          ["実行"](
            dtlbind(this, function() {
              var self = this;
              var 自分 = self;
              return (this["振動Max"] = this["振動3"]);
            })
          );
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return this["振動Max"] < this["振動4"];
        })
          ["なら"]()
          ["実行"](
            dtlbind(this, function() {
              var self = this;
              var 自分 = self;
              return (this["振動Max"] = this["振動4"]);
            })
          );
        this["かめた"]["拡大する"](this["振動0"] / this["振動1"]);
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return this["振動0"] < 2;
        })
          ["なら"]()
          ["そうでなければ"](
            dtlbind(this, function() {
              var self = this;
              var 自分 = self;
              return this["線"]["位置"](250, (this["振動0"] * 500) / 2 - 250);
            })
          )
          ["実行"](
            dtlbind(this, function() {
              var self = this;
              var 自分 = self;
              return this["線"]["位置"](250, 250);
            })
          );
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return this["振動Max"] < 2;
        })
          ["なら"]()
          ["そうでなければ"](
            dtlbind(this, function() {
              var self = this;
              var 自分 = self;
              return this["線max"]["位置"](
                250,
                (this["振動Max"] * 500) / 2 - 250
              );
            })
          )
          ["実行"](
            dtlbind(this, function() {
              var self = this;
              var 自分 = self;
              return this["線max"]["位置"](250, 250);
            })
          );
        this["動いているとき"]["実行"]();
        this["ステータスF"]["書く"](this["ステータス"]);
        this["振動計F"]["書く"](this["振動0"]);
        return this["最大値F"]["書く"](this["振動Max"]);
      })
    );
  return this["ラベル"]
    ["作る"]("")
    ["位置"](
      this["画面"]["幅?"]() / -2 + 10,
      this["画面"]["高さ?"]() / 2 - 100
    );
}
  .checkerror()
  .apply(root, []));
