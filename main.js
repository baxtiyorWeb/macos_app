// main.js

const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // optional
      nodeIntegration: true, // Agar Node.js funksiyalaridan foydalanmoqchi bo'lsangiz
    },
  });

  // React ilovasini yuklash
  mainWindow.loadURL('http://localhost:3000'); // React ilovasini serve qilish uchun
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
