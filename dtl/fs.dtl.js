(function() {
  root.ファイル = root.create();
  root.ファイル.名前 = "新規ファイル.dtl";
  root.ファイル.リセット = function() {
    fs.writeFileSync(__dirname + "/dtl/" +  root.ファイル.名前, "");
  };
  root.ファイル.上書き = function(val) {
    fs.writeFileSync(__dirname + "/dtl/" + root.ファイル.名前, val);
  };
  root.ファイル.書く = function(val) {
    fs.appendFileSync(__dirname + "/dtl/" + root.ファイル.名前, val);
  };
  root.ファイル.改行 = function() {
    fs.appendFileSync(__dirname + "/dtl/" + root.ファイル.名前, "\n");
  };
  root.ファイル.読む = function() {
    fs.readFileSync(__dirname + "/dtl/" + root.ファイル.名前);
  };
}
  .checkerror()
  .apply(root, []));
