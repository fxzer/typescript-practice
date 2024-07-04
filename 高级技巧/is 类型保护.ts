// 在函数中检查一个变量是否属于特定类型
function isString(value: string | number): value is string {
	return typeof value === "string";
}

let value: string | number = "Hello TypeScript";

if (isString(value)) {
	console.log(value.toUpperCase()); // 正常工作
} else {
	console.log((value as number).toFixed(2)); // 正常工作
}
