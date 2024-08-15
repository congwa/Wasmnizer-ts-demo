

// 导入的函数声明
declare function jsFunction(message: string): void;

// 在 WASM 中调用 HTML 的全局函数
export function callJSFromWasm() {
  jsFunction("Hello from WASM!");
}

function add(num1: number, num2: number): number {
   return num1 + num2;
}

export function addFromWasm(num1: number, num2: number): number {
    return add(num1, num2);
}
