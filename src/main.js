import { setWasmMemory, importObject } from "../lib/import_object.js";
import init from "../wasm/index.wasm?init";

// 定义一个全局 JavaScript 函数，供 WASM 调用
function jsFunction(message) {
    alert('wasm中传递来的消息:' + message);  // 这里可以是任意的 JavaScript 逻辑
  }
export function run_wasm_module() {

    importObject.env.jsFunction = jsFunction
    init(importObject).then((instance) => {
        setWasmMemory(instance.exports.default);
        instance.exports.callJSFromWasm();
        let addFromWasmResult = instance.exports.addFromWasm(35, 1);
        alert(`wasm中的addFromWasm(35, 1)方法 = ${addFromWasmResult}`);
    })
   
}
