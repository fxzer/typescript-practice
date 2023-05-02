type Padding1 = '8px' | '16px' | '24px' | string;
const padding1: Padding1 = '8px'; //没有提示

type Padding2 = '8px' | '16px' | '24px' | (string & {});
const padding2: Padding2 = '24px'; //有提示