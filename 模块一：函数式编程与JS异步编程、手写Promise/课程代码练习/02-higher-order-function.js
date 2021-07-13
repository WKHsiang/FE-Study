function once(fn) {
    let flag = false
    return function () {
        if(!flag) {
            flag = true
            return fn.apply(this, arguments)
        }
    }
}

let pay = once(function (n) {
    console.log(n)
})
pay(6)