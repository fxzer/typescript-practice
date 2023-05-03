// 1.ECMAScript Number Date RegExp XMLHttpRequest
// 2.DOM querySelect MouseEvent
// 3.BOM promise localStorage location cookie

let num: Number = new Number()
num = 123;
// num = '123' //报错

let date: Date = new Date();
let reg: RegExp = new RegExp(/\s/g);
let error: Error = new Error('类型错误!');
let xhr: XMLHttpRequest = new XMLHttpRequest()

/* DOM */
let div = document.querySelector('div');  //Element HTMLElement
let divs = document.querySelectorAll('div'); //NodeList NodeListOf<Element> NodeListOf<HTMLElement> NodeListOf
let input = document.querySelector('input'); //HTMLInputElement

/* BOM */
let local:Storage = localStorage;
let locat:Location = window.location;
let proms:Promise<number> = new Promise((resolve,reject)=>{
  resolve(123)
})
let cook:string = document.cookie; //特殊