!function(t,i){if("object"==typeof exports&&"object"==typeof module)module.exports=i();else if("function"==typeof define&&define.amd)define([],i);else{var e=i();for(var n in e)("object"==typeof exports?exports:t)[n]=e[n]}}(self,(()=>(()=>{"use strict";var t={};function i(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t){var i=function(t,i){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var s=n.call(t,"string");if("object"!==e(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===e(i)?i:String(i)}function s(t,i){for(var e=0;e<i.length;e++){var s=i[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,n(s.key),s)}}function o(t,i,e){return i&&s(t.prototype,i),e&&s(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function h(t,i,e){return(i=n(i))in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}(t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})})(t);var a=o((function t(e){i(this,t),h(this,"element",void 0),h(this,"context",void 0),this.element=document.createElement("canvas"),this.context=this.element.getContext("2d"),this.element.width=400,this.element.height=400,e.appendChild(this.element)})),l=o((function t(){i(this,t),h(this,"step",void 0),h(this,"maxStep",void 0),h(this,"sizeCell",void 0),h(this,"sizeBerry",void 0),this.step=0,this.maxStep=6,this.sizeCell=16,this.sizeBerry=this.sizeCell/4})),r=function(){function t(e,n){i(this,t),h(this,"config",void 0),h(this,"update",void 0),h(this,"draw",void 0),this.update=e,this.draw=n,this.config=new l,this.animate=this.animate.bind(this),this.animate()}return o(t,[{key:"animate",value:function(){requestAnimationFrame(this.animate),++this.config.step<this.config.maxStep||(this.config.step=0,this.update(),this.draw())}}]),t}(),c=function(){function t(){i(this,t),h(this,"config",void 0),h(this,"x",void 0),h(this,"y",void 0),h(this,"dx",void 0),h(this,"dy",void 0),h(this,"tails",void 0),h(this,"maxTails",void 0),this.config=new l,this.x=160,this.y=160,this.dx=this.config.sizeCell,this.dy=0,this.tails=[],this.maxTails=3,this.control()}return o(t,[{key:"update",value:function(t,i){var e=this;this.x+=this.dx,this.y+=this.dy,this.x<0?this.x=i.element.width-this.config.sizeCell:this.x>=i.element.width&&(this.x=0),this.y<0?this.y=i.element.height-this.config.sizeCell:this.y>=i.element.height&&(this.y=0),this.tails.unshift({x:this.x,y:this.y}),this.tails.length>this.maxTails&&this.tails.pop(),this.tails.forEach((function(i,n){i.x===t.x&&i.y===t.y&&(e.maxTails++,t.randomPosition());for(var s=n+1;s<e.tails.length;s++)i.x==e.tails[s].x&&i.y==e.tails[s].y&&(e.death(),t.randomPosition())}))}},{key:"draw",value:function(t){var i=this;this.tails.forEach((function(e,n){t.fillStyle=0==n?"#FA0556":"#A00034",t.fillRect(e.x,e.y,i.config.sizeCell,i.config.sizeCell)}))}},{key:"death",value:function(){this.x=160,this.y=160,this.dx=this.config.sizeCell,this.dy=0,this.tails=[],this.maxTails=3}},{key:"control",value:function(){var t=this;document.addEventListener("keydown",(function(i){"KeyW"==i.code?(t.dy=-t.config.sizeCell,t.dx=0):"KeyA"==i.code?(t.dx=-t.config.sizeCell,t.dy=0):"KeyS"==i.code?(t.dy=t.config.sizeCell,t.dx=0):"KeyD"==i.code&&(t.dx=t.config.sizeCell,t.dy=0)}))}}]),t}(),f=function(t,i){return Math.floor(Math.random()*(i-t)+t)},d=function(){function t(e){i(this,t),h(this,"x",void 0),h(this,"y",void 0),h(this,"canvas",void 0),h(this,"config",void 0),this.x=0,this.y=0,this.canvas=e,this.config=new l,this.randomPosition()}return o(t,[{key:"draw",value:function(t){t.beginPath(),t.fillStyle="#9a3232",t.arc(this.x+this.config.sizeCell/2,this.y+this.config.sizeCell/2,this.config.sizeBerry,0,2*Math.PI),t.fill()}},{key:"randomPosition",value:function(){this.x=f(0,this.canvas.element.width/this.config.sizeCell)*this.config.sizeCell,this.y=f(0,this.canvas.element.height/this.config.sizeCell)*this.config.sizeCell}}]),t}();return new(function(){function t(e){i(this,t),h(this,"canvas",void 0),h(this,"snake",void 0),h(this,"apple",void 0),this.canvas=new a(e),this.snake=new c,this.apple=new d(this.canvas),new r(this.update.bind(this),this.draw.bind(this))}return o(t,[{key:"update",value:function(){this.snake.update(this.apple,this.canvas)}},{key:"draw",value:function(){this.canvas.context.clearRect(0,0,this.canvas.element.width,this.canvas.element.height),this.snake.draw(this.canvas.context),this.apple.draw(this.canvas.context)}}]),t}())(document.querySelector(".canvas")),t})()));
//# sourceMappingURL=index.js.map