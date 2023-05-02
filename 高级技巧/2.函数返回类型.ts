const fn = () => 123;

type fnReturn = ReturnType<typeof fn>; // number

//type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
