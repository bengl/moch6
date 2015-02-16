require('./moch6')


describe `it6` (() => {
    it `works on node ${process.version}` ()
    it `works quite well` (() => console.assert(true))
})


describe('it', function(){
    it('also works fine');
    it('works quite well actually', function(){
        console.assert(true);
    });
});
