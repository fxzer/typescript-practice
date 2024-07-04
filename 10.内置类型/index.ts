// 1.ECMAScript Number Date RegExp XMLHttpRequest
// 2.DOM querySelect MouseEvent
// 3.BOM promise localStorage location cookie

let num: number = new Number()
num = 123
// num = '123' //报错

const date: Date = new Date()
const reg: RegExp = new RegExp(/\s/g)
const error: Error = new Error('类型错误!')
const xhr: XMLHttpRequest = new XMLHttpRequest()

/* DOM */
const div = document.querySelector('div') // Element HTMLElement
const divs = document.querySelectorAll('div') // NodeList NodeListOf<Element> NodeListOf<HTMLElement> NodeListOf
const input = document.querySelector('input') // HTMLInputElement

/* BOM */
const local: Storage = localStorage
const locat: Location = window.location
const proms: Promise<number> = new Promise((resolve, reject) => {
  resolve(123)
})
const cook: string = document.cookie // 特殊
