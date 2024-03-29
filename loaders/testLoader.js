//将const 替换为var ;
const UglifyJs = require('uglify-js') ;
module.exports = function (source) { 

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
    return this.data.value + ncode ;

}


// loader 的前置钩子
module.exports.pitch = (rRequest, pRequest,data)=>{
    console.log("TCL: module.exports.pitch -> 执行了前置钩子")
    data.value = "//前置的钩子 " ;     
}
