ace = require("brace");
require("brace/mode/dolittle");
require("brace/theme/chrome");
// require("brace/ext/language_tools");
require("brace/ext/searchbox");

let editor;
window.addEventListener("DOMContentLoaded", function() {
  editor = ace.edit("editor");
  editor.setTheme("ace/theme/chrome");
  editor.getSession().setMode("ace/mode/dolittle");

  editor.$blockScrolling = Infinity;
  editor.getSession().setUseWrapMode(true);
  editor.setFontSize(16);
  try {
    editor.setValue(fs.readFileSync(__dirname + "/run/run.dtl").toString());
    $("title").text("edit | electron-dolittle | " + __dirname + "/run/run.dtl");
  } catch (err) {
    console.log(err);
  }

  editor.setOptions({
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true
  });

  editor.commands.addCommand({
    name: "fontSizeUp",
    bindKey: {
      win: "Ctrl-UP",
      mac: "Command-UP"
    },
    exec: function(editor) {
      editor.setFontSize(editor.getFontSize() + 1);
    }
  });
  editor.commands.addCommand({
    name: "fontSizeDown",
    bindKey: {
      win: "Ctrl-DOWN",
      mac: "Command-DOWN"
    },
    exec: function(editor) {
      editor.setFontSize(editor.getFontSize() - 1);
    }
  });
  editor.commands.addCommand({
    name: "dolittleRun",
    bindKey: {
      win: "Ctrl-g",
      mac: "Command-g"
    },
    exec: function() {
      $("#run").click();
    }
  });
  editor.commands.addCommand({
    name: "dolittleSave",
    bindKey: {
      win: "Ctrl-s",
      mac: "Command-s"
    },
    exec: function() {
      $("#save").click();
    }
  });
  editor.commands.addCommand({
    name: "dolittleLoad",
    bindKey: {
      win: "Ctrl-o",
      mac: "Command-o"
    },
    exec: function() {
      $("#load").click();
    }
  });
});
