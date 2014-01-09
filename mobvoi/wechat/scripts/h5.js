// To control all html5 pages by this javascripts
// Edited by Season Li.
// v1.01 revised at 2013/10/10

var chumenwenwen = {
	map: {
		template: {},
	},
	template: {},
};

/*!
* ZeroClipboard
* The ZeroClipboard library provides an easy way to copy text to the clipboard using an invisible Adobe Flash movie and a JavaScript interface.
* Copyright (c) 2013 Jon Rohan, James M. Greene
* Licensed MIT
* http://zeroclipboard.org/
* v1.2.0-beta.4
*/
!function(){"use strict";var a,b=function(){var a=/\-([a-z])/g,b=function(a,b){return b.toUpperCase()};return function(c){return c.replace(a,b)}}(),c=function(a,c){var d,e,f,g,h,i;if(window.getComputedStyle?d=window.getComputedStyle(a,null).getPropertyValue(c):(e=b(c),d=a.currentStyle?a.currentStyle[e]:a.style[e]),"cursor"===c&&(!d||"auto"===d))for(f=a.tagName.toLowerCase(),g=["a"],h=0,i=g.length;i>h;h++)if(f===g[h])return"pointer";return d},d=function(a){if(p.prototype._singleton){a||(a=window.event);var b;this!==window?b=this:a.target?b=a.target:a.srcElement&&(b=a.srcElement),p.prototype._singleton.setCurrent(b)}},e=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c)},f=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},g=function(a,b){if(a.addClass)return a.addClass(b),a;if(b&&"string"==typeof b){var c=(b||"").split(/\s+/);if(1===a.nodeType)if(a.className){for(var d=" "+a.className+" ",e=a.className,f=0,g=c.length;g>f;f++)d.indexOf(" "+c[f]+" ")<0&&(e+=" "+c[f]);a.className=e.replace(/^\s+|\s+$/g,"")}else a.className=b}return a},h=function(a,b){if(a.removeClass)return a.removeClass(b),a;if(b&&"string"==typeof b||void 0===b){var c=(b||"").split(/\s+/);if(1===a.nodeType&&a.className)if(b){for(var d=(" "+a.className+" ").replace(/[\n\t]/g," "),e=0,f=c.length;f>e;e++)d=d.replace(" "+c[e]+" "," ");a.className=d.replace(/^\s+|\s+$/g,"")}else a.className=""}return a},i=function(){var a,b,c,d=1;return"function"==typeof document.body.getBoundingClientRect&&(a=document.body.getBoundingClientRect(),b=a.right-a.left,c=document.body.offsetWidth,d=Math.round(100*(b/c))/100),d},j=function(a){var b={left:0,top:0,width:0,height:0,zIndex:999999999},d=c(a,"z-index");if(d&&"auto"!==d&&(b.zIndex=parseInt(d,10)),a.getBoundingClientRect){var e,f,g,h=a.getBoundingClientRect();"pageXOffset"in window&&"pageYOffset"in window?(e=window.pageXOffset,f=window.pageYOffset):(g=i(),e=Math.round(document.documentElement.scrollLeft/g),f=Math.round(document.documentElement.scrollTop/g));var j=document.documentElement.clientLeft||0,k=document.documentElement.clientTop||0;b.left=h.left+e-j,b.top=h.top+f-k,b.width="width"in h?h.width:h.right-h.left,b.height="height"in h?h.height:h.bottom-h.top}return b},k=function(a,b){var c=!(b&&b.useNoCache===!1);return c?(-1===a.indexOf("?")?"?":"&")+"nocache="+(new Date).getTime():""},l=function(a){var b=[],c=[];return a.trustedOrigins&&("string"==typeof a.trustedOrigins?c=c.push(a.trustedOrigins):"object"==typeof a.trustedOrigins&&"length"in a.trustedOrigins&&(c=c.concat(a.trustedOrigins))),a.trustedDomains&&("string"==typeof a.trustedDomains?c=c.push(a.trustedDomains):"object"==typeof a.trustedDomains&&"length"in a.trustedDomains&&(c=c.concat(a.trustedDomains))),c.length&&b.push("trustedOrigins="+encodeURIComponent(c.join(","))),"string"==typeof a.amdModuleId&&a.amdModuleId&&b.push("amdModuleId="+encodeURIComponent(a.amdModuleId)),"string"==typeof a.cjsModuleId&&a.cjsModuleId&&b.push("cjsModuleId="+encodeURIComponent(a.cjsModuleId)),b.join("&")},m=function(a,b){if(b.indexOf)return b.indexOf(a);for(var c=0,d=b.length;d>c;c++)if(b[c]===a)return c;return-1},n=function(a){if("string"==typeof a)throw new TypeError("ZeroClipboard doesn't accept query strings.");return a.length?a:[a]},o=function(a,b,c,d,e){e?window.setTimeout(function(){a.call(b,c,d)},0):a.call(b,c,d)},p=function(a,b){if(a&&(p.prototype._singleton||this).glue(a),p.prototype._singleton)return p.prototype._singleton;p.prototype._singleton=this,this.options={};for(var c in s)this.options[c]=s[c];for(var d in b)this.options[d]=b[d];this.handlers={},p.detectFlashSupport()&&v()},q=[];p.prototype.setCurrent=function(b){a=b,this.reposition();var d=b.getAttribute("title");d&&this.setTitle(d);var e=this.options.forceHandCursor===!0||"pointer"===c(b,"cursor");return r.call(this,e),this},p.prototype.setText=function(a){return a&&""!==a&&(this.options.text=a,this.ready()&&this.flashBridge.setText(a)),this},p.prototype.setTitle=function(a){return a&&""!==a&&this.htmlBridge.setAttribute("title",a),this},p.prototype.setSize=function(a,b){return this.ready()&&this.flashBridge.setSize(a,b),this},p.prototype.setHandCursor=function(a){return a="boolean"==typeof a?a:!!a,r.call(this,a),this.options.forceHandCursor=a,this};var r=function(a){this.ready()&&this.flashBridge.setHandCursor(a)};p.version="1.2.0-beta.4";var s={moviePath:"ZeroClipboard.swf",trustedOrigins:null,text:null,hoverClass:"zeroclipboard-is-hover",activeClass:"zeroclipboard-is-active",allowScriptAccess:"sameDomain",useNoCache:!0,forceHandCursor:!1};p.setDefaults=function(a){for(var b in a)s[b]=a[b]},p.destroy=function(){p.prototype._singleton.unglue(q);var a=p.prototype._singleton.htmlBridge;a.parentNode.removeChild(a),delete p.prototype._singleton},p.detectFlashSupport=function(){var a=!1;if("function"==typeof ActiveXObject)try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash")&&(a=!0)}catch(b){}return!a&&navigator.mimeTypes["application/x-shockwave-flash"]&&(a=!0),a};var t=null,u=null,v=function(){var a=p.prototype._singleton,b=document.getElementById("global-zeroclipboard-html-bridge");if(!b){var c={};for(var d in a.options)c[d]=a.options[d];c.amdModuleId=t,c.cjsModuleId=u;var e=l(c),f='      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="global-zeroclipboard-flash-bridge" width="100%" height="100%">         <param name="movie" value="'+a.options.moviePath+k(a.options.moviePath,a.options)+'"/>         <param name="allowScriptAccess" value="'+a.options.allowScriptAccess+'"/>         <param name="scale" value="exactfit"/>         <param name="loop" value="false"/>         <param name="menu" value="false"/>         <param name="quality" value="best" />         <param name="bgcolor" value="#ffffff"/>         <param name="wmode" value="transparent"/>         <param name="flashvars" value="'+e+'"/>         <embed src="'+a.options.moviePath+k(a.options.moviePath,a.options)+'"           loop="false" menu="false"           quality="best" bgcolor="#ffffff"           width="100%" height="100%"           name="global-zeroclipboard-flash-bridge"           allowScriptAccess="always"           allowFullScreen="false"           type="application/x-shockwave-flash"           wmode="transparent"           pluginspage="http://www.macromedia.com/go/getflashplayer"           flashvars="'+e+'"           scale="exactfit">         </embed>       </object>';b=document.createElement("div"),b.id="global-zeroclipboard-html-bridge",b.setAttribute("class","global-zeroclipboard-container"),b.setAttribute("data-clipboard-ready",!1),b.style.position="absolute",b.style.left="-9999px",b.style.top="-9999px",b.style.width="15px",b.style.height="15px",b.style.zIndex="9999",b.innerHTML=f,document.body.appendChild(b)}a.htmlBridge=b,a.flashBridge=document["global-zeroclipboard-flash-bridge"]||b.children[0].lastElementChild};p.prototype.resetBridge=function(){return this.htmlBridge.style.left="-9999px",this.htmlBridge.style.top="-9999px",this.htmlBridge.removeAttribute("title"),this.htmlBridge.removeAttribute("data-clipboard-text"),h(a,this.options.activeClass),a=null,this.options.text=null,this},p.prototype.ready=function(){var a=this.htmlBridge.getAttribute("data-clipboard-ready");return"true"===a||a===!0},p.prototype.reposition=function(){if(!a)return!1;var b=j(a);return this.htmlBridge.style.top=b.top+"px",this.htmlBridge.style.left=b.left+"px",this.htmlBridge.style.width=b.width+"px",this.htmlBridge.style.height=b.height+"px",this.htmlBridge.style.zIndex=b.zIndex+1,this.setSize(b.width,b.height),this},p.dispatch=function(a,b){p.prototype._singleton.receiveEvent(a,b)},p.prototype.on=function(a,b){for(var c=a.toString().split(/\s/g),d=0;d<c.length;d++)a=c[d].toLowerCase().replace(/^on/,""),this.handlers[a]||(this.handlers[a]=b);return this.handlers.noflash&&!p.detectFlashSupport()&&this.receiveEvent("onNoFlash",null),this},p.prototype.addEventListener=p.prototype.on,p.prototype.off=function(a,b){for(var c=a.toString().split(/\s/g),d=0;d<c.length;d++){a=c[d].toLowerCase().replace(/^on/,"");for(var e in this.handlers)e===a&&this.handlers[e]===b&&delete this.handlers[e]}return this},p.prototype.removeEventListener=p.prototype.off,p.prototype.receiveEvent=function(b,c){b=b.toString().toLowerCase().replace(/^on/,"");var d=a,e=!0;switch(b){case"load":if(c&&parseFloat(c.flashVersion.replace(",",".").replace(/[^0-9\.]/gi,""))<10)return this.receiveEvent("onWrongFlash",{flashVersion:c.flashVersion}),void 0;this.htmlBridge.setAttribute("data-clipboard-ready",!0);break;case"mouseover":g(d,this.options.hoverClass);break;case"mouseout":h(d,this.options.hoverClass),this.resetBridge();break;case"mousedown":g(d,this.options.activeClass);break;case"mouseup":h(d,this.options.activeClass);break;case"datarequested":var f=d.getAttribute("data-clipboard-target"),i=f?document.getElementById(f):null;if(i){var j=i.value||i.textContent||i.innerText;j&&this.setText(j)}else{var k=d.getAttribute("data-clipboard-text");k&&this.setText(k)}e=!1;break;case"complete":this.options.text=null}if(this.handlers[b]){var l=this.handlers[b];"string"==typeof l&&"function"==typeof window[l]&&(l=window[l]),"function"==typeof l&&o(l,d,this,c,e)}},p.prototype.glue=function(a){a=n(a);for(var b=0;b<a.length;b++)-1==m(a[b],q)&&(q.push(a[b]),e(a[b],"mouseover",d));return this},p.prototype.unglue=function(a){a=n(a);for(var b=0;b<a.length;b++){f(a[b],"mouseover",d);var c=m(a[b],q);-1!=c&&q.splice(c,1)}return this},"function"==typeof define&&define.amd?define(["require","exports","module"],function(a,b,c){return t=c&&c.id||null,p}):"undefined"!=typeof module&&module?(u=module.id||null,module.exports=p):window.ZeroClipboard=p}();

// navigation
chumenwenwen.map.jumpToMap = function(button, type, pointArr, app, n) {
	var func = function() {
		// chumenwenwen.clip = new ZeroClipboard(document.getElementById("navigation"), {moviePath: "http://mobvoi-one-box.oss.aliyuncs.com/wechat/js/ZeroClipboard.swf", });
		// chumenwenwen.clip.on("complete", function(client, args) {
		switch(type) {
			case "navigation":
			this.tpl = '<div class="alert layout-17px" onClick="$(this).remove()"><div class="alert_entire"><div>请选择打开方式</div></div>';
			if(app != "wechat_chumenwenwen") {
				this.tpl += '<div class="alert_entire">';
				if(browser.versions.android == true) {
					this.tpl += '<li onClick="window.location.href=\'bdapp://map/direction?origin=' + pointArr[0][0] + '&destination=' + pointArr[1][0] + '&mode=' + pointArr[3] + '&region=' + pointArr[0][1] + '&src=mobvoi|chumenwenwen\'" >百度地图</li>';		
				} else if(browser.versions.iPhone == true || browser.versions.iPad == true) {
					this.tpl += '<li onClick="window.location.href=\'baidumap://map/direction?origin=' + pointArr[0][0] + '&destination=' + pointArr[1][0] + '&mode=' + pointArr[3] + '&region=' + pointArr[0][1] + '&src=mobvoi|chumenwenwen\'" >百度地图</li>'
				}
				this.tpl += '</div>'
			}
			this.tpl += '<div class="alert_entire"><li onClick="window.location.href=\'http://api.map.baidu.com/direction?origin=' + pointArr[0][0] + '&destination=' + pointArr[1][0] + '&mode=' + pointArr[3] + '&region=' + pointArr[0][1] + '&output=html&src=mobvoi|chumenwenwen\'">在网页中打开</li></div></div>'
			$("body").prepend(this.tpl);		
			$(".alert").show();	
			break;
			case "point":
			this.tpl = '<div class="alert layout-17px" onClick="$(this).remove()"><div class="alert_entire"><div>请选择打开方式</div></div>';
			if(app != "wechat_chumenwenwen") {
				this.tpl += '<div class="alert_entire">';
				if(browser.versions.android == true) {
					this.tpl += '<li onClick="window.location.href=\'bdapp://map/place/search?query=' + pointArr[0][0] + '&location=' + pointArr[0][3] + ',' + pointArr[0][4] + '&radius=1000&src=mobvoi|chumenwenwen\'" >百度地图</li>';		
				} else if(browser.versions.iPhone == true || browser.versions.iPad == true) {
					this.tpl += '<li onClick="window.location.href=\'baidumap://map/place/search?query=' + pointArr[0][0] + '&location=' + pointArr[0][3] + ',' + pointArr[0][4] + '&radius=1000&src=mobvoi|chumenwenwen\'" >百度地图</li>'
				}
				this.tpl += '</div>'
			}
			this.tpl += '<div class="alert_entire"><li onClick="window.location.href=\'http://api.map.baidu.com/place/search?query=' + pointArr[0][0] + '&location=' + pointArr[0][3] + ',' + pointArr[0][4] + '&radius=1000&output=html&src=mobvoi|chumenwenwen\'">在网页中打开</li></div></div>'
			$("body").prepend(this.tpl);		
			$(".alert").show();
			break;
		}
	}
	if(n == 1) {
		func();
	} else {
		$("#" + button).click(function() {
			func();
		});
	}	
}

// dial
chumenwenwen.dial = function(button, number, app, n) {
	var func = function() {
		if(app != "wechat_chumenwenwen") {
			this.tpl = '<div class="alert layout-17px" onClick="$(this).remove(); window.location.href=\'tel:' + number + '\'"><div class="alert_entire"><div>拨号给 ' + number + '</div></div></div>';
		} else {
			this.tpl = '<div class="alert layout-17px" onClick="$(this).remove()"><div class="alert_entire"><div>联系电话 ' + number + '</div></div></div>';
		}
		$("body").prepend(this.tpl);
		$(".alert").show();
	}
	if(n == 1) {
		func();
	} else {
		$("#" + button).click(function() {
			func();
		});
	}
}
