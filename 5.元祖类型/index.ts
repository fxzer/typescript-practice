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


type Tuple1 = [1, number];
let tuple1: Tuple1 = [1, 2];
tuple1[1] = 3; // ✅ OK:  元祖是可变的。

/* 只读元祖 */
type Tuple2 = readonly [1, number];
let tuple2: Tuple2 = [1, 2];
// tuple2[0] = 3; // ❌ Error: readonly 无法为“0”赋值，因为它是只读属性。


let tuple3 = tuple1; // 非只读 可以赋值给 只读的
// tuple1 = tuple3; // ❌ 只读的元组 不能赋值给 非只读的
// tuple3[0] = 3; // ❌  非只读 赋给 只读的 后，也变得只读了


// JS 合并两个数组
function concat(arr1, arr2) {
  return [...arr1, ...arr2]
}
const arrBine = concat([1], [2, 3]); // [1,2,3]

// TS 合并两个元组
type MyConcat<T extends any[], U extends any[]> = [...T, ...U];

type Result = MyConcat<[1], [2, 3]> // [1, 2, 3]  



/* readonly 的元组转为非 readonly */

type A = readonly [number, string];
type B = [...A]; // 变成了非 readonly 了

const b: B = [1, 'a']
b[0] = 2;



// JS 中用递归思想解决数组拍平问题
function flatten(arr) {
  if (arr.length === 0) return [];
  const [first, ...rest] = arr;
  if (Array.isArray(first)) {
      return [...flatten(first), ...flatten(rest)]
  }
  return [first, ...flatten(rest)];
}
const flatRes = flatten([1, [[2]]]); // [1, 2]


// TS 中用递归思想解决元组拍平问题
type Flatten<T extends any[]> = T extends [infer First, ...infer Rest]
  ? (First extends any[]
      ? [...Flatten<First>, ...Flatten<Rest>]
      : [First, ...Flatten<Rest>])
  : [];

type flatTuple = Flatten<[1, [12,[2]]]>; // [1,2]


/* 元组与索引与联合类型 */

type tupleStr = ['a', 'b', 'c'];
type A1 = tupleStr[0]; // 'a'
type B1 = tupleStr[1]; // 'b'

type tupleStr1 = ['a', 'b', 'c'];
type UnionStr = tupleStr1[number]; // 'a' | 'b' | 'c' 变成了联合类型
