console.log('From Renderer 1');

// const BrowserWindow = require('electron').remote.BrowserWindow;
const { BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

const newWindowBtn = document.getElementById('newWindowBtn');

newWindowBtn.addEventListener('click', function (event) {
  console.log('Clicked');
  let windowThree = new BrowserWindow();
  windowThree.loadURL(url.format({ pathname: path.join(__dirname, 'three.html'), protocol: 'file', slashes: true }));
  windowThree.webContents.openDevTools();
});
