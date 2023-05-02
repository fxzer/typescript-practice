type Square = {
  type :'square',
  size:number
}
type Rectangle = {
  type :'rectangle',
  width:number,
  height:number
}

type Shape = Square | Rectangle;

const shapes:Shape[] = [
  {type:'square',size:10},
  {type:'rectangle',width:10,height:20}
]

const square = shapes.find(shape => shape.type === 'square');
// square?.size //  类型“Rectangle”上不存在属性“size”。


// 为了解决这个问题，我们可以使用类型守卫来区分类型
function isSquare(shape:Shape):shape is Square{
  return shape.type === 'square';
}

const square2 = shapes.find(isSquare);
square2?.size // number | undefined