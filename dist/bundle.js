!function(t){function e(o){if(n[o])return n[o].exports;var a=n[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=3)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e,n){this.canvas=document.createElement("canvas"),this.canvas.id=t,this.canvas.width=e,this.canvas.height=n,this.canvas.style.zIndex="0",this.canvas.style.position="absolute",this.canvas.style.border="2px solid black",this.canvas.style.width=1*e+"px",this.canvas.style.height=1*n+"px",this.canvas.style.backgroundColor="black"}return t.prototype.getCanvasHeight=function(){return this.canvas.height},t.prototype.getCanvasWidth=function(){return this.canvas.width},t.prototype.createCanvas=function(){this.context=this.canvas.getContext("2d"),document.body.appendChild(this.canvas)},t}();e.InitCanvas=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(2);var o=function(){function t(t,e,n){this.x=t,this.y=e,this.color=n,this.xSpeed=2}return t.prototype.update=function(t,e){this.x-=this.xSpeed,this.x<-5500&&(this.x=e),this.y=t-25},t.prototype.draw=function(t){t.save(),t.font="72px Molle, cursive";var e=t.createLinearGradient(0,402,0,475);e.addColorStop(0,"#555"),e.addColorStop(.5,"#aaa"),e.addColorStop(1,"#fff"),t.fillStyle=e,t.fillText("My content is here and this should be a very long text to create a text scroller. I wonder if this looks like a text scroller - I bet it does and will look cool.",this.x,this.y),t.restore()},t}();e.Text=o},function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),a=n(1);console.log(100);var i=new o.InitCanvas("animationCanvas",640,480),s=i.getCanvasHeight(),r=i.getCanvasWidth(),c=new a.Text(r,120,"orange"),l=function(){i.context.fillStyle="#222222",i.context.fillRect(0,0,r,s),requestAnimationFrame(l),c.update(s,r),c.draw(i.context)};window.onload=function(){i.createCanvas(),l()}}]);