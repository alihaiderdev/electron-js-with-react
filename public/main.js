const { app, BrowserWindow } = require('electron');

const path = require('path');
const isDev = require('electron-is-dev');

// // Before
// const { BrowserWindow } = require('electron').remote;
// // After
// const { BrowserWindow } = require('@electron/remote');

require('@electron/remote/main').initialize();

function createWindow() {
  // create the browser window
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // to use path, fs or url modules of nodes js in our react react electron app means client side
      enableRemoteModule: true,
      //   contextIsolation: false,
    },
  });
  window.loadURL(isde);

  //   window.webContents.openDevTools();
  //   window.on('closed', () => (window = null));
}

app.on('ready', createWindow);

// for windows OS the above code for create teh browser window is enough but for mac the below code is also include

// Quit when all windows are closed
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the dock icon is clicked adnd there are no other windows open
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
  //   if (window === null) createWindow();
});
