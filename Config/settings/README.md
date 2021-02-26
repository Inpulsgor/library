## vscode ```settings.json```

```json
{
    "remote.SSH.remotePlatform": {
      "develop": "linux"
    },
    "workbench.iconTheme": "material-icon-theme",
    "workbench.editor.tabSizing": "shrink",
    "atomKeymap.promptV3Features": true,
    // Editor config
    "editor.multiCursorModifier": "ctrlCmd",
    "editor.formatOnPaste": true,
    "editor.wordWrap": "on",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true,
      "source.fixAll.stylelint": true
    },
    "editor.renderWhitespace": "all",
    "editor.insertSpaces": false,
    "editor.detectIndentation": false,
    "files.insertFinalNewline": true,
    // Git config
    "git.ignoreLegacyWarning": true,
    "gitlens.advanced.messages": {
      "suppressGitVersionWarning": true
    },
    "git.confirmSync": false,
    "git.autofetch": true,
    "git.enableSmartCommit": true,
    "vetur.format.options.tabSize": 4,
    "vetur.format.options.useTabs": true,
    "[javascript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[vue]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[html]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[json]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[jsonc]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "path-intellisense.extensionOnImport": true,
    "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
    "window.zoomLevel": 0,
    "gitlens.gitCommands.closeOnFocusOut": true,
    "workbench.colorTheme": "Andromeda Italic",
    "editor.fontFamily": "FiraCode, Consolas, 'Courier New', monospace",
  }
```
## MacOs - vscode config
```json
{
    "workbench.iconTheme": "material-icon-theme",
    "editor.minimap.enabled": false,
    "window.zoomLevel": 0,
    "liveSassCompile.settings.formats": [
        {
        "format": "expanded",
        "extensionName": ".css",
        "savePath": "./css"
        }
],
"editor.wordWrap": "on",
"vsicons.dontShowNewVersionMessage": true,
"workbench.statusBar.feedback.visible": false,
"liveServer.settings.donotShowInfoMsg": true,
"editor.tabSize": 2,
"files.autoSave": "onFocusChange",
"editor.formatOnPaste": false,
"editor.formatOnSave": false,
"editor.formatOnType": false,
"[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"explorer.confirmDelete": false,
"editor.suggestSelection": "first",
"vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
"breadcrumbs.enabled": true,
"terminal.integrated.shell.osx": "/bin/zsh",
"editor.fontWeight": "500",
// "terminal.integrated.fontFamily": "Fira Code",
"editor.fontFamily": "'Fira Code'",
"editor.fontLigatures": true,
"terminal.integrated.fontSize": 14,
"editor.fontSize": 13,
"workbench.colorTheme": "Community Material Theme Darker High Contrast",
"explorer.confirmDragAndDrop": false
}
```
