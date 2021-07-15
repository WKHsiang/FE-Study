// 模拟常用的高阶函数：map、every、some

// map
function map (arr, fn) {
    let len = arr.length
    let result = []
    for (let i = 0; i < len; i++) {
        result.push(fn(arr[i]))
    }
    return result
}

// every
function every (arr, fn) {
    let len = arr.length
    for (let i = 0; i < len; i++) {
        if(!fn(arr[i])) return false
    }
    return true
}

let arr = [2, 5, 7, 9, 1, 6]

console.log(some(arr, n => n > 10))

// some
function some (arr, fn) {
    let len = arr.length
    for (let i = 0; i < len; i++) {
        if(fn(arr[i])) return true
    }
    return false
}