let filename = __dirname + "/新規ファイル.dtl";
$("#load").click(function() {
  dialog.showOpenDialog(
    null,
    {
      properties: ["openFile"],
      defaultPath: filename,
      filters: [
        {
          name: "ドリトルファイル",
          extensions: ["dtl"]
        },
        {
          name: "テキストファイル",
          extensions: ["txt"]
        },
        {
          name: "すべてのファイル",
          extensions: ["*"]
        }
      ]
    },
    function(name) {
      try {
        filename = name.toString();
        editor.setValue(fs.readFileSync(name.toString()).toString());
        $("title").text("electron-dolittle | " + filename);
      } catch {
        alert("ファイルを読み込めませんでした");
      }
    }
  );
});
$("#save").click(function() {
  dialog.showSaveDialog(
    null,
    {
      defaultPath: filename,
      filters: [
        {
          name: "ドリトルファイル",
          extensions: ["dtl"]
        },
        {
          name: "テキストファイル",
          extensions: ["txt"]
        },
        {
          name: "すべてのファイル",
          extensions: ["*"]
        }
      ]
    },
    function(name) {
      try {
        filename = name.toString();
        fs.writeFileSync(name.toString(), editor.getSession().getValue());
        $("title").text("electron-dolittle | " + filename);
      } catch {
        alert("ファイルを保存できませんでした");
      }
    }
  );
});
$("#run").click(function() {
  fs.writeFileSync(__dirname + "/run/run.dtl", editor.getSession().getValue());
  dtlDtoJ(editor.getSession().getValue());
  window.open("run.html", "exe_win");
});
$("#Up").click(function() {
  editor.setFontSize(editor.getFontSize() + 1);
});
$("#Down").click(function() {
  editor.setFontSize(editor.getFontSize() - 1);
});
$("#Default").click(function() {
  editor.setFontSize(16);
});
