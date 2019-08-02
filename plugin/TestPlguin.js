

class TestPlugin{
    constructor(){

    }
    /**
     * http://www.wclimb.site/2019/06/21/webpack%E7%B3%BB%E5%88%97%E4%B9%8B%E7%BC%96%E5%86%99%E4%B8%80%E4%B8%AAplugin/#more
     compiler : 对象， 代表了完整的webpack 环境配置， 这个在启动webpack的时候， 被一次建立
     */
    apply(compiler){
        compiler.plugin('webpacksEventHook',(compilation,callback)=>{
            console.log('这是一个测试的plugin例子')
            callback() ;// 功能完成后调用 。 webpack提供的回调。
        })

    }
}