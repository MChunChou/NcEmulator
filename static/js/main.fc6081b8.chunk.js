(this["webpackJsonpnc-emulator"]=this["webpackJsonpnc-emulator"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(7),i=n.n(r),o=(n(15),n(4)),s=n(2);n(16),n(17);var l=function(e){var t=e.setCode,n=Object(a.useState)(1),r=Object(s.a)(n,2),i=r[0],o=r[1],l=Object(a.useRef)(null);return c.a.createElement("section",{className:"nccode center"},c.a.createElement("div",{className:"line-nums code-style",ref:l},function(){for(var e=[],t=1;t<=i;t++)e.push(c.a.createElement("div",{key:"line-".concat(t)},t,"."));return e}()),c.a.createElement("div",{className:"cnc-code center"},c.a.createElement("textarea",{className:"code-style resize-none",onChange:function(e){var n=e.target.value.split(/[\n\r]/g),a=n.length;o(a),t&&t(n)},onScroll:function(e){l.current.scrollTop=e.target.scrollTop}})))},u=(n(18),n(3)),m=n(8),d=n(0),h=n(9),v=function(){function e(t,n){Object(u.a)(this,e),this.scene=new d.j,this.camera=new d.h(75,t/n,.1,1e3),this.renderer=new d.o,this.renderer.setSize(t,n),this.camera.position.set(0,500,500),this.camera.lookAt(this.scene.position),this.scene.background=new d.b(0),this.mouseLeftDown=!1,this.mousePosition=[],new h.a(this.camera,this.renderer.domElement).maxPolarAngle=.5*Math.PI}return Object(m.a)(e,[{key:"line",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:14540253,a=new d.f({color:n}),c=[],r=Object(o.a)(t);try{for(r.s();!(e=r.n()).done;){var i=e.value;c.push(new d.n(i[0],i[1],i[2]))}}catch(u){r.e(u)}finally{r.f()}var s=(new d.a).setFromPoints(c),l=new d.e(s,a);l.name="drawline",this.scene.add(l.clone()),console.log(this.scene.children)}},{key:"clear",value:function(){this.scene.remove(this.scene.children[1])}},{key:"animate",value:function(){var e=this.animate;requestAnimationFrame(e.bind(this)),this.renderer.render(this.scene,this.camera)}},{key:"getRendererDom",value:function(){return this.renderer.domElement}},{key:"coordinate",value:function(){var e=new d.d(500,50);e.name="coords",this.scene.add(e)}}]),e}();var f=function(e){var t=Object(a.useState)(0),n=Object(s.a)(t,2),r=n[0],i=n[1],o=Object(a.useState)(0),l=Object(s.a)(o,2),u=l[0],m=l[1],d=Object(a.useState)(null),h=Object(s.a)(d,2),f=h[0],b=h[1],w=Object(a.useState)(!1),g=Object(s.a)(w,2),p=g[0],j=g[1],E=Object(a.useState)(null),O=Object(s.a)(E,2),y=O[0],k=O[1],N=e.lines,S=Object(a.useCallback)((function(e){null!==e&&(m(e.getBoundingClientRect().height),i(e.getBoundingClientRect().width),b(e))}));return N.length>0&&(y.clear(),y.line(N)),Object(a.useEffect)((function(){!function(){if(f&&!p){console.log("Draw init");var e=new v(r,u);e.coordinate(),f.appendChild(e.getRendererDom()),e.animate(),j(!0),k(e)}}()})),c.a.createElement("section",{className:"draw relative"},c.a.createElement("div",{className:"draw-main relative",ref:S}),c.a.createElement("div",{className:"draw-notice"},"Notice: This is using WebGL",c.a.createElement("br",null),"Support WebGL : ",window.WebGLRenderingContext?"True":"False"))};var b=function(){var e=Object(a.useState)(null),t=Object(s.a)(e,2),n=t[0],r=t[1],i=[];if(n){var u,m=Object(o.a)(n);try{for(m.s();!(u=m.n()).done;){var d=u.value;if(d.match(/G0?[01]\s*(X|x)-?[0-9]+(\.[0-9]+)?(Y|y)-?[0-9]+(\.[0-9]+)?(Z|z)-?[0-9]+(\.[0-9]+)?/g)){var h=d.match(/(?:X|x)-?[0-9]+(\.[0-9]+)?/)[0].replace(/[xX]/,""),v=d.match(/(?:Y|y)-?[0-9]+(\.[0-9]+)?/)[0].replace(/[yY]/,""),b=d.match(/(?:Z|z)-?[0-9]+(\.[0-9]+)?/)[0].replace(/[zZ]/,"");i.push([h,v,b])}}}catch(w){m.e(w)}finally{m.f()}}return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"}),c.a.createElement("main",{className:"app-main"},c.a.createElement("div",{id:"draw-nc-code"},c.a.createElement(l,{setCode:r})),c.a.createElement("div",{id:"draw-emulator"},c.a.createElement(f,{lines:i}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.fc6081b8.chunk.js.map