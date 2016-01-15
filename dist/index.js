!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(){requestAnimationFrame(o);var e=M.getState(),t=j();Object.keys(e.entities).forEach(function(e){return M.dispatch((0,b["default"])(e,t))}),g["default"].update(t),O.render(P)}var u=n(4),i=r(u),a=n(5),s=r(a),f=n(14),c=r(f),l=n(48),d=r(l),p=n(49),v=r(p),y=n(13),h=r(y),m=n(50),g=r(m),_=n(8),b=r(_),w=n(34),T=(r(w),(0,d["default"])()),O=(0,i["default"])(),M=(0,c["default"])(),P=(0,s["default"])({store:M}),j=void 0;h["default"].init({stage:P,renderer:O}),T.load(function(e,t){g["default"].init({store:M,stage:P,resources:t}),j=(0,v["default"])(),o()})},function(e,t){e.exports=PIXI},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),u=r(o);t["default"]=(0,u["default"])({speed:{movement:2e3,rotation:360},margin:250,gameDimensions:{w:2880,h:1800},assets:{path:"./data/",bundles:["siluna"]},maxTimeDelta:100})},function(e,t){"use strict";function n(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}e.exports=function r(e){return Object.freeze(e),Object.getOwnPropertyNames(e).forEach(function(t){!e.hasOwnProperty(t)||null===e[t]||"object"!==n(e[t])&&"function"!=typeof e[t]||Object.isFrozen(e[t])||r(e[t])}),e}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),u=r(o),i=n(2),a=r(i);t["default"]=function(){var e=u["default"].autoDetectRenderer(a["default"].gameDimensions.w,a["default"].gameDimensions.h,{backgroundColor:1087931,resolution:window.devicePixelRatio,autoResize:!0});return e.view.style.position="absolute",document.body.appendChild(e.view),e}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),u=r(o),i=n(6),a=r(i),s=n(12),f=r(s),c=n(2),l=r(c),d=n(10),p=r(d);t["default"]=function(){var e=arguments.length<=0||void 0===arguments[0]?{store:null}:arguments[0],t=e.store,n=new u["default"].Container;if(n.interactive=!0,n.hitArea=new u["default"].Rectangle(0,0,l["default"].gameDimensions.w,l["default"].gameDimensions.w),t){var r=function(e){var r=e.data;t.dispatch((0,f["default"])(p["default"].fromPixiPoint(r.getLocalPosition(n)))),t.dispatch((0,a["default"])(p["default"].fromPixiPoint(r.getLocalPosition(n))))};n.touchstart=r,n.click=r}return n}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(7),u=n(10),i=r(u);t["default"]=function(e){if(!(e instanceof i["default"]))throw new TypeError("Target argument passed to moveToTap action needs to be a point");return{type:o.MOVE_TO_TAP,target:e}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){switch(e){case f:return i["default"];case c:return s["default"];case l:return moveToTap;case d:return rotateToTap}}Object.defineProperty(t,"__esModule",{value:!0}),t.ROTATE_TO_TAP=t.MOVE_TO_TAP=t.TINT=t.UPDATE=void 0,t.getByType=o;var u=n(8),i=r(u),a=n(9),s=r(a),f=t.UPDATE="UPDATE",c=t.TINT="TINT",l=t.MOVE_TO_TAP="MOVE_TO_TAP",d=t.ROTATE_TO_TAP="ROTATE_TO_TAP"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(7);t["default"]=function(e,t){return{type:r.UPDATE,entity:e,timeDelta:t}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(7);t["default"]=function(e){return{type:r.TINT,entity:e}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var i=n(11),a=r(i),s=function(){function e(t,n){o(this,e),this.x=t,this.y=n}return u(e,[{key:"addVector",value:function(t){return new e(this.x+t.x,this.y+t.y)}},{key:"subtractPoint",value:function(t){if(!(t instanceof e))throw new TypeError("Point argument passed to Vector.subtractPoint needs to be a point");return new a["default"](this.x-t.x,this.y-t.y)}},{key:"equals",value:function(t){return t instanceof e&&this.x===t.x&&this.y===t.y}},{key:"clone",value:function(){return new e(this.x,this.y)}}],[{key:"fromPixiPoint",value:function(t){var n=t.x,r=t.y;return new e(n,r)}}]),e}();t["default"]=s},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(t,r){n(this,e),this.x=t,this.y=r}return r(e,[{key:"add",value:function(t){return new e(this.x+t.x,this.y+t.y)}},{key:"subtract",value:function(t){return new e(this.x-t.x,this.y-t.y)}},{key:"multiply",value:function(t){return new e(this.x*t,this.y*t)}},{key:"divide",value:function(t){return new e(this.x/t,this.y/t)}},{key:"equals",value:function(e){return this.x===e.x&&this.y===e.y}},{key:"clone",value:function(){return new e(this.x,this.y)}},{key:"dotProduct",value:function(e){var t=this.normalized,n=e.normalized;return t.x*n.x+t.y*n.y}},{key:"length",get:function(){return Math.sqrt(this.x*this.x+this.y*this.y)}},{key:"lengthSqr",get:function(){return this.x*this.x+this.y*this.y}},{key:"normalized",get:function(){return new e(this.x/this.length,this.y/this.length)}},{key:"deg",get:function(){return 180*this.rad/Math.PI}},{key:"rad",get:function(){return Math.atan2(this.x,-this.y)}}],[{key:"fromDeg",value:function(t){return e.fromRad(t*(Math.PI/180))}},{key:"fromRad",value:function(t){return new e(Math.sin(t),Math.cos(t))}}]),e}();t["default"]=o},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(7),u=n(10),i=r(u);t["default"]=function(e){if(!(e instanceof i["default"]))throw new TypeError("Target argument passed to rotateToTap action needs to be a point");return{type:o.ROTATE_TO_TAP,target:e}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(){var e=Math.min(window.innerWidth/a["default"].gameDimensions.w,window.innerHeight/a["default"].gameDimensions.h);f.scale.x=e,f.scale.y=e;var t={w:Math.ceil(a["default"].gameDimensions.w*e),h:Math.ceil(a["default"].gameDimensions.h*e)};c.resize(t.w,t.h),c.view.style.left=(window.innerWidth-t.w)/2+"px",c.view.style.top=(window.innerHeight-t.h)/2+"px"}function u(e){if(s)throw new Error("resize is already initialized");f=e.stage,c=e.renderer,window.addEventListener("resize",o),o(),s=!0}Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),a=r(i),s=!1,f=null,c=null;t["default"]={init:u}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(15),u=n(25),i=(r(u),n(26)),a=(r(i),n(27)),s=(r(a),n(28)),f=r(s),c=n(29),l=r(c),d=n(30),p=(r(d),n(31)),v=(r(p),n(32)),y=r(v),h=n(33),m=(r(h),n(7),n(2)),g=r(m),_=n(34),b=r(_),w=n(10),T=r(w),O=n(11);r(O);t["default"]=function(){var e=(0,o.createStore)(b["default"],{entities:{siluna:{hasSpine:(0,y["default"])("siluna",{anchor:{x:.5,y:.1},position:new T["default"](g["default"].gameDimensions.w/2,g["default"].gameDimensions.h/2),scale:.17}),hasAnimation:{animation:"treading-water"},movesToTap:(0,f["default"])(g["default"].speed.movement),rotatesToTap:(0,l["default"])(g["default"].speed.rotation)}}});return e}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var o=n(16),u=r(o),i=n(18),a=r(i),s=n(22),f=r(s),c=n(23),l=r(c),d=n(24),p=r(d);t.createStore=u["default"],t.combineReducers=a["default"],t.bindActionCreators=f["default"],t.applyMiddleware=l["default"],t.compose=p["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){function n(){return f}function r(e){c.push(e);var t=!0;return function(){if(t){t=!1;var n=c.indexOf(e);c.splice(n,1)}}}function o(e){if(!i["default"](e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"==typeof e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(l)throw new Error("Reducers may not dispatch actions.");try{l=!0,f=s(f,e)}finally{l=!1}return c.slice().forEach(function(e){return e()}),e}function u(e){s=e,o({type:a.INIT})}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var s=e,f=t,c=[],l=!1;return o({type:a.INIT}),{dispatch:o,subscribe:r,getState:n,replaceReducer:u}}t.__esModule=!0,t["default"]=o;var u=n(17),i=r(u),a={INIT:"@@redux/INIT"};t.ActionTypes=a},function(e,t){"use strict";function n(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}function r(e){if(!e||"object"!==("undefined"==typeof e?"undefined":n(e)))return!1;var t="function"==typeof e.constructor?Object.getPrototypeOf(e):Object.prototype;if(null===t)return!0;var r=t.constructor;return"function"==typeof r&&r instanceof r&&o(r)===u}t.__esModule=!0,t["default"]=r;var o=function(e){return Function.prototype.toString.call(e)},u=o(Object);e.exports=t["default"]},function(e,t,n){(function(r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function u(e,t){var n=t&&t.type,r=n&&'"'+n.toString()+'"'||"an action";return'Reducer "'+e+'" returned undefined handling '+r+". To ignore an action, you must explicitly return the previous state."}function i(e,t,n){var r=Object.keys(t),o=n&&n.type===f.ActionTypes.INIT?"initialState argument passed to createStore":"previous state received by the reducer";if(0===r.length)return"Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";if(!l["default"](e))return"The "+o+' has unexpected type of "'+{}.toString.call(e).match(/\s([a-z|A-Z]+)/)[1]+'". Expected argument to be an object with the following '+('keys: "'+r.join('", "')+'"');var u=Object.keys(e).filter(function(e){return r.indexOf(e)<0});return u.length>0?"Unexpected "+(u.length>1?"keys":"key")+" "+('"'+u.join('", "')+'" found in '+o+". ")+"Expected to find one of the known reducer keys instead: "+('"'+r.join('", "')+'". Unexpected keys will be ignored.'):void 0}function a(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:f.ActionTypes.INIT});if("undefined"==typeof r)throw new Error('Reducer "'+t+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');var o="@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".");if("undefined"==typeof n(void 0,{type:o}))throw new Error('Reducer "'+t+'" returned undefined when probed with a random type. '+("Don't try to handle "+f.ActionTypes.INIT+' or other actions in "redux/*" ')+"namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")})}function s(e){var t,n=y["default"](e,function(e){return"function"==typeof e});try{a(n)}catch(o){t=o}var s=p["default"](n,function(){});return function(e,o){if(void 0===e&&(e=s),t)throw t;var a=!1,f=p["default"](n,function(t,n){var r=e[n],i=t(r,o);if("undefined"==typeof i){var s=u(n,o);throw new Error(s)}return a=a||i!==r,i});if("production"!==r.env.NODE_ENV){var c=i(e,f,o);c&&console.error(c)}return a?f:e}}t.__esModule=!0,t["default"]=s;var f=n(16),c=n(17),l=o(c),d=n(20),p=o(d),v=n(21),y=o(v);e.exports=t["default"]}).call(t,n(19))},function(e,t){"use strict";function n(){f=!1,i.length?s=i.concat(s):c=-1,s.length&&r()}function r(){if(!f){var e=setTimeout(n);f=!0;for(var t=s.length;t;){for(i=s,s=[];++c<t;)i&&i[c].run();c=-1,t=s.length}i=null,f=!1,clearTimeout(e)}}function o(e,t){this.fun=e,this.array=t}function u(){}var i,a=e.exports={},s=[],f=!1,c=-1;a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new o(e,t)),1!==s.length||f||setTimeout(r,0)},o.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=u,a.addListener=u,a.once=u,a.off=u,a.removeListener=u,a.removeAllListeners=u,a.emit=u,a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},function(e,t){"use strict";function n(e,t){return Object.keys(e).reduce(function(n,r){return n[r]=t(e[r],r),n},{})}t.__esModule=!0,t["default"]=n,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){return Object.keys(e).reduce(function(n,r){return t(e[r])&&(n[r]=e[r]),n},{})}t.__esModule=!0,t["default"]=n,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}function o(e){return e&&e.__esModule?e:{"default":e}}function u(e,t){return function(){return t(e.apply(void 0,arguments))}}function i(e,t){if("function"==typeof e)return u(e,t);if("object"!==("undefined"==typeof e?"undefined":r(e))||null===e||void 0===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":"undefined"==typeof e?"undefined":r(e))+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');return s["default"](e,function(e){return u(e,t)})}t.__esModule=!0,t["default"]=i;var a=n(20),s=o(a);e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return function(e){return function(n,r){var o=e(n,r),i=o.dispatch,s=[],f={getState:o.getState,dispatch:function(e){return i(e)}};return s=t.map(function(e){return e(f)}),i=a["default"].apply(void 0,s)(o.dispatch),u({},o,{dispatch:i})}}}t.__esModule=!0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t["default"]=o;var i=n(24),a=r(i);e.exports=t["default"]},function(e,t){"use strict";function n(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}t.__esModule=!0,t["default"]=n,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),u=r(o),i=n(11),a=r(i);t["default"]=function(e){if(!(e instanceof a["default"]))throw new TypeError("Velocity argument passed to moves component needs to be a vector");return(0,u["default"])({id:"moves",velocity:e})}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),u=r(o),i=n(10),a=r(i);t["default"]=function(e){var t=arguments.length<=1||void 0===arguments[1]?1e3:arguments[1];if(!(e instanceof a["default"]))throw new TypeError("Target argument passed to movesTo component needs to be a point");return(0,u["default"])({id:"movesTo",target:e,speed:t,elapsed:0})}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),u=r(o),i=n(11),a=r(i);t["default"]=function(e){var t=arguments.length<=1||void 0===arguments[1]?1e3:arguments[1];if(!(e instanceof a["default"]))throw new TypeError("Velocity argument passed to movesBy component needs to be a vector");return(0,u["default"])({id:"movesBy",velocity:e,speed:t,elapsed:0})}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),u=r(o);t["default"]=function(){var e=arguments.length<=0||void 0===arguments[0]?1e3:arguments[0];return(0,u["default"])({id:"movesToTap",speed:e})}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),u=r(o);t["default"]=function(){var e=arguments.length<=0||void 0===arguments[0]?1e3:arguments[0];return(0,u["default"])({id:"rotatesToTap",speed:e})}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),u=r(o);t["default"]=function(e){return(0,u["default"])({id:"rotates",dr:e})}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),u=r(o),i=n(10),a=r(i),s={position:new a["default"](0,0),anchor:{x:.5,y:.5},rotation:0,tint:16777215,scale:1};t["default"]=function(e){var t=arguments.length<=1||void 0===arguments[1]?s:arguments[1],n=t.position,r=void 0===n?s.position:n,o=t.anchor,i=void 0===o?s.anchor:o,f=t.rotation,c=void 0===f?s.rotation:f,l=t.tint,d=void 0===l?s.tint:l,p=t.scale,v=void 0===p?s.scale:p;if(!(r instanceof a["default"]))throw new TypeError("Position argument passed to hasSprite component needs to be a point");return(0,u["default"])({id:"hasSprite",image:e,position:r,anchor:i,rotation:c,tint:d,scale:v})}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),u=r(o),i=n(10),a=r(i),s={position:new a["default"](0,0),anchor:{x:.5,y:.5},rotation:0,tint:16777215,scale:1};t["default"]=function(e){var t=arguments.length<=1||void 0===arguments[1]?s:arguments[1],n=t.position,r=void 0===n?s.position:n,o=t.anchor,i=void 0===o?s.anchor:o,f=t.rotation,c=void 0===f?s.rotation:f,l=t.tint,d=void 0===l?s.tint:l,p=t.scale,v=void 0===p?s.scale:p;if(!(r instanceof a["default"]))throw new TypeError("Position argument passed to hasSpine component needs to be a point");return(0,u["default"])({id:"hasSpine",dataId:e,position:r,anchor:i,rotation:c,tint:d,scale:v})}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),u=r(o);t["default"]=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;t>r;r++)n[r-1]=arguments[r];return(0,u["default"])({id:"respondsToTap",actionType:e,args:n})}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(15),u=n(35),i=r(u);t["default"]=(0,o.combineReducers)({entities:i["default"]})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){return e[t.entity]}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};Object.defineProperty(t,"__esModule",{value:!0});var a=n(7),s=n(36),f=r(s),c=n(44),l=r(c),d=n(45),p=r(d),v=n(46),y=r(v);t["default"]=function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=arguments.length<=1||void 0===arguments[1]?null:arguments[1];switch(t.type){case a.UPDATE:return i({},e,o({},t.entity,(0,f["default"])(u(e,t),t.timeDelta)));case a.MOVE_TO_TAP:return(0,p["default"])(e,t.target);case a.ROTATE_TO_TAP:return(0,y["default"])(e,t.target);case a.TINT:return i({},e,o({},t.entity,(0,l["default"])(u(e,t))))}return e}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=function(){function e(e,t){var n=[],r=!0,o=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){o=!0,u=s}finally{try{!r&&a["return"]&&a["return"]()}finally{if(o)throw u}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};Object.defineProperty(t,"__esModule",{value:!0});var i=n(37),a=r(i),s=n(38),f=r(s),c=n(40),l=r(c),d=n(42),p=r(d),v=n(43),y=r(v),h=n(3),m=r(h),g={moves:a["default"],movesTo:f["default"],rotatesTo:l["default"],movesBy:p["default"],rotates:y["default"]};t["default"]=function(e,t){var n=e.hasSprite||e.hasSpine;if(!n)return e;var r=u({},e);return Object.keys(e).filter(function(e){return void 0!==g[e]}).forEach(function(u){var i=e[u],a=g[u](i,n,t),s=o(a,2);i=s[0],n=s[1],i?r[u]=i:delete r[u]}),n&&(r[n.id]=n),(0,m["default"])(r)}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};Object.defineProperty(t,"__esModule",{value:!0});var u=n(2),i=r(u),a=n(25),s=r(a),f=n(3),c=r(f),l=n(10);r(l);t["default"]=function(e,t){var n=e.velocity.clone(),r=t.position.addVector(n);return(r.x>i["default"].gameDimensions.w||r.x<0)&&(n.x*=-1),(r.y>i["default"].gameDimensions.h||r.y<0)&&(n.y*=-1),[(0,s["default"])(n),(0,c["default"])(o({},t,{position:r}))]}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){var n=[],r=!0,o=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){o=!0,u=s}finally{try{!r&&a["return"]&&a["return"]()}finally{if(o)throw u}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),a=r(i),s=n(39),f=r(s);t["default"]=function(e,t,n){var r=e.target,i=e.velocity,s=e.speed,c=e.elapsed,l=t.position;i||(i=r.subtractPoint(l));var d=(0,f["default"])(i,s,n,l,c),p=u(d,2);return l=p[0],c=p[1],[c<i.length?(0,a["default"])(o({},e,{velocity:i,elapsed:c})):void 0,(0,a["default"])(o({},t,{position:l}))]}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=.0010416666666667;t["default"]=function(e,t,r,o,u){var i=e.normalized.multiply(t*r*n),a=o.addVector(i),s=u+i.length;return u>e.length&&(a=a.addVector(e.normalized.multiply(-1*(s-e.length)))),[a,s]}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};Object.defineProperty(t,"__esModule",{value:!0});var u=n(3),i=r(u),a=n(41),s=r(a),f=n(11);r(f);t["default"]=function(e,t,n){var r=e.target,u=e.velocity,a=e.speed,f=e.direction,c=t.position,l=t.rotation;return u||(u=r.subtractPoint(c)),f||(f=Math.sin(l-u.rad)<0?"cw":"ccw"),l=(0,s["default"])(u,a,n,l,f),[l!==u.rad?(0,i["default"])(o({},e,{velocity:u,direction:f})):void 0,(0,i["default"])(o({},t,{rotation:l}))]}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var n=e-t;return n+(n>Math.PI?2*-Math.PI:n<-Math.PI?2*Math.PI:0)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(11),i=(r(u),17e-6);t["default"]=function(e,t,n,r,u){var a=e.rad,s=n*t*i,f=o(a,r);return"cw"===u&&s>=f?a:"ccw"===u&&f>=s?a:"cw"===u?r+s:r-s}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){var n=[],r=!0,o=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){o=!0,u=s}finally{try{!r&&a["return"]&&a["return"]()}finally{if(o)throw u}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),a=r(i),s=n(39),f=r(s);Date.now();t["default"]=function(e,t,n){var r=e.velocity,i=e.speed,s=e.elapsed,c=t.position,l=(0,f["default"])(r,i,n,c,s),d=u(l,2);return c=d[0],s=d[1],[s<r.length?(0,a["default"])(o({},e,{elapsed:s})):void 0,(0,a["default"])(o({},t,{position:c}))]}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};Object.defineProperty(t,"__esModule",{value:!0});var u=n(3),i=r(u);t["default"]=function(e,t){var n=e.dr,r=t.rotation+n;return[e,(0,i["default"])(o({},t,{rotation:r}))]}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};Object.defineProperty(t,"__esModule",{value:!0});var u=n(3),i=r(u);t["default"]=function(e){var t=e.hasSprite;return t?(0,i["default"])(o({},e,{hasSprite:o({},t,{tint:16777215*Math.random()})})):e}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};Object.defineProperty(t,"__esModule",{value:!0});var u=n(3),i=r(u),a=n(26),s=r(a),f=n(10);r(f);t["default"]=function(e,t){var n={};return Object.keys(e).forEach(function(r){var u=e[r],a=u.movesToTap;n[r]=a?(0,i["default"])(o({},u,{movesTo:(0,s["default"])(t,a.speed)})):u}),n}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};Object.defineProperty(t,"__esModule",{value:!0});var u=n(3),i=r(u),a=n(47),s=r(a),f=n(10);r(f);t["default"]=function(e,t){var n={};return Object.keys(e).forEach(function(r){var u=e[r],a=u.rotatesToTap;n[r]=a?(0,i["default"])(o({},u,{rotatesTo:(0,s["default"])(t,a.speed)})):u}),n}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),u=r(o),i=n(10),a=r(i);t["default"]=function(e){var t=arguments.length<=1||void 0===arguments[1]?5:arguments[1];if(!(e instanceof a["default"]))throw new TypeError("Target argument passed to rotatesTo component needs to be a point");return(0,u["default"])({id:"rotatesTo",target:e,speed:t,elapsed:0})}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),u=r(o),i=n(1),a=r(i);t["default"]=function(){var e=new a["default"].loaders.Loader;return u["default"].assets.bundles.forEach(function(t){return e.add(t,u["default"].assets.path+t+".json")}),e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);t["default"]=function(){var e=Date.now();return function(){var t=Date.now(),n=t-e;return e=t,n>r.maxTimeDelta?r.maxTimeDelta:n}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function u(e){if(_)throw new Error("sprite manager is already initialized");b=e.store,w=e.stage,T=e.resources,O=new Map,d()}function i(e){return O.get(e)}function a(e){var t=e.image,n=e.position,r=e.anchor,o=e.rotation,u=e.tint,i=e.scale,a=h["default"].fromImage(t);return a.position=n,a.anchor=r,a.rotation=o,a.tint=u,a.scale=i,a}function s(e){var t=e.dataId,n=e.position,r=e.anchor,o=e.rotation,u=e.tint,i=e.scale,a=h["default"].fromSpine(T[t].spineData);return a.update(0),a.autoUpdate=!1,a.position=n,a.anchor=r,a.rotation=o,a.tint=u,a.scale=i,a}function f(e,t){var n=t.actionType,r=t.args;e.interactive=!0;var u=(0,m.getByType)(n);e.click=function(){return b.dispatch(u.apply(void 0,o(r)))},e.touchstart=function(){return b.dispatch(u.apply(void 0,o(r)))}}function c(e,t,n){var r=a(t);return n&&f(r,n),r.appendTo(w),O.set(e,r),r}function l(e,t,n,r){var o=s(t);return n&&f(o,n),r&&o.state.setAnimationByName(0,r.animation,!0),o.appendTo(w),O.set(e,o),o}function d(e){var t=b.getState(),n=!0,r=!1,o=void 0;try{for(var u,i=O[Symbol.iterator]();!(n=(u=i.next()).done);n=!0){var a=p(u.value,2),s=a[0],f=a[1],d=t.entities[s];if(d){var v=d.hasSprite||d.hasSpine;if(v){var y=v.position,h=v.rotation,m=v.tint;f.position=y,f.rotation=h,f.tint=m}d.hasAnimation&&f.update(e)}else O["delete"](s)}}catch(g){r=!0,o=g}finally{try{!n&&i["return"]&&i["return"]()}finally{if(r)throw o}}Object.keys(t.entities).forEach(function(e){var n=t.entities[e],r=n.hasSprite,o=n.hasSpine,u=n.respondsToTap,i=n.hasAnimation;O.has(e)||!r&&!o||(r&&c(e,r,u),o&&l(e,o,u,i))})}var p=function(){function e(e,t){var n=[],r=!0,o=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){o=!0,u=s}finally{try{!r&&a["return"]&&a["return"]()}finally{if(o)throw u}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();Object.defineProperty(t,"__esModule",{value:!0});var v=n(1),y=(r(v),n(51)),h=r(y),m=n(7),g=n(2),_=(r(g),!1),b=null,w=null,T=null,O=null;t["default"]={init:u,update:d,get:i}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),a=r(i),s=n(10),f=r(s),c=Symbol("position"),l=function(){function e(t){o(this,e),this.sprite=t,this[c]=new f["default"](t.position.x,t.position.y)}return u(e,[{key:"update",value:function(e){this.sprite.update(e/1e3)}},{key:"appendTo",value:function(e){e.addChild(this.sprite)}},{key:"position",set:function(e){if(!(e instanceof f["default"]))throw new TypeError("Position assigned to a sprite needs to be a point");this.sprite.position=new a["default"].Point(e.x,e.y),this[c]=e},get:function(){return this[c]}},{key:"anchor",set:function(e){this.sprite.anchor=e},get:function(){return this.sprite.anchor}},{key:"rotation",set:function(e){this.sprite.rotation=e},get:function(){return this.sprite.rotation;
}},{key:"tint",set:function(e){this.sprite.tint=e},get:function(){return this.sprite.tint}},{key:"scale",set:function(e){this.sprite.scale.set(e)},get:function(){return this.sprite.scale.x}},{key:"interactive",set:function(e){this.sprite.interactive=e},get:function(){return this.sprite.interactive}},{key:"click",set:function(e){this.sprite.click=e},get:function(){return this.sprite.click}},{key:"touchstart",set:function(e){this.sprite.touchstart=e},get:function(){return this.sprite.touchstart}},{key:"state",get:function(){return this.sprite.state}}],[{key:"fromImage",value:function(t){return new e(a["default"].Sprite.fromImage(t))}},{key:"fromSpine",value:function(t){return new e(new a["default"].spine.Spine(t))}}]),e}();t["default"]=l}]);