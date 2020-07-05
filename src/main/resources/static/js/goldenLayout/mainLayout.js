/**
 * goldenLayout.js
 */

define([ 'jquery', 'goldenLayout', 'createComponent' ], function($, GoldenLayout) {
	var myLayout;
	initLayout();
	bindEvent();
	
	function bindEvent(){
	  	
	}
	
	function initLayout(){
		myLayout = new GoldenLayout(getConfig(), $('#my-lagout'));

		// 组件注册
		myLayout.registerComponent('font', function(container, componentState) {
			var cur = container.getElement();
			cur.html(componentState.content);
			cur.css({
				color : componentState.fontColor
			})
		});
		myLayout.init();
		
		// 拖拽元素注册
		myLayout.createDragSource($('.addFont'), {
			type : 'component',
			componentName : 'font',
			componentState : {
				content : '[0, 0]',
				fontColor : 'red'
			}
		});
	}
	

	function getConfig() {
		var config = {
			settings: {
				hasHeaders: true,
		        showPopoutIcon: false,
		        showMaximiseIcon: false,
		        showCloseIcon: true
			},
			labels: {
		        close: '关闭'
		    },
			dimensions: {
				dragProxyWidth: 100,
			    dragProxyHeight: 100
			},
			content : [ {
				type : 'row',
				content : [ {
					type : 'column',
					
					content : [ {
						type : 'component',
						componentName : 'font',
						componentState : {
							content : '[0, 0]',
							fontColor : 'red'
						},
						width: 30,
				        height: 30,
				        isClosable: true,
				        title: '',
				        activeItemIndex: 1
					}, {
						type : 'component',
						componentName : 'font',
						componentState : {
							content : '[0, 0]',
							fontColor : 'red'
						}
					}, {
						type : 'component',
						componentName : 'font',
						componentState : {
							content : '[0, 0]',
							fontColor : 'red'
						}
					} ]
				}, {
					type : 'column',
					content : [ {
						type : 'component',
						componentName : 'font',
						componentState : {
							content : '[0, 0]',
							fontColor : 'red'
						}
					}, {
						type : 'component',
						componentName : 'font',
						componentState : {
							content : '[0, 0]',
							fontColor : 'red'
						}
					}, {
						type : 'component',
						componentName : 'font',
						componentState : {
							content : '[0, 0]',
							fontColor : 'red'
						}
					} ]
				}, {
					type : 'column',
					content : [ {
						type : 'component',
						componentName : 'font',
						componentState : {
							content : '[0, 0]',
							fontColor : 'red'
						}
					}, {
						type : 'component',
						componentName : 'font',
						componentState : {
							content : '[0, 0]',
							fontColor : 'red'
						}
					},{
						type : 'component',
						componentName : 'font',
						componentState : {
							content : '[0, 0]',
							fontColor : 'red'
						}
					}]
				} ]
			} ]
		}
		return config;
	}
})