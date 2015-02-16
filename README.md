# moch6

**`moch6`** is a quick and simple addition to [`mocha`](http://mochajs.org/) to add a little DSL sugar, using ES6 template strings.

Once this module is required, you can use any of `mocha'`s global functions as tags. This is probably best described with an example.

```javascript
// before...
describe('something', function() {
    it('should work on node version '+process.version, function(){
        // ...
    })
})

// after ...
require('moch6')
describe `something` (()=>{
    it `should work on node version ${process.version}` (()=>{
        // ...
    })
})
```

Note that this will only work in an ES6 environment supporting template strings, (and in the example, fat-arrow functions), such as [`babel`](https://babeljs.io/) or [`traceur`](https://github.com/google/traceur-compiler).


### License

See LICENSE.txt
