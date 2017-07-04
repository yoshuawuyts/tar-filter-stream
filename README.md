# tar-filter-stream [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5]
[![downloads][8]][9] [![js-standard-style][10]][11]

PassThrough stream that only lets through tar archives

## Usage
```js
var tarFilterStream = require('tar-filter-stream')
var pump = require('pump')

pump(process.stdin, tarFilterStream(), process.stdout)
```

## API
### `stream = tarFilterStream()`
Create a new filter stream.

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/tar-filter-stream.svg?style=flat-square
[3]: https://npmjs.org/package/tar-filter-stream
[4]: https://img.shields.io/travis/yoshuawuyts/tar-filter-stream/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/tar-filter-stream
[6]: https://img.shields.io/codecov/c/github/yoshuawuyts/tar-filter-stream/master.svg?style=flat-square
[7]: https://codecov.io/github/yoshuawuyts/tar-filter-stream
[8]: http://img.shields.io/npm/dm/tar-filter-stream.svg?style=flat-square
[9]: https://npmjs.org/package/tar-filter-stream
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
