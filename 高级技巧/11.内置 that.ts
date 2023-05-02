type Persons = Record<string,{age:number,height:number}>;
const persons:Persons = {};
persons['tom'] = {age:18,height:180};
persons['jerry'] = {age:19,height:170};

// persons['jack'] = {age:20}; //类型 "{ age: number; }" 中缺少属性 "height"，