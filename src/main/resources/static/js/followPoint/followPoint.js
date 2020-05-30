/**
 *  wangedtor富文本框中，光标位置插入列表（待完善）
 *  
 *  主要逻辑： 
 *  1 设置锚点：在光标处添加 point
 *  2 主动触发point的click事件，获取其在页面中的位置
 *  3 根据获取到的锚点位置，定位需要插入的节点
 */

define(['jquery', 'wangEditor'],function ($, E){
	 var editor = initWangEditor('new-editor');
	 
     function initWangEditor(id){
    	 var editor = new E('#' + id);
         // 配置
    	 editor.customConfig.onchange = function (html) {
    		 initAnchorPoint();
    		 // 设置锚点
    		 setAnchorPoint();
    	 }
    	 
    	 editor.create();
         return editor;
     }
     
     /*
      *  初始化锚点
      */
     function initAnchorPoint(){
    	 $('.new-editor').on('click', '.anchor-point', function (event){
    		  // 相对document的位置
    		  var docTop = $(this).offset().top;
    		  var docLeft = $(this).offset().left;
    		  
    		  // 相对父元素位置
    		  var pTop = $('.anchor-point').position().top;
    		  var pLeft = $('.anchor-point').position().left;
    		  
    		  var pWidth = $('.anchor-point').parent().width();
    		  
    		  $('.issue-list').css({
    			  top: docTop + 20,
    			  left: docLeft + 20
    		  })
    	 })
     }
     
     /*
      *  设置锚点
      */
     function setAnchorPoint(){
    	 if( window.getSelection){
    		$('.anchor-point').remove();
 			var sel = window.getSelection();
 			if(sel.getRangeAt && sel.rangeCount){
 				let range = window.getSelection().getRangeAt(0);
 				var lastNode = range.endContainer;
 				range.insertNode($('<span class="anchor-point"></span>')[0]);
 			}
 		}
    	// 初始化锚点点击事件 获取锚点坐标
    	$('.anchor-point').trigger('click');
     }
})