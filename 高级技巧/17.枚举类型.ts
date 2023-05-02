enum EColor {
  Green,
  Blue
}
console.log(EColor.Green); // 0 
console.log(EColor.Blue); // 1
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
  Blue = 2
}
