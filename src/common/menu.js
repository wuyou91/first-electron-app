import { app, Menu } from 'electron'
export default function () {
    const isMac = process.platform === 'darwin'

    const menuTemplate = [
        // { role: 'appMenu' }
        ...(isMac
            ? [{
                label: app.name,
                submenu: [
                    { role: 'about' },
                    { type: 'separator' },
                    { role: 'services' },
                    { type: 'separator' },
                    { role: 'hide' },
                    { role: 'hideOthers' },
                    { role: 'unhide' },
                    { type: 'separator' },
                    { role: 'quit' }
                ]
            }]
            : []),
        // { role: 'fileMenu' }
        {
            label: '文件',
            submenu: [
                isMac ? { role: 'close' } : { role: 'quit' }
            ]
        },
        // { role: 'editMenu' }
        {
            label: '编辑',
            submenu: [
                { role: 'undo' },
                { role: 'redo' },
                { type: 'separator' },
                { role: 'cut' },
                { role: 'copy' },
                { role: 'paste' },
                ...(isMac
                    ? [
                        { role: 'pasteAndMatchStyle' },
                        { role: 'delete' },
                        { role: 'selectAll' },
                        { type: 'separator' },
                        {
                            label: 'Speech',
                            submenu: [
                                { role: 'startSpeaking' },
                                { role: 'stopSpeaking' }
                            ]
                        }
                    ]
                    : [
                        { role: 'delete' },
                        { type: 'separator' },
                        { role: 'selectAll' }
                    ])
            ]
        },
        // { role: 'viewMenu' }
        {
            label: '视图',
            submenu: [
                { role: 'reload' },
                { role: 'forceReload' },
                { role: 'toggleDevTools' },
                { type: 'separator' },
                { role: 'resetZoom' },
                { role: 'zoomIn' },
                { role: 'zoomOut' },
                { type: 'separator' },
                { role: 'togglefullscreen' }
            ]
        },
        // { role: 'windowMenu' }
        {
            label: '窗口',
            submenu: [
                { role: 'minimize' },
                { role: 'zoom' },
                ...(isMac
                    ? [
                        { type: 'separator' },
                        { role: 'front' },
                        { type: 'separator' },
                        { role: 'window' }
                    ]
                    : [
                        { role: 'close' }
                    ])
            ]
        },
        {
            label: '帮助',
            submenu: [
                {
                    label: '了解更多',
                    click: async () => {
                        const { shell } = require('electron')
                        await shell.openExternal('https://electronjs.org')
                    }
                },
                {label: '哈哈'}
            ]
        }
    ]
    const appMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(appMenu);
}

