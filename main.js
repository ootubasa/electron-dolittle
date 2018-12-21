const { app, BrowserWindow } = require("electron");
let win = null;

// app.commandLine.appendSwitch("enable-experimental-web-platform-features");

if (!app.requestSingleInstanceLock()) {
  app.quit();
} else {
  app.on("ready", () => {
    win = new BrowserWindow({
      width: 800,
      height: 600
    });
    win.loadURL(__dirname + "/index.html");
    // win.webContents.openDevTools();
    win.on("closed", () => {
      win = null;
    });
  });
  app.on("window-all-closed", () => {
    app.quit();
  });
}
