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
	
	var _makeConfig = __webpack_require__(5);
	
	var _makeConfig2 = _interopRequireDefault(_makeConfig);
	
	var _makeRenderer = __webpack_require__(6);
	
	var _makeRenderer2 = _interopRequireDefault(_makeRenderer);
	
	var _makeStage = __webpack_require__(7);
	
	var _makeStage2 = _interopRequireDefault(_makeStage);
	
	var _resizeManager = __webpack_require__(4);
	
	var _resizeManager2 = _interopRequireDefault(_resizeManager);
	
	var _spriteManager = __webpack_require__(8);
	
	var _spriteManager2 = _interopRequireDefault(_spriteManager);
	
	var _makeStore = __webpack_require__(9);
	
	var _makeStore2 = _interopRequireDefault(_makeStore);
	
	var _actions = __webpack_require__(23);
	
	var _reducers = __webpack_require__(24);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	var _positioner = __webpack_require__(25);
	
	var _positioner2 = _interopRequireDefault(_positioner);
	
	var _tinter = __webpack_require__(26);
	
	var _tinter2 = _interopRequireDefault(_tinter);
	
	var _rotater = __webpack_require__(27);
	
	var _rotater2 = _interopRequireDefault(_rotater);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var config = (0, _makeConfig2.default)(),
	    renderer = (0, _makeRenderer2.default)({ config: config }),
	    stage = (0, _makeStage2.default)(),
	    store = (0, _makeStore2.default)({ config: config, reducers: _reducers2.default }); /**
	                                                                                         * index.js
	                                                                                         *
	                                                                                         * @author <a href="https://github.com/pahund">Patrick Hund</a>
	                                                                                         * @since 27 Dec 2015
	                                                                                         */
	
	_resizeManager2.default.init({ config: config, stage: stage, renderer: renderer });
	_spriteManager2.default.init({ store: store, stage: stage });
	
	_spriteManager2.default.add({
	    id: "siluna",
	    image: "images/siluna.png",
	    anchor: { x: 0.5, y: 0.1 }
	});
	
	_spriteManager2.default.add({
	    id: "sirena",
	    image: "images/sirena.png",
	    anchor: { x: 0.5, y: 0.1 }
	});
	
	var sinalta = _spriteManager2.default.add({
	    id: "sinalta",
	    image: "images/siluna.png",
	    anchor: { x: 0.5, y: 0.1 }
	});
	
	store.dispatch((0, _actions.tint)("sinalta"));
	sinalta.interactive = true;
	sinalta.click = function () {
	    return store.dispatch((0, _actions.tint)("sinalta"));
	};
	sinalta.touchstart = function () {
	    return store.dispatch((0, _actions.tint)("sinalta"));
	};
	
	(function animate() {
	    requestAnimationFrame(animate);
	
	    ["siluna", "sirena", "sinalta"].forEach(function (entity) {
	        store.dispatch((0, _actions.move)(entity));
	        store.dispatch((0, _actions.rotate)(entity));
	    });
	
	    _spriteManager2.default.update();
	
	    renderer.render(stage);
	})();

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
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

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * makeConfig.js
	 *
	 * @author <a href="https://github.com/pahund">Patrick Hund</a>
	 * @since 29 Dec 2015
	 */
	
	exports.default = function () {
	    var gameDimensions = {
	        w: 2880,
	        h: 1800
	    };
	
	    return {
	        gameDimensions: gameDimensions
	    };
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * makeRenderer.js
	 *
	 * @author <a href="https://github.com/pahund">Patrick Hund</a>
	 * @since 29 Dec 2015
	 */
	
	exports.default = function (_ref) {
	    var config = _ref.config;
	
	    var renderer = PIXI.autoDetectRenderer(config.gameDimensions.w, config.gameDimensions.h, {
	        backgroundColor: 0x1099bb,
	        resolution: window.devicePixelRatio,
	        autoResize: true
	    });
	
	    renderer.view.style.position = "absolute";
	    document.body.appendChild(renderer.view);
	    return renderer;
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * makeStage.js
	 *
	 * @author <a href="https://github.com/pahund">Patrick Hund</a>
	 * @since 29 Dec 2015
	 */
	
	exports.default = function () {
	  var stage = new PIXI.Container();
	  stage.interactive = true;
	  return stage;
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * spriteManager.js
	 *
	 * @author <a href="https://github.com/pahund">Patrick Hund</a>
	 * @since 01 Jan 2016
	 */
	
	var initialized = false,
	    store = null,
	    stage = null,
	    sprites = new Map();
	
	function init(deps) {
	    if (initialized) {
	        throw new Error("sprite manager is already initalized");
	    }
	    store = deps.store;
	    stage = deps.stage;
	}
	
	function add(_ref) {
	    var id = _ref.id;
	    var image = _ref.image;
	    var anchor = _ref.anchor;
	
	    var sprite = new PIXI.Sprite.fromImage(image);
	    sprite.anchor = anchor;
	    stage.addChild(sprite);
	    sprites.set(id, sprite);
	    return sprite;
	}
	
	function update() {
	    var state = store.getState();
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	        for (var _iterator = sprites[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var entry = _step.value;
	
	            var _entry = _slicedToArray(entry, 2);
	
	            var id = _entry[0];
	            var sprite = _entry[1];
	            var entity = state.entity[id];
	
	            if (!entity) {
	                sprites.delete(id);
	                continue;
	            }
	
	            if (entity.hasSprite) {
	                sprite.position = entity.hasSprite.position;
	                sprite.rotation = entity.hasSprite.rotation;
	                sprite.tint = entity.hasSprite.tint;
	            }
	
	            //if (entity.hasPosition) {
	            //    const { x, y } = entity.hasPosition;
	            //    sprite.position.x = x;
	            //    sprite.position.y = y;
	            //}
	            //
	            //if (entity.hasRotation) {
	            //    sprite.rotation = entity.hasRotation.r;
	            //}
	            //
	            //if (entity.hasTint) {
	            //    sprite.tint = entity.hasTint.tint;
	            //}
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }
	}
	
	exports.default = {
	    init: init, add: add, update: update
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _redux = __webpack_require__(10);
	
	var _moves = __webpack_require__(20);
	
	var _moves2 = _interopRequireDefault(_moves);
	
	var _rotates = __webpack_require__(21);
	
	var _rotates2 = _interopRequireDefault(_rotates);
	
	var _hasSprite = __webpack_require__(22);
	
	var _hasSprite2 = _interopRequireDefault(_hasSprite);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * storeManager.js
	 *
	 * @author <a href="https://github.com/pahund">Patrick Hund</a>
	 * @since 31 Dec 2015
	 */
	
	exports.default = function (_ref) {
	    var config = _ref.config;
	    var reducers = _ref.reducers;
	
	    var store = (0, _redux.createStore)(reducers, {
	        entity: {
	            siluna: {
	                hasSprite: (0, _hasSprite2.default)("siluna", "images/siluna.png", {
	                    anchor: { x: 0.5, y: 0.1 },
	                    position: {
	                        x: config.gameDimensions.w / 2,
	                        y: config.gameDimensions.h / 2
	                    }
	                }),
	                moves: (0, _moves2.default)(10, 10),
	                rotates: (0, _rotates2.default)(0.05)
	            },
	            sirena: {
	                hasSprite: (0, _hasSprite2.default)("sirena", "images/sirena.png", {
	                    anchor: { x: 0.5, y: 0.1 },
	                    position: {
	                        x: config.gameDimensions.w / 2,
	                        y: config.gameDimensions.h / 2
	                    }
	                }),
	                moves: (0, _moves2.default)(8, 12),
	                rotates: (0, _rotates2.default)(0.01)
	            },
	            sinalta: {
	                hasSprite: (0, _hasSprite2.default)("sinalta", "images/siluna.png", {
	                    anchor: { x: 0.5, y: 0.1 },
	                    position: {
	                        x: config.gameDimensions.w / 2,
	                        y: config.gameDimensions.h / 2
	                    }
	                }),
	                moves: (0, _moves2.default)(13, 7),
	                rotates: (0, _rotates2.default)(0.1)
	            }
	        },
	        config: config
	    });
	    return store;
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _createStore = __webpack_require__(11);
	
	var _createStore2 = _interopRequireDefault(_createStore);
	
	var _utilsCombineReducers = __webpack_require__(13);
	
	var _utilsCombineReducers2 = _interopRequireDefault(_utilsCombineReducers);
	
	var _utilsBindActionCreators = __webpack_require__(17);
	
	var _utilsBindActionCreators2 = _interopRequireDefault(_utilsBindActionCreators);
	
	var _utilsApplyMiddleware = __webpack_require__(18);
	
	var _utilsApplyMiddleware2 = _interopRequireDefault(_utilsApplyMiddleware);
	
	var _utilsCompose = __webpack_require__(19);
	
	var _utilsCompose2 = _interopRequireDefault(_utilsCompose);
	
	exports.createStore = _createStore2['default'];
	exports.combineReducers = _utilsCombineReducers2['default'];
	exports.bindActionCreators = _utilsBindActionCreators2['default'];
	exports.applyMiddleware = _utilsApplyMiddleware2['default'];
	exports.compose = _utilsCompose2['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = createStore;
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _utilsIsPlainObject = __webpack_require__(12);
	
	var _utilsIsPlainObject2 = _interopRequireDefault(_utilsIsPlainObject);
	
	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = {
	  INIT: '@@redux/INIT'
	};
	
	exports.ActionTypes = ActionTypes;
	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [initialState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	
	function createStore(reducer, initialState) {
	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }
	
	  var currentReducer = reducer;
	  var currentState = initialState;
	  var listeners = [];
	  var isDispatching = false;
	
	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }
	
	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    listeners.push(listener);
	    var isSubscribed = true;
	
	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }
	
	      isSubscribed = false;
	      var index = listeners.indexOf(listener);
	      listeners.splice(index, 1);
	    };
	  }
	
	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!_utilsIsPlainObject2['default'](action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }
	
	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }
	
	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }
	
	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }
	
	    listeners.slice().forEach(function (listener) {
	      return listener();
	    });
	    return action;
	  }
	
	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }
	
	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });
	
	  return {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  };
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	exports.__esModule = true;
	exports['default'] = isPlainObject;
	var fnToString = function fnToString(fn) {
	  return Function.prototype.toString.call(fn);
	};
	var objStringValue = fnToString(Object);
	
	/**
	 * @param {any} obj The object to inspect.
	 * @returns {boolean} True if the argument appears to be a plain object.
	 */
	
	function isPlainObject(obj) {
	  if (!obj || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
	    return false;
	  }
	
	  var proto = typeof obj.constructor === 'function' ? Object.getPrototypeOf(obj) : Object.prototype;
	
	  if (proto === null) {
	    return true;
	  }
	
	  var constructor = proto.constructor;
	
	  return typeof constructor === 'function' && constructor instanceof constructor && fnToString(constructor) === objStringValue;
	}
	
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports['default'] = combineReducers;
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _createStore = __webpack_require__(11);
	
	var _isPlainObject = __webpack_require__(12);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _mapValues = __webpack_require__(15);
	
	var _mapValues2 = _interopRequireDefault(_mapValues);
	
	var _pick = __webpack_require__(16);
	
	var _pick2 = _interopRequireDefault(_pick);
	
	/* eslint-disable no-console */
	
	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';
	
	  return 'Reducer "' + key + '" returned undefined handling ' + actionName + '. ' + 'To ignore an action, you must explicitly return the previous state.';
	}
	
	function getUnexpectedStateKeyWarningMessage(inputState, outputState, action) {
	  var reducerKeys = Object.keys(outputState);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'initialState argument passed to createStore' : 'previous state received by the reducer';
	
	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }
	
	  if (!_isPlainObject2['default'](inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + ({}).toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }
	
	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return reducerKeys.indexOf(key) < 0;
	  });
	
	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}
	
	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });
	
	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }
	
	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}
	
	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	
	function combineReducers(reducers) {
	  var finalReducers = _pick2['default'](reducers, function (val) {
	    return typeof val === 'function';
	  });
	  var sanityError;
	
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }
	
	  var defaultState = _mapValues2['default'](finalReducers, function () {
	    return undefined;
	  });
	
	  return function combination(state, action) {
	    if (state === undefined) state = defaultState;
	
	    if (sanityError) {
	      throw sanityError;
	    }
	
	    var hasChanged = false;
	    var finalState = _mapValues2['default'](finalReducers, function (reducer, key) {
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	      return nextStateForKey;
	    });
	
	    if (process.env.NODE_ENV !== 'production') {
	      var warningMessage = getUnexpectedStateKeyWarningMessage(state, finalState, action);
	      if (warningMessage) {
	        console.error(warningMessage);
	      }
	    }
	
	    return hasChanged ? finalState : state;
	  };
	}
	
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	/**
	 * Applies a function to every key-value pair inside an object.
	 *
	 * @param {Object} obj The source object.
	 * @param {Function} fn The mapper function that receives the value and the key.
	 * @returns {Object} A new object that contains the mapped values for the keys.
	 */
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = mapValues;
	
	function mapValues(obj, fn) {
	  return Object.keys(obj).reduce(function (result, key) {
	    result[key] = fn(obj[key], key);
	    return result;
	  }, {});
	}
	
	module.exports = exports["default"];

/***/ },
/* 16 */
/***/ function(module, exports) {

	/**
	 * Picks key-value pairs from an object where values satisfy a predicate.
	 *
	 * @param {Object} obj The object to pick from.
	 * @param {Function} fn The predicate the values must satisfy to be copied.
	 * @returns {Object} The object with the values that satisfied the predicate.
	 */
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = pick;
	
	function pick(obj, fn) {
	  return Object.keys(obj).reduce(function (result, key) {
	    if (fn(obj[key])) {
	      result[key] = obj[key];
	    }
	    return result;
	  }, {});
	}
	
	module.exports = exports["default"];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	exports.__esModule = true;
	exports['default'] = bindActionCreators;
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _mapValues = __webpack_require__(15);
	
	var _mapValues2 = _interopRequireDefault(_mapValues);
	
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}
	
	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }
	
	  if ((typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) !== 'object' || actionCreators === null || actionCreators === undefined) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }
	
	  return _mapValues2['default'](actionCreators, function (actionCreator) {
	    return bindActionCreator(actionCreator, dispatch);
	  });
	}
	
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	exports['default'] = applyMiddleware;
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _compose = __webpack_require__(19);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }
	
	  return function (next) {
	    return function (reducer, initialState) {
	      var store = next(reducer, initialState);
	      var _dispatch = store.dispatch;
	      var chain = [];
	
	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);
	
	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports) {

	/**
	 * Composes single-argument functions from right to left.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing functions from right to
	 * left. For example, compose(f, g, h) is identical to arg => f(g(h(arg))).
	 */
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = compose;
	
	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	
	  return function (arg) {
	    return funcs.reduceRight(function (composed, f) {
	      return f(composed);
	    }, arg);
	  };
	}
	
	module.exports = exports["default"];

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * moves.js
	 *
	 * @author <a href="https://github.com/pahund">Patrick Hund</a>
	 * @since 31 Dec 2015
	 */
	
	exports.default = function (dx, dy) {
	  return {
	    id: "moves",
	    dx: dx,
	    dy: dy
	  };
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * rotates.js
	 *
	 * @author <a href="https://github.com/pahund">Patrick Hund</a>
	 * @since 31 Dec 2015
	 */
	
	exports.default = function (dr) {
	  return {
	    id: "rotates",
	    dr: dr
	  };
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * hasSprite.js
	 *
	 * @author <a href="https://github.com/pahund">Patrick Hund</a>
	 * @since 01 Jan 2016
	 */
	var defaults = {
	    position: {
	        x: 0,
	        y: 0
	    },
	    anchor: {
	        x: 0.5,
	        y: 0.5
	    },
	    rotation: 0,
	    tint: 0xFFFFFF
	};
	
	exports.default = function (entity, image) {
	    var _ref = arguments.length <= 2 || arguments[2] === undefined ? defaults : arguments[2];
	
	    var _ref$position = _ref.position;
	    var position = _ref$position === undefined ? defaults.position : _ref$position;
	    var _ref$anchor = _ref.anchor;
	    var anchor = _ref$anchor === undefined ? defaults.anchor : _ref$anchor;
	    var _ref$rotation = _ref.rotation;
	    var rotation = _ref$rotation === undefined ? defaults.rotation : _ref$rotation;
	    var _ref$tint = _ref.tint;
	    var tint = _ref$tint === undefined ? defaults.tint : _ref$tint;
	    return {
	        id: "hasSprite",
	        entity: entity,
	        image: image,
	        position: position,
	        anchor: anchor,
	        rotation: rotation,
	        tint: tint
	    };
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.startMoving = startMoving;
	exports.move = move;
	exports.rotate = rotate;
	exports.tint = tint;
	/**
	 * index.js
	 *
	 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
	 * @since 31 Dec 2015
	 */
	
	var START_MOVING = exports.START_MOVING = "START_MOVING";
	var MOVE = exports.MOVE = "MOVE";
	var ROTATE = exports.ROTATE = "ROTATE";
	var TINT = exports.TINT = "TINT";
	
	function startMoving(entity, dx, dy) {
	    return {
	        type: START_MOVING,
	        entity: entity,
	        dx: dx,
	        dy: dy
	    };
	}
	
	function move(entity) {
	    return {
	        type: MOVE,
	        entity: entity
	    };
	}
	
	function rotate(entity) {
	    return {
	        type: ROTATE,
	        entity: entity
	    };
	}
	
	function tint(entity) {
	    return {
	        type: TINT,
	        entity: entity
	    };
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _actions = __webpack_require__(23);
	
	var _moves = __webpack_require__(20);
	
	var _moves2 = _interopRequireDefault(_moves);
	
	var _rotates = __webpack_require__(21);
	
	var _rotates2 = _interopRequireDefault(_rotates);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function startMoving(state, action) {
	    var entity = state.entity[action.entity];
	    entity.moves = (0, _moves2.default)(action.dx, action.dy);
	} /**
	   * index.js
	   *
	   * @author <a href="https://github.com/pahund">Patrick Hund</a>
	   * @since 31 Dec 2015
	   */
	
	function move(state, action) {
	    var entity = state.entity[action.entity];
	    if (!entity.hasSprite) {
	        return;
	    }
	    var dx = entity.moves.dx,
	        dy = entity.moves.dy;
	    var x = entity.hasSprite.position.x + dx,
	        y = entity.hasSprite.position.y + dy;
	    if (x > state.config.gameDimensions.w || x < 0) {
	        dx = dx * -1;
	    }
	    if (y > state.config.gameDimensions.h || y < 0) {
	        dy = dy * -1;
	    }
	    entity.hasSprite = Object.assign(entity.hasSprite, { position: { x: x, y: y } });
	    entity.moves = (0, _moves2.default)(dx, dy);
	}
	
	function rotate(state, action) {
	    var entity = state.entity[action.entity];
	    if (!entity.hasSprite) {
	        return;
	    }
	    var dr = entity.rotates.dr,
	        r = entity.hasSprite.rotation + dr;
	    entity.hasSprite = Object.assign(entity.hasSprite, { rotation: r });
	}
	
	function tint(state, action) {
	    var entity = state.entity[action.entity];
	    if (!entity.hasSprite) {
	        return;
	    }
	    entity.hasSprite = Object.assign(entity.hasSprite, { tint: Math.random() * 0xFFFFFF });
	}
	
	exports.default = function (state) {
	    var action = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	
	    switch (action.type) {
	        case _actions.START_MOVING:
	            startMoving(state, action);
	            break;
	        case _actions.MOVE:
	            move(state, action);
	            break;
	        case _actions.ROTATE:
	            rotate(state, action);
	            break;
	        case _actions.TINT:
	            tint(state, action);
	            break;
	    }
	    return state;
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * positioner.js
	 *
	 * @author <a href="https://github.com/pahund">Patrick Hund</a>
	 * @since 31 Dec 2015
	 */
	
	exports.default = function (entity, sprite) {
	    if (entity.hasPosition) {
	        sprite.position.x = entity.hasPosition.x;
	        sprite.position.y = entity.hasPosition.y;
	    }
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * tinter.js
	 *
	 * @author <a href="https://github.com/pahund">Patrick Hund</a>
	 * @since 31 Dec 2015
	 */
	
	exports.default = function (entity, sprite) {
	    if (entity.hasTint) {
	        sprite.tint = entity.hasTint.tint;
	    }
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * rotater.js
	 *
	 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
	 * @since 31 Dec 2015
	 */
	
	exports.default = function (entity, sprite) {
	    if (entity.hasRotation) {
	        sprite.rotation = entity.hasRotation.r;
	    }
	};

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map