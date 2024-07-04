// 字符串、数字枚举、异构枚举、接口枚举
enum EColor {
  Green,
  Blue,
}
console.log(EColor.Green) // 0
console.log(EColor.Blue) // 1
/*
enum EColor {
  Purple,
  Green,
  Blue
}
若在前面插入一项，则后面的项的值都会改变
*/

/* 通过指定所对应的值类避免这一问题 */
enum EColor1 {
  Purple = 0,
  Green = 1,
  Blue = 2,
}

/* 异构枚举 */
enum YesOrNo {
  No = 0,
  Yes = 'YES',
}

/* 接口枚举 */

interface IEnum {
  primary: EColor.Blue
}

const theme: IEnum = {
  // primary:'123' //类型“"123"”的参数不能赋给类型“EColor.Blue”的参数。
  // primary:EColor.Green //类型“EColor.Green”的参数不能赋给类型“EColor.Blue”的参数。
  primary: EColor.Blue,
}

/* 反向映射 */
console.log(EColor[0]) // Green
console.log(EColor.Blue) // 1
