const mix = require('laravel-mix');
const { env } = require('minimist')(process.argv.slice(5));

if (process.env.MIX_CUSTOM == 'true') {
	var alias = {
		'@custom' : __dirname + '/../'+process.env.MIX_FOLDER,
		'@store'  : __dirname + '/build/stores/index.js' ,
		'@route'  : __dirname + '/build/build/router.js' ,
		'@'       : __dirname + '/build'
	};
} else {
	var alias = {
		'@custom' : __dirname + '/build/helpers/modules/default.js',
		'@store'  : __dirname + '/build/stores/index.standalone.js' ,
		'@route'  : __dirname + '/build/build/routers/index.standalone.js' ,
		'@'       : __dirname + '/build'
	}
}

mix.webpackConfig({
	resolve: {
		alias: alias
	},
})

node: {
  fs: 'empty'
}

mix.copy('src/js', 'dist/public/js');
mix.copy('src/images', 'dist/public/images');
mix.copy('src/sound', 'dist/public/sound');
mix.copy('src/index.html', 'dist/public/');


if (env == 'both' || env == 'js') {
	mix.js(['build/app.js'], 'dist/public/js/bundle.js');
}

if (env == 'both' || env == 'css') {
	if (process.env.MIX_CSSSTYLE == 'default') {
		mix.sass('src/sass/app.scss', 'dist/public/scss');
	} else {
		mix.sass('src/sass/app.'+process.env.MIX_CSSSTYLE+'.scss' , 'dist/public/scss/app.css');
	}
	mix.sass('src/sass/app.'+process.env.MIX_DARKCSSSTYLE+'.scss' , 'dist/public/scss/app.dark.css');
}
