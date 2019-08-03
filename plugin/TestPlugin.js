const fs = require('fs') ; 

class TestPlugin{
    constructor(options = {}){
            this.options = options ;
    }
    /**
     * http://www.wclimb.site/2019/06/21/webpack%E7%B3%BB%E5%88%97%E4%B9%8B%E7%BC%96%E5%86%99%E4%B8%80%E4%B8%AAplugin/#more
     compiler : 对象， 代表了完整的webpack 环境配置， 这个在启动webpack的时候， 被一次建立 
                启动　webpack 的时候创建
     compilation:  当使用中间件的时候，当前检测到文件发生变化的时候， 被 调用。 
    
     compiler 和 compilation 的区别 
         
        compiler 包含了 webpack  从启动到结束 
        compilation  每次编译都会重新创建
****************   Begin     webpack 核心是使用 tapable（创建各种各样的钩子的库） 这个库区实现的  ******************************
        const {
	SyncHook, // 不关心返回值
	SyncBailHook,// 关心返回值
	SyncWaterfallHook,//上一个函数的返回值，可以给下一个用
	SyncLoopHook,// 如果返回true, 就反复执行
	AsyncParallelHook,// 异步执行， 不关心返回值
	AsyncParallelBailHook,//异步执行， 关心返回值
	AsyncSeriesHook,
	AsyncSeriesBailHook,
	AsyncSeriesWaterfallHook
 } = require("tapable");

链接：https://juejin.im/post/5c5d96a1e51d457fc0574181
tap 就是订阅的意思。和mui中的  tap点击事件意思差不多
****************       webpack 核心是使用 tapable 这个库区实现的  End ******************************
     */
    apply(compiler){
        // compiler.plugin('webpacksEventHook',(compilation,callback)=>{
        //     console.log('这是一个测试的plugin例子')
        //     callback() ;// 功能完成后调用 。 webpack提供的回调。
        // })
        compiler.hooks.emit.tap('MyPlugin', (compilation,callback) => {
            
            let template =  fs.readFileSync(this.options.template,'UTF-8') ; // 读取文件
            compilation.assets[this.options.filename || 'test.js'] = {
                source:()=>template ,
                size:()=>template.length
            }
        
            console.log('我会在生成资源到 output 目录之前执行')


               // 这里是新加的
      let source = compilation.assets['index.html'].source();
      source = source.replace(
        /<\/(.*?)>(.*?)<\/body>$/m,
        `</$1><script src="${this.options.filename ||
          'test.js'}"></script></body>`,
      );

      compilation.assets['index.html'] = {
        source: function() {
          return source;
        },
        size: function() {
          return source.length;
        },
      };



            // callback();
          })

    }
}

module.exports = TestPlugin ; 