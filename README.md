### Challenges I saw

1. So the primary issue was with the mis match versions of husky, prettier, and lint-staged with some node verson and due to this the husky was not firing pre-commit hook. So I tested it for various versions and in the section [Solutions and working versions](https://github.com/shadab14meb346/my-husky-project/edit/main/README.md#solutions-and-working-versions) have mentioned the working version.
2. Working on VS code the user settings needs to have prettier as a default formatter if it's not then it gives issues.

### Solutions and working versions

With node version `v14.15.0` and `v18.17.0` and the exact version mentioned below.
Have a close look the version is like `"4.3.0"` and not `"^4.3.0"`. Because you never know if we give greater or equal version it might not work.
So that's why I have it a exact version.

```json
   "husky": "4.3.0",
    "prettier": "2.8.0",
    "lint-staged": "13.1.0"
 ```
 
Regarding the VS code. What I have is something like below user settings.
With this setting any project I am working in and if that project have `.prettierrc.js file` then the VS code auto formatting will format the files as per the rules of `.prettierrc.js` and that's what ideally we want so that all team members are following the same formatting rules.
 
But with the husky and pre-commit settings we are also making sure that even if the developers formatting settings is not working properly then the pre-commit hook will make sure to format all of the code before a commit is made.
 
 ```json
 {
	"editor.fontSize": 18,
	"terminal.integrated.fontSize": 15,
	"editor.tabSize": 2,
	"editor.wordWrap": "on",
	"emmet.syntaxProfiles": {
		"javascript": "jsx",
		"xml": {
			"attr_quotes": "single"
		}
	},
	"extensions.autoUpdate": false,
	"liveSassCompile.settings.formats": [
		{
			"format": "compressed",
			"extensionName": ".min.css",
			"savePath": "/dist/css"
		}
	],
	"javascript.updateImportsOnFileMove.enabled": "always",
	"terminal.integrated.rendererType": "dom",
	"prettier.useTabs": true,
	"liveServer.settings.donotShowInfoMsg": true,
	"editor.formatOnType": false,
	"markdown.preview.lineHeight": 2.5,
	"[javascript]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[scss]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[html]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"editor.codeActionsOnSave": null,
	"tabnine.experimentalAutoImports": true,
	"editor.formatOnSave": false,
	"prettier.bracketSpacing": false,
	"bookmarks.navigateThroughAllFiles": true,
	"bookmarks.saveBookmarksInProject": true,
	"editor.minimap.enabled": true,
	"terminal.integrated.shell.linux": "/bin/bash",
	"typescript.updateImportsOnFileMove.enabled": "always",
	"javascript.preferences.quoteStyle": "single",
	"editor.renameOnType": true,
	"prettier.jsxBracketSameLine": true,
	"svg.preview.mode": "svg",
	"gitlens.gitCommands.closeOnFocusOut": true,
	"[jsonc]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"auto-close-tag.activationOnLanguage": [
		"xml",
		"php",
		"blade",
		"ejs",
		"jinja",
		"javascript",
		"javascriptreact",
		"typescript",
		"typescriptreact",
		"plaintext",
		"markdown",
		"vue",
		"liquid",
		"erb",
		"lang-cfml",
		"cfml",
		"HTML (EEx)",
		"HTML (Eex)",
		"plist"
	],
	"editor.semanticTokenColorCustomizations": null,
	"workbench.colorCustomizations": {
		"editorUnnecessaryCode.border": "#d30303"
	},
	"clockify.apiKey": "MWViOWU5MGItY2EzNi00NzUyLWJhN2YtODJiMTI4NTQ2ZmU5",
	"workbench.startupEditor": "welcomePage",
	"[javascriptreact]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"html.format.contentUnformatted": "",
	"workbench.editorAssociations": {
		"*.ico": "cweijan.officeViewer"
	},
	"cSpell.userWords": ["BANKNIFTY", "namaste", "quorilla"],
	"json.maxItemsComputed": 5000000000000000,
	"mssql.connections": [
		{
			"server": "{{put-server-name-here}}",
			"database": "{{put-database-name-here}}",
			"user": "{{put-username-here}}",
			"password": "{{put-password-here}}"
		}
	],
	"editor.formatOnPaste": false,
	"security.workspace.trust.untrustedFiles": "open",
	"editor.inlineSuggest.enabled": true,
	"files.autoSave": "afterDelay",
	"bracket-pair-colorizer-2.depreciation-notice": false,
	"terminal.integrated.profiles.osx": {
		"bash": {
			"path": "bash",
			"args": ["-l"],
			"icon": "terminal-bash"
		},
		"zsh": {
			"path": "zsh",
			"args": ["-l"]
		},
		"rosetta": {
			"path": "arch",
			"args": ["-x86_64", "zsh", "-l"],
			"overrideName": true
		}
	},
	"terminal.integrated.defaultProfile.osx": "rosetta",
	"git.confirmSync": false,
	"files.autoSaveDelay": 3000,
	"remote.SSH.remotePlatform": {
		"shadab14meb346.bill-split-slack.draft---lingering-shape.csb": "linux"
	},
	"npm.keybindingsChangedWarningShown": true,
	"github.copilot.enable": {
		"*": true,
		"plaintext": false,
		"markdown": true,
		"scminput": false,
		"yaml": true
	},
	"clockify.defaultWorkspaceId": "602eb1f5a5781056167e405b",
	"[python]": {
		"editor.formatOnType": true,
		"editor.defaultFormatter": "ms-python.python",
		"editor.formatOnSave": true
	},
	"terminal.integrated.env.osx": {},
	"console-ninja.featureSet": "Community",
	"window.zoomLevel": 1,
	"aws.resources.enabledResources": [
		"AWS::DynamoDB::GlobalTable",
		"AWS::DynamoDB::Table"
	],
	"diffEditor.ignoreTrimWhitespace": false
}
```

Below details are from the owner of the project from which I have taken a fork.

# Automate Pretitter using Git Commit Hooks with Husky

Demo for tutorial [How to Add Commit Hooks to Git with Husky to Automate Code Tasks](https://www.youtube.com/watch?v=tuzys2b1J70)

📝 Article: https://www.freecodecamp.org/news/how-to-add-commit-hooks-to-git-with-husky-to-automate-code-tasks/

📺 YouTube: https://www.youtube.com/watch?v=tuzys2b1J70

## More tutorials and walkthroughs

🐦 [Follow me on Twitter](https://twitter.com/colbyfayock)

📺 [Subscribe on YouTube](https://www.youtube.com/colbyfayock)

✉️ [Sign Up for My Newsletter](https://colbyfayock.com/newsletter)
