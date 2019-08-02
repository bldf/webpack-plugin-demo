

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

     */
    apply(compiler){
        // compiler.plugin('webpacksEventHook',(compilation,callback)=>{
        //     console.log('这是一个测试的plugin例子')
        //     callback() ;// 功能完成后调用 。 webpack提供的回调。
        // })
        compiler.hooks.emit.tap('MyPlugin', compilation => {

        // compiler.hooks.emit.tap('MyPlugin', params => {
            console.log('我会在生成资源到 output 目录之前执行')
          })

    }
}

module.exports = TestPlugin ; 