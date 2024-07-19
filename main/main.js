const { app, BrowserWindow } = require("electron");

const path = require("node:path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
  });

  var splash = new BrowserWindow({
    width: 500,
    height: 300,
    frame: false,
    alwaysOnTop: true,
  });

  splash.loadFile("./renderer/views/splash.html");
  splash.center();

  //!!code when logged in using password etc
  // const isLoggedIn = win.webContents.executeJavaScript(
  //   'window.localStorage.getItem("loggedIn")'
  // );
  // const isOfflineMode = win.webContents.executeJavaScript(
  //   'window.localStorage.getItem("offlineMode")'
  // );

  setTimeout(function () {
    splash.close();
    win.setMenuBarVisibility(false);
    win.loadFile(path.join(__dirname, "renderer/views/login.html")); // Load local HTML
    win.show();
  }, 2000);
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
