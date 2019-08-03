// let acorn = require("acorn");
// console.log(acorn.parse("1 + 1"));
// console.log(acorn.parse("var a = 23 ; "));



const acorn = require("acorn")
const walk = require("acorn-walk")
 
var abc = walk.simple(acorn.parse("const x = 10"), {
  Literal(node) {
    console.log("TCL: Literal -> node", node)
    console.log(`Found a literal: ${node.value}`)
    return ';lkjda;lkjfds;lkjdasf;lkjdasflk;jfdaslkj;dsf'
  }
})
console.log("TCL: abc", abc)
