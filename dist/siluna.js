!function(e){function t(i){if(n[i])return n[i].exports;var a=n[i]={exports:{},id:i,loaded:!1};return e[i].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){var n=new r["default"].spine.Spine(t.siluna.spineData);n.skeleton.setToSetupPose(),n.update(0),n.autoUpdate=!1;var i=new r["default"].Container;i.addChild(n);var a=n.getLocalBounds();n.position.set(-a.x,-a.y);var u=Math.min(.8*s["default"].gameDimensions.w/i.width,.8*s["default"].gameDimensions.h/i.height);i.scale.set(u,u),i.position.set(.5*(s["default"].gameDimensions.w-i.width),.5*(s["default"].gameDimensions.h-i.height)),v.addChild(i),n.state.setAnimationByName(0,"treading-water",!0),function o(){requestAnimationFrame(o),n.update(.01666666666667),w.render(v)}()}var u=n(1),r=i(u),o=n(2),s=i(o),d=n(4),l=i(d),f=n(5),c=i(f),p=n(10),m=i(p),w=(0,l["default"])(),v=(0,c["default"])(),_=new r["default"].loaders.Loader;m["default"].init({stage:v,renderer:w}),_.add("siluna","./data/siluna.json").load(a)},function(e,t){e.exports=PIXI},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(3),u=i(a);t["default"]=(0,u["default"])({speed:20,margin:250,gameDimensions:{w:2880,h:1800},assets:{path:"./data/",bundles:["siluna"]},maxTimeDelta:100})},function(e,t){"use strict";function n(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}e.exports=function i(e){return Object.freeze(e),Object.getOwnPropertyNames(e).forEach(function(t){!e.hasOwnProperty(t)||null===e[t]||"object"!==n(e[t])&&"function"!=typeof e[t]||Object.isFrozen(e[t])||i(e[t])}),e}},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),u=i(a),r=n(2),o=i(r);t["default"]=function(){var e=u["default"].autoDetectRenderer(o["default"].gameDimensions.w,o["default"].gameDimensions.h,{backgroundColor:1087931,resolution:window.devicePixelRatio,autoResize:!0});return e.view.style.position="absolute",document.body.appendChild(e.view),e}},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),u=i(a),r=n(6),o=i(r),s=n(2),d=i(s);t["default"]=function(){var e=arguments.length<=0||void 0===arguments[0]?{store:null}:arguments[0],t=e.store,n=new u["default"].Container;if(n.interactive=!0,n.hitArea=new u["default"].Rectangle(0,0,d["default"].gameDimensions.w,d["default"].gameDimensions.w),t){var i=function(e){var i=e.data;return t.dispatch((0,o["default"])(i.getLocalPosition(n),d["default"].speed))};n.touchstart=i,n.click=i}return n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(7);t["default"]=function(e,t){return{type:i.MOVE_TO_TAP,position:e,speed:t}}},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function a(e){switch(e){case d:return r["default"];case l:return s["default"];case f:return moveToTap}}Object.defineProperty(t,"__esModule",{value:!0}),t.MOVE_TO_TAP=t.TINT=t.UPDATE=void 0,t.getByType=a;var u=n(8),r=i(u),o=n(9),s=i(o),d=t.UPDATE="UPDATE",l=t.TINT="TINT",f=t.MOVE_TO_TAP="MOVE_TO_TAP"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(7);t["default"]=function(e){return{type:i.UPDATE,entity:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(7);t["default"]=function(e){return{type:i.TINT,entity:e}}},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function a(){var e=Math.min(window.innerWidth/o["default"].gameDimensions.w,window.innerHeight/o["default"].gameDimensions.h);d.scale.x=e,d.scale.y=e;var t={w:Math.ceil(o["default"].gameDimensions.w*e),h:Math.ceil(o["default"].gameDimensions.h*e)};l.resize(t.w,t.h),l.view.style.left=(window.innerWidth-t.w)/2+"px",l.view.style.top=(window.innerHeight-t.h)/2+"px"}function u(e){if(s)throw new Error("resize is already initialized");d=e.stage,l=e.renderer,window.addEventListener("resize",a),a(),s=!0}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=i(r),s=!1,d=null,l=null;t["default"]={init:u}}]);