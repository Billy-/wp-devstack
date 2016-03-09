# A dev stack for building Wordpress themes with Sass and Browserify

### Compiles SASS, JS and deploys to your local wp install.

### Includes a watch task.

## Usage:

You will probably only need to use one or two commands:

- **gulp deploy** - Compiles and deploys themes to your local wp themes directory
- **gulp watch** - Runs gulp deploy then watches for file changes

Here are the rest in case you want to use them:

- **gulp sass** - compiles SASS
- **gulp js** - compiles JS
- **gulp compile** - compiles SASS & JS
- **gulp deploysass** - compile and deploy SASS
- **gulp deployjs** - compile and deploy JS
- **gulp deployother** - deploy anything else (e.g PHP files)
- **gulp clean** - removes compiled items from the cache

## Config file:

The config file in the root directory contains all the default configuration options. Here it is with comments for reference.

```js
{
	// The folder where your theme source files are
	// This option is not overidden by theme config files
	"source": "themes",

	// Glob pattern for sass compiler
	"compileSass": ["**/*.scss", "!**/_*.scss"],

	// Js only bundles one file at the moment
	"compileJs": "app.js",

	// Glob patterns for deploy tasks
	"deployCss": "**/*.css",
	"deployJs": "**/*.js",
	"deployOther": ["**/*", "!app.js", "!config.json", "!js", "!js/*", "!sass", "!**/*.scss"],

	// Destination for deply task
	"deployDest": "../xampp/htdocs/wp-content/themes/",

	// Glob patterns for watch tasks
	"watchSass": "**/*.scss",
	"watchJs": "**/*.js",
	"watchOther": ["**/*", "!app.js", "!js/*", "!**/*.scss"]
}
```

You can add a config file in your theme directory to set properties for that theme only. Note that the entire property will be overwritten
