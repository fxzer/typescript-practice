/* 发请求 泛型应用 */

const request = {
  get<T>(url: string): Promise<T> {
    return new Promise((resolve, reject) => {
      let xhr: XMLHttpRequest = new XMLHttpRequest()
      xhr.open('GET', url, true)
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          resolve(JSON.parse(xhr.responseText))
        }
      }
      xhr.send(null)
    })
  }
}
interface Data {
  message: string,
  code: number
}
request.get<Data>('./data.json').then(res => {
  console.log('res', res);
})
