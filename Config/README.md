## .prettierrc
```js
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "arrowParens": "avoid",
  "proseWrap": "always"
}
```

## jsconfig.json

```json
{
    "compilerOptions": {
        "baseUrl": "src"
    },
    "include": [
        "src"
    ]
}
```

## .env.local
```js
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=
```

## firebaseConfig.js
```js
import firebase from "firebase";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
```
## settings.json (vscode config)

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
