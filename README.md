# Description
An example branch of how Jest does not work with aliases and variables together in a require.

# Tests
There are three tests that run, each one being a different way to require a json file.
```
npm run test
```

# tl;dr run

### Jest test passes
Requiring a file with an alias.
```
const data = require('__data__/file.json');
```

Requiring a file with a variable.
```
const path = './../data/file.json';
const data = require(path);
```

### Jest test fails
Requiring a file with an alias and a variable. 
```
const fileName = 'file';
const data = require(`__data__/${fileName}.json`);
```
