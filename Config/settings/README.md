## vscode ```settings.json```

```json
{
  // Editor config
  "editor.fontFamily": "Fira Code, Consolas, 'Courier New', monospace",
  "editor.fontSize": 12,
  "editor.fontLigatures": true,
  "editor.minimap.enabled": false,
  "editor.wordWrap": "on",
  "editor.suggestSelection": "first",
  "editor.multiCursorModifier": "ctrlCmd",
  "editor.formatOnPaste": true,
  "editor.renderWhitespace": "all",
  "editor.insertSpaces": false,
  "editor.detectIndentation": false,
  "editor.codeActionsOnSave": {
  "source.fixAll.eslint": true,
  "source.fixAll.stylelint": true
    },
  "files.insertFinalNewline": true,
  "workbench.iconTheme": "material-icon-theme",
  "workbench.colorTheme": "Community Material Theme Darker High Contrast",
  "workbench.editor.tabSizing": "shrink",
  "diffEditor.wordWrap": "on",
  "window.zoomLevel": 0,
  "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
  "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
  "atomKeymap.promptV3Features": true,
  "path-intellisense.extensionOnImport": true,

    // Git config
  "git.ignoreLegacyWarning": true,
  "git.confirmSync": false,
  "git.autofetch": true,
  "git.enableSmartCommit": true,
  "gitlens.gitCommands.closeOnFocusOut": true,
  "gitlens.advanced.messages": {
  "suppressGitVersionWarning": true
  },
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
  "remote.SSH.remotePlatform": {
        "development": "linux"
  },
}
```
## MacOs - vscode config
```json
{
    "editor.fontFamily": "'Fira Code'",
    "editor.fontSize": 13,
    "editor.fontWeight": "500",
    "editor.fontLigatures": true,
    "editor.wordWrap": "on",
    "editor.tabSize": 2,
    "editor.suggestSelection": "first",
    "editor.formatOnSave": false,
    "editor.formatOnType": false,
    "editor.minimap.enabled": false,
    "editor.formatOnPaste": true,
    // "editor.multiCursorModifier": "ctrlCmd",
    // "editor.renderWhitespace": "all",
    "editor.insertSpaces": false,
    "editor.detectIndentation": false,
    "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
      },
    "workbench.iconTheme": "material-icon-theme",
    "workbench.colorTheme": "Community Material Theme Darker High Contrast",
    "workbench.statusBar.feedback.visible": false,
    "workbench.editorAssociations": [],
		"workbench.editor.tabSizing": "shrink",
    // "terminal.integrated.fontFamily": "Fira Code",
    "terminal.integrated.shell.osx": "/bin/zsh",
    "terminal.integrated.fontSize": 14,
    "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
    "vsicons.dontShowNewVersionMessage": true,
    "breadcrumbs.enabled": true,
    "explorer.confirmDelete": false,
    "explorer.confirmDragAndDrop": false,
    "window.zoomLevel": 0,
    "files.autoSave": "onFocusChange",
    "liveServer.settings.donotShowInfoMsg": true,
    "liveSassCompile.settings.formats": [
        {
        "format": "expanded",
        "extensionName": ".css",
        "savePath": "./css"
        }
    ],

		"files.insertFinalNewline": true,
		"diffEditor.wordWrap": "on",
		"atomKeymap.promptV3Features": true,
		"path-intellisense.extensionOnImport": true,

    // Git config
    "git.ignoreLegacyWarning": true,
    "git.confirmSync": false,
    "git.autofetch": true,
    "git.enableSmartCommit": true,
    "gitlens.gitCommands.closeOnFocusOut": true,
    "gitlens.advanced.messages": {
    "suppressGitVersionWarning": true
    },

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
    "remote.SSH.remotePlatform": {
        "development": "linux"
  },
}
```
