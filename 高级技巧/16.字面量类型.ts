let str1 : 'hello world'
// str1 = 'hello world ' // 报错

let str2 : `${string} world`
// str2 = 'hello world ' // 报错

let str3 : `hello ${string}`
str3 = 'hello world ' // 不报错
// str3 = ' hello world ' // 报错


type Size = 'small' | 'medium' | 'large'
type Color = 'red' | 'green' | 'blue'
type Style = `${Size} ${Color}`

let style : Style = 'small red'
// style = 'small pink' // 报错