/*
  type                                interface

  unions                            extends
  primistive                        declaration merging(声明合并)
  shorthand functions(函数简写)
  advanced type funcitons

*/

/*  === type === */
interface TPoint2D {
  x: number
  y: number
}

type TPoint3D = { z: number } & TPoint2D // 交叉类型

/*  === interface === */
interface IPoint2D {
  x: number
  y: number
}
interface IPoint3D extends IPoint2D { // 继承
  // x: number;
  // y: number;
  z: number
}

const point1: TPoint2D = { x: 1, y: 2 }
const point3: TPoint3D = { x: 1, y: 2, z: 3 }

const point2: IPoint2D = { x: 1, y: 2 }
const point4: IPoint3D = { x: 1, y: 2, z: 3 }

// 接口实现
class pointExample1 implements IPoint2D {
  x = 1
  y = 2
}
class pointExample implements IPoint3D {
  x = 1
  y = 2
  z = 3
}
