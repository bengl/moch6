let funcs = ['it', 'describe', 'context']
let is = ...argst s => obj => typeof obj === String.raw(...args)

let replacement = oldFunc => function(a, b) {
    if (is`string`(a) && (is`function`(b) || is`undefined`(b)))
        return oldFunc(...arguments)
    return f => oldFunc(String.raw(...arguments), f)
}

for (let func of funcs) {
    let oldFunc = global[func]
    global[func] = replacement(oldFunc)
    global[func].skip = replacement(oldFunc.skip)
    global[func].only = replacement(oldFunc.only)
}
