/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _pixi = __webpack_require__(1);
	
	var _pixi2 = _interopRequireDefault(_pixi);
	
	var _config = __webpack_require__(2);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _makeRenderer = __webpack_require__(4);
	
	var _makeRenderer2 = _interopRequireDefault(_makeRenderer);
	
	var _makeStage = __webpack_require__(5);
	
	var _makeStage2 = _interopRequireDefault(_makeStage);
	
	var _resizeManager = __webpack_require__(6);
	
	var _resizeManager2 = _interopRequireDefault(_resizeManager);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var renderer = (0, _makeRenderer2.default)(),
	    stage = (0, _makeStage2.default)(),
	    loader = new _pixi2.default.loaders.Loader(); /**
	                                                   * boxes.js
	                                                   *
	                                                   * @author <a href="https://github.com/pahund">Patrick Hund</a>
	                                                   * @since 27 Dec 2015
	                                                   */
	
	_resizeManager2.default.init({ config: _config2.default, stage: stage, renderer: renderer });
	
	loader.add("boxes", "./data/boxes.json").load(onAssetsLoaded);
	
	function onAssetsLoaded(l, res) {
	
	    var boxes = new _pixi2.default.spine.Spine(res.boxes.spineData);
	    boxes.skeleton.setToSetupPose();
	    boxes.update(0);
	    boxes.autoUpdate = false;
	
	    // create a container for the spine animation and add the animation to it
	    var boxesCage = new _pixi2.default.Container();
	    boxesCage.addChild(boxes);
	
	    // measure the spine animation and position it inside its container to align it to the origin
	    var localRect = boxes.getLocalBounds();
	    boxes.position.set(-localRect.x, -localRect.y);
	
	    // now we can scale, position and rotate the container as any other display object
	    var scale = Math.min(_config2.default.gameDimensions.w * 0.8 / boxesCage.width, _config2.default.gameDimensions.h * 0.8 / boxesCage.height);
	    boxesCage.scale.set(scale, scale);
	    boxesCage.position.set((_config2.default.gameDimensions.w - boxesCage.width) * 0.5, (_config2.default.gameDimensions.h - boxesCage.height) * 0.5);
	
	    // add the container to the stage
	    stage.addChild(boxesCage);
	
	    // once position and scaled, set the animation to play
	    var animations = ["wag", "twist", "coil", "wag2"];
	    var animationIndex = 0;
	
	    function switchAnimation() {
	        boxes.state.setAnimationByName(0, animations[animationIndex], true);
	        animationIndex = animationIndex === animations.length - 1 ? 0 : animationIndex + 1;
	    }
	
	    stage.touchstart = switchAnimation;
	    stage.click = switchAnimation;
	
	    (function animate() {
	        requestAnimationFrame(animate);
	
	        //boxes.update(0.01666666666667);
	        boxes.update(0.005);
	
	        // render the container
	        renderer.render(stage);
	    })();
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = PIXI;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _deepFreeze = __webpack_require__(3);
	
	var _deepFreeze2 = _interopRequireDefault(_deepFreeze);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _deepFreeze2.default)({
	    gameDimensions: {
	        w: 2880,
	        h: 1800
	    }
	}); /**
	     * config.js
	     *
	     * Immutable object containing basic configuration for the whole application.
	     *
	     * @author <a href="https://github.com/pahund">Patrick Hund</a>
	     * @since 29 Dec 2015
	     */

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	module.exports = function deepFreeze(o) {
	  Object.freeze(o);
	
	  Object.getOwnPropertyNames(o).forEach(function (prop) {
	    if (o.hasOwnProperty(prop) && o[prop] !== null && (_typeof(o[prop]) === "object" || typeof o[prop] === "function") && !Object.isFrozen(o[prop])) {
	      deepFreeze(o[prop]);
	    }
	  });
	
	  return o;
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _pixi = __webpack_require__(1);
	
	var _pixi2 = _interopRequireDefault(_pixi);
	
	var _config = __webpack_require__(2);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * makeRenderer.js
	 *
	 * @author <a href="https://github.com/pahund">Patrick Hund</a>
	 * @since 29 Dec 2015
	 */
	
	exports.default = function () {
	    var renderer = _pixi2.default.autoDetectRenderer(_config2.default.gameDimensions.w, _config2.default.gameDimensions.h, {
	        backgroundColor: 0x1099bb,
	        resolution: window.devicePixelRatio,
	        autoResize: true
	    });
	
	    renderer.view.style.position = "absolute";
	    document.body.appendChild(renderer.view);
	    return renderer;
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _pixi = __webpack_require__(1);
	
	var _pixi2 = _interopRequireDefault(_pixi);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  var stage = new _pixi2.default.Container();
	  stage.interactive = true;
	  return stage;
	}; /**
	    * makeStage.js
	    *
	    * @author <a href="https://github.com/pahund">Patrick Hund</a>
	    * @since 29 Dec 2015
	    */

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * resizeManager.js
	 *
	 * @author <a href="https://github.com/pahund">Patrick Hund</a>
	 * @since 29 Dec 2015
	 */
	
	var initialized = false,
	    config = null,
	    stage = null,
	    renderer = null;
	
	function resize() {
	
	    // Determine which screen dimension is most constrained
	    var ratio = Math.min(window.innerWidth / config.gameDimensions.w, window.innerHeight / config.gameDimensions.h);
	
	    // Scale the view appropriately to fill that dimension
	    stage.scale.x = ratio;
	    stage.scale.y = ratio;
	
	    // Update the renderer dimensions
	    var rendererDimensions = {
	        w: Math.ceil(config.gameDimensions.w * ratio),
	        h: Math.ceil(config.gameDimensions.h * ratio)
	    };
	
	    renderer.resize(rendererDimensions.w, rendererDimensions.h);
	
	    renderer.view.style.left = (window.innerWidth - rendererDimensions.w) / 2 + "px";
	    renderer.view.style.top = (window.innerHeight - rendererDimensions.h) / 2 + "px";
	}
	
	function init(deps) {
	    if (initialized) {
	        throw new Error("resize is already initialized");
	    }
	    config = deps.config;
	    stage = deps.stage;
	    renderer = deps.renderer;
	
	    window.addEventListener("resize", resize);
	    resize();
	    initialized = true;
	}
	
	exports.default = {
	    init: init
	};

/***/ }
/******/ ]);
//# sourceMappingURL=boxes.js.map