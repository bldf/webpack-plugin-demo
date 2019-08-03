//将const 替换为var ;
const UglifyJs = require('uglify-js') ;
module.exports = function (source:string) { 
     var topLevel = UglifyJs.parse(source) ; // topLevel : 就是语法树
     
     var transform = UglifyJs.TreeTransformer(node=>{
         if(node )
     }); 
    // 这里的source代表的是源代码
    // return `function(){return ${source}}` ;
    // return  ('console.log( '+source +')'); 
    return this.data.value + source ;

}


// loader 的前置钩子
module.exports.pitch = (rRequest, pRequest,data)=>{
    console.log("TCL: module.exports.pitch -> 执行了前置钩子")
    data.value = "//前置的钩子 " ;     
}
