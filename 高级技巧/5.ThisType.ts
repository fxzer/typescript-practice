type MathCustom = {
  double(): void,
  half(): void
}

const mathCustom: MathCustom = {
  double(this: { value: number }) {
    this.value *= 2;
  },
  half(this: { value: number }) {
    this.value /= 2;
  },
}
// 不想重复写 this: { value: number }，可以使用 ThisType
// ThisType<T> 用于指定 this 的类型为 T
const mathCustom2: MathCustom & ThisType<{ value: number }> = {
  double() {
    this.value *= 2;
  },
  half() {
    this.value /= 2;
  },
}

const obj = {
  value: 10,
  ...mathCustom2
}

obj.double();
console.log(obj.value); // 20
obj.half();
console.log(obj.value); // 10