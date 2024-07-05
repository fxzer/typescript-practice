type age = number
type height = number

export const a: age = 18
const h: height = 180
function printInfo(age: age, height: height) {
  console.log(age, height)
}

printInfo(a, h)
printInfo(h, a)

/* =========================== */

  type _age = number & { _: '_age' }
  type _height = number & { _: '_height' }

function printInfo1(age: _age, height: _height) {
  console.log(age, height)
}

const makeAge = (age: number) => age as _age
const makeHeight = (height: number) => height as _height
const _a: _age = makeAge(18)
const _h: _height = makeHeight(180)
printInfo1(_a, _h)
//  printInfo1(_h, _a); // error
