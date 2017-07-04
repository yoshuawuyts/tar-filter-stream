var peek = require('peek-stream')
var through = require('through2')
var isTar = require('is-tar')

var TAR_HEADER_LENGTH = 262

module.exports = tarFilterStream

function tarFilterStream () {
  var opts = {
    newline: false,
    maxBuffer: TAR_HEADER_LENGTH
  }
  return peek(opts, function (data, swap) {
    if (isTar(data)) return swap(null, through())

    // Did not match
    var err = new Error('ENOTAR')
    err.code = 'ENOTAR'
    swap(err)
  })
}
