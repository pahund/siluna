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
	
	var _configManager = __webpack_require__(1);
	
	var _configManager2 = _interopRequireDefault(_configManager);
	
	var _rendererManager = __webpack_require__(2);
	
	var _rendererManager2 = _interopRequireDefault(_rendererManager);
	
	var _stageManager = __webpack_require__(3);
	
	var _stageManager2 = _interopRequireDefault(_stageManager);
	
	var _resizeManager = __webpack_require__(4);
	
	var _resizeManager2 = _interopRequireDefault(_resizeManager);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * siluna.js
	 *
	 * @author <a href="https://github.com/pahund">Patrick Hund</a>
	 * @since 27 Dec 2015
	 */
	
	_configManager2.default.init();
	_rendererManager2.default.init();
	_stageManager2.default.init();
	_resizeManager2.default.init();
	
	var config = _configManager2.default.get(),
	    renderer = _rendererManager2.default.get(),
	    stage = _stageManager2.default.get(),
	    loader = new PIXI.loaders.Loader();
	
	loader.add("siluna", "./data/siluna.json").load(onAssetsLoaded);
	
	function onAssetsLoaded(loader, res) {
	
	    var siluna = new PIXI.spine.Spine(res.siluna.spineData);
	    siluna.skeleton.setToSetupPose();
	    siluna.update(0);
	    siluna.autoUpdate = false;
	
	    // create a container for the spine animation and add the animation to it
	    var silunaCage = new PIXI.Container();
	    silunaCage.addChild(siluna);
	
	    // measure the spine animation and position it inside its container to align it to the origin
	    var localRect = siluna.getLocalBounds();
	    siluna.position.set(-localRect.x, -localRect.y);
	
	    // now we can scale, position and rotate the container as any other display object
	    var scale = Math.min(config.gameDimensions.w * 0.8 / silunaCage.width, config.gameDimensions.h * 0.8 / silunaCage.height);
	    silunaCage.scale.set(scale, scale);
	    silunaCage.position.set((renderer.width - silunaCage.width) * 0.5, (renderer.height - silunaCage.height) * 0.5);
	
	    // add the container to the stage
	    stage.addChild(silunaCage);
	
	    // once position and scaled, set the animation to play
	    siluna.state.setAnimationByName(0, 'tail_wagging', true);
	
	    (function animate() {
	        requestAnimationFrame(animate);
	
	        siluna.update(0.01666666666667);
	
	        // render the container
	        renderer.render(stage);
	    })();
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * configManager.js
	 *
	 * @author <a href="https://github.com/pahund">Patrick Hund</a>
	 * @since 29 Dec 2015
	 */
	
	var config = null;
	
	function init() {
	    if (config) {
	        throw new Error("config is already initialized");
	    }
	
	    var gameDimensions = {
	        w: 2880,
	        h: 1800
	    };
	
	    config = {
	        gameDimensions: gameDimensions
	    };
	}
	
	function get() {
	    if (!config) {
	        throw new Error("config has not been initialized");
	    }
	    return config;
	}
	
	exports.default = {
	    init: init,
	    get: get
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * rendererManager.js
	 *
	 * @author <a href="https://github.com/pahund">Patrick Hund</a>
	 * @since 29 Dec 2015
	 */
	
	var renderer = null;
	
	function init(_ref) {
	    var config = _ref.config;
	
	    if (renderer) {
	        throw new Error("renderer is already initialized");
	    }
	    renderer = PIXI.autoDetectRenderer(config.gameDimensions.w, config.gameDimensions.h, {
	        backgroundColor: 0x1099bb,
	        resolution: window.devicePixelRatio,
	        autoResize: true
	    });
	
	    renderer.view.style.position = "absolute";
	    document.body.appendChild(renderer.view);
	    return renderer;
	}
	
	function get() {
	    if (!renderer) {
	        throw new Error("renderer has not been initialized");
	    }
	    return renderer;
	}
	
	exports.default = {
	    init: init,
	    get: get
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * stageManager.js
	 *
	 * @author <a href="https://github.com/pahund">Patrick Hund</a>
	 * @since 29 Dec 2015
	 */
	
	var stage = null;
	
	function init() {
	    if (stage) {
	        throw new Error("stage is already initialized");
	    }
	    stage = new PIXI.Container();
	    stage.interactive = true;
	    return stage;
	}
	
	function get() {
	    if (!stage) {
	        throw new Error("stage has not been initialized");
	    }
	    return stage;
	}
	
	exports.default = {
	    init: init,
	    get: get
	};

/***/ },
/* 4 */
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
//# sourceMappingURL=siluna.js.map