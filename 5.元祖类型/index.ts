let arr: [number, string, boolean] = [1, '2', true]
arr.push('1')
console.log(arr)

/* 只读元祖 */
let readArr: readonly [number, string] = [1, '2']
// readArr.push(1) //只读数组不可修改

/* 可选元祖 */
let optionalArr: [number?, string?, boolean?] = [1, '2', true]
optionalArr.push(undefined)
optionalArr = [1, '2']
optionalArr = []


type idx0 = typeof arr[1] //string
type len = typeof arr.length //3
type lth = typeof arr['length'] //3