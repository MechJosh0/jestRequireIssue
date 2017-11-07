An example branch of how Jest does not work with aliases and variables together in a require.

## Jest test passes
Requiring a file with an alias.
```
const data = require('__data__/file.json');
```

Requiring a file with a variable.
```
const path = './../data/file.json';
const data = require(path);
```

## Jest test fails
Requiring a file with an alias and a variable. 
```
const fileName = 'file';
const data = require(`__data__/${fileName}.json`);
```
