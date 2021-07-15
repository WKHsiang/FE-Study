// 高阶函数-函数作为参数

function foreach (arr, fn) {
    let len = arr.length
    for (let i = 0; i < len; i++) {
        fn(arr[i])
    }
}

// 测试
// let arr = [1, 2, 4, 8, 16]

// foreach(arr, function(n) {
//     console.log(n)
// })

function filter (arr, fn) {
    let len = arr.length
    let resultArr = []
    for (let i = 0; i < len; i++) {
        if (fn(arr[i])) {
            resultArr.push(arr[i])
        }
    }
    return resultArr
}

// 测试
let arr = [1, 2, 4, 8, 16]
let fResult = filter(arr, function (n) {
    return n < 8
})
console.log(fResult)