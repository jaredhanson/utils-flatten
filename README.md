# utils-flatten

[![Build](https://travis-ci.org/jaredhanson/utils-flatten.png)](http://travis-ci.org/jaredhanson/utils-flatten)
[![Coverage](https://coveralls.io/repos/jaredhanson/utils-flatten/badge.png)](https://coveralls.io/r/jaredhanson/utils-flatten)
[![Dependencies](https://david-dm.org/jaredhanson/utils-flatten.png)](http://david-dm.org/jaredhanson/utils-flatten)


Flattens an array.

## Install

    $ npm install utils-flatten

## Usage

```javascript
var arr = ['one', ['two', ['three', 'four'], 'five']];

flatten(arr);
// => ['one', 'two', 'three', 'four', 'five']
```

## Tests

    $ npm install
    $ npm test

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
