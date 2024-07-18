/* typeof  */
function padLeft(value: string | number, padding: string | number): string {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value
  }
  if (typeof padding === 'string') {
    return padding + value
  }
  throw new Error(`'${typeof padding}'.`)
}

/* instanceof */
class Dog {
  bark() {
    console.log('Woof!')
  }
}

class Cat {
  meow() {
    console.log('Meow!')
  }
}

function makeNoise(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark()
  }
  else if (animal instanceof Cat) {
    animal.meow()
  }
}

/* in  */
interface Car {
  drive: () => void
}

interface Boat {
  sail: () => void
}

function moveVehicle(vehicle: Car | Boat) {
  if ('drive' in vehicle) {
    vehicle.drive()
  }
  else {
    vehicle.sail()
  }
}

/* 字面量类型守卫 */
type Pet = 'cat' | 'dog'

function getPetSound(pet: Pet) {
  if (pet === 'cat') {
    return 'Meow'
  }
  else if (pet === 'dog') {
    return 'Woof'
  }
}

/* 自定义类型保护 */
interface Bird {
  fly: () => void
}

interface Fish {
  swim: () => void
}

function isBird(pet: Bird | Fish): pet is Bird {
  return (pet as Bird).fly !== undefined
}

function move(pet: Bird | Fish) {
  if (isBird(pet)) {
    pet.fly() // 在这个块中，TypeScript 知道 pet 是 Bird 类型
  }
  else {
    pet.swim() // 在这个块中，TypeScript 知道 pet 是 Fish 类型
  }
}

/* 复杂案例自定义保护 */
interface Square {
  kind: 'square'
  size: number
}

interface Rectangle {
  kind: 'rectangle'
  width: number
  height: number
}

interface Circle {
  kind: 'circle'
  radius: number
}

export type Shape = Square | Rectangle | Circle

function isSquare(shape: Shape): shape is Square {
  return shape.kind === 'square'
}

function isRectangle(shape: Shape): shape is Rectangle {
  return shape.kind === 'rectangle'
}

export function area1(shape: Shape): number {
  if (shape.kind === 'square') {
    return shape.size * shape.size
  }
  else if (shape.kind === 'rectangle') {
    return shape.width * shape.height
  }
  else {
    return Math.PI * shape.radius * shape.radius
  }
}
export function area2(shape: Shape): number {
  if (isSquare(shape)) {
    return shape.size * shape.size
  }
  else if (isRectangle(shape)) {
    return shape.width * shape.height
  }
  else {
    // 在这个块中，TypeScript 知道 shape 是 Circle 类型
    return Math.PI * shape.radius * shape.radius
  }
}
