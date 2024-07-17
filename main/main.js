const {app, BrowserWindow} = require("electron");

const path = require('node:path')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      show: false

    })

    var splash = new BrowserWindow({
      width: 500, 
      height: 300,
      frame: false, 
      alwaysOnTop: true 
    });

    splash.loadFile('./renderer/splash.html');
    splash.center();
    
    setTimeout(function () {
      splash.close();
      win.loadFile('./renderer/index.html')
      win.setMenuBarVisibility(false);
      win.show();
    }, 2000);
    
  }

  

  app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })