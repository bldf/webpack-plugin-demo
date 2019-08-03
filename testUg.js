const UglifyJs = require('uglify-js') ;
let  source = "var abc = 23 ;"
UglifyJs.parse
var topLevel = UglifyJs.parse(source) ; // topLevel : 就是语法树
console.log("TCL: topLevel", topLevel)
var transform = UglifyJs.TreeTransformer(node=>{
console.log("TCL: node", node)
   //  if(node instanceof UglifyJs.AS )
   return node  ;
}); 
// 这里的source代表的是源代码
// return `function(){return ${source}}` ;
// return  ('console.log( '+source +')'); 
topLevel.transform(transform) ;// 遍历AST树

var ncode = topLevel.print_to_string() ;