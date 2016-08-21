webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dcalsky/www/hacker/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dcalsky/www/hacker/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _reactRouter = __webpack_require__(1);

	var _reactTapEventPlugin = __webpack_require__(94);

	var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

	var _reactDom = __webpack_require__(112);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _App = __webpack_require__(234);

	var _App2 = _interopRequireDefault(_App);

	var _Home = __webpack_require__(682);

	var _Home2 = _interopRequireDefault(_Home);

	var _Detail = __webpack_require__(695);

	var _Detail2 = _interopRequireDefault(_Detail);

	__webpack_require__(696);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _reactTapEventPlugin2.default)();

	// 维持一套状态在root组件
	var store = {
	  index: {
	    value: 0,
	    changeIndex: function changeIndex(val) {
	      this.value = val;
	    }
	  },
	  photo: {
	    id: null,
	    changeId: function changeId(id) {
	      this.id = id;
	    }
	  }
	};

	_reactDom2.default.render(_react2.default.createElement(
	  _reactRouter.Router,
	  { history: _reactRouter.browserHistory },
	  _react2.default.createElement(
	    _reactRouter.Route,
	    { path: '/', component: _App2.default, store: store },
	    _react2.default.createElement(_reactRouter.IndexRedirect, { to: '/home' }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/home', component: _Home2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/detail', component: _Detail2.default })
	  )
	), document.getElementById('app'));

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dcalsky/www/hacker/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 94:
/***/ function(module, exports, __webpack_require__) {

	var invariant = __webpack_require__(95);
	var defaultClickRejectionStrategy = __webpack_require__(96);

	var alreadyInjected = false;

	module.exports = function injectTapEventPlugin (strategyOverrides) {
	  strategyOverrides = strategyOverrides || {}
	  var shouldRejectClick = strategyOverrides.shouldRejectClick || defaultClickRejectionStrategy;

	  if (false) {
	    invariant(
	      !alreadyInjected,
	      'injectTapEventPlugin(): Can only be called once per application lifecycle.\n\n\
	It is recommended to call injectTapEventPlugin() just before you call \
	ReactDOM.render(). If you are using an external library which calls injectTapEventPlugin() \
	itself, please contact the maintainer as it shouldn\'t be called in library code and \
	should be injected by the application.'
	    )
	  }

	  alreadyInjected = true;

	  __webpack_require__(97).injection.injectEventPluginsByName({
	    'TapEventPlugin':       __webpack_require__(104)(shouldRejectClick)
	  });
	};


/***/ },

/***/ 95:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */

	"use strict";

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function (condition, format, a, b, c, d, e, f) {
	  if (false) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error('Invariant Violation: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;

/***/ },

/***/ 96:
/***/ function(module, exports) {

	module.exports = function(lastTouchEvent, clickTimestamp) {
	  if (lastTouchEvent && (clickTimestamp - lastTouchEvent) < 750) {
	    return true;
	  }
	};


/***/ },

/***/ 104:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule TapEventPlugin
	 * @typechecks static-only
	 */

	"use strict";

	var EventConstants = __webpack_require__(100);
	var EventPluginUtils = __webpack_require__(99);
	var EventPropagators = __webpack_require__(105);
	var SyntheticUIEvent = __webpack_require__(106);
	var TouchEventUtils = __webpack_require__(109);
	var ViewportMetrics = __webpack_require__(110);

	var keyOf = __webpack_require__(111);
	var topLevelTypes = EventConstants.topLevelTypes;

	var isStartish = EventPluginUtils.isStartish;
	var isEndish = EventPluginUtils.isEndish;

	var isTouch = function(topLevelType) {
	  var touchTypes = [
	    topLevelTypes.topTouchCancel,
	    topLevelTypes.topTouchEnd,
	    topLevelTypes.topTouchStart,
	    topLevelTypes.topTouchMove
	  ];
	  return touchTypes.indexOf(topLevelType) >= 0;
	}

	/**
	 * Number of pixels that are tolerated in between a `touchStart` and `touchEnd`
	 * in order to still be considered a 'tap' event.
	 */
	var tapMoveThreshold = 10;
	var ignoreMouseThreshold = 750;
	var startCoords = {x: null, y: null};
	var lastTouchEvent = null;

	var Axis = {
	  x: {page: 'pageX', client: 'clientX', envScroll: 'currentPageScrollLeft'},
	  y: {page: 'pageY', client: 'clientY', envScroll: 'currentPageScrollTop'}
	};

	function getAxisCoordOfEvent(axis, nativeEvent) {
	  var singleTouch = TouchEventUtils.extractSingleTouch(nativeEvent);
	  if (singleTouch) {
	    return singleTouch[axis.page];
	  }
	  return axis.page in nativeEvent ?
	    nativeEvent[axis.page] :
	    nativeEvent[axis.client] + ViewportMetrics[axis.envScroll];
	}

	function getDistance(coords, nativeEvent) {
	  var pageX = getAxisCoordOfEvent(Axis.x, nativeEvent);
	  var pageY = getAxisCoordOfEvent(Axis.y, nativeEvent);
	  return Math.pow(
	    Math.pow(pageX - coords.x, 2) + Math.pow(pageY - coords.y, 2),
	    0.5
	  );
	}

	var touchEvents = [
	  topLevelTypes.topTouchStart,
	  topLevelTypes.topTouchCancel,
	  topLevelTypes.topTouchEnd,
	  topLevelTypes.topTouchMove,
	];

	var dependencies = [
	  topLevelTypes.topMouseDown,
	  topLevelTypes.topMouseMove,
	  topLevelTypes.topMouseUp,
	].concat(touchEvents);

	var eventTypes = {
	  touchTap: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onTouchTap: null}),
	      captured: keyOf({onTouchTapCapture: null})
	    },
	    dependencies: dependencies
	  }
	};

	var now = (function() {
	  if (Date.now) {
	    return Date.now;
	  } else {
	    // IE8 support: http://stackoverflow.com/questions/9430357/please-explain-why-and-how-new-date-works-as-workaround-for-date-now-in
	    return function () {
	      return +new Date;
	    }
	  }
	})();

	function createTapEventPlugin(shouldRejectClick) {
	  return {

	    tapMoveThreshold: tapMoveThreshold,

	    ignoreMouseThreshold: ignoreMouseThreshold,

	    eventTypes: eventTypes,

	    /**
	     * @param {string} topLevelType Record from `EventConstants`.
	     * @param {DOMEventTarget} targetInst The listening component root node.
	     * @param {object} nativeEvent Native browser event.
	     * @return {*} An accumulation of synthetic events.
	     * @see {EventPluginHub.extractEvents}
	     */
	    extractEvents: function(
	      topLevelType,
	      targetInst,
	      nativeEvent,
	      nativeEventTarget
	    ) {

	      if (isTouch(topLevelType)) {
	        lastTouchEvent = now();
	      } else {
	        if (shouldRejectClick(lastTouchEvent, now())) {
	          return null;
	        }
	      }

	      if (!isStartish(topLevelType) && !isEndish(topLevelType)) {
	        return null;
	      }
	      var event = null;
	      var distance = getDistance(startCoords, nativeEvent);
	      if (isEndish(topLevelType) && distance < tapMoveThreshold) {
	        event = SyntheticUIEvent.getPooled(
	          eventTypes.touchTap,
	          targetInst,
	          nativeEvent,
	          nativeEventTarget
	        );
	      }
	      if (isStartish(topLevelType)) {
	        startCoords.x = getAxisCoordOfEvent(Axis.x, nativeEvent);
	        startCoords.y = getAxisCoordOfEvent(Axis.y, nativeEvent);
	      } else if (isEndish(topLevelType)) {
	        startCoords.x = 0;
	        startCoords.y = 0;
	      }
	      EventPropagators.accumulateTwoPhaseDispatches(event);
	      return event;
	    }

	  };
	}

	module.exports = createTapEventPlugin;


/***/ },

/***/ 109:
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule TouchEventUtils
	 */

	var TouchEventUtils = {
	  /**
	   * Utility function for common case of extracting out the primary touch from a
	   * touch event.
	   * - `touchEnd` events usually do not have the `touches` property.
	   *   http://stackoverflow.com/questions/3666929/
	   *   mobile-sarai-touchend-event-not-firing-when-last-touch-is-removed
	   *
	   * @param {Event} nativeEvent Native event that may or may not be a touch.
	   * @return {TouchesObject?} an object with pageX and pageY or null.
	   */
	  extractSingleTouch: function(nativeEvent) {
	    var touches = nativeEvent.touches;
	    var changedTouches = nativeEvent.changedTouches;
	    var hasTouches = touches && touches.length > 0;
	    var hasChangedTouches = changedTouches && changedTouches.length > 0;

	    return !hasTouches && hasChangedTouches ? changedTouches[0] :
	           hasTouches ? touches[0] :
	           nativeEvent;
	  }
	};

	module.exports = TouchEventUtils;


/***/ },

/***/ 111:
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyOf
	 */

	/**
	 * Allows extraction of a minified key. Let's the build system minify keys
	 * without losing the ability to dynamically use key strings as values
	 * themselves. Pass in an object with a single key/val pair and it will return
	 * you the string key of that single record. Suppose you want to grab the
	 * value for a key 'className' inside of an object. Key/val minification may
	 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
	 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
	 * reuse those resolutions.
	 */
	"use strict";

	var keyOf = function (oneKeyObj) {
	  var key;
	  for (key in oneKeyObj) {
	    if (!oneKeyObj.hasOwnProperty(key)) {
	      continue;
	    }
	    return key;
	  }
	  return null;
	};

	module.exports = keyOf;

/***/ },

/***/ 234:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dcalsky/www/hacker/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dcalsky/www/hacker/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(235);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(261);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(262);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(266);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(313);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _colors = __webpack_require__(321);

	var _materialUi = __webpack_require__(322);

	var _MuiThemeProvider = __webpack_require__(467);

	var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

	var _getMuiTheme = __webpack_require__(468);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	var _icon = __webpack_require__(674);

	var _icon2 = _interopRequireDefault(_icon);

	var _BottomNav = __webpack_require__(675);

	var _BottomNav2 = _interopRequireDefault(_BottomNav);

	var _favorite = __webpack_require__(681);

	var _favorite2 = _interopRequireDefault(_favorite);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var muiTheme = (0, _getMuiTheme2.default)({
	  appBar: {
	    height: 100
	  },
	  palette: {
	    primary1Color: _colors.deepOrange900
	  },
	  bottomNavigation: {
	    backgroundColor: _colors.deepOrange900,
	    selectedColor: _colors.grey200
	  }
	});

	var App = function (_Component) {
	  (0, _inherits3.default)(App, _Component);

	  function App(props) {
	    (0, _classCallCheck3.default)(this, App);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(App).call(this, props));
	  }

	  (0, _createClass3.default)(App, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var children = _props.children;
	      var route = _props.route;

	      var store = route.store;
	      return _react2.default.createElement(
	        _MuiThemeProvider2.default,
	        { muiTheme: muiTheme },
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(_materialUi.AppBar, {
	            style: { background: _colors.deepOrange900 },
	            iconElementLeft: _react2.default.createElement(
	              _materialUi.IconButton,
	              null,
	              _react2.default.createElement('img', { src: _icon2.default })
	            ),
	            title: 'PicFood'
	          }),
	          children && _react2.default.cloneElement(children, {
	            store: store
	          }),
	          _react2.default.createElement(_BottomNav2.default, this.props)
	        )
	      );
	    }
	  }]);
	  return App;
	}(_react.Component);

	exports.default = App;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dcalsky/www/hacker/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 235:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(236), __esModule: true };

/***/ },

/***/ 236:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(237);
	module.exports = __webpack_require__(248).Object.getPrototypeOf;

/***/ },

/***/ 237:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(238)
	  , $getPrototypeOf = __webpack_require__(240);

	__webpack_require__(246)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },

/***/ 238:
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(239);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },

/***/ 239:
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },

/***/ 240:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(241)
	  , toObject    = __webpack_require__(238)
	  , IE_PROTO    = __webpack_require__(242)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },

/***/ 241:
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },

/***/ 242:
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(243)('keys')
	  , uid    = __webpack_require__(245);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },

/***/ 243:
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(244)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },

/***/ 244:
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },

/***/ 245:
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },

/***/ 246:
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(247)
	  , core    = __webpack_require__(248)
	  , fails   = __webpack_require__(257);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },

/***/ 247:
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(244)
	  , core      = __webpack_require__(248)
	  , ctx       = __webpack_require__(249)
	  , hide      = __webpack_require__(251)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },

/***/ 248:
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },

/***/ 249:
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(250);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },

/***/ 250:
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },

/***/ 251:
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(252)
	  , createDesc = __webpack_require__(260);
	module.exports = __webpack_require__(256) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },

/***/ 252:
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(253)
	  , IE8_DOM_DEFINE = __webpack_require__(255)
	  , toPrimitive    = __webpack_require__(259)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(256) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },

/***/ 253:
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(254);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },

/***/ 254:
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },

/***/ 255:
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(256) && !__webpack_require__(257)(function(){
	  return Object.defineProperty(__webpack_require__(258)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },

/***/ 256:
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(257)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },

/***/ 257:
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },

/***/ 258:
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(254)
	  , document = __webpack_require__(244).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },

/***/ 259:
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(254);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },

/***/ 260:
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },

/***/ 261:
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(263);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },

/***/ 263:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(264), __esModule: true };

/***/ },

/***/ 264:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(265);
	var $Object = __webpack_require__(248).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },

/***/ 265:
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(247);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(256), 'Object', {defineProperty: __webpack_require__(252).f});

/***/ },

/***/ 266:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(267);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },

/***/ 267:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(268);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(297);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },

/***/ 268:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(269), __esModule: true };

/***/ },

/***/ 269:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(270);
	__webpack_require__(292);
	module.exports = __webpack_require__(296).f('iterator');

/***/ },

/***/ 270:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(271)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(273)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },

/***/ 271:
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(272)
	  , defined   = __webpack_require__(239);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },

/***/ 272:
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },

/***/ 273:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(274)
	  , $export        = __webpack_require__(247)
	  , redefine       = __webpack_require__(275)
	  , hide           = __webpack_require__(251)
	  , has            = __webpack_require__(241)
	  , Iterators      = __webpack_require__(276)
	  , $iterCreate    = __webpack_require__(277)
	  , setToStringTag = __webpack_require__(290)
	  , getPrototypeOf = __webpack_require__(240)
	  , ITERATOR       = __webpack_require__(291)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },

/***/ 274:
/***/ function(module, exports) {

	module.exports = true;

/***/ },

/***/ 275:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(251);

/***/ },

/***/ 276:
/***/ function(module, exports) {

	module.exports = {};

/***/ },

/***/ 277:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(278)
	  , descriptor     = __webpack_require__(260)
	  , setToStringTag = __webpack_require__(290)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(251)(IteratorPrototype, __webpack_require__(291)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },

/***/ 278:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(253)
	  , dPs         = __webpack_require__(279)
	  , enumBugKeys = __webpack_require__(288)
	  , IE_PROTO    = __webpack_require__(242)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(258)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(289).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },

/***/ 279:
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(252)
	  , anObject = __webpack_require__(253)
	  , getKeys  = __webpack_require__(280);

	module.exports = __webpack_require__(256) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },

/***/ 280:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(281)
	  , enumBugKeys = __webpack_require__(288);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },

/***/ 281:
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(241)
	  , toIObject    = __webpack_require__(282)
	  , arrayIndexOf = __webpack_require__(285)(false)
	  , IE_PROTO     = __webpack_require__(242)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },

/***/ 282:
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(283)
	  , defined = __webpack_require__(239);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },

/***/ 283:
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(284);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },

/***/ 284:
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },

/***/ 285:
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(282)
	  , toLength  = __webpack_require__(286)
	  , toIndex   = __webpack_require__(287);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },

/***/ 286:
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(272)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },

/***/ 287:
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(272)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },

/***/ 288:
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },

/***/ 289:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(244).document && document.documentElement;

/***/ },

/***/ 290:
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(252).f
	  , has = __webpack_require__(241)
	  , TAG = __webpack_require__(291)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },

/***/ 291:
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(243)('wks')
	  , uid        = __webpack_require__(245)
	  , Symbol     = __webpack_require__(244).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },

/***/ 292:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(293);
	var global        = __webpack_require__(244)
	  , hide          = __webpack_require__(251)
	  , Iterators     = __webpack_require__(276)
	  , TO_STRING_TAG = __webpack_require__(291)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },

/***/ 293:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(294)
	  , step             = __webpack_require__(295)
	  , Iterators        = __webpack_require__(276)
	  , toIObject        = __webpack_require__(282);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(273)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },

/***/ 294:
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },

/***/ 295:
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },

/***/ 296:
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(291);

/***/ },

/***/ 297:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(298), __esModule: true };

/***/ },

/***/ 298:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(299);
	__webpack_require__(310);
	__webpack_require__(311);
	__webpack_require__(312);
	module.exports = __webpack_require__(248).Symbol;

/***/ },

/***/ 299:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(244)
	  , has            = __webpack_require__(241)
	  , DESCRIPTORS    = __webpack_require__(256)
	  , $export        = __webpack_require__(247)
	  , redefine       = __webpack_require__(275)
	  , META           = __webpack_require__(300).KEY
	  , $fails         = __webpack_require__(257)
	  , shared         = __webpack_require__(243)
	  , setToStringTag = __webpack_require__(290)
	  , uid            = __webpack_require__(245)
	  , wks            = __webpack_require__(291)
	  , wksExt         = __webpack_require__(296)
	  , wksDefine      = __webpack_require__(301)
	  , keyOf          = __webpack_require__(302)
	  , enumKeys       = __webpack_require__(303)
	  , isArray        = __webpack_require__(306)
	  , anObject       = __webpack_require__(253)
	  , toIObject      = __webpack_require__(282)
	  , toPrimitive    = __webpack_require__(259)
	  , createDesc     = __webpack_require__(260)
	  , _create        = __webpack_require__(278)
	  , gOPNExt        = __webpack_require__(307)
	  , $GOPD          = __webpack_require__(309)
	  , $DP            = __webpack_require__(252)
	  , $keys          = __webpack_require__(280)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(308).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(305).f  = $propertyIsEnumerable;
	  __webpack_require__(304).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(274)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(251)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },

/***/ 300:
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(245)('meta')
	  , isObject = __webpack_require__(254)
	  , has      = __webpack_require__(241)
	  , setDesc  = __webpack_require__(252).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(257)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },

/***/ 301:
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(244)
	  , core           = __webpack_require__(248)
	  , LIBRARY        = __webpack_require__(274)
	  , wksExt         = __webpack_require__(296)
	  , defineProperty = __webpack_require__(252).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },

/***/ 302:
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(280)
	  , toIObject = __webpack_require__(282);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },

/***/ 303:
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(280)
	  , gOPS    = __webpack_require__(304)
	  , pIE     = __webpack_require__(305);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },

/***/ 304:
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },

/***/ 305:
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },

/***/ 306:
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(284);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },

/***/ 307:
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(282)
	  , gOPN      = __webpack_require__(308).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },

/***/ 308:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(281)
	  , hiddenKeys = __webpack_require__(288).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },

/***/ 309:
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(305)
	  , createDesc     = __webpack_require__(260)
	  , toIObject      = __webpack_require__(282)
	  , toPrimitive    = __webpack_require__(259)
	  , has            = __webpack_require__(241)
	  , IE8_DOM_DEFINE = __webpack_require__(255)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(256) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },

/***/ 310:
/***/ function(module, exports) {

	

/***/ },

/***/ 311:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(301)('asyncIterator');

/***/ },

/***/ 312:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(301)('observable');

/***/ },

/***/ 313:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(314);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(318);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(267);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },

/***/ 314:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(315), __esModule: true };

/***/ },

/***/ 315:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(316);
	module.exports = __webpack_require__(248).Object.setPrototypeOf;

/***/ },

/***/ 316:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(247);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(317).set});

/***/ },

/***/ 317:
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(254)
	  , anObject = __webpack_require__(253);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(249)(Function.call, __webpack_require__(309).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },

/***/ 318:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(319), __esModule: true };

/***/ },

/***/ 319:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(320);
	var $Object = __webpack_require__(248).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },

/***/ 320:
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(247)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(278)});

/***/ },

/***/ 674:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },

/***/ 675:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dcalsky/www/hacker/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dcalsky/www/hacker/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(235);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(261);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(262);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(266);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(313);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _FontIcon = __webpack_require__(348);

	var _FontIcon2 = _interopRequireDefault(_FontIcon);

	var _colors = __webpack_require__(321);

	var _BottomNavigation = __webpack_require__(676);

	var _home = __webpack_require__(679);

	var _home2 = _interopRequireDefault(_home);

	var _book = __webpack_require__(680);

	var _book2 = _interopRequireDefault(_book);

	var _reactRouter = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var style = {
	  iconCenter: {
	    display: 'inline-block'
	  },
	  navBottom: {
	    position: 'relative',
	    background: 'rgb(191, 54, 12) !important'
	  }
	};

	var BottomNav = function (_Component) {
	  (0, _inherits3.default)(BottomNav, _Component);

	  function BottomNav(props) {
	    (0, _classCallCheck3.default)(this, BottomNav);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(BottomNav).call(this, props));
	  }

	  (0, _createClass3.default)(BottomNav, [{
	    key: 'render',
	    value: function render() {
	      var store = this.props.route.store;

	      return _react2.default.createElement(
	        _BottomNavigation.BottomNavigation,
	        { style: style.navBottom, selectedIndex: store.index.value },
	        _react2.default.createElement(_BottomNavigation.BottomNavigationItem, {
	          label: 'Home',
	          icon: _react2.default.createElement(_home2.default, { style: style.iconCenter }),
	          onTouchTap: function onTouchTap() {
	            store.index.changeIndex(0);
	            _reactRouter.browserHistory.push('/home');
	          }
	        }),
	        _react2.default.createElement(_BottomNavigation.BottomNavigationItem, {
	          label: 'Function',
	          icon: _react2.default.createElement(_book2.default, { style: style.iconCenter }),
	          onTouchTap: function onTouchTap() {
	            //if(store.photo.id) {
	            store.index.changeIndex(1);
	            _reactRouter.browserHistory.push('/detail');
	            //}
	          }
	        })
	      );
	    }
	  }]);
	  return BottomNav;
	}(_react.Component);

	exports.default = BottomNav;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dcalsky/www/hacker/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 676:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BottomNavigationItem = exports.BottomNavigation = undefined;

	var _BottomNavigation2 = __webpack_require__(677);

	var _BottomNavigation3 = _interopRequireDefault(_BottomNavigation2);

	var _BottomNavigationItem2 = __webpack_require__(678);

	var _BottomNavigationItem3 = _interopRequireDefault(_BottomNavigationItem2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.BottomNavigation = _BottomNavigation3.default;
	exports.BottomNavigationItem = _BottomNavigationItem3.default;

/***/ },

/***/ 677:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _simpleAssign = __webpack_require__(325);

	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function getStyles(props, context) {
	  var bottomNavigation = context.muiTheme.bottomNavigation;


	  var styles = {
	    root: {
	      position: 'relative',
	      width: '100%',
	      display: 'flex',
	      justifyContent: 'center',
	      backgroundColor: bottomNavigation.backgroundColor,
	      height: bottomNavigation.height
	    },
	    item: {
	      flex: '1'
	    }
	  };

	  return styles;
	}

	var BottomNavigation = function BottomNavigation(props, context) {
	  var children = props.children;
	  var style = props.style;
	  var selectedIndex = props.selectedIndex;

	  var other = _objectWithoutProperties(props, ['children', 'style', 'selectedIndex']);

	  var prepareStyles = context.muiTheme.prepareStyles;

	  var styles = getStyles(props, context);

	  var preparedChildren = _react.Children.map(children, function (child, index) {
	    return (0, _react.cloneElement)(child, {
	      style: (0, _simpleAssign2.default)({}, styles.item, child.props.style),
	      selected: index === selectedIndex
	    });
	  });

	  return _react2.default.createElement(
	    'div',
	    _extends({}, other, { style: prepareStyles((0, _simpleAssign2.default)({}, styles.root, style)) }),
	    preparedChildren
	  );
	};

	BottomNavigation.propTypes = {
	  /**
	   * The `BottomNavigationItem`s to populate the element with.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * The index of the currently selected navigation item.
	   */
	  selectedIndex: _react.PropTypes.number,
	  /**
	   * @ignore
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	};

	BottomNavigation.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};

	exports.default = BottomNavigation;

/***/ },

/***/ 678:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _simpleAssign = __webpack_require__(325);

	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _EnhancedButton = __webpack_require__(330);

	var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function getStyles(props, context) {
	  var selected = props.selected;
	  var bottomNavigation = context.muiTheme.bottomNavigation;


	  var color = selected ? bottomNavigation.selectedColor : bottomNavigation.unselectedColor;

	  var styles = {
	    root: {
	      transition: 'padding-top 0.3s',
	      paddingTop: selected ? 6 : 8,
	      paddingBottom: 10,
	      paddingLeft: 12,
	      paddingRight: 12,
	      minWidth: 80,
	      maxWidth: 168
	    },
	    label: {
	      fontSize: selected ? bottomNavigation.selectedFontSize : bottomNavigation.unselectedFontSize,
	      transition: 'color 0.3s, font-size 0.3s',
	      color: color,
	      margin: 'auto'
	    },
	    icon: {
	      display: 'block'
	    },
	    iconColor: color
	  };

	  return styles;
	}

	var BottomNavigationItem = function BottomNavigationItem(props, context) {
	  var label = props.label;
	  var icon = props.icon;
	  var style = props.style;

	  var other = _objectWithoutProperties(props, ['label', 'icon', 'style']);

	  var prepareStyles = context.muiTheme.prepareStyles;

	  var styles = getStyles(props, context);

	  var styledIcon = (0, _react.cloneElement)(icon, {
	    style: (0, _simpleAssign2.default)({}, styles.icon, icon.props.style),
	    color: icon.props.color || styles.iconColor
	  });

	  return _react2.default.createElement(
	    _EnhancedButton2.default,
	    _extends({}, other, { style: (0, _simpleAssign2.default)({}, styles.root, style) }),
	    styledIcon,
	    _react2.default.createElement(
	      'div',
	      { style: prepareStyles(styles.label) },
	      label
	    )
	  );
	};

	BottomNavigationItem.propTypes = {
	  /**
	   * Set the icon representing the view for this item.
	   */
	  icon: _react.PropTypes.node,
	  /**
	   * Set the label describing the view for this item.
	   */
	  label: _react.PropTypes.node,
	  /**
	   * @ignore
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	};

	BottomNavigationItem.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};

	exports.default = BottomNavigationItem;

/***/ },

/***/ 679:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(352);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(359);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ActionHome = function ActionHome(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' })
	  );
	};
	ActionHome = (0, _pure2.default)(ActionHome);
	ActionHome.displayName = 'ActionHome';
	ActionHome.muiName = 'SvgIcon';

	exports.default = ActionHome;

/***/ },

/***/ 680:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(352);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(359);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ActionBook = function ActionBook(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z' })
	  );
	};
	ActionBook = (0, _pure2.default)(ActionBook);
	ActionBook.displayName = 'ActionBook';
	ActionBook.muiName = 'SvgIcon';

	exports.default = ActionBook;

/***/ },

/***/ 681:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(352);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(359);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ActionFavorite = function ActionFavorite(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' })
	  );
	};
	ActionFavorite = (0, _pure2.default)(ActionFavorite);
	ActionFavorite.displayName = 'ActionFavorite';
	ActionFavorite.muiName = 'SvgIcon';

	exports.default = ActionFavorite;

/***/ },

/***/ 682:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dcalsky/www/hacker/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dcalsky/www/hacker/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(235);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(261);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(262);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(266);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(313);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _materialUi = __webpack_require__(322);

	var _cloudUpload = __webpack_require__(683);

	var _cloudUpload2 = _interopRequireDefault(_cloudUpload);

	var _addAPhoto = __webpack_require__(684);

	var _addAPhoto2 = _interopRequireDefault(_addAPhoto);

	var _default = __webpack_require__(685);

	var _default2 = _interopRequireDefault(_default);

	var _reactRouter = __webpack_require__(1);

	var _reactQiniu = __webpack_require__(686);

	var _reactQiniu2 = _interopRequireDefault(_reactQiniu);

	var _superagent = __webpack_require__(690);

	var _superagent2 = _interopRequireDefault(_superagent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var URL = 'http://api.minos.picfood.cn/qiniu';

	var style = {
	  qiniu: {
	    textAlign: 'center',
	    border: 'none',
	    paddingTop: 40
	  },
	  photoBox: {
	    position: 'relative',
	    border: '2px dashed #a1a1a1'
	  },
	  photo: {
	    width: '100%',
	    maxHeight: 375
	  },
	  progressBox: {
	    position: 'absolute',
	    width: '100%',
	    height: '100%',
	    background: 'rgba(0, 0, 0, 0.4)'
	  },
	  progress: {
	    position: 'absolute'
	  }
	};

	var Home = function (_Component) {
	  (0, _inherits3.default)(Home, _Component);

	  function Home(props) {
	    (0, _classCallCheck3.default)(this, Home);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Home).call(this, props));

	    _this.state = {
	      token: null,
	      uploadCompleted: false,
	      uploading: false,
	      photoURL: null
	    };
	    return _this;
	  }

	  (0, _createClass3.default)(Home, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var self = this;
	      _superagent2.default.get(URL + '/upToken').set('Accept', 'application/json').end(function (err, res) {
	        console.log(res.body);
	        self.setState({
	          token: res.body.uptoken
	        });
	      });
	    }
	  }, {
	    key: 'onUpload',
	    value: function onUpload(files) {
	      var self = this;
	      this.setState({ uploading: true });
	      files.map(function (file) {
	        var reader = new FileReader();

	        reader.addEventListener("load", function () {
	          // FileReader来读取File类型
	          self.setState({
	            photoURL: file.preview
	          });
	        }, false);

	        if (file) {
	          reader.readAsDataURL(file);
	        }

	        file.onprogress = function (e) {
	          if (e.percent === 100 && e.target.response) {
	            // 完成百分比
	            var result = JSON.parse(e.target.response);
	            self.setState({
	              uploading: false,
	              uploadCompleted: true
	            });
	            self.props.store.photo.changeId(123123);
	            // todo self.props.store.photo.changeId(result.id) // 存在内存里
	            self.props.store.index.changeIndex(1);
	            _reactRouter.browserHistory.push('detail');
	          }
	        };
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { style: { padding: '30px 10px' } },
	        _react2.default.createElement(
	          'div',
	          { style: style.photoBox },
	          this.state.uploading ? _react2.default.createElement(
	            'div',
	            { style: style.progressBox },
	            _react2.default.createElement(_materialUi.CircularProgress, { style: style.progress, size: 4 })
	          ) : null,
	          _react2.default.createElement('img', { style: style.photo, src: this.state.photoURL || _default2.default, alt: '' })
	        ),
	        _react2.default.createElement(
	          _reactQiniu2.default,
	          { onDrop: function onDrop() {}, style: style.qiniu, token: this.state.token, onUpload: this.onUpload.bind(this) },
	          this.state.uploadCompleted ? _react2.default.createElement(_materialUi.RaisedButton, {
	            label: '查看结果',
	            labelPosition: 'after',
	            primary: true,
	            icon: _react2.default.createElement(_cloudUpload2.default, null)
	          }) : _react2.default.createElement(_materialUi.RaisedButton, {
	            label: '拍张照',
	            labelPosition: 'after',
	            icon: _react2.default.createElement(_addAPhoto2.default, null)
	          })
	        )
	      );
	    }
	  }]);
	  return Home;
	}(_react.Component);

	exports.default = Home;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dcalsky/www/hacker/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 683:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(352);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(359);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FileCloudUpload = function FileCloudUpload(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z' })
	  );
	};
	FileCloudUpload = (0, _pure2.default)(FileCloudUpload);
	FileCloudUpload.displayName = 'FileCloudUpload';
	FileCloudUpload.muiName = 'SvgIcon';

	exports.default = FileCloudUpload;

/***/ },

/***/ 684:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(352);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(359);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ImageAddAPhoto = function ImageAddAPhoto(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M3 4V1h2v3h3v2H5v3H3V6H0V4h3zm3 6V7h3V4h7l1.83 2H21c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V10h3zm7 9c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-3.2-5c0 1.77 1.43 3.2 3.2 3.2s3.2-1.43 3.2-3.2-1.43-3.2-3.2-3.2-3.2 1.43-3.2 3.2z' })
	  );
	};
	ImageAddAPhoto = (0, _pure2.default)(ImageAddAPhoto);
	ImageAddAPhoto.displayName = 'ImageAddAPhoto';
	ImageAddAPhoto.muiName = 'SvgIcon';

	exports.default = ImageAddAPhoto;

/***/ },

/***/ 685:
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,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"

/***/ },

/***/ 686:
/***/ function(module, exports, __webpack_require__) {

	/*global URL */

	'use strict';
	var React = __webpack_require__(3);
	var ReactDOM = __webpack_require__(112)
	var request = __webpack_require__(687);

	var isFunction = function (fn) {
	 var getType = {};
	 return fn && getType.toString.call(fn) === '[object Function]';
	};

	var ReactQiniu = React.createClass({
	    // based on https://github.com/paramaggarwal/react-dropzone
	    propTypes: {
	        onDrop: React.PropTypes.func.isRequired,
	        token: React.PropTypes.string.isRequired,
	        // called before upload to set callback to files
	        onUpload: React.PropTypes.func,
	        size: React.PropTypes.number,
	        style: React.PropTypes.object,
	        supportClick: React.PropTypes.bool,
	        accept: React.PropTypes.string,
	        multiple: React.PropTypes.bool,
	        // Qiniu
	        uploadUrl: React.PropTypes.string,
	        uploadKey: React.PropTypes.string,
	        prefix: React.PropTypes.string
	    },

	    getDefaultProps: function() {
	        var uploadUrl = 'http://upload.qiniu.com'
	        if (window.location.protocol === 'https:') {
	          uploadUrl = 'https://up.qbox.me/'
	        }

	        return {
	            supportClick: true,
	            multiple: true,
	            uploadUrl: uploadUrl
	        };
	    },

	    getInitialState: function() {
	        return {
	            isDragActive: false
	        };
	    },

	    onDragLeave: function(e) {
	        this.setState({
	            isDragActive: false
	        });
	    },

	    onDragOver: function(e) {
	        e.preventDefault();
	        e.dataTransfer.dropEffect = 'copy';

	        this.setState({
	            isDragActive: true
	        });
	    },

	    onDrop: function(e) {
	        e.preventDefault();

	        this.setState({
	            isDragActive: false
	        });

	        var files;
	        if (e.dataTransfer) {
	            files = e.dataTransfer.files;
	        } else if (e.target) {
	            files = e.target.files;
	        }

	        var maxFiles = (this.props.multiple) ? files.length : 1;

	        if (this.props.onUpload) {
	            files = Array.prototype.slice.call(files, 0, maxFiles);
	            this.props.onUpload(files, e);
	        }

	        for (var i = 0; i < maxFiles; i++) {
	            files[i].preview = URL.createObjectURL(files[i]);
	            files[i].request = this.upload(files[i]);
	            files[i].uploadPromise = files[i].request.promise();
	        }

	        if (this.props.onDrop) {
	            files = Array.prototype.slice.call(files, 0, maxFiles);
	            this.props.onDrop(files, e);
	        }
	    },

	    onClick: function () {
	        if (this.props.supportClick) {
	            this.open();
	        }
	    },

	    open: function() {
	        var fileInput = ReactDOM.findDOMNode(this.refs.fileInput);
	        fileInput.value = null;
	        fileInput.click();
	    },

	    upload: function(file) {
	        if (!file || file.size === 0) return null;
	        var key = file.preview.split('/').pop() + '.' + file.name.split('.').pop();
	        if (this.props.prefix) {
	            key = this.props.prefix  + key;
	        }

	        if(this.props.uploadKey){
	          key = this.props.uploadKey;
	        }

	        var r = request
	            .post(this.props.uploadUrl)
	            .field('key', key)
	            .field('token', this.props.token)
	            .field('x:filename', file.name)
	            .field('x:size', file.size)
	            .attach('file', file, file.name)
	            .set('Accept', 'application/json');
	        if (isFunction(file.onprogress)) { r.on('progress', file.onprogress); }
	        return r;
	    },

	    render: function() {
	        var className = this.props.className || 'dropzone';
	        if (this.state.isDragActive) {
	            className += ' active';
	        }

	        var style = this.props.style || {
	            width: this.props.size || 100,
	            height: this.props.size || 100,
	            borderStyle: this.state.isDragActive ? 'solid' : 'dashed'
	        };


	        return (
	            React.createElement('div', {className: className, style: style, onClick: this.onClick, onDragLeave: this.onDragLeave, onDragOver: this.onDragOver, onDrop: this.onDrop},
	                                React.createElement('input', {style: {display: 'none'}, type: 'file', multiple: this.props.multiple, ref: 'fileInput', onChange: this.onDrop, accept: this.props.accept}),
	                                this.props.children
	                               )
	        );
	    }

	});

	module.exports = ReactQiniu;


/***/ },

/***/ 687:
/***/ function(module, exports, __webpack_require__) {

	// From https://gist.github.com/epeli/11209665

	var Promise = __webpack_require__(688);

	// So you can `var request = require("superagent-bluebird-promise")`
	var superagent = module.exports = __webpack_require__(690);
	var Request = superagent.Request;

	Promise.config({
	    // Enable cancellation.
	    cancellation: true
	});
	// Create custom error type.
	// Create a new object, that prototypally inherits from the Error constructor.
	var SuperagentPromiseError = function(message, originalError) {
	  var stack;
	  this.message = message;
	  this.name = 'SuperagentPromiseError';
	  this.originalError = originalError;

	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, this.constructor);
	    stack = this.stack;
	  }
	  else {
	    stack = (new Error(message)).stack;
	  }

	  if (Object.defineProperty) {
	    Object.defineProperty(this, 'stack', {
	      get: function() {
	        if (this.originalError) {
	          return stack + '\nCaused by:  ' + this.originalError.stack;
	        }

	        return stack;
	      }
	    });
	  }
	};

	SuperagentPromiseError.prototype = new Error();
	SuperagentPromiseError.prototype.constructor = SuperagentPromiseError;
	superagent.SuperagentPromiseError = SuperagentPromiseError;

	/**
	 * @namespace utils
	 * @class Superagent
	 */

	/**
	 *
	 * Add promise support for superagent/supertest
	 *
	 * Call .promise() to return promise for the request
	 *
	 * @method then
	 * @return {Bluebird.Promise}
	 */
	Request.prototype.promise = function() {
	  var req = this;
	  var error;

	  return new Promise(function(resolve, reject, onCancel) {
	      req.end(function(err, res) {
	        if (typeof res !== "undefined" && res.status >= 400) {
	          var msg = 'cannot ' + req.method + ' ' + req.url + ' (' + res.status + ')';
	          error = new SuperagentPromiseError(msg);
	          error.status = res.status;
	          error.body = res.body;
	          error.res = res;
	          reject(error);
	        } else if (err) {
	          reject(new SuperagentPromiseError('Bad request', err));
	        } else {
	          resolve(res);
	        }
	      });
	      onCancel(function() {
	        req.abort();
	       });

	    });
	};

	/**
	 *
	 * Make superagent requests Promises/A+ conformant
	 *
	 * Call .then([onFulfilled], [onRejected]) to register callbacks
	 *
	 * @method then
	 * @param {function} [onFulfilled]
	 * @param {function} [onRejected]
	 * @return {Bluebird.Promise}
	 */
	Request.prototype.then = function() {
	  var promise = this.promise();
	  return promise.then.apply(promise, arguments);
	};


/***/ },

/***/ 688:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, global, setImmediate) {/* @preserve
	 * The MIT License (MIT)
	 * 
	 * Copyright (c) 2013-2015 Petka Antonov
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 * 
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 * 
	 */
	/**
	 * bluebird build version 3.4.1
	 * Features enabled: core, race, call_get, generators, map, nodeify, promisify, props, reduce, settle, some, using, timers, filter, any, each
	*/
	!function(e){if(true)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.Promise=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof _dereq_=="function"&&_dereq_;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof _dereq_=="function"&&_dereq_;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise) {
	var SomePromiseArray = Promise._SomePromiseArray;
	function any(promises) {
	    var ret = new SomePromiseArray(promises);
	    var promise = ret.promise();
	    ret.setHowMany(1);
	    ret.setUnwrap();
	    ret.init();
	    return promise;
	}

	Promise.any = function (promises) {
	    return any(promises);
	};

	Promise.prototype.any = function () {
	    return any(this);
	};

	};

	},{}],2:[function(_dereq_,module,exports){
	"use strict";
	var firstLineError;
	try {throw new Error(); } catch (e) {firstLineError = e;}
	var schedule = _dereq_("./schedule");
	var Queue = _dereq_("./queue");
	var util = _dereq_("./util");

	function Async() {
	    this._customScheduler = false;
	    this._isTickUsed = false;
	    this._lateQueue = new Queue(16);
	    this._normalQueue = new Queue(16);
	    this._haveDrainedQueues = false;
	    this._trampolineEnabled = true;
	    var self = this;
	    this.drainQueues = function () {
	        self._drainQueues();
	    };
	    this._schedule = schedule;
	}

	Async.prototype.setScheduler = function(fn) {
	    var prev = this._schedule;
	    this._schedule = fn;
	    this._customScheduler = true;
	    return prev;
	};

	Async.prototype.hasCustomScheduler = function() {
	    return this._customScheduler;
	};

	Async.prototype.enableTrampoline = function() {
	    this._trampolineEnabled = true;
	};

	Async.prototype.disableTrampolineIfNecessary = function() {
	    if (util.hasDevTools) {
	        this._trampolineEnabled = false;
	    }
	};

	Async.prototype.haveItemsQueued = function () {
	    return this._isTickUsed || this._haveDrainedQueues;
	};


	Async.prototype.fatalError = function(e, isNode) {
	    if (isNode) {
	        process.stderr.write("Fatal " + (e instanceof Error ? e.stack : e) +
	            "\n");
	        process.exit(2);
	    } else {
	        this.throwLater(e);
	    }
	};

	Async.prototype.throwLater = function(fn, arg) {
	    if (arguments.length === 1) {
	        arg = fn;
	        fn = function () { throw arg; };
	    }
	    if (typeof setTimeout !== "undefined") {
	        setTimeout(function() {
	            fn(arg);
	        }, 0);
	    } else try {
	        this._schedule(function() {
	            fn(arg);
	        });
	    } catch (e) {
	        throw new Error("No async scheduler available\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	    }
	};

	function AsyncInvokeLater(fn, receiver, arg) {
	    this._lateQueue.push(fn, receiver, arg);
	    this._queueTick();
	}

	function AsyncInvoke(fn, receiver, arg) {
	    this._normalQueue.push(fn, receiver, arg);
	    this._queueTick();
	}

	function AsyncSettlePromises(promise) {
	    this._normalQueue._pushOne(promise);
	    this._queueTick();
	}

	if (!util.hasDevTools) {
	    Async.prototype.invokeLater = AsyncInvokeLater;
	    Async.prototype.invoke = AsyncInvoke;
	    Async.prototype.settlePromises = AsyncSettlePromises;
	} else {
	    Async.prototype.invokeLater = function (fn, receiver, arg) {
	        if (this._trampolineEnabled) {
	            AsyncInvokeLater.call(this, fn, receiver, arg);
	        } else {
	            this._schedule(function() {
	                setTimeout(function() {
	                    fn.call(receiver, arg);
	                }, 100);
	            });
	        }
	    };

	    Async.prototype.invoke = function (fn, receiver, arg) {
	        if (this._trampolineEnabled) {
	            AsyncInvoke.call(this, fn, receiver, arg);
	        } else {
	            this._schedule(function() {
	                fn.call(receiver, arg);
	            });
	        }
	    };

	    Async.prototype.settlePromises = function(promise) {
	        if (this._trampolineEnabled) {
	            AsyncSettlePromises.call(this, promise);
	        } else {
	            this._schedule(function() {
	                promise._settlePromises();
	            });
	        }
	    };
	}

	Async.prototype.invokeFirst = function (fn, receiver, arg) {
	    this._normalQueue.unshift(fn, receiver, arg);
	    this._queueTick();
	};

	Async.prototype._drainQueue = function(queue) {
	    while (queue.length() > 0) {
	        var fn = queue.shift();
	        if (typeof fn !== "function") {
	            fn._settlePromises();
	            continue;
	        }
	        var receiver = queue.shift();
	        var arg = queue.shift();
	        fn.call(receiver, arg);
	    }
	};

	Async.prototype._drainQueues = function () {
	    this._drainQueue(this._normalQueue);
	    this._reset();
	    this._haveDrainedQueues = true;
	    this._drainQueue(this._lateQueue);
	};

	Async.prototype._queueTick = function () {
	    if (!this._isTickUsed) {
	        this._isTickUsed = true;
	        this._schedule(this.drainQueues);
	    }
	};

	Async.prototype._reset = function () {
	    this._isTickUsed = false;
	};

	module.exports = Async;
	module.exports.firstLineError = firstLineError;

	},{"./queue":26,"./schedule":29,"./util":36}],3:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise, INTERNAL, tryConvertToPromise, debug) {
	var calledBind = false;
	var rejectThis = function(_, e) {
	    this._reject(e);
	};

	var targetRejected = function(e, context) {
	    context.promiseRejectionQueued = true;
	    context.bindingPromise._then(rejectThis, rejectThis, null, this, e);
	};

	var bindingResolved = function(thisArg, context) {
	    if (((this._bitField & 50397184) === 0)) {
	        this._resolveCallback(context.target);
	    }
	};

	var bindingRejected = function(e, context) {
	    if (!context.promiseRejectionQueued) this._reject(e);
	};

	Promise.prototype.bind = function (thisArg) {
	    if (!calledBind) {
	        calledBind = true;
	        Promise.prototype._propagateFrom = debug.propagateFromFunction();
	        Promise.prototype._boundValue = debug.boundValueFunction();
	    }
	    var maybePromise = tryConvertToPromise(thisArg);
	    var ret = new Promise(INTERNAL);
	    ret._propagateFrom(this, 1);
	    var target = this._target();
	    ret._setBoundTo(maybePromise);
	    if (maybePromise instanceof Promise) {
	        var context = {
	            promiseRejectionQueued: false,
	            promise: ret,
	            target: target,
	            bindingPromise: maybePromise
	        };
	        target._then(INTERNAL, targetRejected, undefined, ret, context);
	        maybePromise._then(
	            bindingResolved, bindingRejected, undefined, ret, context);
	        ret._setOnCancel(maybePromise);
	    } else {
	        ret._resolveCallback(target);
	    }
	    return ret;
	};

	Promise.prototype._setBoundTo = function (obj) {
	    if (obj !== undefined) {
	        this._bitField = this._bitField | 2097152;
	        this._boundTo = obj;
	    } else {
	        this._bitField = this._bitField & (~2097152);
	    }
	};

	Promise.prototype._isBound = function () {
	    return (this._bitField & 2097152) === 2097152;
	};

	Promise.bind = function (thisArg, value) {
	    return Promise.resolve(value).bind(thisArg);
	};
	};

	},{}],4:[function(_dereq_,module,exports){
	"use strict";
	var old;
	if (typeof Promise !== "undefined") old = Promise;
	function noConflict() {
	    try { if (Promise === bluebird) Promise = old; }
	    catch (e) {}
	    return bluebird;
	}
	var bluebird = _dereq_("./promise")();
	bluebird.noConflict = noConflict;
	module.exports = bluebird;

	},{"./promise":22}],5:[function(_dereq_,module,exports){
	"use strict";
	var cr = Object.create;
	if (cr) {
	    var callerCache = cr(null);
	    var getterCache = cr(null);
	    callerCache[" size"] = getterCache[" size"] = 0;
	}

	module.exports = function(Promise) {
	var util = _dereq_("./util");
	var canEvaluate = util.canEvaluate;
	var isIdentifier = util.isIdentifier;

	var getMethodCaller;
	var getGetter;
	if (false) {
	var makeMethodCaller = function (methodName) {
	    return new Function("ensureMethod", "                                    \n\
	        return function(obj) {                                               \n\
	            'use strict'                                                     \n\
	            var len = this.length;                                           \n\
	            ensureMethod(obj, 'methodName');                                 \n\
	            switch(len) {                                                    \n\
	                case 1: return obj.methodName(this[0]);                      \n\
	                case 2: return obj.methodName(this[0], this[1]);             \n\
	                case 3: return obj.methodName(this[0], this[1], this[2]);    \n\
	                case 0: return obj.methodName();                             \n\
	                default:                                                     \n\
	                    return obj.methodName.apply(obj, this);                  \n\
	            }                                                                \n\
	        };                                                                   \n\
	        ".replace(/methodName/g, methodName))(ensureMethod);
	};

	var makeGetter = function (propertyName) {
	    return new Function("obj", "                                             \n\
	        'use strict';                                                        \n\
	        return obj.propertyName;                                             \n\
	        ".replace("propertyName", propertyName));
	};

	var getCompiled = function(name, compiler, cache) {
	    var ret = cache[name];
	    if (typeof ret !== "function") {
	        if (!isIdentifier(name)) {
	            return null;
	        }
	        ret = compiler(name);
	        cache[name] = ret;
	        cache[" size"]++;
	        if (cache[" size"] > 512) {
	            var keys = Object.keys(cache);
	            for (var i = 0; i < 256; ++i) delete cache[keys[i]];
	            cache[" size"] = keys.length - 256;
	        }
	    }
	    return ret;
	};

	getMethodCaller = function(name) {
	    return getCompiled(name, makeMethodCaller, callerCache);
	};

	getGetter = function(name) {
	    return getCompiled(name, makeGetter, getterCache);
	};
	}

	function ensureMethod(obj, methodName) {
	    var fn;
	    if (obj != null) fn = obj[methodName];
	    if (typeof fn !== "function") {
	        var message = "Object " + util.classString(obj) + " has no method '" +
	            util.toString(methodName) + "'";
	        throw new Promise.TypeError(message);
	    }
	    return fn;
	}

	function caller(obj) {
	    var methodName = this.pop();
	    var fn = ensureMethod(obj, methodName);
	    return fn.apply(obj, this);
	}
	Promise.prototype.call = function (methodName) {
	    var args = [].slice.call(arguments, 1);;
	    if (false) {
	        if (canEvaluate) {
	            var maybeCaller = getMethodCaller(methodName);
	            if (maybeCaller !== null) {
	                return this._then(
	                    maybeCaller, undefined, undefined, args, undefined);
	            }
	        }
	    }
	    args.push(methodName);
	    return this._then(caller, undefined, undefined, args, undefined);
	};

	function namedGetter(obj) {
	    return obj[this];
	}
	function indexedGetter(obj) {
	    var index = +this;
	    if (index < 0) index = Math.max(0, index + obj.length);
	    return obj[index];
	}
	Promise.prototype.get = function (propertyName) {
	    var isIndex = (typeof propertyName === "number");
	    var getter;
	    if (!isIndex) {
	        if (canEvaluate) {
	            var maybeGetter = getGetter(propertyName);
	            getter = maybeGetter !== null ? maybeGetter : namedGetter;
	        } else {
	            getter = namedGetter;
	        }
	    } else {
	        getter = indexedGetter;
	    }
	    return this._then(getter, undefined, undefined, propertyName, undefined);
	};
	};

	},{"./util":36}],6:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise, PromiseArray, apiRejection, debug) {
	var util = _dereq_("./util");
	var tryCatch = util.tryCatch;
	var errorObj = util.errorObj;
	var async = Promise._async;

	Promise.prototype["break"] = Promise.prototype.cancel = function() {
	    if (!debug.cancellation()) return this._warn("cancellation is disabled");

	    var promise = this;
	    var child = promise;
	    while (promise.isCancellable()) {
	        if (!promise._cancelBy(child)) {
	            if (child._isFollowing()) {
	                child._followee().cancel();
	            } else {
	                child._cancelBranched();
	            }
	            break;
	        }

	        var parent = promise._cancellationParent;
	        if (parent == null || !parent.isCancellable()) {
	            if (promise._isFollowing()) {
	                promise._followee().cancel();
	            } else {
	                promise._cancelBranched();
	            }
	            break;
	        } else {
	            if (promise._isFollowing()) promise._followee().cancel();
	            child = promise;
	            promise = parent;
	        }
	    }
	};

	Promise.prototype._branchHasCancelled = function() {
	    this._branchesRemainingToCancel--;
	};

	Promise.prototype._enoughBranchesHaveCancelled = function() {
	    return this._branchesRemainingToCancel === undefined ||
	           this._branchesRemainingToCancel <= 0;
	};

	Promise.prototype._cancelBy = function(canceller) {
	    if (canceller === this) {
	        this._branchesRemainingToCancel = 0;
	        this._invokeOnCancel();
	        return true;
	    } else {
	        this._branchHasCancelled();
	        if (this._enoughBranchesHaveCancelled()) {
	            this._invokeOnCancel();
	            return true;
	        }
	    }
	    return false;
	};

	Promise.prototype._cancelBranched = function() {
	    if (this._enoughBranchesHaveCancelled()) {
	        this._cancel();
	    }
	};

	Promise.prototype._cancel = function() {
	    if (!this.isCancellable()) return;

	    this._setCancelled();
	    async.invoke(this._cancelPromises, this, undefined);
	};

	Promise.prototype._cancelPromises = function() {
	    if (this._length() > 0) this._settlePromises();
	};

	Promise.prototype._unsetOnCancel = function() {
	    this._onCancelField = undefined;
	};

	Promise.prototype.isCancellable = function() {
	    return this.isPending() && !this.isCancelled();
	};

	Promise.prototype._doInvokeOnCancel = function(onCancelCallback, internalOnly) {
	    if (util.isArray(onCancelCallback)) {
	        for (var i = 0; i < onCancelCallback.length; ++i) {
	            this._doInvokeOnCancel(onCancelCallback[i], internalOnly);
	        }
	    } else if (onCancelCallback !== undefined) {
	        if (typeof onCancelCallback === "function") {
	            if (!internalOnly) {
	                var e = tryCatch(onCancelCallback).call(this._boundValue());
	                if (e === errorObj) {
	                    this._attachExtraTrace(e.e);
	                    async.throwLater(e.e);
	                }
	            }
	        } else {
	            onCancelCallback._resultCancelled(this);
	        }
	    }
	};

	Promise.prototype._invokeOnCancel = function() {
	    var onCancelCallback = this._onCancel();
	    this._unsetOnCancel();
	    async.invoke(this._doInvokeOnCancel, this, onCancelCallback);
	};

	Promise.prototype._invokeInternalOnCancel = function() {
	    if (this.isCancellable()) {
	        this._doInvokeOnCancel(this._onCancel(), true);
	        this._unsetOnCancel();
	    }
	};

	Promise.prototype._resultCancelled = function() {
	    this.cancel();
	};

	};

	},{"./util":36}],7:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(NEXT_FILTER) {
	var util = _dereq_("./util");
	var getKeys = _dereq_("./es5").keys;
	var tryCatch = util.tryCatch;
	var errorObj = util.errorObj;

	function catchFilter(instances, cb, promise) {
	    return function(e) {
	        var boundTo = promise._boundValue();
	        predicateLoop: for (var i = 0; i < instances.length; ++i) {
	            var item = instances[i];

	            if (item === Error ||
	                (item != null && item.prototype instanceof Error)) {
	                if (e instanceof item) {
	                    return tryCatch(cb).call(boundTo, e);
	                }
	            } else if (typeof item === "function") {
	                var matchesPredicate = tryCatch(item).call(boundTo, e);
	                if (matchesPredicate === errorObj) {
	                    return matchesPredicate;
	                } else if (matchesPredicate) {
	                    return tryCatch(cb).call(boundTo, e);
	                }
	            } else if (util.isObject(e)) {
	                var keys = getKeys(item);
	                for (var j = 0; j < keys.length; ++j) {
	                    var key = keys[j];
	                    if (item[key] != e[key]) {
	                        continue predicateLoop;
	                    }
	                }
	                return tryCatch(cb).call(boundTo, e);
	            }
	        }
	        return NEXT_FILTER;
	    };
	}

	return catchFilter;
	};

	},{"./es5":13,"./util":36}],8:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise) {
	var longStackTraces = false;
	var contextStack = [];

	Promise.prototype._promiseCreated = function() {};
	Promise.prototype._pushContext = function() {};
	Promise.prototype._popContext = function() {return null;};
	Promise._peekContext = Promise.prototype._peekContext = function() {};

	function Context() {
	    this._trace = new Context.CapturedTrace(peekContext());
	}
	Context.prototype._pushContext = function () {
	    if (this._trace !== undefined) {
	        this._trace._promiseCreated = null;
	        contextStack.push(this._trace);
	    }
	};

	Context.prototype._popContext = function () {
	    if (this._trace !== undefined) {
	        var trace = contextStack.pop();
	        var ret = trace._promiseCreated;
	        trace._promiseCreated = null;
	        return ret;
	    }
	    return null;
	};

	function createContext() {
	    if (longStackTraces) return new Context();
	}

	function peekContext() {
	    var lastIndex = contextStack.length - 1;
	    if (lastIndex >= 0) {
	        return contextStack[lastIndex];
	    }
	    return undefined;
	}
	Context.CapturedTrace = null;
	Context.create = createContext;
	Context.deactivateLongStackTraces = function() {};
	Context.activateLongStackTraces = function() {
	    var Promise_pushContext = Promise.prototype._pushContext;
	    var Promise_popContext = Promise.prototype._popContext;
	    var Promise_PeekContext = Promise._peekContext;
	    var Promise_peekContext = Promise.prototype._peekContext;
	    var Promise_promiseCreated = Promise.prototype._promiseCreated;
	    Context.deactivateLongStackTraces = function() {
	        Promise.prototype._pushContext = Promise_pushContext;
	        Promise.prototype._popContext = Promise_popContext;
	        Promise._peekContext = Promise_PeekContext;
	        Promise.prototype._peekContext = Promise_peekContext;
	        Promise.prototype._promiseCreated = Promise_promiseCreated;
	        longStackTraces = false;
	    };
	    longStackTraces = true;
	    Promise.prototype._pushContext = Context.prototype._pushContext;
	    Promise.prototype._popContext = Context.prototype._popContext;
	    Promise._peekContext = Promise.prototype._peekContext = peekContext;
	    Promise.prototype._promiseCreated = function() {
	        var ctx = this._peekContext();
	        if (ctx && ctx._promiseCreated == null) ctx._promiseCreated = this;
	    };
	};
	return Context;
	};

	},{}],9:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise, Context) {
	var getDomain = Promise._getDomain;
	var async = Promise._async;
	var Warning = _dereq_("./errors").Warning;
	var util = _dereq_("./util");
	var canAttachTrace = util.canAttachTrace;
	var unhandledRejectionHandled;
	var possiblyUnhandledRejection;
	var bluebirdFramePattern =
	    /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/;
	var stackFramePattern = null;
	var formatStack = null;
	var indentStackFrames = false;
	var printWarning;
	var debugging = !!(util.env("BLUEBIRD_DEBUG") != 0 &&
	                        (true ||
	                         util.env("BLUEBIRD_DEBUG") ||
	                         util.env("NODE_ENV") === "development"));

	var warnings = !!(util.env("BLUEBIRD_WARNINGS") != 0 &&
	    (debugging || util.env("BLUEBIRD_WARNINGS")));

	var longStackTraces = !!(util.env("BLUEBIRD_LONG_STACK_TRACES") != 0 &&
	    (debugging || util.env("BLUEBIRD_LONG_STACK_TRACES")));

	var wForgottenReturn = util.env("BLUEBIRD_W_FORGOTTEN_RETURN") != 0 &&
	    (warnings || !!util.env("BLUEBIRD_W_FORGOTTEN_RETURN"));

	Promise.prototype.suppressUnhandledRejections = function() {
	    var target = this._target();
	    target._bitField = ((target._bitField & (~1048576)) |
	                      524288);
	};

	Promise.prototype._ensurePossibleRejectionHandled = function () {
	    if ((this._bitField & 524288) !== 0) return;
	    this._setRejectionIsUnhandled();
	    async.invokeLater(this._notifyUnhandledRejection, this, undefined);
	};

	Promise.prototype._notifyUnhandledRejectionIsHandled = function () {
	    fireRejectionEvent("rejectionHandled",
	                                  unhandledRejectionHandled, undefined, this);
	};

	Promise.prototype._setReturnedNonUndefined = function() {
	    this._bitField = this._bitField | 268435456;
	};

	Promise.prototype._returnedNonUndefined = function() {
	    return (this._bitField & 268435456) !== 0;
	};

	Promise.prototype._notifyUnhandledRejection = function () {
	    if (this._isRejectionUnhandled()) {
	        var reason = this._settledValue();
	        this._setUnhandledRejectionIsNotified();
	        fireRejectionEvent("unhandledRejection",
	                                      possiblyUnhandledRejection, reason, this);
	    }
	};

	Promise.prototype._setUnhandledRejectionIsNotified = function () {
	    this._bitField = this._bitField | 262144;
	};

	Promise.prototype._unsetUnhandledRejectionIsNotified = function () {
	    this._bitField = this._bitField & (~262144);
	};

	Promise.prototype._isUnhandledRejectionNotified = function () {
	    return (this._bitField & 262144) > 0;
	};

	Promise.prototype._setRejectionIsUnhandled = function () {
	    this._bitField = this._bitField | 1048576;
	};

	Promise.prototype._unsetRejectionIsUnhandled = function () {
	    this._bitField = this._bitField & (~1048576);
	    if (this._isUnhandledRejectionNotified()) {
	        this._unsetUnhandledRejectionIsNotified();
	        this._notifyUnhandledRejectionIsHandled();
	    }
	};

	Promise.prototype._isRejectionUnhandled = function () {
	    return (this._bitField & 1048576) > 0;
	};

	Promise.prototype._warn = function(message, shouldUseOwnTrace, promise) {
	    return warn(message, shouldUseOwnTrace, promise || this);
	};

	Promise.onPossiblyUnhandledRejection = function (fn) {
	    var domain = getDomain();
	    possiblyUnhandledRejection =
	        typeof fn === "function" ? (domain === null ? fn : domain.bind(fn))
	                                 : undefined;
	};

	Promise.onUnhandledRejectionHandled = function (fn) {
	    var domain = getDomain();
	    unhandledRejectionHandled =
	        typeof fn === "function" ? (domain === null ? fn : domain.bind(fn))
	                                 : undefined;
	};

	var disableLongStackTraces = function() {};
	Promise.longStackTraces = function () {
	    if (async.haveItemsQueued() && !config.longStackTraces) {
	        throw new Error("cannot enable long stack traces after promises have been created\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	    }
	    if (!config.longStackTraces && longStackTracesIsSupported()) {
	        var Promise_captureStackTrace = Promise.prototype._captureStackTrace;
	        var Promise_attachExtraTrace = Promise.prototype._attachExtraTrace;
	        config.longStackTraces = true;
	        disableLongStackTraces = function() {
	            if (async.haveItemsQueued() && !config.longStackTraces) {
	                throw new Error("cannot enable long stack traces after promises have been created\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	            }
	            Promise.prototype._captureStackTrace = Promise_captureStackTrace;
	            Promise.prototype._attachExtraTrace = Promise_attachExtraTrace;
	            Context.deactivateLongStackTraces();
	            async.enableTrampoline();
	            config.longStackTraces = false;
	        };
	        Promise.prototype._captureStackTrace = longStackTracesCaptureStackTrace;
	        Promise.prototype._attachExtraTrace = longStackTracesAttachExtraTrace;
	        Context.activateLongStackTraces();
	        async.disableTrampolineIfNecessary();
	    }
	};

	Promise.hasLongStackTraces = function () {
	    return config.longStackTraces && longStackTracesIsSupported();
	};

	var fireDomEvent = (function() {
	    try {
	        var event = document.createEvent("CustomEvent");
	        event.initCustomEvent("testingtheevent", false, true, {});
	        util.global.dispatchEvent(event);
	        return function(name, event) {
	            var domEvent = document.createEvent("CustomEvent");
	            domEvent.initCustomEvent(name.toLowerCase(), false, true, event);
	            return !util.global.dispatchEvent(domEvent);
	        };
	    } catch (e) {}
	    return function() {
	        return false;
	    };
	})();

	var fireGlobalEvent = (function() {
	    if (util.isNode) {
	        return function() {
	            return process.emit.apply(process, arguments);
	        };
	    } else {
	        if (!util.global) {
	            return function() {
	                return false;
	            };
	        }
	        return function(name) {
	            var methodName = "on" + name.toLowerCase();
	            var method = util.global[methodName];
	            if (!method) return false;
	            method.apply(util.global, [].slice.call(arguments, 1));
	            return true;
	        };
	    }
	})();

	function generatePromiseLifecycleEventObject(name, promise) {
	    return {promise: promise};
	}

	var eventToObjectGenerator = {
	    promiseCreated: generatePromiseLifecycleEventObject,
	    promiseFulfilled: generatePromiseLifecycleEventObject,
	    promiseRejected: generatePromiseLifecycleEventObject,
	    promiseResolved: generatePromiseLifecycleEventObject,
	    promiseCancelled: generatePromiseLifecycleEventObject,
	    promiseChained: function(name, promise, child) {
	        return {promise: promise, child: child};
	    },
	    warning: function(name, warning) {
	        return {warning: warning};
	    },
	    unhandledRejection: function (name, reason, promise) {
	        return {reason: reason, promise: promise};
	    },
	    rejectionHandled: generatePromiseLifecycleEventObject
	};

	var activeFireEvent = function (name) {
	    var globalEventFired = false;
	    try {
	        globalEventFired = fireGlobalEvent.apply(null, arguments);
	    } catch (e) {
	        async.throwLater(e);
	        globalEventFired = true;
	    }

	    var domEventFired = false;
	    try {
	        domEventFired = fireDomEvent(name,
	                    eventToObjectGenerator[name].apply(null, arguments));
	    } catch (e) {
	        async.throwLater(e);
	        domEventFired = true;
	    }

	    return domEventFired || globalEventFired;
	};

	Promise.config = function(opts) {
	    opts = Object(opts);
	    if ("longStackTraces" in opts) {
	        if (opts.longStackTraces) {
	            Promise.longStackTraces();
	        } else if (!opts.longStackTraces && Promise.hasLongStackTraces()) {
	            disableLongStackTraces();
	        }
	    }
	    if ("warnings" in opts) {
	        var warningsOption = opts.warnings;
	        config.warnings = !!warningsOption;
	        wForgottenReturn = config.warnings;

	        if (util.isObject(warningsOption)) {
	            if ("wForgottenReturn" in warningsOption) {
	                wForgottenReturn = !!warningsOption.wForgottenReturn;
	            }
	        }
	    }
	    if ("cancellation" in opts && opts.cancellation && !config.cancellation) {
	        if (async.haveItemsQueued()) {
	            throw new Error(
	                "cannot enable cancellation after promises are in use");
	        }
	        Promise.prototype._clearCancellationData =
	            cancellationClearCancellationData;
	        Promise.prototype._propagateFrom = cancellationPropagateFrom;
	        Promise.prototype._onCancel = cancellationOnCancel;
	        Promise.prototype._setOnCancel = cancellationSetOnCancel;
	        Promise.prototype._attachCancellationCallback =
	            cancellationAttachCancellationCallback;
	        Promise.prototype._execute = cancellationExecute;
	        propagateFromFunction = cancellationPropagateFrom;
	        config.cancellation = true;
	    }
	    if ("monitoring" in opts) {
	        if (opts.monitoring && !config.monitoring) {
	            config.monitoring = true;
	            Promise.prototype._fireEvent = activeFireEvent;
	        } else if (!opts.monitoring && config.monitoring) {
	            config.monitoring = false;
	            Promise.prototype._fireEvent = defaultFireEvent;
	        }
	    }
	};

	function defaultFireEvent() { return false; }

	Promise.prototype._fireEvent = defaultFireEvent;
	Promise.prototype._execute = function(executor, resolve, reject) {
	    try {
	        executor(resolve, reject);
	    } catch (e) {
	        return e;
	    }
	};
	Promise.prototype._onCancel = function () {};
	Promise.prototype._setOnCancel = function (handler) { ; };
	Promise.prototype._attachCancellationCallback = function(onCancel) {
	    ;
	};
	Promise.prototype._captureStackTrace = function () {};
	Promise.prototype._attachExtraTrace = function () {};
	Promise.prototype._clearCancellationData = function() {};
	Promise.prototype._propagateFrom = function (parent, flags) {
	    ;
	    ;
	};

	function cancellationExecute(executor, resolve, reject) {
	    var promise = this;
	    try {
	        executor(resolve, reject, function(onCancel) {
	            if (typeof onCancel !== "function") {
	                throw new TypeError("onCancel must be a function, got: " +
	                                    util.toString(onCancel));
	            }
	            promise._attachCancellationCallback(onCancel);
	        });
	    } catch (e) {
	        return e;
	    }
	}

	function cancellationAttachCancellationCallback(onCancel) {
	    if (!this.isCancellable()) return this;

	    var previousOnCancel = this._onCancel();
	    if (previousOnCancel !== undefined) {
	        if (util.isArray(previousOnCancel)) {
	            previousOnCancel.push(onCancel);
	        } else {
	            this._setOnCancel([previousOnCancel, onCancel]);
	        }
	    } else {
	        this._setOnCancel(onCancel);
	    }
	}

	function cancellationOnCancel() {
	    return this._onCancelField;
	}

	function cancellationSetOnCancel(onCancel) {
	    this._onCancelField = onCancel;
	}

	function cancellationClearCancellationData() {
	    this._cancellationParent = undefined;
	    this._onCancelField = undefined;
	}

	function cancellationPropagateFrom(parent, flags) {
	    if ((flags & 1) !== 0) {
	        this._cancellationParent = parent;
	        var branchesRemainingToCancel = parent._branchesRemainingToCancel;
	        if (branchesRemainingToCancel === undefined) {
	            branchesRemainingToCancel = 0;
	        }
	        parent._branchesRemainingToCancel = branchesRemainingToCancel + 1;
	    }
	    if ((flags & 2) !== 0 && parent._isBound()) {
	        this._setBoundTo(parent._boundTo);
	    }
	}

	function bindingPropagateFrom(parent, flags) {
	    if ((flags & 2) !== 0 && parent._isBound()) {
	        this._setBoundTo(parent._boundTo);
	    }
	}
	var propagateFromFunction = bindingPropagateFrom;

	function boundValueFunction() {
	    var ret = this._boundTo;
	    if (ret !== undefined) {
	        if (ret instanceof Promise) {
	            if (ret.isFulfilled()) {
	                return ret.value();
	            } else {
	                return undefined;
	            }
	        }
	    }
	    return ret;
	}

	function longStackTracesCaptureStackTrace() {
	    this._trace = new CapturedTrace(this._peekContext());
	}

	function longStackTracesAttachExtraTrace(error, ignoreSelf) {
	    if (canAttachTrace(error)) {
	        var trace = this._trace;
	        if (trace !== undefined) {
	            if (ignoreSelf) trace = trace._parent;
	        }
	        if (trace !== undefined) {
	            trace.attachExtraTrace(error);
	        } else if (!error.__stackCleaned__) {
	            var parsed = parseStackAndMessage(error);
	            util.notEnumerableProp(error, "stack",
	                parsed.message + "\n" + parsed.stack.join("\n"));
	            util.notEnumerableProp(error, "__stackCleaned__", true);
	        }
	    }
	}

	function checkForgottenReturns(returnValue, promiseCreated, name, promise,
	                               parent) {
	    if (returnValue === undefined && promiseCreated !== null &&
	        wForgottenReturn) {
	        if (parent !== undefined && parent._returnedNonUndefined()) return;
	        if ((promise._bitField & 65535) === 0) return;

	        if (name) name = name + " ";
	        var msg = "a promise was created in a " + name +
	            "handler but was not returned from it";
	        promise._warn(msg, true, promiseCreated);
	    }
	}

	function deprecated(name, replacement) {
	    var message = name +
	        " is deprecated and will be removed in a future version.";
	    if (replacement) message += " Use " + replacement + " instead.";
	    return warn(message);
	}

	function warn(message, shouldUseOwnTrace, promise) {
	    if (!config.warnings) return;
	    var warning = new Warning(message);
	    var ctx;
	    if (shouldUseOwnTrace) {
	        promise._attachExtraTrace(warning);
	    } else if (config.longStackTraces && (ctx = Promise._peekContext())) {
	        ctx.attachExtraTrace(warning);
	    } else {
	        var parsed = parseStackAndMessage(warning);
	        warning.stack = parsed.message + "\n" + parsed.stack.join("\n");
	    }

	    if (!activeFireEvent("warning", warning)) {
	        formatAndLogError(warning, "", true);
	    }
	}

	function reconstructStack(message, stacks) {
	    for (var i = 0; i < stacks.length - 1; ++i) {
	        stacks[i].push("From previous event:");
	        stacks[i] = stacks[i].join("\n");
	    }
	    if (i < stacks.length) {
	        stacks[i] = stacks[i].join("\n");
	    }
	    return message + "\n" + stacks.join("\n");
	}

	function removeDuplicateOrEmptyJumps(stacks) {
	    for (var i = 0; i < stacks.length; ++i) {
	        if (stacks[i].length === 0 ||
	            ((i + 1 < stacks.length) && stacks[i][0] === stacks[i+1][0])) {
	            stacks.splice(i, 1);
	            i--;
	        }
	    }
	}

	function removeCommonRoots(stacks) {
	    var current = stacks[0];
	    for (var i = 1; i < stacks.length; ++i) {
	        var prev = stacks[i];
	        var currentLastIndex = current.length - 1;
	        var currentLastLine = current[currentLastIndex];
	        var commonRootMeetPoint = -1;

	        for (var j = prev.length - 1; j >= 0; --j) {
	            if (prev[j] === currentLastLine) {
	                commonRootMeetPoint = j;
	                break;
	            }
	        }

	        for (var j = commonRootMeetPoint; j >= 0; --j) {
	            var line = prev[j];
	            if (current[currentLastIndex] === line) {
	                current.pop();
	                currentLastIndex--;
	            } else {
	                break;
	            }
	        }
	        current = prev;
	    }
	}

	function cleanStack(stack) {
	    var ret = [];
	    for (var i = 0; i < stack.length; ++i) {
	        var line = stack[i];
	        var isTraceLine = "    (No stack trace)" === line ||
	            stackFramePattern.test(line);
	        var isInternalFrame = isTraceLine && shouldIgnore(line);
	        if (isTraceLine && !isInternalFrame) {
	            if (indentStackFrames && line.charAt(0) !== " ") {
	                line = "    " + line;
	            }
	            ret.push(line);
	        }
	    }
	    return ret;
	}

	function stackFramesAsArray(error) {
	    var stack = error.stack.replace(/\s+$/g, "").split("\n");
	    for (var i = 0; i < stack.length; ++i) {
	        var line = stack[i];
	        if ("    (No stack trace)" === line || stackFramePattern.test(line)) {
	            break;
	        }
	    }
	    if (i > 0) {
	        stack = stack.slice(i);
	    }
	    return stack;
	}

	function parseStackAndMessage(error) {
	    var stack = error.stack;
	    var message = error.toString();
	    stack = typeof stack === "string" && stack.length > 0
	                ? stackFramesAsArray(error) : ["    (No stack trace)"];
	    return {
	        message: message,
	        stack: cleanStack(stack)
	    };
	}

	function formatAndLogError(error, title, isSoft) {
	    if (typeof console !== "undefined") {
	        var message;
	        if (util.isObject(error)) {
	            var stack = error.stack;
	            message = title + formatStack(stack, error);
	        } else {
	            message = title + String(error);
	        }
	        if (typeof printWarning === "function") {
	            printWarning(message, isSoft);
	        } else if (typeof console.log === "function" ||
	            typeof console.log === "object") {
	            console.log(message);
	        }
	    }
	}

	function fireRejectionEvent(name, localHandler, reason, promise) {
	    var localEventFired = false;
	    try {
	        if (typeof localHandler === "function") {
	            localEventFired = true;
	            if (name === "rejectionHandled") {
	                localHandler(promise);
	            } else {
	                localHandler(reason, promise);
	            }
	        }
	    } catch (e) {
	        async.throwLater(e);
	    }

	    if (name === "unhandledRejection") {
	        if (!activeFireEvent(name, reason, promise) && !localEventFired) {
	            formatAndLogError(reason, "Unhandled rejection ");
	        }
	    } else {
	        activeFireEvent(name, promise);
	    }
	}

	function formatNonError(obj) {
	    var str;
	    if (typeof obj === "function") {
	        str = "[function " +
	            (obj.name || "anonymous") +
	            "]";
	    } else {
	        str = obj && typeof obj.toString === "function"
	            ? obj.toString() : util.toString(obj);
	        var ruselessToString = /\[object [a-zA-Z0-9$_]+\]/;
	        if (ruselessToString.test(str)) {
	            try {
	                var newStr = JSON.stringify(obj);
	                str = newStr;
	            }
	            catch(e) {

	            }
	        }
	        if (str.length === 0) {
	            str = "(empty array)";
	        }
	    }
	    return ("(<" + snip(str) + ">, no stack trace)");
	}

	function snip(str) {
	    var maxChars = 41;
	    if (str.length < maxChars) {
	        return str;
	    }
	    return str.substr(0, maxChars - 3) + "...";
	}

	function longStackTracesIsSupported() {
	    return typeof captureStackTrace === "function";
	}

	var shouldIgnore = function() { return false; };
	var parseLineInfoRegex = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
	function parseLineInfo(line) {
	    var matches = line.match(parseLineInfoRegex);
	    if (matches) {
	        return {
	            fileName: matches[1],
	            line: parseInt(matches[2], 10)
	        };
	    }
	}

	function setBounds(firstLineError, lastLineError) {
	    if (!longStackTracesIsSupported()) return;
	    var firstStackLines = firstLineError.stack.split("\n");
	    var lastStackLines = lastLineError.stack.split("\n");
	    var firstIndex = -1;
	    var lastIndex = -1;
	    var firstFileName;
	    var lastFileName;
	    for (var i = 0; i < firstStackLines.length; ++i) {
	        var result = parseLineInfo(firstStackLines[i]);
	        if (result) {
	            firstFileName = result.fileName;
	            firstIndex = result.line;
	            break;
	        }
	    }
	    for (var i = 0; i < lastStackLines.length; ++i) {
	        var result = parseLineInfo(lastStackLines[i]);
	        if (result) {
	            lastFileName = result.fileName;
	            lastIndex = result.line;
	            break;
	        }
	    }
	    if (firstIndex < 0 || lastIndex < 0 || !firstFileName || !lastFileName ||
	        firstFileName !== lastFileName || firstIndex >= lastIndex) {
	        return;
	    }

	    shouldIgnore = function(line) {
	        if (bluebirdFramePattern.test(line)) return true;
	        var info = parseLineInfo(line);
	        if (info) {
	            if (info.fileName === firstFileName &&
	                (firstIndex <= info.line && info.line <= lastIndex)) {
	                return true;
	            }
	        }
	        return false;
	    };
	}

	function CapturedTrace(parent) {
	    this._parent = parent;
	    this._promisesCreated = 0;
	    var length = this._length = 1 + (parent === undefined ? 0 : parent._length);
	    captureStackTrace(this, CapturedTrace);
	    if (length > 32) this.uncycle();
	}
	util.inherits(CapturedTrace, Error);
	Context.CapturedTrace = CapturedTrace;

	CapturedTrace.prototype.uncycle = function() {
	    var length = this._length;
	    if (length < 2) return;
	    var nodes = [];
	    var stackToIndex = {};

	    for (var i = 0, node = this; node !== undefined; ++i) {
	        nodes.push(node);
	        node = node._parent;
	    }
	    length = this._length = i;
	    for (var i = length - 1; i >= 0; --i) {
	        var stack = nodes[i].stack;
	        if (stackToIndex[stack] === undefined) {
	            stackToIndex[stack] = i;
	        }
	    }
	    for (var i = 0; i < length; ++i) {
	        var currentStack = nodes[i].stack;
	        var index = stackToIndex[currentStack];
	        if (index !== undefined && index !== i) {
	            if (index > 0) {
	                nodes[index - 1]._parent = undefined;
	                nodes[index - 1]._length = 1;
	            }
	            nodes[i]._parent = undefined;
	            nodes[i]._length = 1;
	            var cycleEdgeNode = i > 0 ? nodes[i - 1] : this;

	            if (index < length - 1) {
	                cycleEdgeNode._parent = nodes[index + 1];
	                cycleEdgeNode._parent.uncycle();
	                cycleEdgeNode._length =
	                    cycleEdgeNode._parent._length + 1;
	            } else {
	                cycleEdgeNode._parent = undefined;
	                cycleEdgeNode._length = 1;
	            }
	            var currentChildLength = cycleEdgeNode._length + 1;
	            for (var j = i - 2; j >= 0; --j) {
	                nodes[j]._length = currentChildLength;
	                currentChildLength++;
	            }
	            return;
	        }
	    }
	};

	CapturedTrace.prototype.attachExtraTrace = function(error) {
	    if (error.__stackCleaned__) return;
	    this.uncycle();
	    var parsed = parseStackAndMessage(error);
	    var message = parsed.message;
	    var stacks = [parsed.stack];

	    var trace = this;
	    while (trace !== undefined) {
	        stacks.push(cleanStack(trace.stack.split("\n")));
	        trace = trace._parent;
	    }
	    removeCommonRoots(stacks);
	    removeDuplicateOrEmptyJumps(stacks);
	    util.notEnumerableProp(error, "stack", reconstructStack(message, stacks));
	    util.notEnumerableProp(error, "__stackCleaned__", true);
	};

	var captureStackTrace = (function stackDetection() {
	    var v8stackFramePattern = /^\s*at\s*/;
	    var v8stackFormatter = function(stack, error) {
	        if (typeof stack === "string") return stack;

	        if (error.name !== undefined &&
	            error.message !== undefined) {
	            return error.toString();
	        }
	        return formatNonError(error);
	    };

	    if (typeof Error.stackTraceLimit === "number" &&
	        typeof Error.captureStackTrace === "function") {
	        Error.stackTraceLimit += 6;
	        stackFramePattern = v8stackFramePattern;
	        formatStack = v8stackFormatter;
	        var captureStackTrace = Error.captureStackTrace;

	        shouldIgnore = function(line) {
	            return bluebirdFramePattern.test(line);
	        };
	        return function(receiver, ignoreUntil) {
	            Error.stackTraceLimit += 6;
	            captureStackTrace(receiver, ignoreUntil);
	            Error.stackTraceLimit -= 6;
	        };
	    }
	    var err = new Error();

	    if (typeof err.stack === "string" &&
	        err.stack.split("\n")[0].indexOf("stackDetection@") >= 0) {
	        stackFramePattern = /@/;
	        formatStack = v8stackFormatter;
	        indentStackFrames = true;
	        return function captureStackTrace(o) {
	            o.stack = new Error().stack;
	        };
	    }

	    var hasStackAfterThrow;
	    try { throw new Error(); }
	    catch(e) {
	        hasStackAfterThrow = ("stack" in e);
	    }
	    if (!("stack" in err) && hasStackAfterThrow &&
	        typeof Error.stackTraceLimit === "number") {
	        stackFramePattern = v8stackFramePattern;
	        formatStack = v8stackFormatter;
	        return function captureStackTrace(o) {
	            Error.stackTraceLimit += 6;
	            try { throw new Error(); }
	            catch(e) { o.stack = e.stack; }
	            Error.stackTraceLimit -= 6;
	        };
	    }

	    formatStack = function(stack, error) {
	        if (typeof stack === "string") return stack;

	        if ((typeof error === "object" ||
	            typeof error === "function") &&
	            error.name !== undefined &&
	            error.message !== undefined) {
	            return error.toString();
	        }
	        return formatNonError(error);
	    };

	    return null;

	})([]);

	if (typeof console !== "undefined" && typeof console.warn !== "undefined") {
	    printWarning = function (message) {
	        console.warn(message);
	    };
	    if (util.isNode && process.stderr.isTTY) {
	        printWarning = function(message, isSoft) {
	            var color = isSoft ? "\u001b[33m" : "\u001b[31m";
	            console.warn(color + message + "\u001b[0m\n");
	        };
	    } else if (!util.isNode && typeof (new Error().stack) === "string") {
	        printWarning = function(message, isSoft) {
	            console.warn("%c" + message,
	                        isSoft ? "color: darkorange" : "color: red");
	        };
	    }
	}

	var config = {
	    warnings: warnings,
	    longStackTraces: false,
	    cancellation: false,
	    monitoring: false
	};

	if (longStackTraces) Promise.longStackTraces();

	return {
	    longStackTraces: function() {
	        return config.longStackTraces;
	    },
	    warnings: function() {
	        return config.warnings;
	    },
	    cancellation: function() {
	        return config.cancellation;
	    },
	    monitoring: function() {
	        return config.monitoring;
	    },
	    propagateFromFunction: function() {
	        return propagateFromFunction;
	    },
	    boundValueFunction: function() {
	        return boundValueFunction;
	    },
	    checkForgottenReturns: checkForgottenReturns,
	    setBounds: setBounds,
	    warn: warn,
	    deprecated: deprecated,
	    CapturedTrace: CapturedTrace,
	    fireDomEvent: fireDomEvent,
	    fireGlobalEvent: fireGlobalEvent
	};
	};

	},{"./errors":12,"./util":36}],10:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise) {
	function returner() {
	    return this.value;
	}
	function thrower() {
	    throw this.reason;
	}

	Promise.prototype["return"] =
	Promise.prototype.thenReturn = function (value) {
	    if (value instanceof Promise) value.suppressUnhandledRejections();
	    return this._then(
	        returner, undefined, undefined, {value: value}, undefined);
	};

	Promise.prototype["throw"] =
	Promise.prototype.thenThrow = function (reason) {
	    return this._then(
	        thrower, undefined, undefined, {reason: reason}, undefined);
	};

	Promise.prototype.catchThrow = function (reason) {
	    if (arguments.length <= 1) {
	        return this._then(
	            undefined, thrower, undefined, {reason: reason}, undefined);
	    } else {
	        var _reason = arguments[1];
	        var handler = function() {throw _reason;};
	        return this.caught(reason, handler);
	    }
	};

	Promise.prototype.catchReturn = function (value) {
	    if (arguments.length <= 1) {
	        if (value instanceof Promise) value.suppressUnhandledRejections();
	        return this._then(
	            undefined, returner, undefined, {value: value}, undefined);
	    } else {
	        var _value = arguments[1];
	        if (_value instanceof Promise) _value.suppressUnhandledRejections();
	        var handler = function() {return _value;};
	        return this.caught(value, handler);
	    }
	};
	};

	},{}],11:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise, INTERNAL) {
	var PromiseReduce = Promise.reduce;
	var PromiseAll = Promise.all;

	function promiseAllThis() {
	    return PromiseAll(this);
	}

	function PromiseMapSeries(promises, fn) {
	    return PromiseReduce(promises, fn, INTERNAL, INTERNAL);
	}

	Promise.prototype.each = function (fn) {
	    return this.mapSeries(fn)
	            ._then(promiseAllThis, undefined, undefined, this, undefined);
	};

	Promise.prototype.mapSeries = function (fn) {
	    return PromiseReduce(this, fn, INTERNAL, INTERNAL);
	};

	Promise.each = function (promises, fn) {
	    return PromiseMapSeries(promises, fn)
	            ._then(promiseAllThis, undefined, undefined, promises, undefined);
	};

	Promise.mapSeries = PromiseMapSeries;
	};

	},{}],12:[function(_dereq_,module,exports){
	"use strict";
	var es5 = _dereq_("./es5");
	var Objectfreeze = es5.freeze;
	var util = _dereq_("./util");
	var inherits = util.inherits;
	var notEnumerableProp = util.notEnumerableProp;

	function subError(nameProperty, defaultMessage) {
	    function SubError(message) {
	        if (!(this instanceof SubError)) return new SubError(message);
	        notEnumerableProp(this, "message",
	            typeof message === "string" ? message : defaultMessage);
	        notEnumerableProp(this, "name", nameProperty);
	        if (Error.captureStackTrace) {
	            Error.captureStackTrace(this, this.constructor);
	        } else {
	            Error.call(this);
	        }
	    }
	    inherits(SubError, Error);
	    return SubError;
	}

	var _TypeError, _RangeError;
	var Warning = subError("Warning", "warning");
	var CancellationError = subError("CancellationError", "cancellation error");
	var TimeoutError = subError("TimeoutError", "timeout error");
	var AggregateError = subError("AggregateError", "aggregate error");
	try {
	    _TypeError = TypeError;
	    _RangeError = RangeError;
	} catch(e) {
	    _TypeError = subError("TypeError", "type error");
	    _RangeError = subError("RangeError", "range error");
	}

	var methods = ("join pop push shift unshift slice filter forEach some " +
	    "every map indexOf lastIndexOf reduce reduceRight sort reverse").split(" ");

	for (var i = 0; i < methods.length; ++i) {
	    if (typeof Array.prototype[methods[i]] === "function") {
	        AggregateError.prototype[methods[i]] = Array.prototype[methods[i]];
	    }
	}

	es5.defineProperty(AggregateError.prototype, "length", {
	    value: 0,
	    configurable: false,
	    writable: true,
	    enumerable: true
	});
	AggregateError.prototype["isOperational"] = true;
	var level = 0;
	AggregateError.prototype.toString = function() {
	    var indent = Array(level * 4 + 1).join(" ");
	    var ret = "\n" + indent + "AggregateError of:" + "\n";
	    level++;
	    indent = Array(level * 4 + 1).join(" ");
	    for (var i = 0; i < this.length; ++i) {
	        var str = this[i] === this ? "[Circular AggregateError]" : this[i] + "";
	        var lines = str.split("\n");
	        for (var j = 0; j < lines.length; ++j) {
	            lines[j] = indent + lines[j];
	        }
	        str = lines.join("\n");
	        ret += str + "\n";
	    }
	    level--;
	    return ret;
	};

	function OperationalError(message) {
	    if (!(this instanceof OperationalError))
	        return new OperationalError(message);
	    notEnumerableProp(this, "name", "OperationalError");
	    notEnumerableProp(this, "message", message);
	    this.cause = message;
	    this["isOperational"] = true;

	    if (message instanceof Error) {
	        notEnumerableProp(this, "message", message.message);
	        notEnumerableProp(this, "stack", message.stack);
	    } else if (Error.captureStackTrace) {
	        Error.captureStackTrace(this, this.constructor);
	    }

	}
	inherits(OperationalError, Error);

	var errorTypes = Error["__BluebirdErrorTypes__"];
	if (!errorTypes) {
	    errorTypes = Objectfreeze({
	        CancellationError: CancellationError,
	        TimeoutError: TimeoutError,
	        OperationalError: OperationalError,
	        RejectionError: OperationalError,
	        AggregateError: AggregateError
	    });
	    es5.defineProperty(Error, "__BluebirdErrorTypes__", {
	        value: errorTypes,
	        writable: false,
	        enumerable: false,
	        configurable: false
	    });
	}

	module.exports = {
	    Error: Error,
	    TypeError: _TypeError,
	    RangeError: _RangeError,
	    CancellationError: errorTypes.CancellationError,
	    OperationalError: errorTypes.OperationalError,
	    TimeoutError: errorTypes.TimeoutError,
	    AggregateError: errorTypes.AggregateError,
	    Warning: Warning
	};

	},{"./es5":13,"./util":36}],13:[function(_dereq_,module,exports){
	var isES5 = (function(){
	    "use strict";
	    return this === undefined;
	})();

	if (isES5) {
	    module.exports = {
	        freeze: Object.freeze,
	        defineProperty: Object.defineProperty,
	        getDescriptor: Object.getOwnPropertyDescriptor,
	        keys: Object.keys,
	        names: Object.getOwnPropertyNames,
	        getPrototypeOf: Object.getPrototypeOf,
	        isArray: Array.isArray,
	        isES5: isES5,
	        propertyIsWritable: function(obj, prop) {
	            var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
	            return !!(!descriptor || descriptor.writable || descriptor.set);
	        }
	    };
	} else {
	    var has = {}.hasOwnProperty;
	    var str = {}.toString;
	    var proto = {}.constructor.prototype;

	    var ObjectKeys = function (o) {
	        var ret = [];
	        for (var key in o) {
	            if (has.call(o, key)) {
	                ret.push(key);
	            }
	        }
	        return ret;
	    };

	    var ObjectGetDescriptor = function(o, key) {
	        return {value: o[key]};
	    };

	    var ObjectDefineProperty = function (o, key, desc) {
	        o[key] = desc.value;
	        return o;
	    };

	    var ObjectFreeze = function (obj) {
	        return obj;
	    };

	    var ObjectGetPrototypeOf = function (obj) {
	        try {
	            return Object(obj).constructor.prototype;
	        }
	        catch (e) {
	            return proto;
	        }
	    };

	    var ArrayIsArray = function (obj) {
	        try {
	            return str.call(obj) === "[object Array]";
	        }
	        catch(e) {
	            return false;
	        }
	    };

	    module.exports = {
	        isArray: ArrayIsArray,
	        keys: ObjectKeys,
	        names: ObjectKeys,
	        defineProperty: ObjectDefineProperty,
	        getDescriptor: ObjectGetDescriptor,
	        freeze: ObjectFreeze,
	        getPrototypeOf: ObjectGetPrototypeOf,
	        isES5: isES5,
	        propertyIsWritable: function() {
	            return true;
	        }
	    };
	}

	},{}],14:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise, INTERNAL) {
	var PromiseMap = Promise.map;

	Promise.prototype.filter = function (fn, options) {
	    return PromiseMap(this, fn, options, INTERNAL);
	};

	Promise.filter = function (promises, fn, options) {
	    return PromiseMap(promises, fn, options, INTERNAL);
	};
	};

	},{}],15:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise, tryConvertToPromise) {
	var util = _dereq_("./util");
	var CancellationError = Promise.CancellationError;
	var errorObj = util.errorObj;

	function PassThroughHandlerContext(promise, type, handler) {
	    this.promise = promise;
	    this.type = type;
	    this.handler = handler;
	    this.called = false;
	    this.cancelPromise = null;
	}

	PassThroughHandlerContext.prototype.isFinallyHandler = function() {
	    return this.type === 0;
	};

	function FinallyHandlerCancelReaction(finallyHandler) {
	    this.finallyHandler = finallyHandler;
	}

	FinallyHandlerCancelReaction.prototype._resultCancelled = function() {
	    checkCancel(this.finallyHandler);
	};

	function checkCancel(ctx, reason) {
	    if (ctx.cancelPromise != null) {
	        if (arguments.length > 1) {
	            ctx.cancelPromise._reject(reason);
	        } else {
	            ctx.cancelPromise._cancel();
	        }
	        ctx.cancelPromise = null;
	        return true;
	    }
	    return false;
	}

	function succeed() {
	    return finallyHandler.call(this, this.promise._target()._settledValue());
	}
	function fail(reason) {
	    if (checkCancel(this, reason)) return;
	    errorObj.e = reason;
	    return errorObj;
	}
	function finallyHandler(reasonOrValue) {
	    var promise = this.promise;
	    var handler = this.handler;

	    if (!this.called) {
	        this.called = true;
	        var ret = this.isFinallyHandler()
	            ? handler.call(promise._boundValue())
	            : handler.call(promise._boundValue(), reasonOrValue);
	        if (ret !== undefined) {
	            promise._setReturnedNonUndefined();
	            var maybePromise = tryConvertToPromise(ret, promise);
	            if (maybePromise instanceof Promise) {
	                if (this.cancelPromise != null) {
	                    if (maybePromise.isCancelled()) {
	                        var reason =
	                            new CancellationError("late cancellation observer");
	                        promise._attachExtraTrace(reason);
	                        errorObj.e = reason;
	                        return errorObj;
	                    } else if (maybePromise.isPending()) {
	                        maybePromise._attachCancellationCallback(
	                            new FinallyHandlerCancelReaction(this));
	                    }
	                }
	                return maybePromise._then(
	                    succeed, fail, undefined, this, undefined);
	            }
	        }
	    }

	    if (promise.isRejected()) {
	        checkCancel(this);
	        errorObj.e = reasonOrValue;
	        return errorObj;
	    } else {
	        checkCancel(this);
	        return reasonOrValue;
	    }
	}

	Promise.prototype._passThrough = function(handler, type, success, fail) {
	    if (typeof handler !== "function") return this.then();
	    return this._then(success,
	                      fail,
	                      undefined,
	                      new PassThroughHandlerContext(this, type, handler),
	                      undefined);
	};

	Promise.prototype.lastly =
	Promise.prototype["finally"] = function (handler) {
	    return this._passThrough(handler,
	                             0,
	                             finallyHandler,
	                             finallyHandler);
	};

	Promise.prototype.tap = function (handler) {
	    return this._passThrough(handler, 1, finallyHandler);
	};

	return PassThroughHandlerContext;
	};

	},{"./util":36}],16:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise,
	                          apiRejection,
	                          INTERNAL,
	                          tryConvertToPromise,
	                          Proxyable,
	                          debug) {
	var errors = _dereq_("./errors");
	var TypeError = errors.TypeError;
	var util = _dereq_("./util");
	var errorObj = util.errorObj;
	var tryCatch = util.tryCatch;
	var yieldHandlers = [];

	function promiseFromYieldHandler(value, yieldHandlers, traceParent) {
	    for (var i = 0; i < yieldHandlers.length; ++i) {
	        traceParent._pushContext();
	        var result = tryCatch(yieldHandlers[i])(value);
	        traceParent._popContext();
	        if (result === errorObj) {
	            traceParent._pushContext();
	            var ret = Promise.reject(errorObj.e);
	            traceParent._popContext();
	            return ret;
	        }
	        var maybePromise = tryConvertToPromise(result, traceParent);
	        if (maybePromise instanceof Promise) return maybePromise;
	    }
	    return null;
	}

	function PromiseSpawn(generatorFunction, receiver, yieldHandler, stack) {
	    if (debug.cancellation()) {
	        var internal = new Promise(INTERNAL);
	        var _finallyPromise = this._finallyPromise = new Promise(INTERNAL);
	        this._promise = internal.lastly(function() {
	            return _finallyPromise;
	        });
	        internal._captureStackTrace();
	        internal._setOnCancel(this);
	    } else {
	        var promise = this._promise = new Promise(INTERNAL);
	        promise._captureStackTrace();
	    }
	    this._stack = stack;
	    this._generatorFunction = generatorFunction;
	    this._receiver = receiver;
	    this._generator = undefined;
	    this._yieldHandlers = typeof yieldHandler === "function"
	        ? [yieldHandler].concat(yieldHandlers)
	        : yieldHandlers;
	    this._yieldedPromise = null;
	    this._cancellationPhase = false;
	}
	util.inherits(PromiseSpawn, Proxyable);

	PromiseSpawn.prototype._isResolved = function() {
	    return this._promise === null;
	};

	PromiseSpawn.prototype._cleanup = function() {
	    this._promise = this._generator = null;
	    if (debug.cancellation() && this._finallyPromise !== null) {
	        this._finallyPromise._fulfill();
	        this._finallyPromise = null;
	    }
	};

	PromiseSpawn.prototype._promiseCancelled = function() {
	    if (this._isResolved()) return;
	    var implementsReturn = typeof this._generator["return"] !== "undefined";

	    var result;
	    if (!implementsReturn) {
	        var reason = new Promise.CancellationError(
	            "generator .return() sentinel");
	        Promise.coroutine.returnSentinel = reason;
	        this._promise._attachExtraTrace(reason);
	        this._promise._pushContext();
	        result = tryCatch(this._generator["throw"]).call(this._generator,
	                                                         reason);
	        this._promise._popContext();
	    } else {
	        this._promise._pushContext();
	        result = tryCatch(this._generator["return"]).call(this._generator,
	                                                          undefined);
	        this._promise._popContext();
	    }
	    this._cancellationPhase = true;
	    this._yieldedPromise = null;
	    this._continue(result);
	};

	PromiseSpawn.prototype._promiseFulfilled = function(value) {
	    this._yieldedPromise = null;
	    this._promise._pushContext();
	    var result = tryCatch(this._generator.next).call(this._generator, value);
	    this._promise._popContext();
	    this._continue(result);
	};

	PromiseSpawn.prototype._promiseRejected = function(reason) {
	    this._yieldedPromise = null;
	    this._promise._attachExtraTrace(reason);
	    this._promise._pushContext();
	    var result = tryCatch(this._generator["throw"])
	        .call(this._generator, reason);
	    this._promise._popContext();
	    this._continue(result);
	};

	PromiseSpawn.prototype._resultCancelled = function() {
	    if (this._yieldedPromise instanceof Promise) {
	        var promise = this._yieldedPromise;
	        this._yieldedPromise = null;
	        promise.cancel();
	    }
	};

	PromiseSpawn.prototype.promise = function () {
	    return this._promise;
	};

	PromiseSpawn.prototype._run = function () {
	    this._generator = this._generatorFunction.call(this._receiver);
	    this._receiver =
	        this._generatorFunction = undefined;
	    this._promiseFulfilled(undefined);
	};

	PromiseSpawn.prototype._continue = function (result) {
	    var promise = this._promise;
	    if (result === errorObj) {
	        this._cleanup();
	        if (this._cancellationPhase) {
	            return promise.cancel();
	        } else {
	            return promise._rejectCallback(result.e, false);
	        }
	    }

	    var value = result.value;
	    if (result.done === true) {
	        this._cleanup();
	        if (this._cancellationPhase) {
	            return promise.cancel();
	        } else {
	            return promise._resolveCallback(value);
	        }
	    } else {
	        var maybePromise = tryConvertToPromise(value, this._promise);
	        if (!(maybePromise instanceof Promise)) {
	            maybePromise =
	                promiseFromYieldHandler(maybePromise,
	                                        this._yieldHandlers,
	                                        this._promise);
	            if (maybePromise === null) {
	                this._promiseRejected(
	                    new TypeError(
	                        "A value %s was yielded that could not be treated as a promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a\u000a".replace("%s", value) +
	                        "From coroutine:\u000a" +
	                        this._stack.split("\n").slice(1, -7).join("\n")
	                    )
	                );
	                return;
	            }
	        }
	        maybePromise = maybePromise._target();
	        var bitField = maybePromise._bitField;
	        ;
	        if (((bitField & 50397184) === 0)) {
	            this._yieldedPromise = maybePromise;
	            maybePromise._proxy(this, null);
	        } else if (((bitField & 33554432) !== 0)) {
	            this._promiseFulfilled(maybePromise._value());
	        } else if (((bitField & 16777216) !== 0)) {
	            this._promiseRejected(maybePromise._reason());
	        } else {
	            this._promiseCancelled();
	        }
	    }
	};

	Promise.coroutine = function (generatorFunction, options) {
	    if (typeof generatorFunction !== "function") {
	        throw new TypeError("generatorFunction must be a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	    }
	    var yieldHandler = Object(options).yieldHandler;
	    var PromiseSpawn$ = PromiseSpawn;
	    var stack = new Error().stack;
	    return function () {
	        var generator = generatorFunction.apply(this, arguments);
	        var spawn = new PromiseSpawn$(undefined, undefined, yieldHandler,
	                                      stack);
	        var ret = spawn.promise();
	        spawn._generator = generator;
	        spawn._promiseFulfilled(undefined);
	        return ret;
	    };
	};

	Promise.coroutine.addYieldHandler = function(fn) {
	    if (typeof fn !== "function") {
	        throw new TypeError("expecting a function but got " + util.classString(fn));
	    }
	    yieldHandlers.push(fn);
	};

	Promise.spawn = function (generatorFunction) {
	    debug.deprecated("Promise.spawn()", "Promise.coroutine()");
	    if (typeof generatorFunction !== "function") {
	        return apiRejection("generatorFunction must be a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	    }
	    var spawn = new PromiseSpawn(generatorFunction, this);
	    var ret = spawn.promise();
	    spawn._run(Promise.spawn);
	    return ret;
	};
	};

	},{"./errors":12,"./util":36}],17:[function(_dereq_,module,exports){
	"use strict";
	module.exports =
	function(Promise, PromiseArray, tryConvertToPromise, INTERNAL) {
	var util = _dereq_("./util");
	var canEvaluate = util.canEvaluate;
	var tryCatch = util.tryCatch;
	var errorObj = util.errorObj;
	var reject;

	if (false) {
	if (canEvaluate) {
	    var thenCallback = function(i) {
	        return new Function("value", "holder", "                             \n\
	            'use strict';                                                    \n\
	            holder.pIndex = value;                                           \n\
	            holder.checkFulfillment(this);                                   \n\
	            ".replace(/Index/g, i));
	    };

	    var promiseSetter = function(i) {
	        return new Function("promise", "holder", "                           \n\
	            'use strict';                                                    \n\
	            holder.pIndex = promise;                                         \n\
	            ".replace(/Index/g, i));
	    };

	    var generateHolderClass = function(total) {
	        var props = new Array(total);
	        for (var i = 0; i < props.length; ++i) {
	            props[i] = "this.p" + (i+1);
	        }
	        var assignment = props.join(" = ") + " = null;";
	        var cancellationCode= "var promise;\n" + props.map(function(prop) {
	            return "                                                         \n\
	                promise = " + prop + ";                                      \n\
	                if (promise instanceof Promise) {                            \n\
	                    promise.cancel();                                        \n\
	                }                                                            \n\
	            ";
	        }).join("\n");
	        var passedArguments = props.join(", ");
	        var name = "Holder$" + total;


	        var code = "return function(tryCatch, errorObj, Promise) {           \n\
	            'use strict';                                                    \n\
	            function [TheName](fn) {                                         \n\
	                [TheProperties]                                              \n\
	                this.fn = fn;                                                \n\
	                this.now = 0;                                                \n\
	            }                                                                \n\
	            [TheName].prototype.checkFulfillment = function(promise) {       \n\
	                var now = ++this.now;                                        \n\
	                if (now === [TheTotal]) {                                    \n\
	                    promise._pushContext();                                  \n\
	                    var callback = this.fn;                                  \n\
	                    var ret = tryCatch(callback)([ThePassedArguments]);      \n\
	                    promise._popContext();                                   \n\
	                    if (ret === errorObj) {                                  \n\
	                        promise._rejectCallback(ret.e, false);               \n\
	                    } else {                                                 \n\
	                        promise._resolveCallback(ret);                       \n\
	                    }                                                        \n\
	                }                                                            \n\
	            };                                                               \n\
	                                                                             \n\
	            [TheName].prototype._resultCancelled = function() {              \n\
	                [CancellationCode]                                           \n\
	            };                                                               \n\
	                                                                             \n\
	            return [TheName];                                                \n\
	        }(tryCatch, errorObj, Promise);                                      \n\
	        ";

	        code = code.replace(/\[TheName\]/g, name)
	            .replace(/\[TheTotal\]/g, total)
	            .replace(/\[ThePassedArguments\]/g, passedArguments)
	            .replace(/\[TheProperties\]/g, assignment)
	            .replace(/\[CancellationCode\]/g, cancellationCode);

	        return new Function("tryCatch", "errorObj", "Promise", code)
	                           (tryCatch, errorObj, Promise);
	    };

	    var holderClasses = [];
	    var thenCallbacks = [];
	    var promiseSetters = [];

	    for (var i = 0; i < 8; ++i) {
	        holderClasses.push(generateHolderClass(i + 1));
	        thenCallbacks.push(thenCallback(i + 1));
	        promiseSetters.push(promiseSetter(i + 1));
	    }

	    reject = function (reason) {
	        this._reject(reason);
	    };
	}}

	Promise.join = function () {
	    var last = arguments.length - 1;
	    var fn;
	    if (last > 0 && typeof arguments[last] === "function") {
	        fn = arguments[last];
	        if (false) {
	            if (last <= 8 && canEvaluate) {
	                var ret = new Promise(INTERNAL);
	                ret._captureStackTrace();
	                var HolderClass = holderClasses[last - 1];
	                var holder = new HolderClass(fn);
	                var callbacks = thenCallbacks;

	                for (var i = 0; i < last; ++i) {
	                    var maybePromise = tryConvertToPromise(arguments[i], ret);
	                    if (maybePromise instanceof Promise) {
	                        maybePromise = maybePromise._target();
	                        var bitField = maybePromise._bitField;
	                        ;
	                        if (((bitField & 50397184) === 0)) {
	                            maybePromise._then(callbacks[i], reject,
	                                               undefined, ret, holder);
	                            promiseSetters[i](maybePromise, holder);
	                        } else if (((bitField & 33554432) !== 0)) {
	                            callbacks[i].call(ret,
	                                              maybePromise._value(), holder);
	                        } else if (((bitField & 16777216) !== 0)) {
	                            ret._reject(maybePromise._reason());
	                        } else {
	                            ret._cancel();
	                        }
	                    } else {
	                        callbacks[i].call(ret, maybePromise, holder);
	                    }
	                }
	                if (!ret._isFateSealed()) {
	                    ret._setAsyncGuaranteed();
	                    ret._setOnCancel(holder);
	                }
	                return ret;
	            }
	        }
	    }
	    var args = [].slice.call(arguments);;
	    if (fn) args.pop();
	    var ret = new PromiseArray(args).promise();
	    return fn !== undefined ? ret.spread(fn) : ret;
	};

	};

	},{"./util":36}],18:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise,
	                          PromiseArray,
	                          apiRejection,
	                          tryConvertToPromise,
	                          INTERNAL,
	                          debug) {
	var getDomain = Promise._getDomain;
	var util = _dereq_("./util");
	var tryCatch = util.tryCatch;
	var errorObj = util.errorObj;
	var EMPTY_ARRAY = [];

	function MappingPromiseArray(promises, fn, limit, _filter) {
	    this.constructor$(promises);
	    this._promise._captureStackTrace();
	    var domain = getDomain();
	    this._callback = domain === null ? fn : domain.bind(fn);
	    this._preservedValues = _filter === INTERNAL
	        ? new Array(this.length())
	        : null;
	    this._limit = limit;
	    this._inFlight = 0;
	    this._queue = limit >= 1 ? [] : EMPTY_ARRAY;
	    this._init$(undefined, -2);
	}
	util.inherits(MappingPromiseArray, PromiseArray);

	MappingPromiseArray.prototype._init = function () {};

	MappingPromiseArray.prototype._promiseFulfilled = function (value, index) {
	    var values = this._values;
	    var length = this.length();
	    var preservedValues = this._preservedValues;
	    var limit = this._limit;

	    if (index < 0) {
	        index = (index * -1) - 1;
	        values[index] = value;
	        if (limit >= 1) {
	            this._inFlight--;
	            this._drainQueue();
	            if (this._isResolved()) return true;
	        }
	    } else {
	        if (limit >= 1 && this._inFlight >= limit) {
	            values[index] = value;
	            this._queue.push(index);
	            return false;
	        }
	        if (preservedValues !== null) preservedValues[index] = value;

	        var promise = this._promise;
	        var callback = this._callback;
	        var receiver = promise._boundValue();
	        promise._pushContext();
	        var ret = tryCatch(callback).call(receiver, value, index, length);
	        var promiseCreated = promise._popContext();
	        debug.checkForgottenReturns(
	            ret,
	            promiseCreated,
	            preservedValues !== null ? "Promise.filter" : "Promise.map",
	            promise
	        );
	        if (ret === errorObj) {
	            this._reject(ret.e);
	            return true;
	        }

	        var maybePromise = tryConvertToPromise(ret, this._promise);
	        if (maybePromise instanceof Promise) {
	            maybePromise = maybePromise._target();
	            var bitField = maybePromise._bitField;
	            ;
	            if (((bitField & 50397184) === 0)) {
	                if (limit >= 1) this._inFlight++;
	                values[index] = maybePromise;
	                maybePromise._proxy(this, (index + 1) * -1);
	                return false;
	            } else if (((bitField & 33554432) !== 0)) {
	                ret = maybePromise._value();
	            } else if (((bitField & 16777216) !== 0)) {
	                this._reject(maybePromise._reason());
	                return true;
	            } else {
	                this._cancel();
	                return true;
	            }
	        }
	        values[index] = ret;
	    }
	    var totalResolved = ++this._totalResolved;
	    if (totalResolved >= length) {
	        if (preservedValues !== null) {
	            this._filter(values, preservedValues);
	        } else {
	            this._resolve(values);
	        }
	        return true;
	    }
	    return false;
	};

	MappingPromiseArray.prototype._drainQueue = function () {
	    var queue = this._queue;
	    var limit = this._limit;
	    var values = this._values;
	    while (queue.length > 0 && this._inFlight < limit) {
	        if (this._isResolved()) return;
	        var index = queue.pop();
	        this._promiseFulfilled(values[index], index);
	    }
	};

	MappingPromiseArray.prototype._filter = function (booleans, values) {
	    var len = values.length;
	    var ret = new Array(len);
	    var j = 0;
	    for (var i = 0; i < len; ++i) {
	        if (booleans[i]) ret[j++] = values[i];
	    }
	    ret.length = j;
	    this._resolve(ret);
	};

	MappingPromiseArray.prototype.preservedValues = function () {
	    return this._preservedValues;
	};

	function map(promises, fn, options, _filter) {
	    if (typeof fn !== "function") {
	        return apiRejection("expecting a function but got " + util.classString(fn));
	    }

	    var limit = 0;
	    if (options !== undefined) {
	        if (typeof options === "object" && options !== null) {
	            if (typeof options.concurrency !== "number") {
	                return Promise.reject(
	                    new TypeError("'concurrency' must be a number but it is " +
	                                    util.classString(options.concurrency)));
	            }
	            limit = options.concurrency;
	        } else {
	            return Promise.reject(new TypeError(
	                            "options argument must be an object but it is " +
	                             util.classString(options)));
	        }
	    }
	    limit = typeof limit === "number" &&
	        isFinite(limit) && limit >= 1 ? limit : 0;
	    return new MappingPromiseArray(promises, fn, limit, _filter).promise();
	}

	Promise.prototype.map = function (fn, options) {
	    return map(this, fn, options, null);
	};

	Promise.map = function (promises, fn, options, _filter) {
	    return map(promises, fn, options, _filter);
	};


	};

	},{"./util":36}],19:[function(_dereq_,module,exports){
	"use strict";
	module.exports =
	function(Promise, INTERNAL, tryConvertToPromise, apiRejection, debug) {
	var util = _dereq_("./util");
	var tryCatch = util.tryCatch;

	Promise.method = function (fn) {
	    if (typeof fn !== "function") {
	        throw new Promise.TypeError("expecting a function but got " + util.classString(fn));
	    }
	    return function () {
	        var ret = new Promise(INTERNAL);
	        ret._captureStackTrace();
	        ret._pushContext();
	        var value = tryCatch(fn).apply(this, arguments);
	        var promiseCreated = ret._popContext();
	        debug.checkForgottenReturns(
	            value, promiseCreated, "Promise.method", ret);
	        ret._resolveFromSyncValue(value);
	        return ret;
	    };
	};

	Promise.attempt = Promise["try"] = function (fn) {
	    if (typeof fn !== "function") {
	        return apiRejection("expecting a function but got " + util.classString(fn));
	    }
	    var ret = new Promise(INTERNAL);
	    ret._captureStackTrace();
	    ret._pushContext();
	    var value;
	    if (arguments.length > 1) {
	        debug.deprecated("calling Promise.try with more than 1 argument");
	        var arg = arguments[1];
	        var ctx = arguments[2];
	        value = util.isArray(arg) ? tryCatch(fn).apply(ctx, arg)
	                                  : tryCatch(fn).call(ctx, arg);
	    } else {
	        value = tryCatch(fn)();
	    }
	    var promiseCreated = ret._popContext();
	    debug.checkForgottenReturns(
	        value, promiseCreated, "Promise.try", ret);
	    ret._resolveFromSyncValue(value);
	    return ret;
	};

	Promise.prototype._resolveFromSyncValue = function (value) {
	    if (value === util.errorObj) {
	        this._rejectCallback(value.e, false);
	    } else {
	        this._resolveCallback(value, true);
	    }
	};
	};

	},{"./util":36}],20:[function(_dereq_,module,exports){
	"use strict";
	var util = _dereq_("./util");
	var maybeWrapAsError = util.maybeWrapAsError;
	var errors = _dereq_("./errors");
	var OperationalError = errors.OperationalError;
	var es5 = _dereq_("./es5");

	function isUntypedError(obj) {
	    return obj instanceof Error &&
	        es5.getPrototypeOf(obj) === Error.prototype;
	}

	var rErrorKey = /^(?:name|message|stack|cause)$/;
	function wrapAsOperationalError(obj) {
	    var ret;
	    if (isUntypedError(obj)) {
	        ret = new OperationalError(obj);
	        ret.name = obj.name;
	        ret.message = obj.message;
	        ret.stack = obj.stack;
	        var keys = es5.keys(obj);
	        for (var i = 0; i < keys.length; ++i) {
	            var key = keys[i];
	            if (!rErrorKey.test(key)) {
	                ret[key] = obj[key];
	            }
	        }
	        return ret;
	    }
	    util.markAsOriginatingFromRejection(obj);
	    return obj;
	}

	function nodebackForPromise(promise, multiArgs) {
	    return function(err, value) {
	        if (promise === null) return;
	        if (err) {
	            var wrapped = wrapAsOperationalError(maybeWrapAsError(err));
	            promise._attachExtraTrace(wrapped);
	            promise._reject(wrapped);
	        } else if (!multiArgs) {
	            promise._fulfill(value);
	        } else {
	            var args = [].slice.call(arguments, 1);;
	            promise._fulfill(args);
	        }
	        promise = null;
	    };
	}

	module.exports = nodebackForPromise;

	},{"./errors":12,"./es5":13,"./util":36}],21:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise) {
	var util = _dereq_("./util");
	var async = Promise._async;
	var tryCatch = util.tryCatch;
	var errorObj = util.errorObj;

	function spreadAdapter(val, nodeback) {
	    var promise = this;
	    if (!util.isArray(val)) return successAdapter.call(promise, val, nodeback);
	    var ret =
	        tryCatch(nodeback).apply(promise._boundValue(), [null].concat(val));
	    if (ret === errorObj) {
	        async.throwLater(ret.e);
	    }
	}

	function successAdapter(val, nodeback) {
	    var promise = this;
	    var receiver = promise._boundValue();
	    var ret = val === undefined
	        ? tryCatch(nodeback).call(receiver, null)
	        : tryCatch(nodeback).call(receiver, null, val);
	    if (ret === errorObj) {
	        async.throwLater(ret.e);
	    }
	}
	function errorAdapter(reason, nodeback) {
	    var promise = this;
	    if (!reason) {
	        var newReason = new Error(reason + "");
	        newReason.cause = reason;
	        reason = newReason;
	    }
	    var ret = tryCatch(nodeback).call(promise._boundValue(), reason);
	    if (ret === errorObj) {
	        async.throwLater(ret.e);
	    }
	}

	Promise.prototype.asCallback = Promise.prototype.nodeify = function (nodeback,
	                                                                     options) {
	    if (typeof nodeback == "function") {
	        var adapter = successAdapter;
	        if (options !== undefined && Object(options).spread) {
	            adapter = spreadAdapter;
	        }
	        this._then(
	            adapter,
	            errorAdapter,
	            undefined,
	            this,
	            nodeback
	        );
	    }
	    return this;
	};
	};

	},{"./util":36}],22:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function() {
	var makeSelfResolutionError = function () {
	    return new TypeError("circular promise resolution chain\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	};
	var reflectHandler = function() {
	    return new Promise.PromiseInspection(this._target());
	};
	var apiRejection = function(msg) {
	    return Promise.reject(new TypeError(msg));
	};
	function Proxyable() {}
	var UNDEFINED_BINDING = {};
	var util = _dereq_("./util");

	var getDomain;
	if (util.isNode) {
	    getDomain = function() {
	        var ret = process.domain;
	        if (ret === undefined) ret = null;
	        return ret;
	    };
	} else {
	    getDomain = function() {
	        return null;
	    };
	}
	util.notEnumerableProp(Promise, "_getDomain", getDomain);

	var es5 = _dereq_("./es5");
	var Async = _dereq_("./async");
	var async = new Async();
	es5.defineProperty(Promise, "_async", {value: async});
	var errors = _dereq_("./errors");
	var TypeError = Promise.TypeError = errors.TypeError;
	Promise.RangeError = errors.RangeError;
	var CancellationError = Promise.CancellationError = errors.CancellationError;
	Promise.TimeoutError = errors.TimeoutError;
	Promise.OperationalError = errors.OperationalError;
	Promise.RejectionError = errors.OperationalError;
	Promise.AggregateError = errors.AggregateError;
	var INTERNAL = function(){};
	var APPLY = {};
	var NEXT_FILTER = {};
	var tryConvertToPromise = _dereq_("./thenables")(Promise, INTERNAL);
	var PromiseArray =
	    _dereq_("./promise_array")(Promise, INTERNAL,
	                               tryConvertToPromise, apiRejection, Proxyable);
	var Context = _dereq_("./context")(Promise);
	 /*jshint unused:false*/
	var createContext = Context.create;
	var debug = _dereq_("./debuggability")(Promise, Context);
	var CapturedTrace = debug.CapturedTrace;
	var PassThroughHandlerContext =
	    _dereq_("./finally")(Promise, tryConvertToPromise);
	var catchFilter = _dereq_("./catch_filter")(NEXT_FILTER);
	var nodebackForPromise = _dereq_("./nodeback");
	var errorObj = util.errorObj;
	var tryCatch = util.tryCatch;
	function check(self, executor) {
	    if (typeof executor !== "function") {
	        throw new TypeError("expecting a function but got " + util.classString(executor));
	    }
	    if (self.constructor !== Promise) {
	        throw new TypeError("the promise constructor cannot be invoked directly\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	    }
	}

	function Promise(executor) {
	    this._bitField = 0;
	    this._fulfillmentHandler0 = undefined;
	    this._rejectionHandler0 = undefined;
	    this._promise0 = undefined;
	    this._receiver0 = undefined;
	    if (executor !== INTERNAL) {
	        check(this, executor);
	        this._resolveFromExecutor(executor);
	    }
	    this._promiseCreated();
	    this._fireEvent("promiseCreated", this);
	}

	Promise.prototype.toString = function () {
	    return "[object Promise]";
	};

	Promise.prototype.caught = Promise.prototype["catch"] = function (fn) {
	    var len = arguments.length;
	    if (len > 1) {
	        var catchInstances = new Array(len - 1),
	            j = 0, i;
	        for (i = 0; i < len - 1; ++i) {
	            var item = arguments[i];
	            if (util.isObject(item)) {
	                catchInstances[j++] = item;
	            } else {
	                return apiRejection("expecting an object but got " + util.classString(item));
	            }
	        }
	        catchInstances.length = j;
	        fn = arguments[i];
	        return this.then(undefined, catchFilter(catchInstances, fn, this));
	    }
	    return this.then(undefined, fn);
	};

	Promise.prototype.reflect = function () {
	    return this._then(reflectHandler,
	        reflectHandler, undefined, this, undefined);
	};

	Promise.prototype.then = function (didFulfill, didReject) {
	    if (debug.warnings() && arguments.length > 0 &&
	        typeof didFulfill !== "function" &&
	        typeof didReject !== "function") {
	        var msg = ".then() only accepts functions but was passed: " +
	                util.classString(didFulfill);
	        if (arguments.length > 1) {
	            msg += ", " + util.classString(didReject);
	        }
	        this._warn(msg);
	    }
	    return this._then(didFulfill, didReject, undefined, undefined, undefined);
	};

	Promise.prototype.done = function (didFulfill, didReject) {
	    var promise =
	        this._then(didFulfill, didReject, undefined, undefined, undefined);
	    promise._setIsFinal();
	};

	Promise.prototype.spread = function (fn) {
	    if (typeof fn !== "function") {
	        return apiRejection("expecting a function but got " + util.classString(fn));
	    }
	    return this.all()._then(fn, undefined, undefined, APPLY, undefined);
	};

	Promise.prototype.toJSON = function () {
	    var ret = {
	        isFulfilled: false,
	        isRejected: false,
	        fulfillmentValue: undefined,
	        rejectionReason: undefined
	    };
	    if (this.isFulfilled()) {
	        ret.fulfillmentValue = this.value();
	        ret.isFulfilled = true;
	    } else if (this.isRejected()) {
	        ret.rejectionReason = this.reason();
	        ret.isRejected = true;
	    }
	    return ret;
	};

	Promise.prototype.all = function () {
	    if (arguments.length > 0) {
	        this._warn(".all() was passed arguments but it does not take any");
	    }
	    return new PromiseArray(this).promise();
	};

	Promise.prototype.error = function (fn) {
	    return this.caught(util.originatesFromRejection, fn);
	};

	Promise.getNewLibraryCopy = module.exports;

	Promise.is = function (val) {
	    return val instanceof Promise;
	};

	Promise.fromNode = Promise.fromCallback = function(fn) {
	    var ret = new Promise(INTERNAL);
	    ret._captureStackTrace();
	    var multiArgs = arguments.length > 1 ? !!Object(arguments[1]).multiArgs
	                                         : false;
	    var result = tryCatch(fn)(nodebackForPromise(ret, multiArgs));
	    if (result === errorObj) {
	        ret._rejectCallback(result.e, true);
	    }
	    if (!ret._isFateSealed()) ret._setAsyncGuaranteed();
	    return ret;
	};

	Promise.all = function (promises) {
	    return new PromiseArray(promises).promise();
	};

	Promise.cast = function (obj) {
	    var ret = tryConvertToPromise(obj);
	    if (!(ret instanceof Promise)) {
	        ret = new Promise(INTERNAL);
	        ret._captureStackTrace();
	        ret._setFulfilled();
	        ret._rejectionHandler0 = obj;
	    }
	    return ret;
	};

	Promise.resolve = Promise.fulfilled = Promise.cast;

	Promise.reject = Promise.rejected = function (reason) {
	    var ret = new Promise(INTERNAL);
	    ret._captureStackTrace();
	    ret._rejectCallback(reason, true);
	    return ret;
	};

	Promise.setScheduler = function(fn) {
	    if (typeof fn !== "function") {
	        throw new TypeError("expecting a function but got " + util.classString(fn));
	    }
	    return async.setScheduler(fn);
	};

	Promise.prototype._then = function (
	    didFulfill,
	    didReject,
	    _,    receiver,
	    internalData
	) {
	    var haveInternalData = internalData !== undefined;
	    var promise = haveInternalData ? internalData : new Promise(INTERNAL);
	    var target = this._target();
	    var bitField = target._bitField;

	    if (!haveInternalData) {
	        promise._propagateFrom(this, 3);
	        promise._captureStackTrace();
	        if (receiver === undefined &&
	            ((this._bitField & 2097152) !== 0)) {
	            if (!((bitField & 50397184) === 0)) {
	                receiver = this._boundValue();
	            } else {
	                receiver = target === this ? undefined : this._boundTo;
	            }
	        }
	        this._fireEvent("promiseChained", this, promise);
	    }

	    var domain = getDomain();
	    if (!((bitField & 50397184) === 0)) {
	        var handler, value, settler = target._settlePromiseCtx;
	        if (((bitField & 33554432) !== 0)) {
	            value = target._rejectionHandler0;
	            handler = didFulfill;
	        } else if (((bitField & 16777216) !== 0)) {
	            value = target._fulfillmentHandler0;
	            handler = didReject;
	            target._unsetRejectionIsUnhandled();
	        } else {
	            settler = target._settlePromiseLateCancellationObserver;
	            value = new CancellationError("late cancellation observer");
	            target._attachExtraTrace(value);
	            handler = didReject;
	        }

	        async.invoke(settler, target, {
	            handler: domain === null ? handler
	                : (typeof handler === "function" && domain.bind(handler)),
	            promise: promise,
	            receiver: receiver,
	            value: value
	        });
	    } else {
	        target._addCallbacks(didFulfill, didReject, promise, receiver, domain);
	    }

	    return promise;
	};

	Promise.prototype._length = function () {
	    return this._bitField & 65535;
	};

	Promise.prototype._isFateSealed = function () {
	    return (this._bitField & 117506048) !== 0;
	};

	Promise.prototype._isFollowing = function () {
	    return (this._bitField & 67108864) === 67108864;
	};

	Promise.prototype._setLength = function (len) {
	    this._bitField = (this._bitField & -65536) |
	        (len & 65535);
	};

	Promise.prototype._setFulfilled = function () {
	    this._bitField = this._bitField | 33554432;
	    this._fireEvent("promiseFulfilled", this);
	};

	Promise.prototype._setRejected = function () {
	    this._bitField = this._bitField | 16777216;
	    this._fireEvent("promiseRejected", this);
	};

	Promise.prototype._setFollowing = function () {
	    this._bitField = this._bitField | 67108864;
	    this._fireEvent("promiseResolved", this);
	};

	Promise.prototype._setIsFinal = function () {
	    this._bitField = this._bitField | 4194304;
	};

	Promise.prototype._isFinal = function () {
	    return (this._bitField & 4194304) > 0;
	};

	Promise.prototype._unsetCancelled = function() {
	    this._bitField = this._bitField & (~65536);
	};

	Promise.prototype._setCancelled = function() {
	    this._bitField = this._bitField | 65536;
	    this._fireEvent("promiseCancelled", this);
	};

	Promise.prototype._setAsyncGuaranteed = function() {
	    if (async.hasCustomScheduler()) return;
	    this._bitField = this._bitField | 134217728;
	};

	Promise.prototype._receiverAt = function (index) {
	    var ret = index === 0 ? this._receiver0 : this[
	            index * 4 - 4 + 3];
	    if (ret === UNDEFINED_BINDING) {
	        return undefined;
	    } else if (ret === undefined && this._isBound()) {
	        return this._boundValue();
	    }
	    return ret;
	};

	Promise.prototype._promiseAt = function (index) {
	    return this[
	            index * 4 - 4 + 2];
	};

	Promise.prototype._fulfillmentHandlerAt = function (index) {
	    return this[
	            index * 4 - 4 + 0];
	};

	Promise.prototype._rejectionHandlerAt = function (index) {
	    return this[
	            index * 4 - 4 + 1];
	};

	Promise.prototype._boundValue = function() {};

	Promise.prototype._migrateCallback0 = function (follower) {
	    var bitField = follower._bitField;
	    var fulfill = follower._fulfillmentHandler0;
	    var reject = follower._rejectionHandler0;
	    var promise = follower._promise0;
	    var receiver = follower._receiverAt(0);
	    if (receiver === undefined) receiver = UNDEFINED_BINDING;
	    this._addCallbacks(fulfill, reject, promise, receiver, null);
	};

	Promise.prototype._migrateCallbackAt = function (follower, index) {
	    var fulfill = follower._fulfillmentHandlerAt(index);
	    var reject = follower._rejectionHandlerAt(index);
	    var promise = follower._promiseAt(index);
	    var receiver = follower._receiverAt(index);
	    if (receiver === undefined) receiver = UNDEFINED_BINDING;
	    this._addCallbacks(fulfill, reject, promise, receiver, null);
	};

	Promise.prototype._addCallbacks = function (
	    fulfill,
	    reject,
	    promise,
	    receiver,
	    domain
	) {
	    var index = this._length();

	    if (index >= 65535 - 4) {
	        index = 0;
	        this._setLength(0);
	    }

	    if (index === 0) {
	        this._promise0 = promise;
	        this._receiver0 = receiver;
	        if (typeof fulfill === "function") {
	            this._fulfillmentHandler0 =
	                domain === null ? fulfill : domain.bind(fulfill);
	        }
	        if (typeof reject === "function") {
	            this._rejectionHandler0 =
	                domain === null ? reject : domain.bind(reject);
	        }
	    } else {
	        var base = index * 4 - 4;
	        this[base + 2] = promise;
	        this[base + 3] = receiver;
	        if (typeof fulfill === "function") {
	            this[base + 0] =
	                domain === null ? fulfill : domain.bind(fulfill);
	        }
	        if (typeof reject === "function") {
	            this[base + 1] =
	                domain === null ? reject : domain.bind(reject);
	        }
	    }
	    this._setLength(index + 1);
	    return index;
	};

	Promise.prototype._proxy = function (proxyable, arg) {
	    this._addCallbacks(undefined, undefined, arg, proxyable, null);
	};

	Promise.prototype._resolveCallback = function(value, shouldBind) {
	    if (((this._bitField & 117506048) !== 0)) return;
	    if (value === this)
	        return this._rejectCallback(makeSelfResolutionError(), false);
	    var maybePromise = tryConvertToPromise(value, this);
	    if (!(maybePromise instanceof Promise)) return this._fulfill(value);

	    if (shouldBind) this._propagateFrom(maybePromise, 2);

	    var promise = maybePromise._target();

	    if (promise === this) {
	        this._reject(makeSelfResolutionError());
	        return;
	    }

	    var bitField = promise._bitField;
	    if (((bitField & 50397184) === 0)) {
	        var len = this._length();
	        if (len > 0) promise._migrateCallback0(this);
	        for (var i = 1; i < len; ++i) {
	            promise._migrateCallbackAt(this, i);
	        }
	        this._setFollowing();
	        this._setLength(0);
	        this._setFollowee(promise);
	    } else if (((bitField & 33554432) !== 0)) {
	        this._fulfill(promise._value());
	    } else if (((bitField & 16777216) !== 0)) {
	        this._reject(promise._reason());
	    } else {
	        var reason = new CancellationError("late cancellation observer");
	        promise._attachExtraTrace(reason);
	        this._reject(reason);
	    }
	};

	Promise.prototype._rejectCallback =
	function(reason, synchronous, ignoreNonErrorWarnings) {
	    var trace = util.ensureErrorObject(reason);
	    var hasStack = trace === reason;
	    if (!hasStack && !ignoreNonErrorWarnings && debug.warnings()) {
	        var message = "a promise was rejected with a non-error: " +
	            util.classString(reason);
	        this._warn(message, true);
	    }
	    this._attachExtraTrace(trace, synchronous ? hasStack : false);
	    this._reject(reason);
	};

	Promise.prototype._resolveFromExecutor = function (executor) {
	    var promise = this;
	    this._captureStackTrace();
	    this._pushContext();
	    var synchronous = true;
	    var r = this._execute(executor, function(value) {
	        promise._resolveCallback(value);
	    }, function (reason) {
	        promise._rejectCallback(reason, synchronous);
	    });
	    synchronous = false;
	    this._popContext();

	    if (r !== undefined) {
	        promise._rejectCallback(r, true);
	    }
	};

	Promise.prototype._settlePromiseFromHandler = function (
	    handler, receiver, value, promise
	) {
	    var bitField = promise._bitField;
	    if (((bitField & 65536) !== 0)) return;
	    promise._pushContext();
	    var x;
	    if (receiver === APPLY) {
	        if (!value || typeof value.length !== "number") {
	            x = errorObj;
	            x.e = new TypeError("cannot .spread() a non-array: " +
	                                    util.classString(value));
	        } else {
	            x = tryCatch(handler).apply(this._boundValue(), value);
	        }
	    } else {
	        x = tryCatch(handler).call(receiver, value);
	    }
	    var promiseCreated = promise._popContext();
	    bitField = promise._bitField;
	    if (((bitField & 65536) !== 0)) return;

	    if (x === NEXT_FILTER) {
	        promise._reject(value);
	    } else if (x === errorObj) {
	        promise._rejectCallback(x.e, false);
	    } else {
	        debug.checkForgottenReturns(x, promiseCreated, "",  promise, this);
	        promise._resolveCallback(x);
	    }
	};

	Promise.prototype._target = function() {
	    var ret = this;
	    while (ret._isFollowing()) ret = ret._followee();
	    return ret;
	};

	Promise.prototype._followee = function() {
	    return this._rejectionHandler0;
	};

	Promise.prototype._setFollowee = function(promise) {
	    this._rejectionHandler0 = promise;
	};

	Promise.prototype._settlePromise = function(promise, handler, receiver, value) {
	    var isPromise = promise instanceof Promise;
	    var bitField = this._bitField;
	    var asyncGuaranteed = ((bitField & 134217728) !== 0);
	    if (((bitField & 65536) !== 0)) {
	        if (isPromise) promise._invokeInternalOnCancel();

	        if (receiver instanceof PassThroughHandlerContext &&
	            receiver.isFinallyHandler()) {
	            receiver.cancelPromise = promise;
	            if (tryCatch(handler).call(receiver, value) === errorObj) {
	                promise._reject(errorObj.e);
	            }
	        } else if (handler === reflectHandler) {
	            promise._fulfill(reflectHandler.call(receiver));
	        } else if (receiver instanceof Proxyable) {
	            receiver._promiseCancelled(promise);
	        } else if (isPromise || promise instanceof PromiseArray) {
	            promise._cancel();
	        } else {
	            receiver.cancel();
	        }
	    } else if (typeof handler === "function") {
	        if (!isPromise) {
	            handler.call(receiver, value, promise);
	        } else {
	            if (asyncGuaranteed) promise._setAsyncGuaranteed();
	            this._settlePromiseFromHandler(handler, receiver, value, promise);
	        }
	    } else if (receiver instanceof Proxyable) {
	        if (!receiver._isResolved()) {
	            if (((bitField & 33554432) !== 0)) {
	                receiver._promiseFulfilled(value, promise);
	            } else {
	                receiver._promiseRejected(value, promise);
	            }
	        }
	    } else if (isPromise) {
	        if (asyncGuaranteed) promise._setAsyncGuaranteed();
	        if (((bitField & 33554432) !== 0)) {
	            promise._fulfill(value);
	        } else {
	            promise._reject(value);
	        }
	    }
	};

	Promise.prototype._settlePromiseLateCancellationObserver = function(ctx) {
	    var handler = ctx.handler;
	    var promise = ctx.promise;
	    var receiver = ctx.receiver;
	    var value = ctx.value;
	    if (typeof handler === "function") {
	        if (!(promise instanceof Promise)) {
	            handler.call(receiver, value, promise);
	        } else {
	            this._settlePromiseFromHandler(handler, receiver, value, promise);
	        }
	    } else if (promise instanceof Promise) {
	        promise._reject(value);
	    }
	};

	Promise.prototype._settlePromiseCtx = function(ctx) {
	    this._settlePromise(ctx.promise, ctx.handler, ctx.receiver, ctx.value);
	};

	Promise.prototype._settlePromise0 = function(handler, value, bitField) {
	    var promise = this._promise0;
	    var receiver = this._receiverAt(0);
	    this._promise0 = undefined;
	    this._receiver0 = undefined;
	    this._settlePromise(promise, handler, receiver, value);
	};

	Promise.prototype._clearCallbackDataAtIndex = function(index) {
	    var base = index * 4 - 4;
	    this[base + 2] =
	    this[base + 3] =
	    this[base + 0] =
	    this[base + 1] = undefined;
	};

	Promise.prototype._fulfill = function (value) {
	    var bitField = this._bitField;
	    if (((bitField & 117506048) >>> 16)) return;
	    if (value === this) {
	        var err = makeSelfResolutionError();
	        this._attachExtraTrace(err);
	        return this._reject(err);
	    }
	    this._setFulfilled();
	    this._rejectionHandler0 = value;

	    if ((bitField & 65535) > 0) {
	        if (((bitField & 134217728) !== 0)) {
	            this._settlePromises();
	        } else {
	            async.settlePromises(this);
	        }
	    }
	};

	Promise.prototype._reject = function (reason) {
	    var bitField = this._bitField;
	    if (((bitField & 117506048) >>> 16)) return;
	    this._setRejected();
	    this._fulfillmentHandler0 = reason;

	    if (this._isFinal()) {
	        return async.fatalError(reason, util.isNode);
	    }

	    if ((bitField & 65535) > 0) {
	        async.settlePromises(this);
	    } else {
	        this._ensurePossibleRejectionHandled();
	    }
	};

	Promise.prototype._fulfillPromises = function (len, value) {
	    for (var i = 1; i < len; i++) {
	        var handler = this._fulfillmentHandlerAt(i);
	        var promise = this._promiseAt(i);
	        var receiver = this._receiverAt(i);
	        this._clearCallbackDataAtIndex(i);
	        this._settlePromise(promise, handler, receiver, value);
	    }
	};

	Promise.prototype._rejectPromises = function (len, reason) {
	    for (var i = 1; i < len; i++) {
	        var handler = this._rejectionHandlerAt(i);
	        var promise = this._promiseAt(i);
	        var receiver = this._receiverAt(i);
	        this._clearCallbackDataAtIndex(i);
	        this._settlePromise(promise, handler, receiver, reason);
	    }
	};

	Promise.prototype._settlePromises = function () {
	    var bitField = this._bitField;
	    var len = (bitField & 65535);

	    if (len > 0) {
	        if (((bitField & 16842752) !== 0)) {
	            var reason = this._fulfillmentHandler0;
	            this._settlePromise0(this._rejectionHandler0, reason, bitField);
	            this._rejectPromises(len, reason);
	        } else {
	            var value = this._rejectionHandler0;
	            this._settlePromise0(this._fulfillmentHandler0, value, bitField);
	            this._fulfillPromises(len, value);
	        }
	        this._setLength(0);
	    }
	    this._clearCancellationData();
	};

	Promise.prototype._settledValue = function() {
	    var bitField = this._bitField;
	    if (((bitField & 33554432) !== 0)) {
	        return this._rejectionHandler0;
	    } else if (((bitField & 16777216) !== 0)) {
	        return this._fulfillmentHandler0;
	    }
	};

	function deferResolve(v) {this.promise._resolveCallback(v);}
	function deferReject(v) {this.promise._rejectCallback(v, false);}

	Promise.defer = Promise.pending = function() {
	    debug.deprecated("Promise.defer", "new Promise");
	    var promise = new Promise(INTERNAL);
	    return {
	        promise: promise,
	        resolve: deferResolve,
	        reject: deferReject
	    };
	};

	util.notEnumerableProp(Promise,
	                       "_makeSelfResolutionError",
	                       makeSelfResolutionError);

	_dereq_("./method")(Promise, INTERNAL, tryConvertToPromise, apiRejection,
	    debug);
	_dereq_("./bind")(Promise, INTERNAL, tryConvertToPromise, debug);
	_dereq_("./cancel")(Promise, PromiseArray, apiRejection, debug);
	_dereq_("./direct_resolve")(Promise);
	_dereq_("./synchronous_inspection")(Promise);
	_dereq_("./join")(
	    Promise, PromiseArray, tryConvertToPromise, INTERNAL, debug);
	Promise.Promise = Promise;
	Promise.version = "3.4.0";
	_dereq_('./map.js')(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug);
	_dereq_('./call_get.js')(Promise);
	_dereq_('./using.js')(Promise, apiRejection, tryConvertToPromise, createContext, INTERNAL, debug);
	_dereq_('./timers.js')(Promise, INTERNAL, debug);
	_dereq_('./generators.js')(Promise, apiRejection, INTERNAL, tryConvertToPromise, Proxyable, debug);
	_dereq_('./nodeify.js')(Promise);
	_dereq_('./promisify.js')(Promise, INTERNAL);
	_dereq_('./props.js')(Promise, PromiseArray, tryConvertToPromise, apiRejection);
	_dereq_('./race.js')(Promise, INTERNAL, tryConvertToPromise, apiRejection);
	_dereq_('./reduce.js')(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug);
	_dereq_('./settle.js')(Promise, PromiseArray, debug);
	_dereq_('./some.js')(Promise, PromiseArray, apiRejection);
	_dereq_('./filter.js')(Promise, INTERNAL);
	_dereq_('./each.js')(Promise, INTERNAL);
	_dereq_('./any.js')(Promise);
	                                                         
	    util.toFastProperties(Promise);                                          
	    util.toFastProperties(Promise.prototype);                                
	    function fillTypes(value) {                                              
	        var p = new Promise(INTERNAL);                                       
	        p._fulfillmentHandler0 = value;                                      
	        p._rejectionHandler0 = value;                                        
	        p._promise0 = value;                                                 
	        p._receiver0 = value;                                                
	    }                                                                        
	    // Complete slack tracking, opt out of field-type tracking and           
	    // stabilize map                                                         
	    fillTypes({a: 1});                                                       
	    fillTypes({b: 2});                                                       
	    fillTypes({c: 3});                                                       
	    fillTypes(1);                                                            
	    fillTypes(function(){});                                                 
	    fillTypes(undefined);                                                    
	    fillTypes(false);                                                        
	    fillTypes(new Promise(INTERNAL));                                        
	    debug.setBounds(Async.firstLineError, util.lastLineError);               
	    return Promise;                                                          

	};

	},{"./any.js":1,"./async":2,"./bind":3,"./call_get.js":5,"./cancel":6,"./catch_filter":7,"./context":8,"./debuggability":9,"./direct_resolve":10,"./each.js":11,"./errors":12,"./es5":13,"./filter.js":14,"./finally":15,"./generators.js":16,"./join":17,"./map.js":18,"./method":19,"./nodeback":20,"./nodeify.js":21,"./promise_array":23,"./promisify.js":24,"./props.js":25,"./race.js":27,"./reduce.js":28,"./settle.js":30,"./some.js":31,"./synchronous_inspection":32,"./thenables":33,"./timers.js":34,"./using.js":35,"./util":36}],23:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise, INTERNAL, tryConvertToPromise,
	    apiRejection, Proxyable) {
	var util = _dereq_("./util");
	var isArray = util.isArray;

	function toResolutionValue(val) {
	    switch(val) {
	    case -2: return [];
	    case -3: return {};
	    }
	}

	function PromiseArray(values) {
	    var promise = this._promise = new Promise(INTERNAL);
	    if (values instanceof Promise) {
	        promise._propagateFrom(values, 3);
	    }
	    promise._setOnCancel(this);
	    this._values = values;
	    this._length = 0;
	    this._totalResolved = 0;
	    this._init(undefined, -2);
	}
	util.inherits(PromiseArray, Proxyable);

	PromiseArray.prototype.length = function () {
	    return this._length;
	};

	PromiseArray.prototype.promise = function () {
	    return this._promise;
	};

	PromiseArray.prototype._init = function init(_, resolveValueIfEmpty) {
	    var values = tryConvertToPromise(this._values, this._promise);
	    if (values instanceof Promise) {
	        values = values._target();
	        var bitField = values._bitField;
	        ;
	        this._values = values;

	        if (((bitField & 50397184) === 0)) {
	            this._promise._setAsyncGuaranteed();
	            return values._then(
	                init,
	                this._reject,
	                undefined,
	                this,
	                resolveValueIfEmpty
	           );
	        } else if (((bitField & 33554432) !== 0)) {
	            values = values._value();
	        } else if (((bitField & 16777216) !== 0)) {
	            return this._reject(values._reason());
	        } else {
	            return this._cancel();
	        }
	    }
	    values = util.asArray(values);
	    if (values === null) {
	        var err = apiRejection(
	            "expecting an array or an iterable object but got " + util.classString(values)).reason();
	        this._promise._rejectCallback(err, false);
	        return;
	    }

	    if (values.length === 0) {
	        if (resolveValueIfEmpty === -5) {
	            this._resolveEmptyArray();
	        }
	        else {
	            this._resolve(toResolutionValue(resolveValueIfEmpty));
	        }
	        return;
	    }
	    this._iterate(values);
	};

	PromiseArray.prototype._iterate = function(values) {
	    var len = this.getActualLength(values.length);
	    this._length = len;
	    this._values = this.shouldCopyValues() ? new Array(len) : this._values;
	    var result = this._promise;
	    var isResolved = false;
	    var bitField = null;
	    for (var i = 0; i < len; ++i) {
	        var maybePromise = tryConvertToPromise(values[i], result);

	        if (maybePromise instanceof Promise) {
	            maybePromise = maybePromise._target();
	            bitField = maybePromise._bitField;
	        } else {
	            bitField = null;
	        }

	        if (isResolved) {
	            if (bitField !== null) {
	                maybePromise.suppressUnhandledRejections();
	            }
	        } else if (bitField !== null) {
	            if (((bitField & 50397184) === 0)) {
	                maybePromise._proxy(this, i);
	                this._values[i] = maybePromise;
	            } else if (((bitField & 33554432) !== 0)) {
	                isResolved = this._promiseFulfilled(maybePromise._value(), i);
	            } else if (((bitField & 16777216) !== 0)) {
	                isResolved = this._promiseRejected(maybePromise._reason(), i);
	            } else {
	                isResolved = this._promiseCancelled(i);
	            }
	        } else {
	            isResolved = this._promiseFulfilled(maybePromise, i);
	        }
	    }
	    if (!isResolved) result._setAsyncGuaranteed();
	};

	PromiseArray.prototype._isResolved = function () {
	    return this._values === null;
	};

	PromiseArray.prototype._resolve = function (value) {
	    this._values = null;
	    this._promise._fulfill(value);
	};

	PromiseArray.prototype._cancel = function() {
	    if (this._isResolved() || !this._promise.isCancellable()) return;
	    this._values = null;
	    this._promise._cancel();
	};

	PromiseArray.prototype._reject = function (reason) {
	    this._values = null;
	    this._promise._rejectCallback(reason, false);
	};

	PromiseArray.prototype._promiseFulfilled = function (value, index) {
	    this._values[index] = value;
	    var totalResolved = ++this._totalResolved;
	    if (totalResolved >= this._length) {
	        this._resolve(this._values);
	        return true;
	    }
	    return false;
	};

	PromiseArray.prototype._promiseCancelled = function() {
	    this._cancel();
	    return true;
	};

	PromiseArray.prototype._promiseRejected = function (reason) {
	    this._totalResolved++;
	    this._reject(reason);
	    return true;
	};

	PromiseArray.prototype._resultCancelled = function() {
	    if (this._isResolved()) return;
	    var values = this._values;
	    this._cancel();
	    if (values instanceof Promise) {
	        values.cancel();
	    } else {
	        for (var i = 0; i < values.length; ++i) {
	            if (values[i] instanceof Promise) {
	                values[i].cancel();
	            }
	        }
	    }
	};

	PromiseArray.prototype.shouldCopyValues = function () {
	    return true;
	};

	PromiseArray.prototype.getActualLength = function (len) {
	    return len;
	};

	return PromiseArray;
	};

	},{"./util":36}],24:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise, INTERNAL) {
	var THIS = {};
	var util = _dereq_("./util");
	var nodebackForPromise = _dereq_("./nodeback");
	var withAppended = util.withAppended;
	var maybeWrapAsError = util.maybeWrapAsError;
	var canEvaluate = util.canEvaluate;
	var TypeError = _dereq_("./errors").TypeError;
	var defaultSuffix = "Async";
	var defaultPromisified = {__isPromisified__: true};
	var noCopyProps = [
	    "arity",    "length",
	    "name",
	    "arguments",
	    "caller",
	    "callee",
	    "prototype",
	    "__isPromisified__"
	];
	var noCopyPropsPattern = new RegExp("^(?:" + noCopyProps.join("|") + ")$");

	var defaultFilter = function(name) {
	    return util.isIdentifier(name) &&
	        name.charAt(0) !== "_" &&
	        name !== "constructor";
	};

	function propsFilter(key) {
	    return !noCopyPropsPattern.test(key);
	}

	function isPromisified(fn) {
	    try {
	        return fn.__isPromisified__ === true;
	    }
	    catch (e) {
	        return false;
	    }
	}

	function hasPromisified(obj, key, suffix) {
	    var val = util.getDataPropertyOrDefault(obj, key + suffix,
	                                            defaultPromisified);
	    return val ? isPromisified(val) : false;
	}
	function checkValid(ret, suffix, suffixRegexp) {
	    for (var i = 0; i < ret.length; i += 2) {
	        var key = ret[i];
	        if (suffixRegexp.test(key)) {
	            var keyWithoutAsyncSuffix = key.replace(suffixRegexp, "");
	            for (var j = 0; j < ret.length; j += 2) {
	                if (ret[j] === keyWithoutAsyncSuffix) {
	                    throw new TypeError("Cannot promisify an API that has normal methods with '%s'-suffix\u000a\u000a    See http://goo.gl/MqrFmX\u000a"
	                        .replace("%s", suffix));
	                }
	            }
	        }
	    }
	}

	function promisifiableMethods(obj, suffix, suffixRegexp, filter) {
	    var keys = util.inheritedDataKeys(obj);
	    var ret = [];
	    for (var i = 0; i < keys.length; ++i) {
	        var key = keys[i];
	        var value = obj[key];
	        var passesDefaultFilter = filter === defaultFilter
	            ? true : defaultFilter(key, value, obj);
	        if (typeof value === "function" &&
	            !isPromisified(value) &&
	            !hasPromisified(obj, key, suffix) &&
	            filter(key, value, obj, passesDefaultFilter)) {
	            ret.push(key, value);
	        }
	    }
	    checkValid(ret, suffix, suffixRegexp);
	    return ret;
	}

	var escapeIdentRegex = function(str) {
	    return str.replace(/([$])/, "\\$");
	};

	var makeNodePromisifiedEval;
	if (false) {
	var switchCaseArgumentOrder = function(likelyArgumentCount) {
	    var ret = [likelyArgumentCount];
	    var min = Math.max(0, likelyArgumentCount - 1 - 3);
	    for(var i = likelyArgumentCount - 1; i >= min; --i) {
	        ret.push(i);
	    }
	    for(var i = likelyArgumentCount + 1; i <= 3; ++i) {
	        ret.push(i);
	    }
	    return ret;
	};

	var argumentSequence = function(argumentCount) {
	    return util.filledRange(argumentCount, "_arg", "");
	};

	var parameterDeclaration = function(parameterCount) {
	    return util.filledRange(
	        Math.max(parameterCount, 3), "_arg", "");
	};

	var parameterCount = function(fn) {
	    if (typeof fn.length === "number") {
	        return Math.max(Math.min(fn.length, 1023 + 1), 0);
	    }
	    return 0;
	};

	makeNodePromisifiedEval =
	function(callback, receiver, originalName, fn, _, multiArgs) {
	    var newParameterCount = Math.max(0, parameterCount(fn) - 1);
	    var argumentOrder = switchCaseArgumentOrder(newParameterCount);
	    var shouldProxyThis = typeof callback === "string" || receiver === THIS;

	    function generateCallForArgumentCount(count) {
	        var args = argumentSequence(count).join(", ");
	        var comma = count > 0 ? ", " : "";
	        var ret;
	        if (shouldProxyThis) {
	            ret = "ret = callback.call(this, {{args}}, nodeback); break;\n";
	        } else {
	            ret = receiver === undefined
	                ? "ret = callback({{args}}, nodeback); break;\n"
	                : "ret = callback.call(receiver, {{args}}, nodeback); break;\n";
	        }
	        return ret.replace("{{args}}", args).replace(", ", comma);
	    }

	    function generateArgumentSwitchCase() {
	        var ret = "";
	        for (var i = 0; i < argumentOrder.length; ++i) {
	            ret += "case " + argumentOrder[i] +":" +
	                generateCallForArgumentCount(argumentOrder[i]);
	        }

	        ret += "                                                             \n\
	        default:                                                             \n\
	            var args = new Array(len + 1);                                   \n\
	            var i = 0;                                                       \n\
	            for (var i = 0; i < len; ++i) {                                  \n\
	               args[i] = arguments[i];                                       \n\
	            }                                                                \n\
	            args[i] = nodeback;                                              \n\
	            [CodeForCall]                                                    \n\
	            break;                                                           \n\
	        ".replace("[CodeForCall]", (shouldProxyThis
	                                ? "ret = callback.apply(this, args);\n"
	                                : "ret = callback.apply(receiver, args);\n"));
	        return ret;
	    }

	    var getFunctionCode = typeof callback === "string"
	                                ? ("this != null ? this['"+callback+"'] : fn")
	                                : "fn";
	    var body = "'use strict';                                                \n\
	        var ret = function (Parameters) {                                    \n\
	            'use strict';                                                    \n\
	            var len = arguments.length;                                      \n\
	            var promise = new Promise(INTERNAL);                             \n\
	            promise._captureStackTrace();                                    \n\
	            var nodeback = nodebackForPromise(promise, " + multiArgs + ");   \n\
	            var ret;                                                         \n\
	            var callback = tryCatch([GetFunctionCode]);                      \n\
	            switch(len) {                                                    \n\
	                [CodeForSwitchCase]                                          \n\
	            }                                                                \n\
	            if (ret === errorObj) {                                          \n\
	                promise._rejectCallback(maybeWrapAsError(ret.e), true, true);\n\
	            }                                                                \n\
	            if (!promise._isFateSealed()) promise._setAsyncGuaranteed();     \n\
	            return promise;                                                  \n\
	        };                                                                   \n\
	        notEnumerableProp(ret, '__isPromisified__', true);                   \n\
	        return ret;                                                          \n\
	    ".replace("[CodeForSwitchCase]", generateArgumentSwitchCase())
	        .replace("[GetFunctionCode]", getFunctionCode);
	    body = body.replace("Parameters", parameterDeclaration(newParameterCount));
	    return new Function("Promise",
	                        "fn",
	                        "receiver",
	                        "withAppended",
	                        "maybeWrapAsError",
	                        "nodebackForPromise",
	                        "tryCatch",
	                        "errorObj",
	                        "notEnumerableProp",
	                        "INTERNAL",
	                        body)(
	                    Promise,
	                    fn,
	                    receiver,
	                    withAppended,
	                    maybeWrapAsError,
	                    nodebackForPromise,
	                    util.tryCatch,
	                    util.errorObj,
	                    util.notEnumerableProp,
	                    INTERNAL);
	};
	}

	function makeNodePromisifiedClosure(callback, receiver, _, fn, __, multiArgs) {
	    var defaultThis = (function() {return this;})();
	    var method = callback;
	    if (typeof method === "string") {
	        callback = fn;
	    }
	    function promisified() {
	        var _receiver = receiver;
	        if (receiver === THIS) _receiver = this;
	        var promise = new Promise(INTERNAL);
	        promise._captureStackTrace();
	        var cb = typeof method === "string" && this !== defaultThis
	            ? this[method] : callback;
	        var fn = nodebackForPromise(promise, multiArgs);
	        try {
	            cb.apply(_receiver, withAppended(arguments, fn));
	        } catch(e) {
	            promise._rejectCallback(maybeWrapAsError(e), true, true);
	        }
	        if (!promise._isFateSealed()) promise._setAsyncGuaranteed();
	        return promise;
	    }
	    util.notEnumerableProp(promisified, "__isPromisified__", true);
	    return promisified;
	}

	var makeNodePromisified = canEvaluate
	    ? makeNodePromisifiedEval
	    : makeNodePromisifiedClosure;

	function promisifyAll(obj, suffix, filter, promisifier, multiArgs) {
	    var suffixRegexp = new RegExp(escapeIdentRegex(suffix) + "$");
	    var methods =
	        promisifiableMethods(obj, suffix, suffixRegexp, filter);

	    for (var i = 0, len = methods.length; i < len; i+= 2) {
	        var key = methods[i];
	        var fn = methods[i+1];
	        var promisifiedKey = key + suffix;
	        if (promisifier === makeNodePromisified) {
	            obj[promisifiedKey] =
	                makeNodePromisified(key, THIS, key, fn, suffix, multiArgs);
	        } else {
	            var promisified = promisifier(fn, function() {
	                return makeNodePromisified(key, THIS, key,
	                                           fn, suffix, multiArgs);
	            });
	            util.notEnumerableProp(promisified, "__isPromisified__", true);
	            obj[promisifiedKey] = promisified;
	        }
	    }
	    util.toFastProperties(obj);
	    return obj;
	}

	function promisify(callback, receiver, multiArgs) {
	    return makeNodePromisified(callback, receiver, undefined,
	                                callback, null, multiArgs);
	}

	Promise.promisify = function (fn, options) {
	    if (typeof fn !== "function") {
	        throw new TypeError("expecting a function but got " + util.classString(fn));
	    }
	    if (isPromisified(fn)) {
	        return fn;
	    }
	    options = Object(options);
	    var receiver = options.context === undefined ? THIS : options.context;
	    var multiArgs = !!options.multiArgs;
	    var ret = promisify(fn, receiver, multiArgs);
	    util.copyDescriptors(fn, ret, propsFilter);
	    return ret;
	};

	Promise.promisifyAll = function (target, options) {
	    if (typeof target !== "function" && typeof target !== "object") {
	        throw new TypeError("the target of promisifyAll must be an object or a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	    }
	    options = Object(options);
	    var multiArgs = !!options.multiArgs;
	    var suffix = options.suffix;
	    if (typeof suffix !== "string") suffix = defaultSuffix;
	    var filter = options.filter;
	    if (typeof filter !== "function") filter = defaultFilter;
	    var promisifier = options.promisifier;
	    if (typeof promisifier !== "function") promisifier = makeNodePromisified;

	    if (!util.isIdentifier(suffix)) {
	        throw new RangeError("suffix must be a valid identifier\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	    }

	    var keys = util.inheritedDataKeys(target);
	    for (var i = 0; i < keys.length; ++i) {
	        var value = target[keys[i]];
	        if (keys[i] !== "constructor" &&
	            util.isClass(value)) {
	            promisifyAll(value.prototype, suffix, filter, promisifier,
	                multiArgs);
	            promisifyAll(value, suffix, filter, promisifier, multiArgs);
	        }
	    }

	    return promisifyAll(target, suffix, filter, promisifier, multiArgs);
	};
	};


	},{"./errors":12,"./nodeback":20,"./util":36}],25:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(
	    Promise, PromiseArray, tryConvertToPromise, apiRejection) {
	var util = _dereq_("./util");
	var isObject = util.isObject;
	var es5 = _dereq_("./es5");
	var Es6Map;
	if (typeof Map === "function") Es6Map = Map;

	var mapToEntries = (function() {
	    var index = 0;
	    var size = 0;

	    function extractEntry(value, key) {
	        this[index] = value;
	        this[index + size] = key;
	        index++;
	    }

	    return function mapToEntries(map) {
	        size = map.size;
	        index = 0;
	        var ret = new Array(map.size * 2);
	        map.forEach(extractEntry, ret);
	        return ret;
	    };
	})();

	var entriesToMap = function(entries) {
	    var ret = new Es6Map();
	    var length = entries.length / 2 | 0;
	    for (var i = 0; i < length; ++i) {
	        var key = entries[length + i];
	        var value = entries[i];
	        ret.set(key, value);
	    }
	    return ret;
	};

	function PropertiesPromiseArray(obj) {
	    var isMap = false;
	    var entries;
	    if (Es6Map !== undefined && obj instanceof Es6Map) {
	        entries = mapToEntries(obj);
	        isMap = true;
	    } else {
	        var keys = es5.keys(obj);
	        var len = keys.length;
	        entries = new Array(len * 2);
	        for (var i = 0; i < len; ++i) {
	            var key = keys[i];
	            entries[i] = obj[key];
	            entries[i + len] = key;
	        }
	    }
	    this.constructor$(entries);
	    this._isMap = isMap;
	    this._init$(undefined, -3);
	}
	util.inherits(PropertiesPromiseArray, PromiseArray);

	PropertiesPromiseArray.prototype._init = function () {};

	PropertiesPromiseArray.prototype._promiseFulfilled = function (value, index) {
	    this._values[index] = value;
	    var totalResolved = ++this._totalResolved;
	    if (totalResolved >= this._length) {
	        var val;
	        if (this._isMap) {
	            val = entriesToMap(this._values);
	        } else {
	            val = {};
	            var keyOffset = this.length();
	            for (var i = 0, len = this.length(); i < len; ++i) {
	                val[this._values[i + keyOffset]] = this._values[i];
	            }
	        }
	        this._resolve(val);
	        return true;
	    }
	    return false;
	};

	PropertiesPromiseArray.prototype.shouldCopyValues = function () {
	    return false;
	};

	PropertiesPromiseArray.prototype.getActualLength = function (len) {
	    return len >> 1;
	};

	function props(promises) {
	    var ret;
	    var castValue = tryConvertToPromise(promises);

	    if (!isObject(castValue)) {
	        return apiRejection("cannot await properties of a non-object\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	    } else if (castValue instanceof Promise) {
	        ret = castValue._then(
	            Promise.props, undefined, undefined, undefined, undefined);
	    } else {
	        ret = new PropertiesPromiseArray(castValue).promise();
	    }

	    if (castValue instanceof Promise) {
	        ret._propagateFrom(castValue, 2);
	    }
	    return ret;
	}

	Promise.prototype.props = function () {
	    return props(this);
	};

	Promise.props = function (promises) {
	    return props(promises);
	};
	};

	},{"./es5":13,"./util":36}],26:[function(_dereq_,module,exports){
	"use strict";
	function arrayMove(src, srcIndex, dst, dstIndex, len) {
	    for (var j = 0; j < len; ++j) {
	        dst[j + dstIndex] = src[j + srcIndex];
	        src[j + srcIndex] = void 0;
	    }
	}

	function Queue(capacity) {
	    this._capacity = capacity;
	    this._length = 0;
	    this._front = 0;
	}

	Queue.prototype._willBeOverCapacity = function (size) {
	    return this._capacity < size;
	};

	Queue.prototype._pushOne = function (arg) {
	    var length = this.length();
	    this._checkCapacity(length + 1);
	    var i = (this._front + length) & (this._capacity - 1);
	    this[i] = arg;
	    this._length = length + 1;
	};

	Queue.prototype._unshiftOne = function(value) {
	    var capacity = this._capacity;
	    this._checkCapacity(this.length() + 1);
	    var front = this._front;
	    var i = (((( front - 1 ) &
	                    ( capacity - 1) ) ^ capacity ) - capacity );
	    this[i] = value;
	    this._front = i;
	    this._length = this.length() + 1;
	};

	Queue.prototype.unshift = function(fn, receiver, arg) {
	    this._unshiftOne(arg);
	    this._unshiftOne(receiver);
	    this._unshiftOne(fn);
	};

	Queue.prototype.push = function (fn, receiver, arg) {
	    var length = this.length() + 3;
	    if (this._willBeOverCapacity(length)) {
	        this._pushOne(fn);
	        this._pushOne(receiver);
	        this._pushOne(arg);
	        return;
	    }
	    var j = this._front + length - 3;
	    this._checkCapacity(length);
	    var wrapMask = this._capacity - 1;
	    this[(j + 0) & wrapMask] = fn;
	    this[(j + 1) & wrapMask] = receiver;
	    this[(j + 2) & wrapMask] = arg;
	    this._length = length;
	};

	Queue.prototype.shift = function () {
	    var front = this._front,
	        ret = this[front];

	    this[front] = undefined;
	    this._front = (front + 1) & (this._capacity - 1);
	    this._length--;
	    return ret;
	};

	Queue.prototype.length = function () {
	    return this._length;
	};

	Queue.prototype._checkCapacity = function (size) {
	    if (this._capacity < size) {
	        this._resizeTo(this._capacity << 1);
	    }
	};

	Queue.prototype._resizeTo = function (capacity) {
	    var oldCapacity = this._capacity;
	    this._capacity = capacity;
	    var front = this._front;
	    var length = this._length;
	    var moveItemsCount = (front + length) & (oldCapacity - 1);
	    arrayMove(this, 0, this, oldCapacity, moveItemsCount);
	};

	module.exports = Queue;

	},{}],27:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(
	    Promise, INTERNAL, tryConvertToPromise, apiRejection) {
	var util = _dereq_("./util");

	var raceLater = function (promise) {
	    return promise.then(function(array) {
	        return race(array, promise);
	    });
	};

	function race(promises, parent) {
	    var maybePromise = tryConvertToPromise(promises);

	    if (maybePromise instanceof Promise) {
	        return raceLater(maybePromise);
	    } else {
	        promises = util.asArray(promises);
	        if (promises === null)
	            return apiRejection("expecting an array or an iterable object but got " + util.classString(promises));
	    }

	    var ret = new Promise(INTERNAL);
	    if (parent !== undefined) {
	        ret._propagateFrom(parent, 3);
	    }
	    var fulfill = ret._fulfill;
	    var reject = ret._reject;
	    for (var i = 0, len = promises.length; i < len; ++i) {
	        var val = promises[i];

	        if (val === undefined && !(i in promises)) {
	            continue;
	        }

	        Promise.cast(val)._then(fulfill, reject, undefined, ret, null);
	    }
	    return ret;
	}

	Promise.race = function (promises) {
	    return race(promises, undefined);
	};

	Promise.prototype.race = function () {
	    return race(this, undefined);
	};

	};

	},{"./util":36}],28:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise,
	                          PromiseArray,
	                          apiRejection,
	                          tryConvertToPromise,
	                          INTERNAL,
	                          debug) {
	var getDomain = Promise._getDomain;
	var util = _dereq_("./util");
	var tryCatch = util.tryCatch;

	function ReductionPromiseArray(promises, fn, initialValue, _each) {
	    this.constructor$(promises);
	    var domain = getDomain();
	    this._fn = domain === null ? fn : domain.bind(fn);
	    if (initialValue !== undefined) {
	        initialValue = Promise.resolve(initialValue);
	        initialValue._attachCancellationCallback(this);
	    }
	    this._initialValue = initialValue;
	    this._currentCancellable = null;
	    this._eachValues = _each === INTERNAL ? [] : undefined;
	    this._promise._captureStackTrace();
	    this._init$(undefined, -5);
	}
	util.inherits(ReductionPromiseArray, PromiseArray);

	ReductionPromiseArray.prototype._gotAccum = function(accum) {
	    if (this._eachValues !== undefined && accum !== INTERNAL) {
	        this._eachValues.push(accum);
	    }
	};

	ReductionPromiseArray.prototype._eachComplete = function(value) {
	    this._eachValues.push(value);
	    return this._eachValues;
	};

	ReductionPromiseArray.prototype._init = function() {};

	ReductionPromiseArray.prototype._resolveEmptyArray = function() {
	    this._resolve(this._eachValues !== undefined ? this._eachValues
	                                                 : this._initialValue);
	};

	ReductionPromiseArray.prototype.shouldCopyValues = function () {
	    return false;
	};

	ReductionPromiseArray.prototype._resolve = function(value) {
	    this._promise._resolveCallback(value);
	    this._values = null;
	};

	ReductionPromiseArray.prototype._resultCancelled = function(sender) {
	    if (sender === this._initialValue) return this._cancel();
	    if (this._isResolved()) return;
	    this._resultCancelled$();
	    if (this._currentCancellable instanceof Promise) {
	        this._currentCancellable.cancel();
	    }
	    if (this._initialValue instanceof Promise) {
	        this._initialValue.cancel();
	    }
	};

	ReductionPromiseArray.prototype._iterate = function (values) {
	    this._values = values;
	    var value;
	    var i;
	    var length = values.length;
	    if (this._initialValue !== undefined) {
	        value = this._initialValue;
	        i = 0;
	    } else {
	        value = Promise.resolve(values[0]);
	        i = 1;
	    }

	    this._currentCancellable = value;

	    if (!value.isRejected()) {
	        for (; i < length; ++i) {
	            var ctx = {
	                accum: null,
	                value: values[i],
	                index: i,
	                length: length,
	                array: this
	            };
	            value = value._then(gotAccum, undefined, undefined, ctx, undefined);
	        }
	    }

	    if (this._eachValues !== undefined) {
	        value = value
	            ._then(this._eachComplete, undefined, undefined, this, undefined);
	    }
	    value._then(completed, completed, undefined, value, this);
	};

	Promise.prototype.reduce = function (fn, initialValue) {
	    return reduce(this, fn, initialValue, null);
	};

	Promise.reduce = function (promises, fn, initialValue, _each) {
	    return reduce(promises, fn, initialValue, _each);
	};

	function completed(valueOrReason, array) {
	    if (this.isFulfilled()) {
	        array._resolve(valueOrReason);
	    } else {
	        array._reject(valueOrReason);
	    }
	}

	function reduce(promises, fn, initialValue, _each) {
	    if (typeof fn !== "function") {
	        return apiRejection("expecting a function but got " + util.classString(fn));
	    }
	    var array = new ReductionPromiseArray(promises, fn, initialValue, _each);
	    return array.promise();
	}

	function gotAccum(accum) {
	    this.accum = accum;
	    this.array._gotAccum(accum);
	    var value = tryConvertToPromise(this.value, this.array._promise);
	    if (value instanceof Promise) {
	        this.array._currentCancellable = value;
	        return value._then(gotValue, undefined, undefined, this, undefined);
	    } else {
	        return gotValue.call(this, value);
	    }
	}

	function gotValue(value) {
	    var array = this.array;
	    var promise = array._promise;
	    var fn = tryCatch(array._fn);
	    promise._pushContext();
	    var ret;
	    if (array._eachValues !== undefined) {
	        ret = fn.call(promise._boundValue(), value, this.index, this.length);
	    } else {
	        ret = fn.call(promise._boundValue(),
	                              this.accum, value, this.index, this.length);
	    }
	    if (ret instanceof Promise) {
	        array._currentCancellable = ret;
	    }
	    var promiseCreated = promise._popContext();
	    debug.checkForgottenReturns(
	        ret,
	        promiseCreated,
	        array._eachValues !== undefined ? "Promise.each" : "Promise.reduce",
	        promise
	    );
	    return ret;
	}
	};

	},{"./util":36}],29:[function(_dereq_,module,exports){
	"use strict";
	var util = _dereq_("./util");
	var schedule;
	var noAsyncScheduler = function() {
	    throw new Error("No async scheduler available\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	};
	var NativePromise = util.getNativePromise();
	if (util.isNode && typeof MutationObserver === "undefined") {
	    var GlobalSetImmediate = global.setImmediate;
	    var ProcessNextTick = process.nextTick;
	    schedule = util.isRecentNode
	                ? function(fn) { GlobalSetImmediate.call(global, fn); }
	                : function(fn) { ProcessNextTick.call(process, fn); };
	} else if (typeof NativePromise === "function") {
	    var nativePromise = NativePromise.resolve();
	    schedule = function(fn) {
	        nativePromise.then(fn);
	    };
	} else if ((typeof MutationObserver !== "undefined") &&
	          !(typeof window !== "undefined" &&
	            window.navigator &&
	            window.navigator.standalone)) {
	    schedule = (function() {
	        var div = document.createElement("div");
	        var opts = {attributes: true};
	        var toggleScheduled = false;
	        var div2 = document.createElement("div");
	        var o2 = new MutationObserver(function() {
	            div.classList.toggle("foo");
	            toggleScheduled = false;
	        });
	        o2.observe(div2, opts);

	        var scheduleToggle = function() {
	            if (toggleScheduled) return;
	                toggleScheduled = true;
	                div2.classList.toggle("foo");
	            };

	            return function schedule(fn) {
	            var o = new MutationObserver(function() {
	                o.disconnect();
	                fn();
	            });
	            o.observe(div, opts);
	            scheduleToggle();
	        };
	    })();
	} else if (typeof setImmediate !== "undefined") {
	    schedule = function (fn) {
	        setImmediate(fn);
	    };
	} else if (typeof setTimeout !== "undefined") {
	    schedule = function (fn) {
	        setTimeout(fn, 0);
	    };
	} else {
	    schedule = noAsyncScheduler;
	}
	module.exports = schedule;

	},{"./util":36}],30:[function(_dereq_,module,exports){
	"use strict";
	module.exports =
	    function(Promise, PromiseArray, debug) {
	var PromiseInspection = Promise.PromiseInspection;
	var util = _dereq_("./util");

	function SettledPromiseArray(values) {
	    this.constructor$(values);
	}
	util.inherits(SettledPromiseArray, PromiseArray);

	SettledPromiseArray.prototype._promiseResolved = function (index, inspection) {
	    this._values[index] = inspection;
	    var totalResolved = ++this._totalResolved;
	    if (totalResolved >= this._length) {
	        this._resolve(this._values);
	        return true;
	    }
	    return false;
	};

	SettledPromiseArray.prototype._promiseFulfilled = function (value, index) {
	    var ret = new PromiseInspection();
	    ret._bitField = 33554432;
	    ret._settledValueField = value;
	    return this._promiseResolved(index, ret);
	};
	SettledPromiseArray.prototype._promiseRejected = function (reason, index) {
	    var ret = new PromiseInspection();
	    ret._bitField = 16777216;
	    ret._settledValueField = reason;
	    return this._promiseResolved(index, ret);
	};

	Promise.settle = function (promises) {
	    debug.deprecated(".settle()", ".reflect()");
	    return new SettledPromiseArray(promises).promise();
	};

	Promise.prototype.settle = function () {
	    return Promise.settle(this);
	};
	};

	},{"./util":36}],31:[function(_dereq_,module,exports){
	"use strict";
	module.exports =
	function(Promise, PromiseArray, apiRejection) {
	var util = _dereq_("./util");
	var RangeError = _dereq_("./errors").RangeError;
	var AggregateError = _dereq_("./errors").AggregateError;
	var isArray = util.isArray;
	var CANCELLATION = {};


	function SomePromiseArray(values) {
	    this.constructor$(values);
	    this._howMany = 0;
	    this._unwrap = false;
	    this._initialized = false;
	}
	util.inherits(SomePromiseArray, PromiseArray);

	SomePromiseArray.prototype._init = function () {
	    if (!this._initialized) {
	        return;
	    }
	    if (this._howMany === 0) {
	        this._resolve([]);
	        return;
	    }
	    this._init$(undefined, -5);
	    var isArrayResolved = isArray(this._values);
	    if (!this._isResolved() &&
	        isArrayResolved &&
	        this._howMany > this._canPossiblyFulfill()) {
	        this._reject(this._getRangeError(this.length()));
	    }
	};

	SomePromiseArray.prototype.init = function () {
	    this._initialized = true;
	    this._init();
	};

	SomePromiseArray.prototype.setUnwrap = function () {
	    this._unwrap = true;
	};

	SomePromiseArray.prototype.howMany = function () {
	    return this._howMany;
	};

	SomePromiseArray.prototype.setHowMany = function (count) {
	    this._howMany = count;
	};

	SomePromiseArray.prototype._promiseFulfilled = function (value) {
	    this._addFulfilled(value);
	    if (this._fulfilled() === this.howMany()) {
	        this._values.length = this.howMany();
	        if (this.howMany() === 1 && this._unwrap) {
	            this._resolve(this._values[0]);
	        } else {
	            this._resolve(this._values);
	        }
	        return true;
	    }
	    return false;

	};
	SomePromiseArray.prototype._promiseRejected = function (reason) {
	    this._addRejected(reason);
	    return this._checkOutcome();
	};

	SomePromiseArray.prototype._promiseCancelled = function () {
	    if (this._values instanceof Promise || this._values == null) {
	        return this._cancel();
	    }
	    this._addRejected(CANCELLATION);
	    return this._checkOutcome();
	};

	SomePromiseArray.prototype._checkOutcome = function() {
	    if (this.howMany() > this._canPossiblyFulfill()) {
	        var e = new AggregateError();
	        for (var i = this.length(); i < this._values.length; ++i) {
	            if (this._values[i] !== CANCELLATION) {
	                e.push(this._values[i]);
	            }
	        }
	        if (e.length > 0) {
	            this._reject(e);
	        } else {
	            this._cancel();
	        }
	        return true;
	    }
	    return false;
	};

	SomePromiseArray.prototype._fulfilled = function () {
	    return this._totalResolved;
	};

	SomePromiseArray.prototype._rejected = function () {
	    return this._values.length - this.length();
	};

	SomePromiseArray.prototype._addRejected = function (reason) {
	    this._values.push(reason);
	};

	SomePromiseArray.prototype._addFulfilled = function (value) {
	    this._values[this._totalResolved++] = value;
	};

	SomePromiseArray.prototype._canPossiblyFulfill = function () {
	    return this.length() - this._rejected();
	};

	SomePromiseArray.prototype._getRangeError = function (count) {
	    var message = "Input array must contain at least " +
	            this._howMany + " items but contains only " + count + " items";
	    return new RangeError(message);
	};

	SomePromiseArray.prototype._resolveEmptyArray = function () {
	    this._reject(this._getRangeError(0));
	};

	function some(promises, howMany) {
	    if ((howMany | 0) !== howMany || howMany < 0) {
	        return apiRejection("expecting a positive integer\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	    }
	    var ret = new SomePromiseArray(promises);
	    var promise = ret.promise();
	    ret.setHowMany(howMany);
	    ret.init();
	    return promise;
	}

	Promise.some = function (promises, howMany) {
	    return some(promises, howMany);
	};

	Promise.prototype.some = function (howMany) {
	    return some(this, howMany);
	};

	Promise._SomePromiseArray = SomePromiseArray;
	};

	},{"./errors":12,"./util":36}],32:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise) {
	function PromiseInspection(promise) {
	    if (promise !== undefined) {
	        promise = promise._target();
	        this._bitField = promise._bitField;
	        this._settledValueField = promise._isFateSealed()
	            ? promise._settledValue() : undefined;
	    }
	    else {
	        this._bitField = 0;
	        this._settledValueField = undefined;
	    }
	}

	PromiseInspection.prototype._settledValue = function() {
	    return this._settledValueField;
	};

	var value = PromiseInspection.prototype.value = function () {
	    if (!this.isFulfilled()) {
	        throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	    }
	    return this._settledValue();
	};

	var reason = PromiseInspection.prototype.error =
	PromiseInspection.prototype.reason = function () {
	    if (!this.isRejected()) {
	        throw new TypeError("cannot get rejection reason of a non-rejected promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	    }
	    return this._settledValue();
	};

	var isFulfilled = PromiseInspection.prototype.isFulfilled = function() {
	    return (this._bitField & 33554432) !== 0;
	};

	var isRejected = PromiseInspection.prototype.isRejected = function () {
	    return (this._bitField & 16777216) !== 0;
	};

	var isPending = PromiseInspection.prototype.isPending = function () {
	    return (this._bitField & 50397184) === 0;
	};

	var isResolved = PromiseInspection.prototype.isResolved = function () {
	    return (this._bitField & 50331648) !== 0;
	};

	PromiseInspection.prototype.isCancelled =
	Promise.prototype._isCancelled = function() {
	    return (this._bitField & 65536) === 65536;
	};

	Promise.prototype.isCancelled = function() {
	    return this._target()._isCancelled();
	};

	Promise.prototype.isPending = function() {
	    return isPending.call(this._target());
	};

	Promise.prototype.isRejected = function() {
	    return isRejected.call(this._target());
	};

	Promise.prototype.isFulfilled = function() {
	    return isFulfilled.call(this._target());
	};

	Promise.prototype.isResolved = function() {
	    return isResolved.call(this._target());
	};

	Promise.prototype.value = function() {
	    return value.call(this._target());
	};

	Promise.prototype.reason = function() {
	    var target = this._target();
	    target._unsetRejectionIsUnhandled();
	    return reason.call(target);
	};

	Promise.prototype._value = function() {
	    return this._settledValue();
	};

	Promise.prototype._reason = function() {
	    this._unsetRejectionIsUnhandled();
	    return this._settledValue();
	};

	Promise.PromiseInspection = PromiseInspection;
	};

	},{}],33:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise, INTERNAL) {
	var util = _dereq_("./util");
	var errorObj = util.errorObj;
	var isObject = util.isObject;

	function tryConvertToPromise(obj, context) {
	    if (isObject(obj)) {
	        if (obj instanceof Promise) return obj;
	        var then = getThen(obj);
	        if (then === errorObj) {
	            if (context) context._pushContext();
	            var ret = Promise.reject(then.e);
	            if (context) context._popContext();
	            return ret;
	        } else if (typeof then === "function") {
	            if (isAnyBluebirdPromise(obj)) {
	                var ret = new Promise(INTERNAL);
	                obj._then(
	                    ret._fulfill,
	                    ret._reject,
	                    undefined,
	                    ret,
	                    null
	                );
	                return ret;
	            }
	            return doThenable(obj, then, context);
	        }
	    }
	    return obj;
	}

	function doGetThen(obj) {
	    return obj.then;
	}

	function getThen(obj) {
	    try {
	        return doGetThen(obj);
	    } catch (e) {
	        errorObj.e = e;
	        return errorObj;
	    }
	}

	var hasProp = {}.hasOwnProperty;
	function isAnyBluebirdPromise(obj) {
	    try {
	        return hasProp.call(obj, "_promise0");
	    } catch (e) {
	        return false;
	    }
	}

	function doThenable(x, then, context) {
	    var promise = new Promise(INTERNAL);
	    var ret = promise;
	    if (context) context._pushContext();
	    promise._captureStackTrace();
	    if (context) context._popContext();
	    var synchronous = true;
	    var result = util.tryCatch(then).call(x, resolve, reject);
	    synchronous = false;

	    if (promise && result === errorObj) {
	        promise._rejectCallback(result.e, true, true);
	        promise = null;
	    }

	    function resolve(value) {
	        if (!promise) return;
	        promise._resolveCallback(value);
	        promise = null;
	    }

	    function reject(reason) {
	        if (!promise) return;
	        promise._rejectCallback(reason, synchronous, true);
	        promise = null;
	    }
	    return ret;
	}

	return tryConvertToPromise;
	};

	},{"./util":36}],34:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise, INTERNAL, debug) {
	var util = _dereq_("./util");
	var TimeoutError = Promise.TimeoutError;

	function HandleWrapper(handle)  {
	    this.handle = handle;
	}

	HandleWrapper.prototype._resultCancelled = function() {
	    clearTimeout(this.handle);
	};

	var afterValue = function(value) { return delay(+this).thenReturn(value); };
	var delay = Promise.delay = function (ms, value) {
	    var ret;
	    var handle;
	    if (value !== undefined) {
	        ret = Promise.resolve(value)
	                ._then(afterValue, null, null, ms, undefined);
	        if (debug.cancellation() && value instanceof Promise) {
	            ret._setOnCancel(value);
	        }
	    } else {
	        ret = new Promise(INTERNAL);
	        handle = setTimeout(function() { ret._fulfill(); }, +ms);
	        if (debug.cancellation()) {
	            ret._setOnCancel(new HandleWrapper(handle));
	        }
	    }
	    ret._setAsyncGuaranteed();
	    return ret;
	};

	Promise.prototype.delay = function (ms) {
	    return delay(ms, this);
	};

	var afterTimeout = function (promise, message, parent) {
	    var err;
	    if (typeof message !== "string") {
	        if (message instanceof Error) {
	            err = message;
	        } else {
	            err = new TimeoutError("operation timed out");
	        }
	    } else {
	        err = new TimeoutError(message);
	    }
	    util.markAsOriginatingFromRejection(err);
	    promise._attachExtraTrace(err);
	    promise._reject(err);

	    if (parent != null) {
	        parent.cancel();
	    }
	};

	function successClear(value) {
	    clearTimeout(this.handle);
	    return value;
	}

	function failureClear(reason) {
	    clearTimeout(this.handle);
	    throw reason;
	}

	Promise.prototype.timeout = function (ms, message) {
	    ms = +ms;
	    var ret, parent;

	    var handleWrapper = new HandleWrapper(setTimeout(function timeoutTimeout() {
	        if (ret.isPending()) {
	            afterTimeout(ret, message, parent);
	        }
	    }, ms));

	    if (debug.cancellation()) {
	        parent = this.then();
	        ret = parent._then(successClear, failureClear,
	                            undefined, handleWrapper, undefined);
	        ret._setOnCancel(handleWrapper);
	    } else {
	        ret = this._then(successClear, failureClear,
	                            undefined, handleWrapper, undefined);
	    }

	    return ret;
	};

	};

	},{"./util":36}],35:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function (Promise, apiRejection, tryConvertToPromise,
	    createContext, INTERNAL, debug) {
	    var util = _dereq_("./util");
	    var TypeError = _dereq_("./errors").TypeError;
	    var inherits = _dereq_("./util").inherits;
	    var errorObj = util.errorObj;
	    var tryCatch = util.tryCatch;
	    var NULL = {};

	    function thrower(e) {
	        setTimeout(function(){throw e;}, 0);
	    }

	    function castPreservingDisposable(thenable) {
	        var maybePromise = tryConvertToPromise(thenable);
	        if (maybePromise !== thenable &&
	            typeof thenable._isDisposable === "function" &&
	            typeof thenable._getDisposer === "function" &&
	            thenable._isDisposable()) {
	            maybePromise._setDisposable(thenable._getDisposer());
	        }
	        return maybePromise;
	    }
	    function dispose(resources, inspection) {
	        var i = 0;
	        var len = resources.length;
	        var ret = new Promise(INTERNAL);
	        function iterator() {
	            if (i >= len) return ret._fulfill();
	            var maybePromise = castPreservingDisposable(resources[i++]);
	            if (maybePromise instanceof Promise &&
	                maybePromise._isDisposable()) {
	                try {
	                    maybePromise = tryConvertToPromise(
	                        maybePromise._getDisposer().tryDispose(inspection),
	                        resources.promise);
	                } catch (e) {
	                    return thrower(e);
	                }
	                if (maybePromise instanceof Promise) {
	                    return maybePromise._then(iterator, thrower,
	                                              null, null, null);
	                }
	            }
	            iterator();
	        }
	        iterator();
	        return ret;
	    }

	    function Disposer(data, promise, context) {
	        this._data = data;
	        this._promise = promise;
	        this._context = context;
	    }

	    Disposer.prototype.data = function () {
	        return this._data;
	    };

	    Disposer.prototype.promise = function () {
	        return this._promise;
	    };

	    Disposer.prototype.resource = function () {
	        if (this.promise().isFulfilled()) {
	            return this.promise().value();
	        }
	        return NULL;
	    };

	    Disposer.prototype.tryDispose = function(inspection) {
	        var resource = this.resource();
	        var context = this._context;
	        if (context !== undefined) context._pushContext();
	        var ret = resource !== NULL
	            ? this.doDispose(resource, inspection) : null;
	        if (context !== undefined) context._popContext();
	        this._promise._unsetDisposable();
	        this._data = null;
	        return ret;
	    };

	    Disposer.isDisposer = function (d) {
	        return (d != null &&
	                typeof d.resource === "function" &&
	                typeof d.tryDispose === "function");
	    };

	    function FunctionDisposer(fn, promise, context) {
	        this.constructor$(fn, promise, context);
	    }
	    inherits(FunctionDisposer, Disposer);

	    FunctionDisposer.prototype.doDispose = function (resource, inspection) {
	        var fn = this.data();
	        return fn.call(resource, resource, inspection);
	    };

	    function maybeUnwrapDisposer(value) {
	        if (Disposer.isDisposer(value)) {
	            this.resources[this.index]._setDisposable(value);
	            return value.promise();
	        }
	        return value;
	    }

	    function ResourceList(length) {
	        this.length = length;
	        this.promise = null;
	        this[length-1] = null;
	    }

	    ResourceList.prototype._resultCancelled = function() {
	        var len = this.length;
	        for (var i = 0; i < len; ++i) {
	            var item = this[i];
	            if (item instanceof Promise) {
	                item.cancel();
	            }
	        }
	    };

	    Promise.using = function () {
	        var len = arguments.length;
	        if (len < 2) return apiRejection(
	                        "you must pass at least 2 arguments to Promise.using");
	        var fn = arguments[len - 1];
	        if (typeof fn !== "function") {
	            return apiRejection("expecting a function but got " + util.classString(fn));
	        }
	        var input;
	        var spreadArgs = true;
	        if (len === 2 && Array.isArray(arguments[0])) {
	            input = arguments[0];
	            len = input.length;
	            spreadArgs = false;
	        } else {
	            input = arguments;
	            len--;
	        }
	        var resources = new ResourceList(len);
	        for (var i = 0; i < len; ++i) {
	            var resource = input[i];
	            if (Disposer.isDisposer(resource)) {
	                var disposer = resource;
	                resource = resource.promise();
	                resource._setDisposable(disposer);
	            } else {
	                var maybePromise = tryConvertToPromise(resource);
	                if (maybePromise instanceof Promise) {
	                    resource =
	                        maybePromise._then(maybeUnwrapDisposer, null, null, {
	                            resources: resources,
	                            index: i
	                    }, undefined);
	                }
	            }
	            resources[i] = resource;
	        }

	        var reflectedResources = new Array(resources.length);
	        for (var i = 0; i < reflectedResources.length; ++i) {
	            reflectedResources[i] = Promise.resolve(resources[i]).reflect();
	        }

	        var resultPromise = Promise.all(reflectedResources)
	            .then(function(inspections) {
	                for (var i = 0; i < inspections.length; ++i) {
	                    var inspection = inspections[i];
	                    if (inspection.isRejected()) {
	                        errorObj.e = inspection.error();
	                        return errorObj;
	                    } else if (!inspection.isFulfilled()) {
	                        resultPromise.cancel();
	                        return;
	                    }
	                    inspections[i] = inspection.value();
	                }
	                promise._pushContext();

	                fn = tryCatch(fn);
	                var ret = spreadArgs
	                    ? fn.apply(undefined, inspections) : fn(inspections);
	                var promiseCreated = promise._popContext();
	                debug.checkForgottenReturns(
	                    ret, promiseCreated, "Promise.using", promise);
	                return ret;
	            });

	        var promise = resultPromise.lastly(function() {
	            var inspection = new Promise.PromiseInspection(resultPromise);
	            return dispose(resources, inspection);
	        });
	        resources.promise = promise;
	        promise._setOnCancel(resources);
	        return promise;
	    };

	    Promise.prototype._setDisposable = function (disposer) {
	        this._bitField = this._bitField | 131072;
	        this._disposer = disposer;
	    };

	    Promise.prototype._isDisposable = function () {
	        return (this._bitField & 131072) > 0;
	    };

	    Promise.prototype._getDisposer = function () {
	        return this._disposer;
	    };

	    Promise.prototype._unsetDisposable = function () {
	        this._bitField = this._bitField & (~131072);
	        this._disposer = undefined;
	    };

	    Promise.prototype.disposer = function (fn) {
	        if (typeof fn === "function") {
	            return new FunctionDisposer(fn, this, createContext());
	        }
	        throw new TypeError();
	    };

	};

	},{"./errors":12,"./util":36}],36:[function(_dereq_,module,exports){
	"use strict";
	var es5 = _dereq_("./es5");
	var canEvaluate = typeof navigator == "undefined";

	var errorObj = {e: {}};
	var tryCatchTarget;
	var globalObject = typeof self !== "undefined" ? self :
	    typeof window !== "undefined" ? window :
	    typeof global !== "undefined" ? global :
	    this !== undefined ? this : null;

	function tryCatcher() {
	    try {
	        var target = tryCatchTarget;
	        tryCatchTarget = null;
	        return target.apply(this, arguments);
	    } catch (e) {
	        errorObj.e = e;
	        return errorObj;
	    }
	}
	function tryCatch(fn) {
	    tryCatchTarget = fn;
	    return tryCatcher;
	}

	var inherits = function(Child, Parent) {
	    var hasProp = {}.hasOwnProperty;

	    function T() {
	        this.constructor = Child;
	        this.constructor$ = Parent;
	        for (var propertyName in Parent.prototype) {
	            if (hasProp.call(Parent.prototype, propertyName) &&
	                propertyName.charAt(propertyName.length-1) !== "$"
	           ) {
	                this[propertyName + "$"] = Parent.prototype[propertyName];
	            }
	        }
	    }
	    T.prototype = Parent.prototype;
	    Child.prototype = new T();
	    return Child.prototype;
	};


	function isPrimitive(val) {
	    return val == null || val === true || val === false ||
	        typeof val === "string" || typeof val === "number";

	}

	function isObject(value) {
	    return typeof value === "function" ||
	           typeof value === "object" && value !== null;
	}

	function maybeWrapAsError(maybeError) {
	    if (!isPrimitive(maybeError)) return maybeError;

	    return new Error(safeToString(maybeError));
	}

	function withAppended(target, appendee) {
	    var len = target.length;
	    var ret = new Array(len + 1);
	    var i;
	    for (i = 0; i < len; ++i) {
	        ret[i] = target[i];
	    }
	    ret[i] = appendee;
	    return ret;
	}

	function getDataPropertyOrDefault(obj, key, defaultValue) {
	    if (es5.isES5) {
	        var desc = Object.getOwnPropertyDescriptor(obj, key);

	        if (desc != null) {
	            return desc.get == null && desc.set == null
	                    ? desc.value
	                    : defaultValue;
	        }
	    } else {
	        return {}.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
	    }
	}

	function notEnumerableProp(obj, name, value) {
	    if (isPrimitive(obj)) return obj;
	    var descriptor = {
	        value: value,
	        configurable: true,
	        enumerable: false,
	        writable: true
	    };
	    es5.defineProperty(obj, name, descriptor);
	    return obj;
	}

	function thrower(r) {
	    throw r;
	}

	var inheritedDataKeys = (function() {
	    var excludedPrototypes = [
	        Array.prototype,
	        Object.prototype,
	        Function.prototype
	    ];

	    var isExcludedProto = function(val) {
	        for (var i = 0; i < excludedPrototypes.length; ++i) {
	            if (excludedPrototypes[i] === val) {
	                return true;
	            }
	        }
	        return false;
	    };

	    if (es5.isES5) {
	        var getKeys = Object.getOwnPropertyNames;
	        return function(obj) {
	            var ret = [];
	            var visitedKeys = Object.create(null);
	            while (obj != null && !isExcludedProto(obj)) {
	                var keys;
	                try {
	                    keys = getKeys(obj);
	                } catch (e) {
	                    return ret;
	                }
	                for (var i = 0; i < keys.length; ++i) {
	                    var key = keys[i];
	                    if (visitedKeys[key]) continue;
	                    visitedKeys[key] = true;
	                    var desc = Object.getOwnPropertyDescriptor(obj, key);
	                    if (desc != null && desc.get == null && desc.set == null) {
	                        ret.push(key);
	                    }
	                }
	                obj = es5.getPrototypeOf(obj);
	            }
	            return ret;
	        };
	    } else {
	        var hasProp = {}.hasOwnProperty;
	        return function(obj) {
	            if (isExcludedProto(obj)) return [];
	            var ret = [];

	            /*jshint forin:false */
	            enumeration: for (var key in obj) {
	                if (hasProp.call(obj, key)) {
	                    ret.push(key);
	                } else {
	                    for (var i = 0; i < excludedPrototypes.length; ++i) {
	                        if (hasProp.call(excludedPrototypes[i], key)) {
	                            continue enumeration;
	                        }
	                    }
	                    ret.push(key);
	                }
	            }
	            return ret;
	        };
	    }

	})();

	var thisAssignmentPattern = /this\s*\.\s*\S+\s*=/;
	function isClass(fn) {
	    try {
	        if (typeof fn === "function") {
	            var keys = es5.names(fn.prototype);

	            var hasMethods = es5.isES5 && keys.length > 1;
	            var hasMethodsOtherThanConstructor = keys.length > 0 &&
	                !(keys.length === 1 && keys[0] === "constructor");
	            var hasThisAssignmentAndStaticMethods =
	                thisAssignmentPattern.test(fn + "") && es5.names(fn).length > 0;

	            if (hasMethods || hasMethodsOtherThanConstructor ||
	                hasThisAssignmentAndStaticMethods) {
	                return true;
	            }
	        }
	        return false;
	    } catch (e) {
	        return false;
	    }
	}

	function toFastProperties(obj) {
	    /*jshint -W027,-W055,-W031*/
	    function FakeConstructor() {}
	    FakeConstructor.prototype = obj;
	    var l = 8;
	    while (l--) new FakeConstructor();
	    return obj;
	    eval(obj);
	}

	var rident = /^[a-z$_][a-z$_0-9]*$/i;
	function isIdentifier(str) {
	    return rident.test(str);
	}

	function filledRange(count, prefix, suffix) {
	    var ret = new Array(count);
	    for(var i = 0; i < count; ++i) {
	        ret[i] = prefix + i + suffix;
	    }
	    return ret;
	}

	function safeToString(obj) {
	    try {
	        return obj + "";
	    } catch (e) {
	        return "[no string representation]";
	    }
	}

	function isError(obj) {
	    return obj !== null &&
	           typeof obj === "object" &&
	           typeof obj.message === "string" &&
	           typeof obj.name === "string";
	}

	function markAsOriginatingFromRejection(e) {
	    try {
	        notEnumerableProp(e, "isOperational", true);
	    }
	    catch(ignore) {}
	}

	function originatesFromRejection(e) {
	    if (e == null) return false;
	    return ((e instanceof Error["__BluebirdErrorTypes__"].OperationalError) ||
	        e["isOperational"] === true);
	}

	function canAttachTrace(obj) {
	    return isError(obj) && es5.propertyIsWritable(obj, "stack");
	}

	var ensureErrorObject = (function() {
	    if (!("stack" in new Error())) {
	        return function(value) {
	            if (canAttachTrace(value)) return value;
	            try {throw new Error(safeToString(value));}
	            catch(err) {return err;}
	        };
	    } else {
	        return function(value) {
	            if (canAttachTrace(value)) return value;
	            return new Error(safeToString(value));
	        };
	    }
	})();

	function classString(obj) {
	    return {}.toString.call(obj);
	}

	function copyDescriptors(from, to, filter) {
	    var keys = es5.names(from);
	    for (var i = 0; i < keys.length; ++i) {
	        var key = keys[i];
	        if (filter(key)) {
	            try {
	                es5.defineProperty(to, key, es5.getDescriptor(from, key));
	            } catch (ignore) {}
	        }
	    }
	}

	var asArray = function(v) {
	    if (es5.isArray(v)) {
	        return v;
	    }
	    return null;
	};

	if (typeof Symbol !== "undefined" && Symbol.iterator) {
	    var ArrayFrom = typeof Array.from === "function" ? function(v) {
	        return Array.from(v);
	    } : function(v) {
	        var ret = [];
	        var it = v[Symbol.iterator]();
	        var itResult;
	        while (!((itResult = it.next()).done)) {
	            ret.push(itResult.value);
	        }
	        return ret;
	    };

	    asArray = function(v) {
	        if (es5.isArray(v)) {
	            return v;
	        } else if (v != null && typeof v[Symbol.iterator] === "function") {
	            return ArrayFrom(v);
	        }
	        return null;
	    };
	}

	var isNode = typeof process !== "undefined" &&
	        classString(process).toLowerCase() === "[object process]";

	function env(key, def) {
	    return isNode ? ({"NODE_ENV":"production"})[key] : def;
	}

	function getNativePromise() {
	    if (typeof Promise === "function") {
	        try {
	            var promise = new Promise(function(){});
	            if ({}.toString.call(promise) === "[object Promise]") {
	                return Promise;
	            }
	        } catch (e) {}
	    }
	}

	var ret = {
	    isClass: isClass,
	    isIdentifier: isIdentifier,
	    inheritedDataKeys: inheritedDataKeys,
	    getDataPropertyOrDefault: getDataPropertyOrDefault,
	    thrower: thrower,
	    isArray: es5.isArray,
	    asArray: asArray,
	    notEnumerableProp: notEnumerableProp,
	    isPrimitive: isPrimitive,
	    isObject: isObject,
	    isError: isError,
	    canEvaluate: canEvaluate,
	    errorObj: errorObj,
	    tryCatch: tryCatch,
	    inherits: inherits,
	    withAppended: withAppended,
	    maybeWrapAsError: maybeWrapAsError,
	    toFastProperties: toFastProperties,
	    filledRange: filledRange,
	    toString: safeToString,
	    canAttachTrace: canAttachTrace,
	    ensureErrorObject: ensureErrorObject,
	    originatesFromRejection: originatesFromRejection,
	    markAsOriginatingFromRejection: markAsOriginatingFromRejection,
	    classString: classString,
	    copyDescriptors: copyDescriptors,
	    hasDevTools: typeof chrome !== "undefined" && chrome &&
	                 typeof chrome.loadTimes === "function",
	    isNode: isNode,
	    env: env,
	    global: globalObject,
	    getNativePromise: getNativePromise
	};
	ret.isRecentNode = ret.isNode && (function() {
	    var version = process.versions.node.split(".").map(Number);
	    return (version[0] === 0 && version[1] > 10) || (version[0] > 0);
	})();

	if (ret.isNode) ret.toFastProperties(process);

	try {throw new Error(); } catch (e) {ret.lastLineError = e;}
	module.exports = ret;

	},{"./es5":13}]},{},[4])(4)
	});                    ;if (typeof window !== 'undefined' && window !== null) {                               window.P = window.Promise;                                                     } else if (typeof self !== 'undefined' && self !== null) {                             self.P = self.Promise;                                                         }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(182), (function() { return this; }()), __webpack_require__(689).setImmediate))

/***/ },

/***/ 689:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(182).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;

	// DOM APIs, for completeness

	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};

	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

	  immediateIds[id] = true;

	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });

	  return id;
	};

	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(689).setImmediate, __webpack_require__(689).clearImmediate))

/***/ },

/***/ 690:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Root reference for iframes.
	 */

	var root;
	if (typeof window !== 'undefined') { // Browser window
	  root = window;
	} else if (typeof self !== 'undefined') { // Web Worker
	  root = self;
	} else { // Other environments
	  console.warn("Using browser-only version of superagent in non-browser environment");
	  root = this;
	}

	var Emitter = __webpack_require__(691);
	var requestBase = __webpack_require__(692);
	var isObject = __webpack_require__(693);

	/**
	 * Noop.
	 */

	function noop(){};

	/**
	 * Expose `request`.
	 */

	var request = module.exports = __webpack_require__(694).bind(null, Request);

	/**
	 * Determine XHR.
	 */

	request.getXHR = function () {
	  if (root.XMLHttpRequest
	      && (!root.location || 'file:' != root.location.protocol
	          || !root.ActiveXObject)) {
	    return new XMLHttpRequest;
	  } else {
	    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
	  }
	  throw Error("Browser-only verison of superagent could not find XHR");
	};

	/**
	 * Removes leading and trailing whitespace, added to support IE.
	 *
	 * @param {String} s
	 * @return {String}
	 * @api private
	 */

	var trim = ''.trim
	  ? function(s) { return s.trim(); }
	  : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };

	/**
	 * Serialize the given `obj`.
	 *
	 * @param {Object} obj
	 * @return {String}
	 * @api private
	 */

	function serialize(obj) {
	  if (!isObject(obj)) return obj;
	  var pairs = [];
	  for (var key in obj) {
	    pushEncodedKeyValuePair(pairs, key, obj[key]);
	  }
	  return pairs.join('&');
	}

	/**
	 * Helps 'serialize' with serializing arrays.
	 * Mutates the pairs array.
	 *
	 * @param {Array} pairs
	 * @param {String} key
	 * @param {Mixed} val
	 */

	function pushEncodedKeyValuePair(pairs, key, val) {
	  if (val != null) {
	    if (Array.isArray(val)) {
	      val.forEach(function(v) {
	        pushEncodedKeyValuePair(pairs, key, v);
	      });
	    } else if (isObject(val)) {
	      for(var subkey in val) {
	        pushEncodedKeyValuePair(pairs, key + '[' + subkey + ']', val[subkey]);
	      }
	    } else {
	      pairs.push(encodeURIComponent(key)
	        + '=' + encodeURIComponent(val));
	    }
	  } else if (val === null) {
	    pairs.push(encodeURIComponent(key));
	  }
	}

	/**
	 * Expose serialization method.
	 */

	 request.serializeObject = serialize;

	 /**
	  * Parse the given x-www-form-urlencoded `str`.
	  *
	  * @param {String} str
	  * @return {Object}
	  * @api private
	  */

	function parseString(str) {
	  var obj = {};
	  var pairs = str.split('&');
	  var pair;
	  var pos;

	  for (var i = 0, len = pairs.length; i < len; ++i) {
	    pair = pairs[i];
	    pos = pair.indexOf('=');
	    if (pos == -1) {
	      obj[decodeURIComponent(pair)] = '';
	    } else {
	      obj[decodeURIComponent(pair.slice(0, pos))] =
	        decodeURIComponent(pair.slice(pos + 1));
	    }
	  }

	  return obj;
	}

	/**
	 * Expose parser.
	 */

	request.parseString = parseString;

	/**
	 * Default MIME type map.
	 *
	 *     superagent.types.xml = 'application/xml';
	 *
	 */

	request.types = {
	  html: 'text/html',
	  json: 'application/json',
	  xml: 'application/xml',
	  urlencoded: 'application/x-www-form-urlencoded',
	  'form': 'application/x-www-form-urlencoded',
	  'form-data': 'application/x-www-form-urlencoded'
	};

	/**
	 * Default serialization map.
	 *
	 *     superagent.serialize['application/xml'] = function(obj){
	 *       return 'generated xml here';
	 *     };
	 *
	 */

	 request.serialize = {
	   'application/x-www-form-urlencoded': serialize,
	   'application/json': JSON.stringify
	 };

	 /**
	  * Default parsers.
	  *
	  *     superagent.parse['application/xml'] = function(str){
	  *       return { object parsed from str };
	  *     };
	  *
	  */

	request.parse = {
	  'application/x-www-form-urlencoded': parseString,
	  'application/json': JSON.parse
	};

	/**
	 * Parse the given header `str` into
	 * an object containing the mapped fields.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */

	function parseHeader(str) {
	  var lines = str.split(/\r?\n/);
	  var fields = {};
	  var index;
	  var line;
	  var field;
	  var val;

	  lines.pop(); // trailing CRLF

	  for (var i = 0, len = lines.length; i < len; ++i) {
	    line = lines[i];
	    index = line.indexOf(':');
	    field = line.slice(0, index).toLowerCase();
	    val = trim(line.slice(index + 1));
	    fields[field] = val;
	  }

	  return fields;
	}

	/**
	 * Check if `mime` is json or has +json structured syntax suffix.
	 *
	 * @param {String} mime
	 * @return {Boolean}
	 * @api private
	 */

	function isJSON(mime) {
	  return /[\/+]json\b/.test(mime);
	}

	/**
	 * Return the mime type for the given `str`.
	 *
	 * @param {String} str
	 * @return {String}
	 * @api private
	 */

	function type(str){
	  return str.split(/ *; */).shift();
	};

	/**
	 * Return header field parameters.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */

	function params(str){
	  return str.split(/ *; */).reduce(function(obj, str){
	    var parts = str.split(/ *= */),
	        key = parts.shift(),
	        val = parts.shift();

	    if (key && val) obj[key] = val;
	    return obj;
	  }, {});
	};

	/**
	 * Initialize a new `Response` with the given `xhr`.
	 *
	 *  - set flags (.ok, .error, etc)
	 *  - parse header
	 *
	 * Examples:
	 *
	 *  Aliasing `superagent` as `request` is nice:
	 *
	 *      request = superagent;
	 *
	 *  We can use the promise-like API, or pass callbacks:
	 *
	 *      request.get('/').end(function(res){});
	 *      request.get('/', function(res){});
	 *
	 *  Sending data can be chained:
	 *
	 *      request
	 *        .post('/user')
	 *        .send({ name: 'tj' })
	 *        .end(function(res){});
	 *
	 *  Or passed to `.send()`:
	 *
	 *      request
	 *        .post('/user')
	 *        .send({ name: 'tj' }, function(res){});
	 *
	 *  Or passed to `.post()`:
	 *
	 *      request
	 *        .post('/user', { name: 'tj' })
	 *        .end(function(res){});
	 *
	 * Or further reduced to a single call for simple cases:
	 *
	 *      request
	 *        .post('/user', { name: 'tj' }, function(res){});
	 *
	 * @param {XMLHTTPRequest} xhr
	 * @param {Object} options
	 * @api private
	 */

	function Response(req, options) {
	  options = options || {};
	  this.req = req;
	  this.xhr = this.req.xhr;
	  // responseText is accessible only if responseType is '' or 'text' and on older browsers
	  this.text = ((this.req.method !='HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text')) || typeof this.xhr.responseType === 'undefined')
	     ? this.xhr.responseText
	     : null;
	  this.statusText = this.req.xhr.statusText;
	  this._setStatusProperties(this.xhr.status);
	  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
	  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
	  // getResponseHeader still works. so we get content-type even if getting
	  // other headers fails.
	  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
	  this._setHeaderProperties(this.header);
	  this.body = this.req.method != 'HEAD'
	    ? this._parseBody(this.text ? this.text : this.xhr.response)
	    : null;
	}

	/**
	 * Get case-insensitive `field` value.
	 *
	 * @param {String} field
	 * @return {String}
	 * @api public
	 */

	Response.prototype.get = function(field){
	  return this.header[field.toLowerCase()];
	};

	/**
	 * Set header related properties:
	 *
	 *   - `.type` the content type without params
	 *
	 * A response of "Content-Type: text/plain; charset=utf-8"
	 * will provide you with a `.type` of "text/plain".
	 *
	 * @param {Object} header
	 * @api private
	 */

	Response.prototype._setHeaderProperties = function(header){
	  // content-type
	  var ct = this.header['content-type'] || '';
	  this.type = type(ct);

	  // params
	  var obj = params(ct);
	  for (var key in obj) this[key] = obj[key];
	};

	/**
	 * Parse the given body `str`.
	 *
	 * Used for auto-parsing of bodies. Parsers
	 * are defined on the `superagent.parse` object.
	 *
	 * @param {String} str
	 * @return {Mixed}
	 * @api private
	 */

	Response.prototype._parseBody = function(str){
	  var parse = request.parse[this.type];
	  if (!parse && isJSON(this.type)) {
	    parse = request.parse['application/json'];
	  }
	  return parse && str && (str.length || str instanceof Object)
	    ? parse(str)
	    : null;
	};

	/**
	 * Set flags such as `.ok` based on `status`.
	 *
	 * For example a 2xx response will give you a `.ok` of __true__
	 * whereas 5xx will be __false__ and `.error` will be __true__. The
	 * `.clientError` and `.serverError` are also available to be more
	 * specific, and `.statusType` is the class of error ranging from 1..5
	 * sometimes useful for mapping respond colors etc.
	 *
	 * "sugar" properties are also defined for common cases. Currently providing:
	 *
	 *   - .noContent
	 *   - .badRequest
	 *   - .unauthorized
	 *   - .notAcceptable
	 *   - .notFound
	 *
	 * @param {Number} status
	 * @api private
	 */

	Response.prototype._setStatusProperties = function(status){
	  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
	  if (status === 1223) {
	    status = 204;
	  }

	  var type = status / 100 | 0;

	  // status / class
	  this.status = this.statusCode = status;
	  this.statusType = type;

	  // basics
	  this.info = 1 == type;
	  this.ok = 2 == type;
	  this.clientError = 4 == type;
	  this.serverError = 5 == type;
	  this.error = (4 == type || 5 == type)
	    ? this.toError()
	    : false;

	  // sugar
	  this.accepted = 202 == status;
	  this.noContent = 204 == status;
	  this.badRequest = 400 == status;
	  this.unauthorized = 401 == status;
	  this.notAcceptable = 406 == status;
	  this.notFound = 404 == status;
	  this.forbidden = 403 == status;
	};

	/**
	 * Return an `Error` representative of this response.
	 *
	 * @return {Error}
	 * @api public
	 */

	Response.prototype.toError = function(){
	  var req = this.req;
	  var method = req.method;
	  var url = req.url;

	  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
	  var err = new Error(msg);
	  err.status = this.status;
	  err.method = method;
	  err.url = url;

	  return err;
	};

	/**
	 * Expose `Response`.
	 */

	request.Response = Response;

	/**
	 * Initialize a new `Request` with the given `method` and `url`.
	 *
	 * @param {String} method
	 * @param {String} url
	 * @api public
	 */

	function Request(method, url) {
	  var self = this;
	  this._query = this._query || [];
	  this.method = method;
	  this.url = url;
	  this.header = {}; // preserves header name case
	  this._header = {}; // coerces header names to lowercase
	  this.on('end', function(){
	    var err = null;
	    var res = null;

	    try {
	      res = new Response(self);
	    } catch(e) {
	      err = new Error('Parser is unable to parse the response');
	      err.parse = true;
	      err.original = e;
	      // issue #675: return the raw response if the response parsing fails
	      err.rawResponse = self.xhr && self.xhr.responseText ? self.xhr.responseText : null;
	      // issue #876: return the http status code if the response parsing fails
	      err.statusCode = self.xhr && self.xhr.status ? self.xhr.status : null;
	      return self.callback(err);
	    }

	    self.emit('response', res);

	    var new_err;
	    try {
	      if (res.status < 200 || res.status >= 300) {
	        new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
	        new_err.original = err;
	        new_err.response = res;
	        new_err.status = res.status;
	      }
	    } catch(e) {
	      new_err = e; // #985 touching res may cause INVALID_STATE_ERR on old Android
	    }

	    // #1000 don't catch errors from the callback to avoid double calling it
	    if (new_err) {
	      self.callback(new_err, res);
	    } else {
	      self.callback(null, res);
	    }
	  });
	}

	/**
	 * Mixin `Emitter` and `requestBase`.
	 */

	Emitter(Request.prototype);
	for (var key in requestBase) {
	  Request.prototype[key] = requestBase[key];
	}

	/**
	 * Set Content-Type to `type`, mapping values from `request.types`.
	 *
	 * Examples:
	 *
	 *      superagent.types.xml = 'application/xml';
	 *
	 *      request.post('/')
	 *        .type('xml')
	 *        .send(xmlstring)
	 *        .end(callback);
	 *
	 *      request.post('/')
	 *        .type('application/xml')
	 *        .send(xmlstring)
	 *        .end(callback);
	 *
	 * @param {String} type
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.type = function(type){
	  this.set('Content-Type', request.types[type] || type);
	  return this;
	};

	/**
	 * Set responseType to `val`. Presently valid responseTypes are 'blob' and
	 * 'arraybuffer'.
	 *
	 * Examples:
	 *
	 *      req.get('/')
	 *        .responseType('blob')
	 *        .end(callback);
	 *
	 * @param {String} val
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.responseType = function(val){
	  this._responseType = val;
	  return this;
	};

	/**
	 * Set Accept to `type`, mapping values from `request.types`.
	 *
	 * Examples:
	 *
	 *      superagent.types.json = 'application/json';
	 *
	 *      request.get('/agent')
	 *        .accept('json')
	 *        .end(callback);
	 *
	 *      request.get('/agent')
	 *        .accept('application/json')
	 *        .end(callback);
	 *
	 * @param {String} accept
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.accept = function(type){
	  this.set('Accept', request.types[type] || type);
	  return this;
	};

	/**
	 * Set Authorization field value with `user` and `pass`.
	 *
	 * @param {String} user
	 * @param {String} pass
	 * @param {Object} options with 'type' property 'auto' or 'basic' (default 'basic')
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.auth = function(user, pass, options){
	  if (!options) {
	    options = {
	      type: 'basic'
	    }
	  }

	  switch (options.type) {
	    case 'basic':
	      var str = btoa(user + ':' + pass);
	      this.set('Authorization', 'Basic ' + str);
	    break;

	    case 'auto':
	      this.username = user;
	      this.password = pass;
	    break;
	  }
	  return this;
	};

	/**
	* Add query-string `val`.
	*
	* Examples:
	*
	*   request.get('/shoes')
	*     .query('size=10')
	*     .query({ color: 'blue' })
	*
	* @param {Object|String} val
	* @return {Request} for chaining
	* @api public
	*/

	Request.prototype.query = function(val){
	  if ('string' != typeof val) val = serialize(val);
	  if (val) this._query.push(val);
	  return this;
	};

	/**
	 * Queue the given `file` as an attachment to the specified `field`,
	 * with optional `filename`.
	 *
	 * ``` js
	 * request.post('/upload')
	 *   .attach('content', new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
	 *   .end(callback);
	 * ```
	 *
	 * @param {String} field
	 * @param {Blob|File} file
	 * @param {String} filename
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.attach = function(field, file, filename){
	  this._getFormData().append(field, file, filename || file.name);
	  return this;
	};

	Request.prototype._getFormData = function(){
	  if (!this._formData) {
	    this._formData = new root.FormData();
	  }
	  return this._formData;
	};

	/**
	 * Invoke the callback with `err` and `res`
	 * and handle arity check.
	 *
	 * @param {Error} err
	 * @param {Response} res
	 * @api private
	 */

	Request.prototype.callback = function(err, res){
	  var fn = this._callback;
	  this.clearTimeout();
	  fn(err, res);
	};

	/**
	 * Invoke callback with x-domain error.
	 *
	 * @api private
	 */

	Request.prototype.crossDomainError = function(){
	  var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
	  err.crossDomain = true;

	  err.status = this.status;
	  err.method = this.method;
	  err.url = this.url;

	  this.callback(err);
	};

	/**
	 * Invoke callback with timeout error.
	 *
	 * @api private
	 */

	Request.prototype._timeoutError = function(){
	  var timeout = this._timeout;
	  var err = new Error('timeout of ' + timeout + 'ms exceeded');
	  err.timeout = timeout;
	  this.callback(err);
	};

	/**
	 * Compose querystring to append to req.url
	 *
	 * @api private
	 */

	Request.prototype._appendQueryString = function(){
	  var query = this._query.join('&');
	  if (query) {
	    this.url += ~this.url.indexOf('?')
	      ? '&' + query
	      : '?' + query;
	  }
	};

	/**
	 * Initiate request, invoking callback `fn(res)`
	 * with an instanceof `Response`.
	 *
	 * @param {Function} fn
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.end = function(fn){
	  var self = this;
	  var xhr = this.xhr = request.getXHR();
	  var timeout = this._timeout;
	  var data = this._formData || this._data;

	  // store callback
	  this._callback = fn || noop;

	  // state change
	  xhr.onreadystatechange = function(){
	    if (4 != xhr.readyState) return;

	    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
	    // result in the error "Could not complete the operation due to error c00c023f"
	    var status;
	    try { status = xhr.status } catch(e) { status = 0; }

	    if (0 == status) {
	      if (self.timedout) return self._timeoutError();
	      if (self._aborted) return;
	      return self.crossDomainError();
	    }
	    self.emit('end');
	  };

	  // progress
	  var handleProgress = function(e){
	    if (e.total > 0) {
	      e.percent = e.loaded / e.total * 100;
	    }
	    e.direction = 'download';
	    self.emit('progress', e);
	  };
	  if (this.hasListeners('progress')) {
	    xhr.onprogress = handleProgress;
	  }
	  try {
	    if (xhr.upload && this.hasListeners('progress')) {
	      xhr.upload.onprogress = handleProgress;
	    }
	  } catch(e) {
	    // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
	    // Reported here:
	    // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
	  }

	  // timeout
	  if (timeout && !this._timer) {
	    this._timer = setTimeout(function(){
	      self.timedout = true;
	      self.abort();
	    }, timeout);
	  }

	  // querystring
	  this._appendQueryString();

	  // initiate request
	  if (this.username && this.password) {
	    xhr.open(this.method, this.url, true, this.username, this.password);
	  } else {
	    xhr.open(this.method, this.url, true);
	  }

	  // CORS
	  if (this._withCredentials) xhr.withCredentials = true;

	  // body
	  if ('GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !this._isHost(data)) {
	    // serialize stuff
	    var contentType = this._header['content-type'];
	    var serialize = this._serializer || request.serialize[contentType ? contentType.split(';')[0] : ''];
	    if (!serialize && isJSON(contentType)) serialize = request.serialize['application/json'];
	    if (serialize) data = serialize(data);
	  }

	  // set header fields
	  for (var field in this.header) {
	    if (null == this.header[field]) continue;
	    xhr.setRequestHeader(field, this.header[field]);
	  }

	  if (this._responseType) {
	    xhr.responseType = this._responseType;
	  }

	  // send stuff
	  this.emit('request', this);

	  // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
	  // We need null here if data is undefined
	  xhr.send(typeof data !== 'undefined' ? data : null);
	  return this;
	};


	/**
	 * Expose `Request`.
	 */

	request.Request = Request;

	/**
	 * GET `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} [data] or fn
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */

	request.get = function(url, data, fn){
	  var req = request('GET', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.query(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * HEAD `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} [data] or fn
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */

	request.head = function(url, data, fn){
	  var req = request('HEAD', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * OPTIONS query to `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} [data] or fn
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */

	request.options = function(url, data, fn){
	  var req = request('OPTIONS', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * DELETE `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */

	function del(url, fn){
	  var req = request('DELETE', url);
	  if (fn) req.end(fn);
	  return req;
	};

	request['del'] = del;
	request['delete'] = del;

	/**
	 * PATCH `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed} [data]
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */

	request.patch = function(url, data, fn){
	  var req = request('PATCH', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * POST `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed} [data]
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */

	request.post = function(url, data, fn){
	  var req = request('POST', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * PUT `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} [data] or fn
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */

	request.put = function(url, data, fn){
	  var req = request('PUT', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};


/***/ },

/***/ 691:
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Expose `Emitter`.
	 */

	if (true) {
	  module.exports = Emitter;
	}

	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */

	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};

	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */

	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}

	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
	    .push(fn);
	  return this;
	};

	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.once = function(event, fn){
	  function on() {
	    this.off(event, on);
	    fn.apply(this, arguments);
	  }

	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};

	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};

	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }

	  // specific event
	  var callbacks = this._callbacks['$' + event];
	  if (!callbacks) return this;

	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks['$' + event];
	    return this;
	  }

	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};

	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */

	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1)
	    , callbacks = this._callbacks['$' + event];

	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }

	  return this;
	};

	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */

	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks['$' + event] || [];
	};

	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */

	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ },

/***/ 692:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module of mixed-in functions shared between node and client code
	 */
	var isObject = __webpack_require__(693);

	/**
	 * Clear previous timeout.
	 *
	 * @return {Request} for chaining
	 * @api public
	 */

	exports.clearTimeout = function _clearTimeout(){
	  this._timeout = 0;
	  clearTimeout(this._timer);
	  return this;
	};

	/**
	 * Override default response body parser
	 *
	 * This function will be called to convert incoming data into request.body
	 *
	 * @param {Function}
	 * @api public
	 */

	exports.parse = function parse(fn){
	  this._parser = fn;
	  return this;
	};

	/**
	 * Override default request body serializer
	 *
	 * This function will be called to convert data set via .send or .attach into payload to send
	 *
	 * @param {Function}
	 * @api public
	 */

	exports.serialize = function serialize(fn){
	  this._serializer = fn;
	  return this;
	};

	/**
	 * Set timeout to `ms`.
	 *
	 * @param {Number} ms
	 * @return {Request} for chaining
	 * @api public
	 */

	exports.timeout = function timeout(ms){
	  this._timeout = ms;
	  return this;
	};

	/**
	 * Promise support
	 *
	 * @param {Function} resolve
	 * @param {Function} reject
	 * @return {Request}
	 */

	exports.then = function then(resolve, reject) {
	  if (!this._fullfilledPromise) {
	    var self = this;
	    this._fullfilledPromise = new Promise(function(innerResolve, innerReject){
	      self.end(function(err, res){
	        if (err) innerReject(err); else innerResolve(res);
	      });
	    });
	  }
	  return this._fullfilledPromise.then(resolve, reject);
	}

	/**
	 * Allow for extension
	 */

	exports.use = function use(fn) {
	  fn(this);
	  return this;
	}


	/**
	 * Get request header `field`.
	 * Case-insensitive.
	 *
	 * @param {String} field
	 * @return {String}
	 * @api public
	 */

	exports.get = function(field){
	  return this._header[field.toLowerCase()];
	};

	/**
	 * Get case-insensitive header `field` value.
	 * This is a deprecated internal API. Use `.get(field)` instead.
	 *
	 * (getHeader is no longer used internally by the superagent code base)
	 *
	 * @param {String} field
	 * @return {String}
	 * @api private
	 * @deprecated
	 */

	exports.getHeader = exports.get;

	/**
	 * Set header `field` to `val`, or multiple fields with one object.
	 * Case-insensitive.
	 *
	 * Examples:
	 *
	 *      req.get('/')
	 *        .set('Accept', 'application/json')
	 *        .set('X-API-Key', 'foobar')
	 *        .end(callback);
	 *
	 *      req.get('/')
	 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
	 *        .end(callback);
	 *
	 * @param {String|Object} field
	 * @param {String} val
	 * @return {Request} for chaining
	 * @api public
	 */

	exports.set = function(field, val){
	  if (isObject(field)) {
	    for (var key in field) {
	      this.set(key, field[key]);
	    }
	    return this;
	  }
	  this._header[field.toLowerCase()] = val;
	  this.header[field] = val;
	  return this;
	};

	/**
	 * Remove header `field`.
	 * Case-insensitive.
	 *
	 * Example:
	 *
	 *      req.get('/')
	 *        .unset('User-Agent')
	 *        .end(callback);
	 *
	 * @param {String} field
	 */
	exports.unset = function(field){
	  delete this._header[field.toLowerCase()];
	  delete this.header[field];
	  return this;
	};

	/**
	 * Write the field `name` and `val` for "multipart/form-data"
	 * request bodies.
	 *
	 * ``` js
	 * request.post('/upload')
	 *   .field('foo', 'bar')
	 *   .end(callback);
	 * ```
	 *
	 * @param {String} name
	 * @param {String|Blob|File|Buffer|fs.ReadStream} val
	 * @return {Request} for chaining
	 * @api public
	 */
	exports.field = function(name, val) {
	  this._getFormData().append(name, val);
	  return this;
	};

	/**
	 * Abort the request, and clear potential timeout.
	 *
	 * @return {Request}
	 * @api public
	 */
	exports.abort = function(){
	  if (this._aborted) {
	    return this;
	  }
	  this._aborted = true;
	  this.xhr && this.xhr.abort(); // browser
	  this.req && this.req.abort(); // node
	  this.clearTimeout();
	  this.emit('abort');
	  return this;
	};

	/**
	 * Enable transmission of cookies with x-domain requests.
	 *
	 * Note that for this to work the origin must not be
	 * using "Access-Control-Allow-Origin" with a wildcard,
	 * and also must set "Access-Control-Allow-Credentials"
	 * to "true".
	 *
	 * @api public
	 */

	exports.withCredentials = function(){
	  // This is browser-only functionality. Node side is no-op.
	  this._withCredentials = true;
	  return this;
	};

	/**
	 * Set the max redirects to `n`. Does noting in browser XHR implementation.
	 *
	 * @param {Number} n
	 * @return {Request} for chaining
	 * @api public
	 */

	exports.redirects = function(n){
	  this._maxRedirects = n;
	  return this;
	};

	/**
	 * Convert to a plain javascript object (not JSON string) of scalar properties.
	 * Note as this method is designed to return a useful non-this value,
	 * it cannot be chained.
	 *
	 * @return {Object} describing method, url, and data of this request
	 * @api public
	 */

	exports.toJSON = function(){
	  return {
	    method: this.method,
	    url: this.url,
	    data: this._data,
	    headers: this._header
	  };
	};

	/**
	 * Check if `obj` is a host object,
	 * we don't want to serialize these :)
	 *
	 * TODO: future proof, move to compoent land
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */

	exports._isHost = function _isHost(obj) {
	  var str = {}.toString.call(obj);

	  switch (str) {
	    case '[object File]':
	    case '[object Blob]':
	    case '[object FormData]':
	      return true;
	    default:
	      return false;
	  }
	}

	/**
	 * Send `data` as the request body, defaulting the `.type()` to "json" when
	 * an object is given.
	 *
	 * Examples:
	 *
	 *       // manual json
	 *       request.post('/user')
	 *         .type('json')
	 *         .send('{"name":"tj"}')
	 *         .end(callback)
	 *
	 *       // auto json
	 *       request.post('/user')
	 *         .send({ name: 'tj' })
	 *         .end(callback)
	 *
	 *       // manual x-www-form-urlencoded
	 *       request.post('/user')
	 *         .type('form')
	 *         .send('name=tj')
	 *         .end(callback)
	 *
	 *       // auto x-www-form-urlencoded
	 *       request.post('/user')
	 *         .type('form')
	 *         .send({ name: 'tj' })
	 *         .end(callback)
	 *
	 *       // defaults to x-www-form-urlencoded
	 *      request.post('/user')
	 *        .send('name=tobi')
	 *        .send('species=ferret')
	 *        .end(callback)
	 *
	 * @param {String|Object} data
	 * @return {Request} for chaining
	 * @api public
	 */

	exports.send = function(data){
	  var obj = isObject(data);
	  var type = this._header['content-type'];

	  // merge
	  if (obj && isObject(this._data)) {
	    for (var key in data) {
	      this._data[key] = data[key];
	    }
	  } else if ('string' == typeof data) {
	    // default to x-www-form-urlencoded
	    if (!type) this.type('form');
	    type = this._header['content-type'];
	    if ('application/x-www-form-urlencoded' == type) {
	      this._data = this._data
	        ? this._data + '&' + data
	        : data;
	    } else {
	      this._data = (this._data || '') + data;
	    }
	  } else {
	    this._data = data;
	  }

	  if (!obj || this._isHost(data)) return this;

	  // default to json
	  if (!type) this.type('json');
	  return this;
	};


/***/ },

/***/ 693:
/***/ function(module, exports) {

	/**
	 * Check if `obj` is an object.
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */

	function isObject(obj) {
	  return null !== obj && 'object' === typeof obj;
	}

	module.exports = isObject;


/***/ },

/***/ 694:
/***/ function(module, exports) {

	// The node and browser modules expose versions of this with the
	// appropriate constructor function bound as first argument
	/**
	 * Issue a request:
	 *
	 * Examples:
	 *
	 *    request('GET', '/users').end(callback)
	 *    request('/users').end(callback)
	 *    request('/users', callback)
	 *
	 * @param {String} method
	 * @param {String|Function} url or callback
	 * @return {Request}
	 * @api public
	 */

	function request(RequestConstructor, method, url) {
	  // callback
	  if ('function' == typeof url) {
	    return new RequestConstructor('GET', method).end(url);
	  }

	  // url first
	  if (2 == arguments.length) {
	    return new RequestConstructor('GET', method);
	  }

	  return new RequestConstructor(method, url);
	}

	module.exports = request;


/***/ },

/***/ 695:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Dcalsky/www/hacker/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Dcalsky/www/hacker/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(235);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(261);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(262);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(266);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(313);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _materialUi = __webpack_require__(322);

	var _List = __webpack_require__(465);

	var _Card = __webpack_require__(405);

	var _reactRouter = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var style = {
	  paper: {
	    width: '100%',
	    padding: '10px 0px 40px 0px'
	  }

	};

	var Detail = function (_Component) {
	  (0, _inherits3.default)(Detail, _Component);

	  function Detail(props) {
	    (0, _classCallCheck3.default)(this, Detail);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Detail).call(this, props));

	    console.log(props);
	    return _this;
	  }

	  (0, _createClass3.default)(Detail, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var id = this.props.store.photo.id;
	      // todo fetch()
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var store = this.props.store;

	      return _react2.default.createElement(
	        'div',
	        { style: style.paper },
	        _react2.default.createElement(
	          _List.List,
	          null,
	          _react2.default.createElement(_List.ListItem, { primaryText: '食物名稱: 粽子' }),
	          _react2.default.createElement(_List.ListItem, { primaryText: '烹飪時間: 平均2、3小時' })
	        ),
	        _react2.default.createElement(
	          _Card.Card,
	          null,
	          _react2.default.createElement(_Card.CardHeader, {
	            title: '配料'
	          }),
	          _react2.default.createElement(
	            _Card.CardText,
	            null,
	            '糯米 2500克、五花肉 800克、鹹蛋黃 40顆、粽葉 200片、老抽 少許、食鹽 少許、雞精 少許、食用堿 少許、棉線'
	          )
	        ),
	        _react2.default.createElement(
	          _Card.Card,
	          null,
	          _react2.default.createElement(_Card.CardHeader, {
	            title: '步驟'
	          }),
	          _react2.default.createElement(
	            _Card.CardText,
	            null,
	            '1、糯米2500克。洗凈浸泡5個小時，再瀝幹水分',
	            _react2.default.createElement('br', null),
	            _react2.default.createElement('br', null),
	            '2、粽葉我準備了約200片，沒用完。多備點沒錯。幹粽葉提前泡發壹天，再兩面擦洗幹凈',
	            _react2.default.createElement('br', null),
	            _react2.default.createElement('br', null),
	            '3、五花肉800克。切兩指寬的大塊。用生姜、大蒜、鹽、老抽、生抽、白酒腌入味，我腌了壹天。調味要比正常的味道鹹壹些，煮出來的味道才正好',
	            _react2.default.createElement('br', null),
	            _react2.default.createElement('br', null),
	            '4、放壹點食用堿，壹點點的撒哦，堿壹放，糯米的顏色立刻就變了。微黃就可以了。放了堿的粽子煮出來會比較軟爛，且有壹定的防腐作用。但是別放多了。而且煮出來顏色微黃，更加好看',
	            _react2.default.createElement('br', null),
	            _react2.default.createElement('br', null),
	            '...'
	          )
	        )
	      );
	    }
	  }]);
	  return Detail;
	}(_react.Component);

	exports.default = Detail;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Dcalsky/www/hacker/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 696:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(697);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(699)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]!./../node_modules/postcss-loader/index.js!./normalize.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]!./../node_modules/postcss-loader/index.js!./normalize.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 697:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(698)();
	// imports


	// module
	exports.push([module.id, "/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Prevent adjustments of font size after orientation changes in IE and iOS.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n * 2. Add the correct display in IE.\n */\n\narticle,\naside,\ndetails, /* 1 */\nfigcaption,\nfigure,\nfooter,\nheader,\nmain, /* 2 */\nmenu,\nnav,\nsection,\nsummary { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Add the correct display in IE 10-.\n * 1. Add the correct display in IE.\n */\n\ntemplate, /* 1 */\n[hidden] {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change font properties to `inherit` in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\nselect,\ntextarea {\n  font: inherit; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Restore the font weight unset by the previous rule.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n", "", {"version":3,"sources":["/./normalize.css"],"names":[],"mappings":"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","file":"normalize.css","sourcesContent":["/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Prevent adjustments of font size after orientation changes in IE and iOS.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n * 2. Add the correct display in IE.\n */\n\narticle,\naside,\ndetails, /* 1 */\nfigcaption,\nfigure,\nfooter,\nheader,\nmain, /* 2 */\nmenu,\nnav,\nsection,\nsummary { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Add the correct display in IE 10-.\n * 1. Add the correct display in IE.\n */\n\ntemplate, /* 1 */\n[hidden] {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change font properties to `inherit` in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\nselect,\ntextarea {\n  font: inherit; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Restore the font weight unset by the previous rule.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n"],"sourceRoot":"webpack://"}]);

	// exports


/***/ },

/***/ 698:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 699:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }

});