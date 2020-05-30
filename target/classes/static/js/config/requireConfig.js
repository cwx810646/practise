/**
 *  require的配置文件
 */
require.config({
	//baseUrl: '../js', 两种配置方式，项目根路径和静态资源根路径
	baseUrl: '/practise/js', 
	
	waitSeconds: 0,
	
	paths: {
		// 第三方
		css: '../asserts/cssmin/css.min',
		jquery: '../asserts/jquery/jquery.1.11.1',
		wangEditor: '../asserts/wangEditor-3.0.10/release/wangEditor.min',
	    
		// 自定义
	    followPoint: 'followPoint/followPoint'
	},
	shim: {
		
	}
})