// 1.ECMAScript Number Date RegExp XMLHttpRequest
// 2.DOM querySelect MouseEvent
// 3.BOM promise localStorage location cookie

// let num: number = new Number() // ❌
//
// eslint-disable-next-line import/no-mutable-exports
export let num = 12
num = 123

const date = new Date() // Date
const reg = /\s/g // RegExp
const error = new Error('类型错误!') // Error
const xhr = new XMLHttpRequest() // XMLHttpRequest

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
