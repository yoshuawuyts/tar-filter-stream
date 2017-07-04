var path = require('path')
var pump = require('pump')
var tape = require('tape')
var fs = require('fs')

var filter = require('../')

tape('allows tar archives', function (assert) {
  assert.plan(1)

  var source = fs.createReadStream(path.join(__dirname, 'archive.tgz'))
  var sink = fs.createWriteStream('/dev/null')
  pump(source, filter(), sink, function (err) {
    assert.ifError(err, 'no error')
  })
})

tape('blocks all other archives', function (assert) {
  assert.plan(2)

  var source = fs.createReadStream(path.join(__dirname, '../README.md'))
  var sink = fs.createWriteStream('/dev/null')
  pump(source, filter(), sink, function (err) {
    assert.ok(err, 'should return an error')
    assert.equal(err.code, 'ENOTAR', 'err should have a code')
  })
})
