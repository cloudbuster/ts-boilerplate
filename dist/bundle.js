!function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=4)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e,n,i){this.x=t,this.y=e,this.radius=n,this.color=i}return t.prototype.randomInit=function(t,e,n){var i=0;this.x=Math.round(Math.random()*(e-i)+i),this.y=Math.round(Math.random()*(t-i)+i),this.xSpeed=Math.round(Math.random()*(n-i)+i)+1,this.ySpeed=Math.round(Math.random()*(n-i)+i),this.radius=this.xSpeed/3},t.prototype.update=function(t,e){this.x+=this.xSpeed,this.x>e&&(this.x=-1*this.radius)},t.prototype.draw=function(t){t.save(),t.beginPath(),t.strokeStyle=this.color,t.lineWidth=this.lineWidth,t.arc(this.x,this.y,this.radius,0,2*Math.PI),t.stroke(),t.restore()},t}();e.Circle=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e,n){this.canvas=document.createElement("canvas"),this.canvas.id=t,this.canvas.width=e,this.canvas.height=n,this.canvas.style.zIndex="0",this.canvas.style.position="absolute",this.canvas.style.border="2px solid black",this.canvas.style.width=1*e+"px",this.canvas.style.height=1*n+"px",this.canvas.style.backgroundColor="black"}return t.prototype.getCanvasHeight=function(){return this.canvas.height},t.prototype.getCanvasWidth=function(){return this.canvas.width},t.prototype.createCanvas=function(){this.context=this.canvas.getContext("2d"),document.body.appendChild(this.canvas)},t}();e.InitCanvas=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(3);var i=function(){function t(t,e,n){this.x=t,this.y=e,this.color=n,this.xSpeed=2}return t.prototype.update=function(t,e){this.x-=this.xSpeed,this.x<-5500&&(this.x=e),this.y=t-25},t.prototype.draw=function(t){t.save(),t.font="72px Molle, cursive";var e=t.createLinearGradient(0,402,0,475);e.addColorStop(0,"#555"),e.addColorStop(.5,"#aaa"),e.addColorStop(1,"#fff"),t.fillStyle=e,t.fillText("My content is here and this should be a very long text to create a text scroller. I wonder if this looks like a text scroller - I bet it does and will look cool.",this.x,this.y),t.restore()},t}();e.Text=i},function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});for(var i=n(1),o=n(0),a=n(2),r=new i.InitCanvas("animationCanvas",640,480),s=r.getCanvasHeight(),c=r.getCanvasWidth(),h=new a.Text(c,120,"orange"),u=new Array,d=0;d<25;d+=1)u.push(new o.Circle(10,10,10,"grey")),u[d].randomInit(r.getCanvasHeight(),r.getCanvasWidth(),10);var l=function(){r.context.fillStyle="#222222",r.context.fillRect(0,0,c,s),requestAnimationFrame(l);for(var t in u)u[t].update(s,c),u[t].draw(r.context);h.update(s,c),h.draw(r.context)};window.onload=function(){r.createCanvas(),l()}}]);