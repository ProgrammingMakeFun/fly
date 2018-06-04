/**
 * author: 省长
 */
(function() {

	var $ = window.$k = window.$k || {};
	/**
	 * 动态加载 js
	 * @param {Object} url 地址
	 * @param {Object} callback 回调函数
	 */
	$.loadScript = function(url, callback) {
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = url;
		script.onload = callback || script.onload;
		document.body.appendChild(script);
	}

	/**
	 * 动态加载 css
	 * @param {Object} url 地址
	 * @param {Object} callback 回调函数
	 */
	$.loadStyle = function(url, callback) {
		var links = document.createElement("link");
		links.type = "text/css";
		links.rel = "stylesheet";
		links.href = url;
		links.onload = callback || links.onload;
		document.body.appendChild(links);
	}

	/**
	 * 动态加载 html，基于iframe(注意，只会抓取<template>标签内的内容，且不包含<template>本身)
	 * @param {Object} url html的路径 
	 * @param {Object} selector 要注入的选择器
	 * @param {Object} callback 注入后的回调函数
	 */
	$.loadHtml = function(url, selector, callback) {
		var iframe = document.createElement("iframe");
		iframe.className = "ff";
		iframe.src = url;
		iframe.style.display = "none";
		iframe.onload = function() {
			var str = iframe.contentWindow.document.querySelector('template').innerHTML; //取值
			
			if(typeof(selector)=='string'){
				document.querySelector(selector).innerHTML = str; //注入
			}else{
				selector.innerHTML = str; //注入
			}
			iframe.parentNode.removeChild(iframe); //销毁
			if(callback != undefined) {
				callback();
			}
		};
		document.body.appendChild(iframe);
	}

	/**
	 * 动态加载 html,基于 XMLHttpRequest ( 注意，与loadHtml不同的是，这个会抓取url中所有内容 )
	 * @param {Object} url html的路径 
	 * @param {Object} selector 要注入的选择器
	 * @param {Object} callback 注入后的回调函数
	 */
	$.loadHtmlXhr = function(url, selector, callback) {
		//1、创建XMLHttpRequest对象
		var xr = new XMLHttpRequest();
		//2、回调函数
		xr.onreadystatechange = function() {
			if(xr.readyState == 4 && xr.status == 200) {
				var str = xr.responseText;
				if(typeof(selector)=='string'){
					document.querySelector(selector).innerHTML = str; //注入
				}else{
					selector.innerHTML = str; //注入
				}
				if(callback != undefined) {
					callback();
				}
			}
		};
		xr.open("get", url, true); //设置参数
		xr.send(null); //发送
	}
	
	/**
	 * 一次性加载多个
	 * @param {Object} selector css选择器，此选择器选中的标签都会进行加载，且这些标签必须具有 load-url 属性
	 * @param {Object} type 可选值('iframe','xhr')指示iframe方式还是XMLHttpRequest方式，默认iframe
	 */
	$.doLoad=function(selector,type){
		type=type||'iframe';
		document.querySelectorAll(selector).forEach(function(self){
			var url=self.getAttribute('load-url');
			if(type=='iframe'){
				$.loadHtml(url,self);
			}else{
				$.loadHtmlXhr(url,self);
			}
		});
	}
	
	
})();
