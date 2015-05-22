gulp          = require 'gulp'
$             = require('gulp-load-plugins')()
$.browserSync = require 'browser-sync'
$.karma       = require('karma').server

karmaConfig =
  configFile  : __dirname + '/karma.conf.coffee'
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
    'app/**/*.coffee'
    'tests/specs/**/*.coffee'
  ]

fixtureFiles = [
  'app/**/*.json'
]

configs =
  coffeeFiles   : 'app/**/*.coffee'
  jadeFiles     : 'app/**/*.jade'
  scssFiles     : 'app/**/*.scss'
  specFiles     : 'tests/specs/**/*.coffee'
  tempFolder    : '.tmp'
  appFolder     : 'app'
  distFolder    : 'dist'
  karma         : karmaConfig
  fixtureFiles  : fixtureFiles
  coverageReporter:
    type: 'lcov'
    dir: 'coverage'

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
]

for task in tasks
  module = require('./node_modules/appirio-gulp-tasks/tasks/' + task)
  module gulp, $, configs

gulp.task 'default', ['clean'], ->
  gulp.start 'build'

