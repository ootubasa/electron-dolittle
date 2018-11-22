(function() {
  this["system"]["use"]("Serialport");
  this["MBit"] = this["Serialport"]["create"]();
  this["MBit"]["VendorId"] = "0D28";
  this["MBit"]["ProductId"] = "0204";
  this["MBit"]["pushA"] = "";
  this["MBit"]["pushB"] = "";
  this["MBit"]["pushAB"] = "";
  this["MBit"]["touchP0"] = "";
  this["MBit"]["touchP1"] = "";
  this["MBit"]["touchP2"] = "";
  this["MBit"]["screenUp"] = "";
  this["MBit"]["screenDown"] = "";
  this["MBit"]["logoUp"] = "";
  this["MBit"]["logoDown"] = "";
  this["MBit"]["tiltL"] = "";
  this["MBit"]["tiltR"] = "";
  this["MBit"]["freeFall"] = "";
  this["MBit"]["shake"] = "";
  this["MBit"]["RMsg"] = "";
  this["MBit"]["Store"] = this["Array"]["create"](0, 0, 0, 0, 0);
  this["MBit"]["action"] = dtlbind(this, function(_Msg) {
    var self = this;
    var 自分 = self;
    _Msg = "" + _Msg;
    this["_self"] = this;
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "A";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          try {
            this["_self"]["pushA"]();
          } catch {}
          return (_Msg = "");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "B";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          try {
            this["_self"]["pushB"]();
          } catch {}
          return (_Msg = "");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "C";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          try {
            this["_self"]["pushAB"]();
          } catch {}
          return (_Msg = "");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "X";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          try {
            this["_self"]["touchP0"]();
          } catch {}
          return (_Msg = "");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "Y";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          try {
            this["_self"]["touchP1"]();
          } catch {}
          return (_Msg = "");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "Z";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          try {
            this["_self"]["touchP2"]();
          } catch {}
          return (_Msg = "");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "u";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          try {
            this["_self"]["screenUp"]();
          } catch {}
          return (_Msg = "");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "d";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          try {
            this["_self"]["screenDown"]();
          } catch {}
          return (_Msg = "");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "U";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          try {
            this["_self"]["logoUp"]();
          } catch {}
          return (_Msg = "");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "D";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          try {
            this["_self"]["logoDown"]();
          } catch {}
          return (_Msg = "");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "L";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          try {
            this["_self"]["tiltL"]();
          } catch {}
          return (_Msg = "");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "R";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          try {
            this["_self"]["tiltR"]();
          } catch {}
          return (_Msg = "");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "F";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          try {
            this["_self"]["freeFall"]();
          } catch {}
          return (_Msg = "");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "S";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          try {
            this["_self"]["shake"]();
          } catch {}
          return (_Msg = "");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg !== "";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          this["RMsg"] = this["RMsg"] + _Msg;
          return (_Msg = "");
        })
      );
    return dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return this["RMsg"]["contain?"](":");
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          dtlbind(this, function(n) {
            var self = this;
            var 自分 = self;
            this["Store"]["set"](
              n,
              this["RMsg"]["substr"](1, this["RMsg"]["indexof"](",") - 1) * 1
            );
            return (this["RMsg"] = this["RMsg"]["substr"](
              this["RMsg"]["indexof"](",") + 1,
              100
            ));
          })["repeat"](4);
          this["Store"]["set"](
            5,
            this["RMsg"]["substr"](1, this["RMsg"]["indexof"](":") - 1) * 1
          );
          return (this["RMsg"] = "");
        })
      );
  });
  this["MBit"]["get"] = dtlbind(this, function(s) {
    var self = this;
    var 自分 = self;
    var t;
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return s === this["undef"];
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (t = this["Store"]);
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return s === "1";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (t = this["Store"]["get"](1));
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return s === "2";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (t = this["Store"]["get"](2));
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return s === "3";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (t = this["Store"]["get"](3));
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return s === "4";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (t = this["Store"]["get"](4));
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return s === "5";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (t = this["Store"]["get"](5));
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return s === "X";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (t = this["Store"]["get"](1));
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return s === "Y";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (t = this["Store"]["get"](2));
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return s === "Z";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (t = this["Store"]["get"](3));
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return s === "L";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (t = this["Store"]["get"](4));
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return s === "T";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (t = this["Store"]["get"](5));
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return s === "x";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (t = this["Store"]["get"](1));
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return s === "y";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (t = this["Store"]["get"](2));
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return s === "z";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (t = this["Store"]["get"](3));
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return s === "l";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (t = this["Store"]["get"](4));
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return s === "t";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (t = this["Store"]["get"](5));
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return s === "１";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (t = this["Store"]["get"](1));
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return s === "２";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (t = this["Store"]["get"](2));
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return s === "３";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (t = this["Store"]["get"](3));
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return s === "４";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (t = this["Store"]["get"](4));
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return s === "５";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (t = this["Store"]["get"](5));
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return s === "Ｘ";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (t = this["Store"]["get"](1));
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return s === "Ｙ";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (t = this["Store"]["get"](2));
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return s === "Ｚ";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (t = this["Store"]["get"](3));
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return s === "Ｌ";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (t = this["Store"]["get"](4));
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return s === "Ｔ";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (t = this["Store"]["get"](5));
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return s === "ｘ";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (t = this["Store"]["get"](1));
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return s === "ｙ";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (t = this["Store"]["get"](2));
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return s === "ｚ";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (t = this["Store"]["get"](3));
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return s === "ｌ";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (t = this["Store"]["get"](4));
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return s === "ｔ";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (t = this["Store"]["get"](5));
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return s === "明るさ";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (t = this["Store"]["get"](4));
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return s === "温度";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (t = this["Store"]["get"](5));
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return s === "X軸";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (t = this["Store"]["get"](1));
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return s === "Y軸";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (t = this["Store"]["get"](2));
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return s === "Z軸";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (t = this["Store"]["get"](3));
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return s === "Ｘ軸";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (t = this["Store"]["get"](1));
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return s === "Ｙ軸";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (t = this["Store"]["get"](2));
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return s === "Ｚ軸";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (t = this["Store"]["get"](3));
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return s === "加速度Ｘ";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (t = this["Store"]["get"](1));
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return s === "加速度Ｙ";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (t = this["Store"]["get"](2));
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return s === "加速度Ｚ";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (t = this["Store"]["get"](3));
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return s === "加速度X";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (t = this["Store"]["get"](1));
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return s === "加速度Y";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (t = this["Store"]["get"](2));
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return s === "加速度Z";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (t = this["Store"]["get"](3));
        })
      );
    return t;
  });
  this["MBit"]["SetAction"] = dtlbind(this, function(_Obj, _Block) {
    var self = this;
    var 自分 = self;
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Obj === "pushA";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["pushA"] = _Block);
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Obj === "pushB";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["pushB"] = _Block);
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Obj === "pushAB";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["pushAB"] = _Block);
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Obj === "touchP0";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["touchP0"] = _Block);
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Obj === "touchP1";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["touchP1"] = _Block);
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Obj === "touchP2";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["touchP2"] = _Block);
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Obj === "screenUp";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["screenUp"] = _Block);
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Obj === "screenDown";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["screenDown"] = _Block);
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Obj === "logoUp";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["logoUp"] = _Block);
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Obj === "logoDown";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["logoDown"] = _Block);
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Obj === "tiltL";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["tiltL"] = _Block);
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Obj === "tiltR";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["tiltR"] = _Block);
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Obj === "freeFall";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["freeFall"] = _Block);
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Obj === "shake";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["shake"] = _Block);
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Obj === "Aボタン";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["pushA"] = _Block);
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Obj === "Bボタン";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["pushB"] = _Block);
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Obj === "ABボタン";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["pushAB"] = _Block);
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Obj === "P0";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["touchP0"] = _Block);
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Obj === "P1";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["touchP1"] = _Block);
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Obj === "P2";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["touchP2"] = _Block);
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Obj === "画面が上";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["screenUp"] = _Block);
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Obj === "画面が下";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["screenDown"] = _Block);
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Obj === "ロゴが上";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["logoUp"] = _Block);
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Obj === "ロゴが下";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["logoDown"] = _Block);
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Obj === "左に傾ける";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["tiltL"] = _Block);
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Obj === "右に傾ける";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["tiltR"] = _Block);
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Obj === "落とした";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["freeFall"] = _Block);
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Obj === "シェイク";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["shake"] = _Block);
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Obj === "Ａボタン";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["pushA"] = _Block);
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Obj === "Ｂボタン";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["pushB"] = _Block);
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Obj === "ＡＢボタン";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["pushAB"] = _Block);
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Obj === "Ｐ０";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["touchP0"] = _Block);
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Obj === "Ｐ１";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["touchP1"] = _Block);
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Obj === "Ｐ２";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["touchP2"] = _Block);
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Obj === "A";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["pushA"] = _Block);
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Obj === "B";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["pushB"] = _Block);
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Obj === "AB";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["pushAB"] = _Block);
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Obj === "0";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["pushA"] = _Block);
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Obj === "1";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["pushB"] = _Block);
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Obj === "2";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["pushAB"] = _Block);
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Obj === "表";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["screenUp"] = _Block);
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Obj === "裏";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["screenDown"] = _Block);
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Obj === "上";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["logoUp"] = _Block);
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Obj === "下";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["logoDown"] = _Block);
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Obj === "左";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["tiltL"] = _Block);
        })
      );
    return dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Obj === "右";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["tiltR"] = _Block);
        })
      );
  });
  this["MBit"]["SSMsg"] = "";
  this["MBit"]["STMsg"] = "";
  this["MBit"]["SFlag"] = this["true"];
  this["MBit"]["SMsg"] = "";
  this["MBit"]["Sub"] = "";
  this["MBit"]["subset"] = dtlbind(this, function(_S, _num) {
    var self = this;
    var 自分 = self;
    return dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return this["Sub"] === _S;
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + _num["codechar"]());
        })
      );
  });
  this["MBit"]["sendstr"] = dtlbind(this, function(_Msg) {
    var self = this;
    var 自分 = self;
    _Msg = "" + _Msg;
    this["SMsg"] = (31)["codechar"]();
    dtlbind(this, function(n) {
      var self = this;
      var 自分 = self;
      this["Sub"] = _Msg["substr"](n, 1);
      dtlbind(this, function(n) {
        var self = this;
        var 自分 = self;
        return this["subset"]((47 + n)["codechar"](), 47 + n);
      })["repeat"](10);
      dtlbind(this, function(n) {
        var self = this;
        var 自分 = self;
        return this["subset"]((65295 + n)["codechar"](), 47 + n);
      })["repeat"](10);
      dtlbind(this, function(n) {
        var self = this;
        var 自分 = self;
        return this["subset"]((64 + n)["codechar"](), 64 + n);
      })["repeat"](26);
      dtlbind(this, function(n) {
        var self = this;
        var 自分 = self;
        return this["subset"]((96 + n)["codechar"](), 64 + n);
      })["repeat"](26);
      dtlbind(this, function(n) {
        var self = this;
        var 自分 = self;
        return this["subset"]((65312 + n)["codechar"](), 64 + n);
      })["repeat"](26);
      dtlbind(this, function(n) {
        var self = this;
        var 自分 = self;
        return this["subset"]((65344 + n)["codechar"](), 64 + n);
      })["repeat"](26);
      dtlbind(this, function(n) {
        var self = this;
        var 自分 = self;
        return this["subset"]((31 + n)["codechar"](), 31 + n);
      })["repeat"](16);
      dtlbind(this, function(n) {
        var self = this;
        var 自分 = self;
        return this["subset"]((57 + n)["codechar"](), 57 + n);
      })["repeat"](7);
      dtlbind(this, function(n) {
        var self = this;
        var 自分 = self;
        return this["subset"]((91 + n)["codechar"](), 91 + n);
      })["repeat"](5);
      this["subset"]("。", 97);
      this["subset"]("「", 98);
      this["subset"]("」", 99);
      this["subset"]("、", 100);
      this["subset"]("・", 101);
      this["subset"]("を", 102);
      this["subset"]("ヲ", 102);
      this["subset"]("ｦ", 102);
      this["subset"]("ぁ", 103);
      this["subset"]("ァ", 103);
      this["subset"]("ｧ", 103);
      this["subset"]("ぃ", 104);
      this["subset"]("ィ", 104);
      this["subset"]("ｨ", 104);
      this["subset"]("ぅ", 105);
      this["subset"]("ゥ", 105);
      this["subset"]("ｩ", 105);
      this["subset"]("ぇ", 106);
      this["subset"]("ェ", 106);
      this["subset"]("ｪ", 106);
      this["subset"]("ぉ", 107);
      this["subset"]("ォ", 107);
      this["subset"]("ｫ", 107);
      this["subset"]("ゃ", 108);
      this["subset"]("ャ", 108);
      this["subset"]("ｬ", 108);
      this["subset"]("ゅ", 109);
      this["subset"]("ュ", 109);
      this["subset"]("ｭ", 109);
      this["subset"]("ょ", 110);
      this["subset"]("ョ", 110);
      this["subset"]("ｮ", 110);
      this["subset"]("っ", 111);
      this["subset"]("ッ", 111);
      this["subset"]("ｯ", 111);
      this["subset"]("ー", 112);
      this["subset"]("ｰ", 112);
      this["subset"]("あ", 113);
      this["subset"]("ア", 113);
      this["subset"]("ｱ", 113);
      this["subset"]("い", 114);
      this["subset"]("イ", 114);
      this["subset"]("ｲ", 114);
      this["subset"]("う", 115);
      this["subset"]("ウ", 115);
      this["subset"]("ｳ", 115);
      this["subset"]("え", 116);
      this["subset"]("エ", 116);
      this["subset"]("ｴ", 116);
      this["subset"]("お", 117);
      this["subset"]("オ", 117);
      this["subset"]("ｵ", 117);
      this["subset"]("か", 118);
      this["subset"]("カ", 118);
      this["subset"]("ｶ", 118);
      this["subset"]("き", 119);
      this["subset"]("キ", 119);
      this["subset"]("ｷ", 119);
      this["subset"]("く", 120);
      this["subset"]("ク", 120);
      this["subset"]("ｸ", 120);
      this["subset"]("け", 121);
      this["subset"]("ケ", 121);
      this["subset"]("ｹ", 121);
      this["subset"]("こ", 122);
      this["subset"]("コ", 122);
      this["subset"]("ｺ", 122);
      this["subset"]("さ", 123);
      this["subset"]("サ", 123);
      this["subset"]("ｻ", 123);
      this["subset"]("し", 124);
      this["subset"]("シ", 124);
      this["subset"]("ｼ", 124);
      this["subset"]("す", 125);
      this["subset"]("ス", 125);
      this["subset"]("ｽ", 125);
      this["subset"]("せ", 126);
      this["subset"]("セ", 126);
      this["subset"]("ｾ", 126);
      this["subset"]("そ", 127);
      this["subset"]("ソ", 127);
      this["subset"]("ｿ", 127);
      this["subset"]("た", 128);
      this["subset"]("タ", 128);
      this["subset"]("ﾀ", 128);
      this["subset"]("ち", 129);
      this["subset"]("チ", 129);
      this["subset"]("ﾁ", 129);
      this["subset"]("つ", 130);
      this["subset"]("ツ", 130);
      this["subset"]("ﾂ", 130);
      this["subset"]("て", 131);
      this["subset"]("テ", 131);
      this["subset"]("ﾃ", 131);
      this["subset"]("と", 132);
      this["subset"]("ト", 132);
      this["subset"]("ﾄ", 132);
      this["subset"]("な", 133);
      this["subset"]("ナ", 133);
      this["subset"]("ﾅ", 133);
      this["subset"]("に", 134);
      this["subset"]("ニ", 134);
      this["subset"]("ﾆ", 134);
      this["subset"]("ぬ", 135);
      this["subset"]("ヌ", 135);
      this["subset"]("ﾇ", 135);
      this["subset"]("ね", 136);
      this["subset"]("ネ", 136);
      this["subset"]("ﾈ", 136);
      this["subset"]("の", 137);
      this["subset"]("ノ", 137);
      this["subset"]("ﾉ", 137);
      this["subset"]("は", 138);
      this["subset"]("ハ", 138);
      this["subset"]("ﾊ", 138);
      this["subset"]("ひ", 139);
      this["subset"]("ヒ", 139);
      this["subset"]("ﾋ", 139);
      this["subset"]("ふ", 140);
      this["subset"]("フ", 140);
      this["subset"]("ﾌ", 140);
      this["subset"]("へ", 141);
      this["subset"]("ヘ", 141);
      this["subset"]("ﾍ", 141);
      this["subset"]("ほ", 142);
      this["subset"]("ホ", 142);
      this["subset"]("ﾎ", 142);
      this["subset"]("ま", 143);
      this["subset"]("マ", 143);
      this["subset"]("ﾏ", 143);
      this["subset"]("み", 144);
      this["subset"]("ミ", 144);
      this["subset"]("ﾐ", 144);
      this["subset"]("む", 145);
      this["subset"]("ム", 145);
      this["subset"]("ﾑ", 145);
      this["subset"]("め", 146);
      this["subset"]("メ", 146);
      this["subset"]("ﾒ", 146);
      this["subset"]("も", 147);
      this["subset"]("モ", 147);
      this["subset"]("ﾓ", 147);
      this["subset"]("や", 148);
      this["subset"]("ヤ", 148);
      this["subset"]("ﾔ", 148);
      this["subset"]("ゆ", 149);
      this["subset"]("ユ", 149);
      this["subset"]("ﾕ", 149);
      this["subset"]("よ", 150);
      this["subset"]("ヨ", 150);
      this["subset"]("ﾖ", 150);
      this["subset"]("ら", 151);
      this["subset"]("ラ", 151);
      this["subset"]("ﾗ", 151);
      this["subset"]("り", 152);
      this["subset"]("リ", 152);
      this["subset"]("ﾘ", 152);
      this["subset"]("る", 153);
      this["subset"]("ル", 151);
      this["subset"]("ﾙ", 153);
      this["subset"]("れ", 154);
      this["subset"]("レ", 152);
      this["subset"]("ﾚ", 154);
      this["subset"]("ろ", 155);
      this["subset"]("ロ", 151);
      this["subset"]("ﾛ", 155);
      this["subset"]("わ", 156);
      this["subset"]("ワ", 156);
      this["subset"]("ﾜ", 156);
      this["subset"]("ん", 157);
      this["subset"]("ン", 157);
      this["subset"]("ﾝ", 157);
      this["subset"]("゛", 158);
      this["subset"]("ﾞ", 158);
      this["subset"]("゜", 159);
      this["subset"]("ﾟ", 159);
      this["subset"]("が", 118);
      this["subset"]("ガ", 118);
      this["subset"]("ぎ", 119);
      this["subset"]("ギ", 119);
      this["subset"]("ぐ", 120);
      this["subset"]("グ", 120);
      this["subset"]("げ", 121);
      this["subset"]("ゲ", 121);
      this["subset"]("ご", 122);
      this["subset"]("ゴ", 122);
      this["subset"]("ざ", 123);
      this["subset"]("ザ", 123);
      this["subset"]("じ", 124);
      this["subset"]("ジ", 124);
      this["subset"]("ず", 125);
      this["subset"]("ズ", 125);
      this["subset"]("ぜ", 126);
      this["subset"]("ゼ", 126);
      this["subset"]("ぞ", 127);
      this["subset"]("ゾ", 127);
      this["subset"]("だ", 128);
      this["subset"]("ダ", 128);
      this["subset"]("ぢ", 129);
      this["subset"]("ヂ", 129);
      this["subset"]("づ", 130);
      this["subset"]("ヅ", 130);
      this["subset"]("で", 131);
      this["subset"]("デ", 131);
      this["subset"]("ど", 132);
      this["subset"]("ド", 132);
      this["subset"]("ば", 138);
      this["subset"]("バ", 138);
      this["subset"]("び", 139);
      this["subset"]("ビ", 139);
      this["subset"]("ぶ", 140);
      this["subset"]("ブ", 140);
      this["subset"]("べ", 141);
      this["subset"]("ベ", 141);
      this["subset"]("ぼ", 142);
      this["subset"]("ボ", 142);
      this["subset"]("ぱ", 138);
      this["subset"]("パ", 138);
      this["subset"]("ぴ", 139);
      this["subset"]("ピ", 139);
      this["subset"]("ぷ", 140);
      this["subset"]("プ", 140);
      this["subset"]("ぺ", 141);
      this["subset"]("ペ", 141);
      this["subset"]("ぽ", 142);
      this["subset"]("ポ", 142);
      this["subset"]("が", 158);
      this["subset"]("ガ", 158);
      this["subset"]("ぎ", 158);
      this["subset"]("ギ", 158);
      this["subset"]("ぐ", 158);
      this["subset"]("グ", 158);
      this["subset"]("げ", 158);
      this["subset"]("ゲ", 158);
      this["subset"]("ご", 158);
      this["subset"]("ゴ", 158);
      this["subset"]("ざ", 158);
      this["subset"]("ザ", 158);
      this["subset"]("じ", 158);
      this["subset"]("ジ", 158);
      this["subset"]("ず", 158);
      this["subset"]("ズ", 158);
      this["subset"]("ぜ", 158);
      this["subset"]("ゼ", 158);
      this["subset"]("ぞ", 158);
      this["subset"]("ゾ", 158);
      this["subset"]("だ", 158);
      this["subset"]("ダ", 158);
      this["subset"]("ぢ", 158);
      this["subset"]("ヂ", 158);
      this["subset"]("づ", 158);
      this["subset"]("ヅ", 158);
      this["subset"]("で", 158);
      this["subset"]("デ", 158);
      this["subset"]("ど", 158);
      this["subset"]("ド", 158);
      this["subset"]("ば", 158);
      this["subset"]("バ", 158);
      this["subset"]("び", 158);
      this["subset"]("ビ", 158);
      this["subset"]("ぶ", 158);
      this["subset"]("ブ", 158);
      this["subset"]("べ", 158);
      this["subset"]("ベ", 158);
      this["subset"]("ぼ", 158);
      this["subset"]("ボ", 158);
      this["subset"]("ぱ", 159);
      this["subset"]("パ", 159);
      this["subset"]("ぴ", 159);
      this["subset"]("ピ", 159);
      this["subset"]("ぷ", 159);
      this["subset"]("プ", 159);
      this["subset"]("ぺ", 159);
      this["subset"]("ペ", 159);
      this["subset"]("ぽ", 159);
      return this["subset"]("ポ", 159);
    })["repeat"](_Msg["length?"]());
    this["STMsg"] = this["SMsg"];
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return this["SFlag"];
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          this["SFlag"] = this["false"];
          return this["Timer"]
            ["create"]()
            ["interval"](0.1)
            ["times"](1)
            ["execute"](
              dtlbind(this, function() {
                var self = this;
                var 自分 = self;
                return;
              })
            )
            ["next_execute"](
              dtlbind(this, function() {
                var self = this;
                var 自分 = self;
                this["write"](this["SSMsg"] + this["STMsg"]);
                this["SSMsg"] = "";
                this["STMsg"] = "";
                return (this["SFlag"] = this["true"]);
              })
            );
        })
      );
    return (this["SMsg"] = "");
  });
  this["MBit"]["sendSE"] = dtlbind(this, function(_Msg) {
    var self = this;
    var 自分 = self;
    this["SMsg"] = (30)["codechar"]();
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "0";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "00");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "1";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "01");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "2";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "02");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "3";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "03");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "4";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "04");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "5";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "05");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "6";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "06");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "7";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "07");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "8";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "08");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "9";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "09");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "10";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "10");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "11";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "11");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "12";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "12");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "13";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "13");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "14";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "14");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "15";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "15");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "16";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "16");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "17";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "17");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "18";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "18");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "19";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "19");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "０";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "00");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "１";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "01");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "２";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "02");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "３";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "03");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "４";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "04");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "５";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "05");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "６";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "06");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "７";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "07");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "８";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "08");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "９";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "09");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "１０";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "10");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "１１";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "11");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "１２";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "12");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "１３";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "13");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "１４";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "14");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "１５";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "15");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "１６";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "16");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "１７";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "17");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "１８";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "18");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "１９";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "19");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "ダダダム";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "00");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "ジ・エンターテイナー";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "01");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "プレリュード";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "02");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "歓喜の歌";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "03");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "ニャン・キャット";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "04");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "着信メロディ";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "05");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "ファンク";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "06");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "ブルース";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "07");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "ハッピーバースデー";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "08");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "ウェディング・マーチ";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "09");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "おそうしき";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "10");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "ちゃんちゃん♪";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "11");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "タッタラッタッター";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "12");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "チェイス";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "13");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "ピコーン！";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "14");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "ワワワワー";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "15");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "ジャンプアップ";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "16");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "ジャンプダウン";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "17");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "パワーアップ";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "18");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "パワーダウン";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "19");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "だだだむ";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "00");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "じ・えんたーていなー";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "01");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "ぷれりゅーど";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "02");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "かんきのうた";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "03");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "にゃん・きゃっと";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "04");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "ちゃくしんめろでぃ";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "05");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "ふぁんく";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "06");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "ぶるーす";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "07");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "はっぴーばーすでー";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "08");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "うぇでぃんぐ・まーち";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "09");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "お葬式";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "10");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "ちゃんちゃん";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "11");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "たったらったったー";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "12");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "ちぇいす";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "13");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "ピコーン";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "14");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "わわわわー";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "15");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "じゃんぷあっぷ";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "16");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "じゃんぷだうん";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "17");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "ぱわーあっぷ";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "18");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "ぱわーだうん";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "19");
        })
      );
    this["SSMsg"] = this["SMsg"];
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return this["SFlag"];
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          this["SFlag"] = this["false"];
          return this["Timer"]
            ["create"]()
            ["interval"](0.1)
            ["times"](1)
            ["execute"](
              dtlbind(this, function() {
                var self = this;
                var 自分 = self;
                return;
              })
            )
            ["next_execute"](
              dtlbind(this, function() {
                var self = this;
                var 自分 = self;
                this["write"](this["SSMsg"] + this["STMsg"]);
                this["SSMsg"] = "";
                this["STMsg"] = "";
                return (this["SFlag"] = this["true"]);
              })
            );
        })
      );
    return (this["SMsg"] = "");
  });
  this["MBit"]["sendArrow"] = dtlbind(this, function(_Msg) {
    var self = this;
    var 自分 = self;
    this["SMsg"] = (29)["codechar"]();
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "0";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "0");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "1";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "1");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "2";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "2");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "3";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "3");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "4";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "4");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "5";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "5");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "6";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "6");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "7";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "7");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "０";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "0");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "１";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "1");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "２";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "2");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "３";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "3");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "４";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "4");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "５";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "5");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "６";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "6");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "７";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "7");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "↑";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "0");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "↗";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "1");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "→";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "2");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "↘";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "3");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "↓";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "4");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "↙";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "5");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "←";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "6");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "↖";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "7");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "上";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "0");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "右上";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "1");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "右";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "2");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "右下";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "3");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "下";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "4");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "左下";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "5");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "左";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "6");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "左上";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "7");
        })
      );
    this["STMsg"] = this["SMsg"];
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return this["SFlag"];
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          this["SFlag"] = this["false"];
          return this["Timer"]
            ["create"]()
            ["interval"](0.1)
            ["times"](1)
            ["execute"](
              dtlbind(this, function() {
                var self = this;
                var 自分 = self;
                return;
              })
            )
            ["next_execute"](
              dtlbind(this, function() {
                var self = this;
                var 自分 = self;
                this["write"](this["SSMsg"] + this["STMsg"]);
                this["SSMsg"] = "";
                this["STMsg"] = "";
                return (this["SFlag"] = this["true"]);
              })
            );
        })
      );
    return (this["SMsg"] = "");
  });
  this["MBit"]["sendIcon"] = dtlbind(this, function(_Msg) {
    var self = this;
    var 自分 = self;
    this["SMsg"] = (28)["codechar"]();
    _Msg = "" + _Msg;
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "0";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "00");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "1";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "01");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "2";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "02");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "3";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "03");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "4";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "04");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "5";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "05");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "6";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "06");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "7";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "07");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "8";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "08");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "9";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "09");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "10";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "10");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "11";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "11");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "12";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "12");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "13";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "13");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "14";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "14");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "15";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "15");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "16";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "16");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "17";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "17");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "18";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "18");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "19";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "19");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "20";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "20");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "21";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "21");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "22";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "22");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "23";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "23");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "24";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "24");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "25";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "25");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "26";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "26");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "27";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "27");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "28";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "28");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "29";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "29");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "30";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "30");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "31";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "31");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "32";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "32");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "33";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "33");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "34";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "34");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "35";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "35");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "36";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "36");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "37";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "37");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "38";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "38");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "39";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "39");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "０";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "00");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "１";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "01");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "２";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "02");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "３";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "03");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "４";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "04");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "５";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "05");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "６";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "06");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "７";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "07");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "８";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "08");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "９";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "09");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "１０";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "10");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "１１";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "11");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "１２";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "12");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "１３";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "13");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "１４";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "14");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "１５";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "15");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "１６";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "16");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "１７";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "17");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "１８";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "18");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "１９";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "19");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "２０";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "20");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "２１";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "21");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "２２";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "22");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "２３";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "23");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "２４";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "24");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "２５";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "25");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "２６";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "26");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "２７";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "27");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "２８";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "28");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "２９";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "29");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "３０";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "30");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "３１";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "31");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "３２";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "32");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "３３";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "33");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "３４";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "34");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "３５";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "35");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "３６";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "36");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "３７";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "37");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "３８";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "38");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "３９";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "39");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "ハート";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "00");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "小さいハート";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "01");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "チェック";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "02");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "バツ";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "03");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "うれしい顔";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "04");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "かなしい顔";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "05");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "こまり顔";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "06");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "おこり顔";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "07");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "ねてる顔";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "08");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "びっくり顔";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "09");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "へん顔";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "10");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "すばらしい";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "11");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "ふーん";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "12");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "Tシャツ";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "13");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "ローラースケート";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "14");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "あひる";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "15");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "家";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "16");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "かめ";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "17");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "ちょうちょ";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "18");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "棒人間";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "19");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "おばけ";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "20");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "剣";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "21");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "きりん";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "22");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "がいこつ";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "23");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "かさ";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "24");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "へび";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "25");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "うさぎ";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "26");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "うし";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "27");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "4分音符";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "28");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "8分音符";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "29");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "くまで";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "30");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "まと";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "31");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "三角";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "32");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "左向き三角";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "33");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return (_Msg = "チェスボード");
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "34");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "ダイアモンド";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "35");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "小さいダイアモンド";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "36");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "しかく";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "37");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "小さいしかく";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "38");
        })
      );
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === "はさみ";
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          return (this["SMsg"] = this["SMsg"] + "39");
        })
      );
    this["STMsg"] = this["SMsg"];
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return this["SFlag"];
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          this["SFlag"] = this["false"];
          return this["Timer"]
            ["create"]()
            ["interval"](0.1)
            ["times"](1)
            ["execute"](
              dtlbind(this, function() {
                var self = this;
                var 自分 = self;
                return;
              })
            )
            ["next_execute"](
              dtlbind(this, function() {
                var self = this;
                var 自分 = self;
                this["write"](this["SSMsg"] + this["STMsg"]);
                this["SSMsg"] = "";
                this["STMsg"] = "";
                return (this["SFlag"] = this["true"]);
              })
            );
        })
      );
    return (this["SMsg"] = "");
  });
  this["MBit"]["sendDisplay"] = dtlbind(this, function(_Key, _Msg) {
    var self = this;
    var 自分 = self;
    dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg === this["undef"];
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          this["sendstr"](_Key);
          dtlbind(this, function() {
            var self = this;
            var 自分 = self;
            return _Key === "↑";
          })
            ["then"]()
            ["execute"](
              dtlbind(this, function() {
                var self = this;
                var 自分 = self;
                return this["sendArrow"](_Key);
              })
            );
          dtlbind(this, function() {
            var self = this;
            var 自分 = self;
            return _Key === "↗";
          })
            ["then"]()
            ["execute"](
              dtlbind(this, function() {
                var self = this;
                var 自分 = self;
                return this["sendArrow"](_Key);
              })
            );
          dtlbind(this, function() {
            var self = this;
            var 自分 = self;
            return _Key === "→";
          })
            ["then"]()
            ["execute"](
              dtlbind(this, function() {
                var self = this;
                var 自分 = self;
                return this["sendArrow"](_Key);
              })
            );
          dtlbind(this, function() {
            var self = this;
            var 自分 = self;
            return _Key === "↘";
          })
            ["then"]()
            ["execute"](
              dtlbind(this, function() {
                var self = this;
                var 自分 = self;
                return this["sendArrow"](_Key);
              })
            );
          dtlbind(this, function() {
            var self = this;
            var 自分 = self;
            return _Key === "↓";
          })
            ["then"]()
            ["execute"](
              dtlbind(this, function() {
                var self = this;
                var 自分 = self;
                return this["sendArrow"](_Key);
              })
            );
          dtlbind(this, function() {
            var self = this;
            var 自分 = self;
            return _Key === "↙";
          })
            ["then"]()
            ["execute"](
              dtlbind(this, function() {
                var self = this;
                var 自分 = self;
                return this["sendArrow"](_Key);
              })
            );
          dtlbind(this, function() {
            var self = this;
            var 自分 = self;
            return _Key === "←";
          })
            ["then"]()
            ["execute"](
              dtlbind(this, function() {
                var self = this;
                var 自分 = self;
                return this["sendArrow"](_Key);
              })
            );
          dtlbind(this, function() {
            var self = this;
            var 自分 = self;
            return _Key === "↖";
          })
            ["then"]()
            ["execute"](
              dtlbind(this, function() {
                var self = this;
                var 自分 = self;
                return this["sendArrow"](_Key);
              })
            );
          dtlbind(this, function() {
            var self = this;
            var 自分 = self;
            return _Key === "上";
          })
            ["then"]()
            ["execute"](
              dtlbind(this, function() {
                var self = this;
                var 自分 = self;
                return this["sendArrow"](_Key);
              })
            );
          dtlbind(this, function() {
            var self = this;
            var 自分 = self;
            return _Key === "右上";
          })
            ["then"]()
            ["execute"](
              dtlbind(this, function() {
                var self = this;
                var 自分 = self;
                return this["sendArrow"](_Key);
              })
            );
          dtlbind(this, function() {
            var self = this;
            var 自分 = self;
            return _Key === "右";
          })
            ["then"]()
            ["execute"](
              dtlbind(this, function() {
                var self = this;
                var 自分 = self;
                return this["sendArrow"](_Key);
              })
            );
          dtlbind(this, function() {
            var self = this;
            var 自分 = self;
            return _Key === "右下";
          })
            ["then"]()
            ["execute"](
              dtlbind(this, function() {
                var self = this;
                var 自分 = self;
                return this["sendArrow"](_Key);
              })
            );
          dtlbind(this, function() {
            var self = this;
            var 自分 = self;
            return _Key === "下";
          })
            ["then"]()
            ["execute"](
              dtlbind(this, function() {
                var self = this;
                var 自分 = self;
                return this["sendArrow"](_Key);
              })
            );
          dtlbind(this, function() {
            var self = this;
            var 自分 = self;
            return _Key === "左下";
          })
            ["then"]()
            ["execute"](
              dtlbind(this, function() {
                var self = this;
                var 自分 = self;
                return this["sendArrow"](_Key);
              })
            );
          dtlbind(this, function() {
            var self = this;
            var 自分 = self;
            return _Key === "左";
          })
            ["then"]()
            ["execute"](
              dtlbind(this, function() {
                var self = this;
                var 自分 = self;
                return this["sendArrow"](_Key);
              })
            );
          return dtlbind(this, function() {
            var self = this;
            var 自分 = self;
            return _Key === "左上";
          })
            ["then"]()
            ["execute"](
              dtlbind(this, function() {
                var self = this;
                var 自分 = self;
                return this["sendArrow"](_Key);
              })
            );
        })
      );
    return dtlbind(this, function() {
      var self = this;
      var 自分 = self;
      return _Msg !== this["undef"];
    })
      ["then"]()
      ["execute"](
        dtlbind(this, function() {
          var self = this;
          var 自分 = self;
          dtlbind(this, function() {
            var self = this;
            var 自分 = self;
            return (_Key = "文字");
          })
            ["then"]()
            ["execute"](
              dtlbind(this, function() {
                var self = this;
                var 自分 = self;
                return this["sendstr"](_Msg);
              })
            );
          dtlbind(this, function() {
            var self = this;
            var 自分 = self;
            return (_Key = "矢印");
          })
            ["then"]()
            ["execute"](
              dtlbind(this, function() {
                var self = this;
                var 自分 = self;
                return this["sendArrow"](_Msg);
              })
            );
          return dtlbind(this, function() {
            var self = this;
            var 自分 = self;
            return (_Key = "アイコン");
          })
            ["then"]()
            ["execute"](
              dtlbind(this, function() {
                var self = this;
                var 自分 = self;
                return this["sendIcon"](_Msg);
              })
            );
        })
      );
  });
  this["addAliasFromTable"](
    "root",
    "マイクロビット",
    "まいくろびっと",
    "microBit",
    "microbit",
    "MicroBit",
    "mbit",
    "MBit"
  );
  this["MBit"]["addAlias"]("get", "読む");
  this["MBit"]["addAlias"]("sendstr", "文字表示");
  this["MBit"]["addAlias"]("sendSE", "効果音");
  this["MBit"]["addAlias"]("sendArrow", "矢印表示");
  this["MBit"]["addAlias"]("sendIcon", "アイコン表示");
  this["MBit"]["addAlias"]("sendDisplay", "表示");
  this["MBit"]["addAlias"]("SetAction", "動作設定");
  this["MBit"]["addAlias"]("Aボタン", "pushA");
  this["MBit"]["addAlias"]("Bボタン", "pushB");
  this["MBit"]["addAlias"]("ABボタン", "pushAB");
  this["MBit"]["addAlias"]("P0", "touchP0");
  this["MBit"]["addAlias"]("P1", "touchP1");
  this["MBit"]["addAlias"]("P2", "touchP2");
  this["MBit"]["addAlias"]("画面が上", "screenUp");
  this["MBit"]["addAlias"]("画面が下", "screenDown");
  this["MBit"]["addAlias"]("ロゴが上", "logoUp");
  this["MBit"]["addAlias"]("ロゴが下", "logoDown");
  this["MBit"]["addAlias"]("左に傾ける", "tiltL");
  this["MBit"]["addAlias"]("右に傾ける", "tiltR");
  this["MBit"]["addAlias"]("落とした", "freeFall");
  return this["MBit"]["addAlias"]("シェイク", "shake");
}
  .checkerror()
  .apply(root, []));
