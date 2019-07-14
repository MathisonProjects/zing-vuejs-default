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

if (env == 'both' || env == 'js') {
	mix.js(['build/app.js'], 'dist/public/js/bundle.js');
}

if (env == 'both' || env == 'css') {
	mix.sass('sass/app.scss', 'dist/public/scss');
	// .sass('sass/app.cerulean.scss' , 'dist/public/scss')
	// .sass('sass/app.cosmo.scss'    , 'dist/public/scss')
	// .sass('sass/app.cyborg.scss'   , 'dist/public/scss')
	// .sass('sass/app.darkly.scss'   , 'dist/public/scss')
	// .sass('sass/app.flatly.scss'   , 'dist/public/scss')
	// .sass('sass/app.journal.scss'  , 'dist/public/scss')
	// .sass('sass/app.litera.scss'   , 'dist/public/scss')
	// .sass('sass/app.lumen.scss'    , 'dist/public/scss')
	// .sass('sass/app.lux.scss'      , 'dist/public/scss')
	// .sass('sass/app.materia.scss'  , 'dist/public/scss')
	// .sass('sass/app.minty.scss'    , 'dist/public/scss')
	// .sass('sass/app.pulse.scss'    , 'dist/public/scss')
	// .sass('sass/app.sandstone.scss', 'dist/public/scss')
	// .sass('sass/app.simplex.scss'  , 'dist/public/scss')
	// .sass('sass/app.sketchy.scss'  , 'dist/public/scss')
	// .sass('sass/app.slate.scss'    , 'dist/public/scss')
	// .sass('sass/app.solar.scss'    , 'dist/public/scss')
	// .sass('sass/app.spacelab.scss' , 'dist/public/scss')
	// .sass('sass/app.superhero.scss', 'dist/public/scss')
	// .sass('sass/app.united.scss'   , 'dist/public/scss')
	// .sass('sass/app.yeti.scss'     , 'dist/public/scss');
}
