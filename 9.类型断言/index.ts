// window.abc = 123;// 会报错，因为window上没有abc属性
(window as any).abc = 123 // 不会报错，因为as any可以断言为任意类型
