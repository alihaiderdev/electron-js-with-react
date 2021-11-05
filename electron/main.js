console.log('Main.js');
// import { app, BrowserWindow } from 'electron';
// import path from 'path';
// import url from 'url';
const { app, BrowserWindow } = require('electron'),
  path = require('path'),
  url = require('url');

// const app = electron.app; // responsible for handling all the necessary events in main file
// const BrowserWindow = electron.BrowserWindow; // responsible for all the UI part of our app

let windowOne, windowTwo;

const createWindow = () => {
  windowOne = new BrowserWindow();
  windowTwo = new BrowserWindow();
  windowOne.loadURL(
    url.format({
      pathname: path.join(__dirname, 'one.html'),
      protocol: 'file', // https
      slashes: true,
      //   hostname: 'example.com',
      //   query: {
      //     page: 1,
      //     format: 'json',
      //   },
    })
  );
  windowTwo.loadURL(
    url.format({
      pathname: path.join(__dirname, 'two.html'),
      protocol: 'file',
      slashes: true,
    })
  );

  windowOne.webContents.openDevTools();
  windowTwo.webContents.openDevTools();

  windowOne.on('closed', () => (windowOne = null));
  windowTwo.on('closed', () => (windowTwo = null));
};

app.on('ready', createWindow);

// for windows OS the above code for create teh browser window is enough but for mac the below code is also include

// if all the windows are closed this particular event is emmited then we forcefully quite our application
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (windowOne === null) createWindow();
});
