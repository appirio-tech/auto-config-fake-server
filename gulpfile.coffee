configs =
  coffeeFiles   : 'app/**/*.coffee'
  jadeFiles     : 'app/**/*.jade'
  scssFiles     : 'app/**/*.scss'
  specFiles     : 'tests/specs/**/*.coffee'
  tempFolder    : '.tmp'
  appFolder     : 'app'
  distFolder    : 'dist'

configs.karma =
  coverage    : 'app/**/*.coffee'
  # Dont include coverage files
  coffeeFiles : [
    'tests/swagger.coffee'
    'tests/helper.coffee'
    'tests/specs/**/*.coffee'
  ]
  files: [
    'tests/swagger.coffee'
    'tests/helper.coffee'
    'bower_components/sinon/index.js'
    'app/**/*.coffee'
    'tests/specs/**/*.coffee'
  ]

configs.buildFiles =
  copy: [
    '.tmp/scripts/**.*'
  ]

configs.fixtureFiles = [
  'app/**/*.json'
]

configs.coverageReporter =
  type: 'lcov'
  dir: 'coverage'

##
## Normally, you wouldnt need to edit below this line ##
##

gulpTaskPath             = './node_modules/appirio-gulp-tasks'
configs.karma.configFile = __dirname + '/' + gulpTaskPath + '/karma.conf.coffee'
configs.karma.basePath   = __dirname
pluginsPath              = gulpTaskPath + '/node_modules/gulp-load-plugins'
browserSyncPath          = gulpTaskPath + '/node_modules/browser-sync'
karmaPath                = gulpTaskPath + '/node_modules/karma'

gulpLoadPluginsOptions =
  config: __dirname + '/' + gulpTaskPath + '/package.json'

gulp          = require 'gulp'
plugins       = require pluginsPath
$             = plugins gulpLoadPluginsOptions
$.browserSync = require browserSyncPath
$.karma       = require(karmaPath).server

tasks = [
  'coffee'
  'jade'
  'scss'
  'clean'
  'serve'
  'build'
  'test'
  'ng-constant'
  'coveralls'
  'fixtures'
  'template-cache'
]

for task in tasks
  module = require(gulpTaskPath + '/tasks/' + task)
  module gulp, $, configs

gulp.task 'default', ['clean'], ->
  gulp.start 'build'

