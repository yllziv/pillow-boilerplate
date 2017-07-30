var demo =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

'use strcit';

/**
 * @class pillow._ Utils.
 * @param {Object} options An object literal containing one or more of the following optional properties:
 */

var _ = {
  create: function create(o) {
    if (Object.create) {
      return Object.create(o);
    } else {
      var F = function F() {};
      F.prototype = o;
      return new F();
    }
  },
  guid: function guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0;
      var v = c === 'x' ? r : r & 0x3 | 0x8;
      return v.toString(16);
    });
  },
  extend: function extend() {
    var args = Array.prototype.slice.call(arguments);
    var object = args.shift();
    for (var i = 0, l = args.length; i < l; i++) {
      var props = args[i];
      for (var key in props) {
        object[key] = props[key];
      }
    }
    return object;
  },
  inherit: function inherit(sub, sup) {
    var temp = sub.prototype;
    sub.prototype = this.create(sup.prototype);
    for (var i in temp) {
      sub.prototype[i] = temp[i];
    }
    sub.prototype.constructor = sub;
    sub.sup = sup;
  },
  augment: function augment(r, s) {
    this.each(s, function (v, k) {
      r.prototype[k] = v;
    });
  },
  indexOf: function indexOf(arr, val) {
    if (arr.indexOf) {
      return arr.indexOf(val);
    }
    var i;
    var len = arr.length;
    for (i = 0; i < len; i++) {
      if (arr[i] === val) {
        return i;
      }
    }
    return -1;
  },
  merge: function merge(r, s) {
    for (var i in s) {
      r[i] = s[i];
    }
    return r;
  },
  each: function each(object, fn) {
    if (!object) {
      return;
    }
    for (var i in object) {
      if (object.hasOwnProperty(i)) {
        fn.call(this, object[i], i);
      }
    }
    return object;
  },
  pushUnique: function pushUnique(arr, val) {
    if (this.indexOf(arr, val) === -1) {
      arr.push(val);
      return true;
    }
    return false;
  },
  removeValue: function removeValue(arr, val) {
    var index = this.indexOf(arr, val);
    if (index !== -1) {
      return arr.splice(index, 1)[0];
    }
  },
  type: function type(c) {
    if (c === null || typeof c === 'undefined') {
      return String(c);
    } else {
      return Object.prototype.toString.call(c).replace(/\[object |\]/g, '').toLowerCase();
    }
  },
  transpose: function transpose(obj) {
    var transpose = {};
    this.each(obj, function (val, key) {
      transpose[val] = key;
    });
    return transpose;
  },
  bindEvent: function bindEvent(e, handler) {
    if (global.addEventListener) {
      global.addEventListener(e, handler, false);
    } else if (document.attachEvent) {
      document.attachEvent('on' + e, handler);
    }
  }
};

module.exports = _;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var RenderObject = __webpack_require__(14);

/**
 * @class pillow.RenderObjectModel RenderObjectModel.
 * @param {Object} options An object literal containing one or more of the following optional properties:
 * <li><tt>x</tt></li>
 * <li><tt>y</tt></li>
 * <li><tt>width</tt></li>
 * <li><tt>height</tt></li>
 * <li><tt>alpha</tt></li>
 * <li><tt>scaleX</tt></li>
 * <li><tt>scaleY</tt></li>
 * <li><tt>rotation</tt></li>
 * <li><tt>angle</tt></li>
 * <li><tt>visible</tt></li>
 * <li><tt>debug</tt></li>
 */

function RenderObjectModel(cfg) {
  var that = this;
  RenderObjectModel.sup.call(that, cfg);
  that.children = [];
  that.parent = null;
  _.merge(that, cfg);
}

var proto = {
  render: function render(context) {
    var that = this;
    that.clear(0, 0, that.width, that.height);
    that._draw(that.context);
  },
  prepend: function prepend(node) {
    var that = this;
    node.parent = that;
    that.children.unshift(node);
  },
  append: function append(node) {
    var that = this;
    node.parent = that;
    that.children[that.children.length] = node;
  },
  removeChildren: function removeChildren(index) {
    if (this.children[index]) {
      this.children.splice(index, 1);
    }
  },
  removeAllChildren: function removeAllChildren() {
    this.children = [];
  },
  removeFromParent: function removeFromParent() {
    var that = this;
    if (that.parent) {
      _.each(this.parent.children, function (child, index) {
        if (child === that) {
          that.parent.removeChildren(index);
        }
      });
    }
  },
  dispatch: function dispatch(type, x, y) {
    var that = this;
    var children = that.children;
    var i = children.length;
    var _x = x - that.x;
    var _y = y - that.y;
    that.emit(type, {
      client: {
        x: x,
        y: y
      },
      offset: {
        x: _x,
        y: _y
      }
    });
    while (i--) {
      var child = children[i];
      if (child.hitTest && child.hitTest(_x, _y)) {
        child.dispatch(type, _x, _y);
        return;
      }
    }
  },
  hitTest: function hitTest(x, y) {
    var that = this;
    return x >= that.x && x <= that.x + that.width * that.scaleX && y >= that.y && y <= that.y + that.height * that.scaleY;
  }
};

_.augment(RenderObjectModel, proto);
_.inherit(RenderObjectModel, RenderObject);

module.exports = RenderObjectModel;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* global define */


;(function (root, factory) {
  'use strict';
  if (true) {
    return !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== 'undefined') {
    return factory(exports);
  } else {
    factory(root['pillow'] || (root['pillow'] = {}));
  }
})(undefined, function (exports) {
  var pkg = __webpack_require__(11);
  exports.version = pkg.version;
  exports.RenderObjectModel = __webpack_require__(1);
  exports.Img = __webpack_require__(5);
  exports.Sprite = __webpack_require__(17);
  exports.Text = __webpack_require__(18);
  exports.Graphics = __webpack_require__(15);
  exports.Screen = __webpack_require__(16);

  exports.Keyboard = __webpack_require__(12);
  exports.Mouse = __webpack_require__(13);

  exports._ = __webpack_require__(0);
  exports.Vector2d = __webpack_require__(24);
  exports.Math = __webpack_require__(22);
  exports.SourceLoader = __webpack_require__(23);
  exports.Map = __webpack_require__(21);
  exports.Tween = __webpack_require__(7);
  exports.Collision = __webpack_require__(20);
  exports.Animate = __webpack_require__(6);
  exports.Audio = __webpack_require__(19);

  exports.Timer = __webpack_require__(4).Timer;
  exports.FPSBoard = __webpack_require__(4).FPSBoard;
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);

var __emit = function __emit(type, data) {
  var handlers = Array.prototype.slice.call(this.NotifyHash[type]);
  for (var i = 0, l = handlers.length; i < l; i++) {
    var j = _.extend({}, handlers[i]);
    var scope = j.scope ? j.scope : this;
    j.scope = scope;
    j.handler.call(j.scope, data, j);
  }
};

var __detach = function __detach(type) {
  var handlers = this.NotifyHash;
  if (type) {
    delete handlers[type];
  } else {
    this.NotifyHash = {};
  }
};

var __bind = function __bind(key, handle) {
  var events = key.split(' ');
  for (var i = 0, l = events.length; i < l; i++) {
    var t = events[i];
    if (!this.NotifyHash[t]) {
      this.NotifyHash[t] = [];
    }
    this.NotifyHash[t].push({
      handler: handle,
      type: t
    });
  }
};

function Notify() {
  this.DataHash = {};
  this.NotifyHash = {};
}

Notify.prototype = {
  on: function on(arg1, arg2, isOnece) {
    if (_.type(arg1) === 'object') {
      for (var j in arg1) {
        __bind.call(this, j, arg1[j]);
      }
    } else {
      __bind.call(this, arg1, arg2);
    }
    return this;
  },
  once: function once(arg1, arg2) {
    this.on(arg1, arg2, true);
    return this;
  },
  emit: function emit(types, data) {
    var items = types.split(' ');
    for (var i = 0, l = items.length; i < l; i++) {
      var type = items[i];
      if (this.NotifyHash[type]) {
        __emit.call(this, type, _.type(data) === 'undefined' ? null : data);
      }
    }
    return this;
  },
  detach: function detach() {
    __detach.apply(this, arguments);
    return this;
  },
  set: function set(id, value) {
    this.DataHash[id] = value;
  },
  get: function get(id) {
    return this.DataHash[id];
  },
  has: function has(id) {
    return !!this.DataHash[id];
  },
  all: function all() {
    return this.DataHash;
  },
  remove: function remove(id) {
    if (this.DataHash[id]) {
      delete this.DataHash[id];
    }
  }
};

module.exports = Notify;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

;(function (root, factory) {
  'use strict';
  if (true) {
    return !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== 'undefined') {
    return factory(exports);
  } else {
    factory(root['Monitor'] || (root['Monitor'] = {}));
  }
})(undefined, function (exports, undefined) {
  'use strict';

  function Timer(options) {
    var opts = options || {};
    opts.fps = opts.fps || 60;
    this.options = opts;
    this._queue = [];
    this._paused = false;
    this._now = null;
    this._fps = -1;
    this._interval = 1000 / opts.fps;
  }

  Timer.prototype.update = function (handle) {
    this._queue.push(handle.bind(this));
  };

  Timer.prototype.start = function () {
    var targetTime = new Date().getTime() + this._interval;
    var loop = (function () {
      this._now = this._now || +new Date();
      var now = +new Date();

      if (now - this._now >= 1000) {
        this._now = now;
        this._fps = -1;
      }

      var nowTime = new Date().getTime();

      if (nowTime >= targetTime) {

        if (nowTime >= targetTime + this._interval) {
          targetTime = nowTime + this._interval;
        } else {
          targetTime += this._interval;
        }
        this._fps++;

        if (!this._paused) {
          this._queue.forEach(function (handle) {
            handle();
          });
        }
      }

      requestAnimationFrame(loop);
    }).bind(this);
    loop();
  };

  Timer.prototype.stop = function () {
    this._paused = true;
  };

  Timer.prototype.toggle = function () {
    this._paused = !this._paused;
  };

  var render = function render() {
    var fps = this._fps;
    var context = this._context;
    setTimeout((function () {
      var textHeight = 8;
      var padding = 2;
      var paddingTop = textHeight + padding * 2;
      var height = (this.options.height - paddingTop) * fps / 60;
      context.globalAlpha = this.options.alpha;
      context.fillStyle = this.options.boardColor;
      context.clearRect(0, 0, this.options.width, this.options.height);
      context.fillRect(0, 0, this.options.width, this.options.height);
      context.font = padding + 'px';
      context.fillStyle = this.options.textColor;
      context.fillText('fps: ' + fps, padding, textHeight + padding);
      context.fillRect(this.options.width - 1, this.options.height - height, 1 * this._pixelRatio, height);
      this._imgData && context.putImageData(this._imgData, 0, paddingTop * this._pixelRatio);
      this._imgData = context.getImageData(1 * this._pixelRatio, paddingTop * this._pixelRatio, (this.options.width - 1) * this._pixelRatio, (this.options.height - paddingTop) * this._pixelRatio);
    }).bind(this), 16);
  };

  var create = function create() {
    var canvas = document.createElement('canvas');
    var width = this.options.width;
    var height = this.options.height;
    canvas.style.cssText = 'width:' + width + 'px;height:' + height + 'px;';
    canvas.width = width * this._pixelRatio;
    canvas.height = height * this._pixelRatio;

    var context = canvas.getContext('2d');
    context.scale(this._pixelRatio, this._pixelRatio);

    var container = document.createElement('div');
    var styles = {
      position: 'fixed',
      top: 0,
      right: 0,
      cursor: 'pointer',
      'z-index': 999999
    };

    for (var i in this.options.containerStyles) {
      styles[i] = this.options.containerStyles[i];
    }

    Object.keys(styles).forEach(function (key) {
      container.style.cssText += key + ':' + styles[key];
    });

    container.addEventListener('click', function (e) {
      e.preventDefault();
    }, false);

    container.appendChild(canvas);
    this.options.container.appendChild(container);
    return context;
  };

  function FPSBoard(options) {
    var opts = options || {};
    opts.container = document.querySelector(opts.container) || document.body;
    opts.width = opts.width || 80;
    opts.height = opts.height || 48;
    opts.alpha = opts.alpha || 0.9;
    opts.boardColor = opts.boardColor || 'grey';
    opts.textColor = opts.textColor || 'red';
    opts.containerStyles = opts.containerStyles || {};
    this.options = opts;
    this._now = null;
    this._fps = 0;
    this._imgData = null;
    this._pixelRatio = Math.floor(window.devicePixelRatio) || 1;
    this._context = create.call(this);
  }

  FPSBoard.prototype.tick = function () {
    this._now = this._now || +new Date();
    var now = +new Date();

    if (now - this._now >= 1000) {
      render.call(this);
      this._now = now;
      this._fps = 0;
    }

    this._fps++;
  };

  function Monitor() {}

  exports.Timer = Monitor.Timer = Timer;
  exports.FPSBoard = Monitor.FPSBoard = FPSBoard;
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var RenderObjectModel = __webpack_require__(1);

/**
 * @class pillow.Img Img.
 * @param {Object} options An object literal containing one or more of the following optional properties:
 * <li><tt>x</tt></li>
 * <li><tt>y</tt></li>
 * <li><tt>width</tt></li>
 * <li><tt>height</tt></li>
 * <li><tt>alpha</tt></li>
 * <li><tt>scaleX</tt></li>
 * <li><tt>scaleY</tt></li>
 * <li><tt>rotation</tt></li>
 * <li><tt>angle</tt></li>
 * <li><tt>visible</tt></li>
 * <li><tt>debug</tt></li>
 */

function Img(cfg) {
  var that = this;
  Img.sup.call(that, cfg);
  _.merge(that, cfg);
}

var proto = {
  draw: function draw() {
    var that = this;
    var currentFrame = that.getCurrentFrame ? that.getCurrentFrame() : null;
    var x = currentFrame ? currentFrame.x : that.x;
    var y = currentFrame ? currentFrame.y : that.y;
    that.context.drawImage(that.image, x, y, that.width, that.height, 0, 0, that.width, that.height);
  },
  hitTest: function hitTest(x, y) {
    var that = this;
    return x >= that.x && x <= that.x + that.width && y >= that.y && y <= that.y + that.height;
  }
};

_.augment(Img, proto);
_.inherit(Img, RenderObjectModel);

module.exports = Img;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Tween = __webpack_require__(7);
var _ = __webpack_require__(0);
var Notify = __webpack_require__(3);

var FPS = 60;
var INTERVAL = 1000 / FPS;

var setTimeoutFrame = function setTimeoutFrame(callback) {
  return setTimeout(callback, INTERVAL);
};

var clearTimeoutFrame = function clearTimeoutFrame(tick) {
  clearTimeout(tick);
};

var requestAnimateFrame = window.requestAnimateFrame || window.msRequestAnimateFrame || window.webkitRequestAnimateFrame || window.mozkitRequestAnimateFrame || setTimeoutFrame;

var cancelAnimateFrame = window.cancelAnimateFrame || window.msCancelAnimateFrame || window.webkitCancelAnimateFrame || window.mozCancelAnimateFrame || clearTimeoutFrame;

function Frame(handle) {
  this.isRequested = false;
  this.frame;
  this.isCancel = false;
  this.callback = [];
  this.handle = handle;
}

var fproto = {
  request: function request() {
    var that = this;
    if (this.isRequested) {
      return;
    }
    var args = arguments;
    this.isCancel = false;
    this.frame = requestAnimateFrame(function () {
      if (that.isCancel) {
        return;
      }
      that.handle.apply(window, args);
      that.isRequested = true;
      if (that.callback) {
        that.callback.forEach(function (callback) {
          callback && callback();
        });
      }
    });
    return this;
  },
  cancel: function cancel() {
    if (this.frame) {
      this.isCancel = true;
      cancelAnimateFrame(this.frame);
    }
  },
  then: function then(callback) {
    if (this.isRequested) {
      callback && callback();
    } else {
      this.callback.push(callback);
    }
    return this;
  },
  clone: function clone() {
    return new Frame(this.handle);
  }
};

_.augment(Frame, fproto);

function Animate(cfg) {
  this.duration = 1000;
  this.delay = 0;
  this.timing = Tween.easeIn;
  Animate.sup.call(this, cfg);
  _.merge(this, cfg);
  this.isPlaying = false;
  this.delayTick = 0;
  this.frameCount = this.duration / INTERVAL;
  this.framePercent = 1 / this.frameCount;
  this.frameQueue = [];
  this.frameIndex = 0;
  this.init();
}

var proto = {
  init: function init() {
    var frameKeys = ['0'];
    var that = this;
    for (var i = 0; i < this.frameCount; i++) {
      var key = frameKeys[0];
      var percent = this.framePercent * i;
      if (key !== null && key <= percent * 100) {
        this.frameQueue.push(new Frame(function () {
          that.emit('frame', {
            percent: arguments[0],
            timing: arguments[1]
          });
        }));
        frameKeys.shift();
      } else if (this.frameQueue.length) {
        this.frameQueue.push(this.frameQueue[this.frameQueue.length - 1].clone());
      }
    }
  },
  start: function start() {
    var that = this;
    if (this.isPlaying) {
      return;
    }
    this.isPlaying = true;

    var next = function next() {
      if (!that.isPlaying) {
        return;
      }

      if (that.frameIndex === that.frameQueue.length) {
        that.isPlaying = false;
        that.emit('end');
      } else {
        var percent = that.framePercent * (that.frameIndex + 1).toFixed(10);
        that.currentFrame = that.frameQueue[that.frameIndex];
        that.currentFrame.request(percent.toFixed(10), that.timing(percent).toFixed(10));
        that.currentFrame.then(function () {
          that.frameIndex++;
          next();
        });
      }
    };

    this.delayTick = setTimeout(function () {
      that.delayTick = 0;
      next();
    }, !that.frameIndex && that.delay || 0);
    return this;
  },
  stop: function stop() {
    if (!this.isPlaying) {
      return;
    }
    this.isPlaying = false;

    if (this.delayTick) {
      cancelAnimateFrame(this.delayTick);
      this.delayTick = 0;
    }

    if (this.currentFrame) {
      this.currentFrame.cancel();
    }
    return this;
  }
};

_.augment(Animate, proto);
_.inherit(Animate, Notify);

Animate.requestAnimateFrame = requestAnimateFrame;
Animate.cancelAnimateFrame = cancelAnimateFrame;
Animate.Tween = Tween;

module.exports = Animate;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pow = Math.pow;
var sin = Math.sin;
var PI = Math.PI;
var BACK_CONST = 1.70158;

/**
 * @class pillow.Tween Tween.
 * @param {Object} options An object literal containing one or more of the following optional properties:
 */

var Tween = {
  swing: function swing(t) {
    return -Math.cos(t * PI) / 2 + 0.5;
  },
  easeNone: function easeNone(t) {
    return t;
  },
  easeIn: function easeIn(t) {
    return t * t;
  },
  easeOut: function easeOut(t) {
    return (2 - t) * t;
  },
  easeBoth: function easeBoth(t) {
    return (t *= 2) < 1 ? 0.5 * t * t : 0.5 * (1 - --t * (t - 2));
  },
  easeInStrong: function easeInStrong(t) {
    return t * t * t * t;
  },
  easeOutStrong: function easeOutStrong(t) {
    return 1 - --t * t * t * t;
  },
  easeBothStrong: function easeBothStrong(t) {
    return (t *= 2) < 1 ? 0.5 * t * t * t * t : 0.5 * (2 - (t -= 2) * t * t * t);
  },
  easeInSine: function easeInSine(t, b, c, d) {
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
  },
  easeOutSine: function easeOutSine(t, b, c, d) {
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
  },
  easeInOutSine: function easeInOutSine(t, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
  },
  elasticIn: function elasticIn(t) {
    var p = 0.3;
    var s = p / 4;
    if (t === 0 || t === 1) return t;
    return -(pow(2, 10 * (t -= 1)) * sin((t - s) * (2 * PI) / p));
  },
  elasticOut: function elasticOut(t) {
    var p = 0.3;
    var s = p / 4;
    if (t === 0 || t === 1) return t;
    return pow(2, -10 * t) * sin((t - s) * (2 * PI) / p) + 1;
  },
  elasticBoth: function elasticBoth(t) {
    var p = 0.45;
    var s = p / 4;
    if (t === 0 || (t *= 2) === 2) return t;
    if (t < 1) {
      return -0.5 * (pow(2, 10 * (t -= 1)) * sin((t - s) * (2 * PI) / p));
    }
    return pow(2, -10 * (t -= 1)) * sin((t - s) * (2 * PI) / p) * 0.5 + 1;
  },
  backIn: function backIn(t) {
    if (t === 1) t -= 0.001;
    return t * t * ((BACK_CONST + 1) * t - BACK_CONST);
  },
  backOut: function backOut(t) {
    return (t -= 1) * t * ((BACK_CONST + 1) * t + BACK_CONST) + 1;
  },
  backBoth: function backBoth(t) {
    if ((t *= 2) < 1) {
      return 0.5 * (t * t * (((BACK_CONST *= 1.525) + 1) * t - BACK_CONST));
    }
    return 0.5 * ((t -= 2) * t * (((BACK_CONST *= 1.525) + 1) * t + BACK_CONST) + 2);
  },
  bounceIn: function bounceIn(t) {
    return 1 - Tween.bounceOut(1 - t);
  },
  bounceOut: function bounceOut(t) {
    var s = 7.5625;
    var r;
    if (t < 1 / 2.75) {
      r = s * t * t;
    } else if (t < 2 / 2.75) {
      r = s * (t -= 1.5 / 2.75) * t + 0.75;
    } else if (t < 2.5 / 2.75) {
      r = s * (t -= 2.25 / 2.75) * t + 0.9375;
    } else {
      r = s * (t -= 2.625 / 2.75) * t + 0.984375;
    }
    return r;
  }
};

module.exports = Tween;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var g;

// This works in non-strict mode
g = (function () {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _pillowjs = __webpack_require__(2);

var pillow = _interopRequireWildcard(_pillowjs);

var SourceLoader = pillow.SourceLoader;

var loader = new SourceLoader();

exports.ready = function (handle) {
  var list = [{
    id: 'logo',
    src: 'https://avatars2.githubusercontent.com/u/9263023?v=4&s=200'
  }];

  loader.on('loaded', function (e) {
    var process = e.number / list.length;
    console.log(parseInt(process * 100, 10) + '%');
  });

  loader.on('success', function (resource) {
    handle(resource);
  });

  loader.load(list);
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _pillowjs = __webpack_require__(2);

module.exports = function (handle) {
  var timer = new _pillowjs.Timer();

  var fpsBoard = new _pillowjs.FPSBoard({
    container: '#app',
    width: 100,
    height: 60,
    boardColor: '#222',
    textColor: '#d2ff1d',
    containerStyles: {
      position: 'absolute'
    }
  });
  timer.update(function () {
    handle.call(this);
    fpsBoard.tick();
  });

  timer.start();

  return timer;
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = {"name":"pillowjs","version":"1.1.28","description":"HTML5 2D rendering engine","repository":{"type":"git","url":"https://github.com/pillowjs/pillow.git"},"keywords":["canvas"],"main":"./dist/index.js","homepage":"https://pillowjs.github.com/pillow","precommit":["lint"],"scripts":{"lint":"eslint ./src ./examples","doc":"rm -rf ./docs/ && jsdoc -c ./jsdoc.json","build":"webpack -p && babel src/ --out-dir dist/","server":"startserver -p 8081 -s -m","test":"node ./test/pillow.test.js","update":"node ./scripts/update.js","prepublish":"npm run build"},"dependencies":{"monitor.js":"^1.0.5"},"devDependencies":{"babel":"~5.8.23","babel-core":"^5.x","babel-loader":"^5.x","eslint":"^4.0.0","jsdoc":"3.4.0","json-loader":"^0.5.2","jsx-loader":"^0.13.2","mocha":"^3.4.2","node-libs-browser":"^2.0.0","pre-commit":"^1.2.2","should":"*","startserver":"^1.3.7","startserver-webpack":"^1.0.2","uitest":"^1.1.4","webpack":"^2.6.1"},"startserver":[{"startserver-webpack":"*"}],"license":"MIT","_from":"pillowjs@1.1.28","_resolved":"http://registry.npm.alibaba-inc.com/pillowjs/download/pillowjs-1.1.28.tgz"}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _ = __webpack_require__(0);
var Animate = __webpack_require__(6);

var noop = function noop() {};

var KEYS = {
  A: 65,
  B: 66,
  C: 67,
  D: 68,
  E: 69,
  F: 70,
  G: 71,
  H: 72,
  I: 73,
  J: 74,
  K: 75,
  L: 76,
  M: 77,
  N: 78,
  O: 79,
  P: 80,
  Q: 81,
  R: 82,
  S: 83,
  T: 84,
  U: 85,
  V: 86,
  W: 87,
  X: 88,
  Y: 89,
  Z: 90,
  ZERO: 48,
  ONE: 49,
  TWO: 50,
  THREE: 51,
  FOUR: 52,
  FIVE: 53,
  SIX: 54,
  SEVEN: 55,
  EIGHT: 56,
  NINE: 57,
  F1: 112,
  F2: 113,
  F3: 114,
  F4: 115,
  F5: 116,
  F6: 117,
  F7: 118,
  F8: 119,
  F9: 120,
  F10: 121,
  F11: 122,
  F12: 123,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  ESC: 27,
  SPACE: 32
};

var _KEYS = _.transpose(KEYS);

var keysDown = [];

var handleWrapper = function handleWrapper(key, handlerName, opt_handler) {
  if (opt_handler) {
    key[handlerName] = opt_handler;
  } else {
    key[handlerName]();
  }
};

function Key(keyCode) {
  this.keyCode = keyCode;
}

var proto = {
  _downHandler: noop,
  _upHandler: noop,
  _pressHandler: noop,
  isDown: function isDown() {
    return _.indexOf(keysDown, this.keyCode) !== -1;
  },
  down: function down(opt_handler) {
    handleWrapper(this, '_downHandler', opt_handler);
  },
  up: function up(opt_handler) {
    handleWrapper(this, '_upHandler', opt_handler);
  },
  press: function press(opt_handler) {
    handleWrapper(this, '_pressHandler', opt_handler);
  },
  unbindDown: function unbindDown() {
    this._downHandler = noop;
  },
  unbindUp: function unbindUp() {
    this._upHandler = noop;
  },
  unbindPress: function unbindPress() {
    this._pressHandler = noop;
  }
};

_.augment(Key, proto);

/**
 * @class pillow.Keyboard Provides methods for Keyboard events.
 * @param {Object}
 */

var Keyboard = {};

Keyboard.Key = Key;

var running = false;

var methods = {
  simulate: function simulate() {
    for (var i = 0; i < keysDown.length; i++) {
      var keyCode = keysDown[i];
      var keyName = _KEYS[keyCode];
      if (keyName) {
        Keyboard[keyName].down();
      }
    }
  },
  run: function run(handler) {
    running = true;
    Animate.requestAnimateFrame.call(global, function () {
      if (!running) {
        return;
      }
      Keyboard.run(handler);
      handler();
    });
  },
  stop: function stop() {
    running = false;
  }
};

_.extend(Keyboard, methods);

_.each(KEYS, function (keyCode, keyName) {
  Keyboard[keyName] = new Key(keyCode);
});

_.bindEvent('keydown', function (evt) {
  var keyCode = evt.keyCode;
  var keyName = _KEYS[keyCode];
  var isNew = _.pushUnique(keysDown, keyCode);
  if (isNew && Keyboard[keyName]) {
    Keyboard[keyName].press();
  }
});

_.bindEvent('keyup', function (evt) {
  var keyCode = _.removeValue(keysDown, evt.keyCode);
  var keyName = _KEYS[keyCode];
  if (keyName) {
    Keyboard[keyName].up();
  }
});

_.bindEvent('blur', function (evt) {
  keysDown.length = 0;
});

module.exports = Keyboard;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);

var getOffset = function getOffset(element) {
  var x = 0;
  var y = 0;
  var offsetParent = element;

  while (offsetParent !== null && offsetParent !== document.body) {
    x += offsetParent.offsetLeft;
    y += offsetParent.offsetTop;
    offsetParent = offsetParent.offsetParent;
  }

  return {
    x: x,
    y: y
  };
};

/**
 * @class pillow.Mouse Provides methods for Mouse events.
 * @param {Object} options An object literal containing one or more of the following optional properties:
 * <li><tt>screen</tt> : the screen.</li>
 */

function Mouse(cfg) {
  var that = this;
  that.types = 'ontouchend' in document ? ['touchstart', 'touchmove', 'touchend'] : ['mousedown', 'mousemove', 'mouseup'];
  that.element = document;
  _.merge(that, cfg);
  this.bind();
}

var proto = {
  bind: function bind() {
    var that = this;
    that.element = that.screen.target;
    that.offset = getOffset(that.element);
    _.each(that.types, function (event) {
      that.element.addEventListener(event, function (e) {
        e.preventDefault();
        var x = e.changedTouches ? e.changedTouches[0].pageX : e.pageX;
        var y = e.changedTouches ? e.changedTouches[0].pageY : e.pageY;
        that.screen.dispatch(event, x - that.offset.x, y - that.offset.y);
      }, false);
    });
  }
};

_.augment(Mouse, proto);

module.exports = Mouse;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var Notify = __webpack_require__(3);

function RenderObject() {
  var that = this;
  RenderObject.sup.call(that);
  that.x = 0;
  that.y = 0;
  that.width = 0;
  that.height = 0;
  that.alpha = 1;
  that.scaleX = 1;
  that.scaleY = 1;
  that.rotation = 0;
  that.angle = 0;
  that.visible = true;
  that.event = true;
  that.parent = null;
  that.context = null;
  that.debug = false;
}

var proto = {
  _draw: function _draw(context) {
    var that = this;
    if (!that.visible) {
      return;
    }
    that.context = that.context || context;
    that.update();
    that.context.save();
    that.context.globalAlpha = that.alpha;
    that.context.translate(that.x, that.y);
    that.context.rotate(that.rotation * Math.PI / 180);
    that.context.scale(that.scaleX, that.scaleY);
    that.draw();
    this._debug();
    for (var i = 0; i < that.children.length; i++) {
      that.children[i]._draw(that.context);
    }
    that.context.restore();
  },
  _debug: function _debug(context) {
    var that = this;
    if (!that.debug) {
      return;
    }
    that.context = that.context || context;
    that.context.strokeStyle = 'red';
    that.context.strokeRect(0, 0, that.width, that.height);
  },
  draw: function draw() {},
  update: function update() {
    var that = this;
    that.handle = that.handle || arguments[0];
    if (that.handle) {
      that.handle();
    }
  },
  clear: function clear(x, y, width, height) {
    this.context.clearRect(x, y, width, height);
  }
};

_.augment(RenderObject, proto);
_.inherit(RenderObject, Notify);

module.exports = RenderObject;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var RenderObjectModel = __webpack_require__(1);

/**
 * @class pillow.Graphics Graphics.
 * @param {Object} options An object literal containing one or more of the following optional properties:
 * <li><tt>x</tt></li>
 * <li><tt>y</tt></li>
 * <li><tt>width</tt></li>
 * <li><tt>height</tt></li>
 * <li><tt>alpha</tt></li>
 * <li><tt>scaleX</tt></li>
 * <li><tt>scaleY</tt></li>
 * <li><tt>rotation</tt></li>
 * <li><tt>angle</tt></li>
 * <li><tt>visible</tt></li>
 * <li><tt>debug</tt></li>
 */

function Graphics(cfg) {
  var that = this;
  Graphics.sup.call(that, cfg);
  that.hitType = 'rect';
  that.strokeStyle = '#000';
  that.lineWidth = 1;
  that.fillStyle = 'transparent';
  that.query = [];
  _.merge(that, cfg);
}
var proto = {
  draw: function draw() {
    var that = this;
    for (var i = 0; i < that.query.length; i++) {
      var data = that.query[i];
      var action = data.action;

      if (that.context[action]) {
        var args = data.args;

        if (_.type(args) === 'array' || !args) {
          that.context[action].apply(that.context, args);
        } else {
          that.context[action] = that[action];
        }
      }
    }
  },
  push: function push(action, args) {
    this.query.push({
      action: action,
      args: args ? args : null
    });
    return this;
  },
  beginPath: function beginPath() {
    this.push('beginPath');
  },
  closePath: function closePath() {
    this.push('closePath');
  },
  rect: function rect(x, y, width, height) {
    var that = this;
    that.hitType = 'rect';
    that.x = x;
    that.y = y;
    that.width = width;
    that.height = height;
    that.beginPath();
    that.push('rect', [0, 0, that.width, that.height]);
    that.closePath();
    that.push('fillStyle', that.fillStyle);
    that.push('fill');
    that.push('lineWidth', that.lineWidth);
    that.push('strokeStyle', that.strokeStyle);
    that.push('stroke');
    return that;
  },
  circle: function circle(x, y, radius) {
    var that = this;
    that.push('moveTo', [x + radius, y + radius]);
    that.push('arc', [x + radius, y + radius, radius, 0, Math.PI * 2, false]);
    that.push('stroke');
    that.closePath();
    return that;
  },
  hitTest: function hitTest(x, y) {
    var that = this;

    if (that.hitType === 'rect') {
      return x >= that.x && x <= that.x + that.width && y >= that.y && y <= that.y + that.height;
    }
  }
};

_.augment(Graphics, proto);
_.inherit(Graphics, RenderObjectModel);

module.exports = Graphics;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var RenderObjectModel = __webpack_require__(1);

/**
 * @class pillow.Screen Screen.
 * @param {Object} options An object literal containing one or more of the following optional properties:
 * <li><tt>x</tt></li>
 * <li><tt>y</tt></li>
 * <li><tt>width</tt></li>
 * <li><tt>height</tt></li>
 * <li><tt>alpha</tt></li>
 * <li><tt>scaleX</tt></li>
 * <li><tt>scaleY</tt></li>
 * <li><tt>rotation</tt></li>
 * <li><tt>angle</tt></li>
 * <li><tt>visible</tt></li>
 * <li><tt>debug</tt></li>
 */

function Screen(cfg) {
  var that = this;
  Screen.sup.call(that, cfg);
  _.merge(that, cfg);
  that.init();
}

var proto = {
  init: function init() {
    var that = this;
    that.target = that.container;
    if (that.target) {
      that.context = that.target.getContext('2d');
      that.canvas = that.context.canvas;
      that.canvas.width = that.width || that.canvas.width;
      that.canvas.height = that.height || that.canvas.height;
    } else {
      console.log('init error');
      return;
    }
  },
  run: function run() {
    var that = this;
    this.render(that.context);
  },
  hitTest: function hitTest() {
    return true;
  }
};

_.augment(Screen, proto);
_.inherit(Screen, RenderObjectModel);

module.exports = Screen;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Img = __webpack_require__(5);
var _ = __webpack_require__(0);

/**
 * @class pillow.Sprite Sprite.
 * @param {Object} options An object literal containing one or more of the following optional properties:
 * <li><tt>x</tt></li>
 * <li><tt>y</tt></li>
 * <li><tt>width</tt></li>
 * <li><tt>height</tt></li>
 * <li><tt>alpha</tt></li>
 * <li><tt>scaleX</tt></li>
 * <li><tt>scaleY</tt></li>
 * <li><tt>rotation</tt></li>
 * <li><tt>angle</tt></li>
 * <li><tt>visible</tt></li>
 * <li><tt>debug</tt></li>
 */

function Sprite(cfg) {
  var that = this;
  that.frame = 0;
  that.paused = false;
  that.loop = true;
  that.offset = {
    x: 0,
    y: 0
  };
  Sprite.sup.call(that, cfg);
  _.merge(that, cfg);
  that.init();
}

var proto = {
  init: function init() {
    var that = this;
    that.xs = that.size.width / that.width;
    that.ys = that.size.height / that.height;
  },
  pause: function pause() {
    var that = this;
    that.paused = true;
  },
  play: function play() {
    var that = this;
    that.paused = false;
  },
  next: function next() {
    var that = this;
    !that.paused && that.frame++;
  },
  prev: function prev() {
    var that = this;
    !that.paused && !!that.frame && that.frame--;
  },
  to: function to(index) {
    var that = this;
    that.frame = that.paused ? that.frame : index;
  },
  getCurrentFrame: function getCurrentFrame() {
    var that = this;
    var x = that.frame % that.xs;
    var y = parseInt(that.frame / that.xs, 10) % that.ys;

    if (!x && y === that.ys - 1) {
      if (that.loop) {
        that.frame = 0;
      } else {
        that.paused = true;
      }
    }
    return {
      x: x * that.width + that.offset.x,
      y: y * that.height + that.offset.y
    };
  },
  hitTest: function hitTest() {
    return true;
  }
};

_.augment(Sprite, proto);
_.inherit(Sprite, Img);

module.exports = Sprite;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var RenderObjectModel = __webpack_require__(1);

/**
 * @class pillow.Text Text.
 * @param {Object} options An object literal containing one or more of the following optional properties:
 * <li><tt>x</tt></li>
 * <li><tt>y</tt></li>
 * <li><tt>width</tt></li>
 * <li><tt>height</tt></li>
 * <li><tt>alpha</tt></li>
 * <li><tt>scaleX</tt></li>
 * <li><tt>scaleY</tt></li>
 * <li><tt>rotation</tt></li>
 * <li><tt>angle</tt></li>
 * <li><tt>visible</tt></li>
 * <li><tt>debug</tt></li>
 */

function Text(cfg) {
  var that = this;
  Text.sup.call(that, cfg);
  that.x = 0;
  that.y = 0;
  that.text = '';
  that.font = '12px arial';
  that.color = '#000';
  _.merge(that, cfg);
}

var proto = {
  draw: function draw() {
    var that = this;
    that.context.fillStyle = that.color;
    that.context.font = that.font;
    that.context.fillText(that.text, that.x, that.y);
  }
};

_.augment(Text, proto);
_.inherit(Text, RenderObjectModel);

module.exports = Text;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* global webkitAudioContext */
/* eslint new-cap: ["error", { "newIsCapExceptions": ["webkitAudioContext"] }] */



var _ = __webpack_require__(0);

var Base = {
  isIOS: !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/i),
  cache: {},
  context: null,
  masterGain: null,
  isSupported: function isSupported() {
    return typeof AudioContext !== 'undefined' || typeof webkitAudioContext !== 'undefined';
  },
  getContext: function getContext() {
    if (!Base.isSupported()) {
      return null;
    }
    if (Base.context) {
      return Base.context;
    }
    if (typeof AudioContext !== 'undefined') {
      Base.context = new AudioContext();
    } else if (typeof webkitAudioContext !== 'undefined') {
      Base.context = new webkitAudioContext();
    }
    return Base.context;
  },
  enableIOS: function enableIOS() {
    if (!Base.isIOS) {
      return;
    }
    var unlock = function unlock() {
      var context = Base.getContext();
      var source = context.createBufferSource();
      source.buffer = context.createBuffer(1, 1, 22050);;
      source.connect(context.destination);
      source.start(0);
      context.resume();
      source.onended = function () {
        source.disconnect(0);
        document.removeEventListener('touchstart', unlock, true);
      };
    };
    document.addEventListener('touchstart', unlock, true);
  }
};

function WebAudio() {
  this.paused = null;
  this.ended = null;
  this.guid = null;
  this.node = null;
  this.init();
}

var wproto = {
  init: function init() {
    this.paused = true;
    this.guid = _.guid();
    this.node = null;
    this.create();
  },

  create: function create() {
    var context = Base.getContext();
    this.node = context.createGain();
    this.node.gain.setValueAtTime(1, context.currentTime);
    this.node.paused = true;
    this.node.connect(Base.masterGain);
  },

  reset: function reset() {
    this.guid = _.guid();
  }
};

_.augment(WebAudio, wproto);

var _refreshBuffer = function _refreshBuffer(audio, src) {
  audio.node.bufferSource = Base.getContext().createBufferSource();
  audio.node.bufferSource.buffer = Base.cache[src];
  audio.node.bufferSource.connect(audio.node);
  audio.node.bufferSource.playbackRate.value = 1;
  audio.node.bufferSource.loop = false;
};

var _handleQueue = function _handleQueue(limit, queue) {
  var count = 0;

  if (queue.length < limit) {
    return;
  }

  for (var i = 0; i < queue.length; i++) {
    if (queue[i].ended) {
      count++;
    }
  }

  for (var i = queue.length - 1; i >= 0; i--) {
    if (count <= limit) {
      return;
    }

    if (queue[i].ended) {
      if (queue[i].node) {
        queue[i].node.disconnect(0);
      }
      queue.splice(i, 1);
      count--;
    }
  }

  for (var i = 0; i < queue.length; i++) {
    if (queue[i].ended) {
      return queue[i].reset();
    }
  }
};

var _initAudio = function _initAudio() {
  var _this = this;

  if (!Base.isSupported()) {
    return;
  }

  var context = Base.getContext();
  Base.masterGain = context.createGain();
  Base.masterGain.gain.value = 1;
  Base.masterGain.connect(context.destination);

  var audio = new WebAudio();
  this.queue.push(audio);

  if (Base.cache[this.src]) {
    this.duration = Base.cache[this.src].duration;
    this.state = 'loaded';
    return;
  }

  var xhr = new XMLHttpRequest();
  xhr.open('GET', this.src, true);
  xhr.responseType = 'arraybuffer';
  xhr.onload = function () {
    if (xhr.status === 200) {
      context.decodeAudioData(xhr.response, function (buffer) {
        if (buffer && _this.queue.length > 0) {
          Base.cache[_this.src] = buffer;
          if (buffer && !_this.duration) {
            _this.duration = buffer.duration;
          }
          _this.state = 'loaded';
        }
      }, function () {});
    }
  };
  try {
    xhr.send();
  } catch (e) {
    console.log(e);
  }
};

var _handleAudioEnded = function _handleAudioEnded(audio, timers) {
  audio.paused = true;
  audio.ended = true;

  if (timers[audio.guid]) {
    clearTimeout(timers[audio.guid]);
    delete timers[audio.guid];
  }
};

function Audio(options) {
  this.src = options.src;
  this.pool = options.pool || 10;
  this.duration = 0;
  this.state = null;
  this.queue = [];
  this.timers = {};
  _initAudio.call(this);
}

var proto = {
  play: function play() {
    var _this2 = this;

    if (!Base.isSupported()) {
      return;
    }

    _handleQueue(this.pool, this.queue);

    var audio = new WebAudio();
    audio.paused = false;
    audio.ended = false;

    this.queue.push(audio);

    var node = audio.node;

    if (this.state === 'loaded') {
      _refreshBuffer(audio, this.src);
      node.gain.setValueAtTime(1, Base.getContext().currentTime);
      node.bufferSource.start(0, 0, this.duration);
      this.timers[audio.guid] = setTimeout(function () {
        _handleAudioEnded(audio, _this2.timers);
      }, this.duration * 1000);
    }
  }
};

_.augment(Audio, proto);

Audio.Base = Base;

module.exports = Audio;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @class pillow.Collision Collision.
 * @param {Object} options An object literal containing one or more of the following optional properties:
 */

function Collision(cfg) {}

Collision.prototype.pointRect = function (point1, point2, rect) {
  return point1 > rect.x && point1 < rect.right || point2 > rect.y && point2 < rect.bottom;
};

Collision.prototype.betweenRects = function (rect1, rect2) {
  return (rect1.right > rect2.x && rect1.right < rect2.right || rect1.x > rect2.x && rect1.x < rect2.right) && (rect1.bottom > rect2.y && rect1.bottom < rect2.bottom || rect1.y < rect2.bottom && rect1.bottom > rect2.y);
};

Collision.prototype.pointCircle = function (point1, point2, circle) {
  return Math.pow(point1 - circle.x, 2) + Math.pow(point2 - circle.y, 2) < Math.pow(circle.r, 2);
};

Collision.prototype.betweenCircles = function (circle1, circle2) {
  return Math.pow(circle1.x - circle2.x, 2) + Math.pow(circle1.y - circle2.y, 2) < Math.pow(circle1.r + circle2.r, 2);
};

module.exports = Collision;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var RenderObjectModel = __webpack_require__(1);

/**
 * @class pillow.Map Map.
 * @param {Object} options An object literal containing one or more of the following optional properties:
 */

function Map(cfg) {
  var that = this;
  that.cache = true;
  that.lock = false;
  that.source = {};
  Map.sup.call(that, cfg);
  _.merge(that, cfg);
  that.init();
}
var proto = {
  init: function init() {},
  clearCache: function clearCache() {
    var that = this;
    that.lock = false;
  },
  draw: function draw() {
    var that = this;
    var images = that.resource;
    _.each(that.matrix, function (i, x) {
      _.each(i, function (j, y) {
        that.context.drawImage(images[j].image, 0, 0, that.size.width, that.size.height, that.size.width * y, that.size.height * x, that.size.width, that.size.height);
      });
    });
    that.mapCache = {};
    if (that.cache) {
      that.lock = true;
    }
  }
};

_.augment(Map, proto);
_.inherit(Map, RenderObjectModel);

module.exports = Map;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @class pillow.Math Math.
 * @param {Object} options An object literal containing one or more of the following optional properties:
 */

var _Math = {
  getRandom: function getRandom(min, max) {
    return Math.random() * (max - min + 1) + min;
  },
  hexToRgb: function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  },
  degToRad: function degToRad(deg) {
    return (deg + 360) % 360 * (Math.PI / 180);
  }
};

module.exports = _Math;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var Notify = __webpack_require__(3);

/**
 * @class pillow.SourceLoader SourceLoader.
 * @param {Object} options An object literal containing one or more of the following optional properties:
 */

function SourceLoader(cfg) {
  var that = this;
  that.hash = {};
  SourceLoader.sup.call(that, cfg);
  _.merge(that, cfg);
}

var proto = {
  load: function load(query) {
    var that = this;
    that.num = 0;
    that.query = query;
    _.each(that.query, function (i) {
      that.imageLoader(i);
    });
  },
  imageLoader: function imageLoader(item) {
    var that = this;
    var image = new Image();

    if (!/^data:/.test(item.src) && item.crossOrigin !== false) {
      image.crossOrigin = item.crossOrigin === true ? '*' : item.crossOrigin || '*';
    }

    image.onload = function () {
      var id = item.id;
      that.hash[id] = _.extend({}, item, {
        image: image,
        width: image.width,
        height: image.height
      });
      that.num++;
      that.emit('loaded', _.extend({}, item, {
        number: that.num,
        id: id,
        image: that.hash[id]
      }));

      if (that.num === that.getSize()) {
        that.emit('success', that.hash);
      }
    };
    image.src = item.src;
  },
  getSize: function getSize() {
    return this.query.length;
  }
};

_.augment(SourceLoader, proto);
_.inherit(SourceLoader, Notify);

module.exports = SourceLoader;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);

/**
 * @class pillow.Vector2d Vector2d.
 * @param {Object} options An object literal containing one or more of the following optional properties:
 */

function Vector2d(x, y) {
  this.x = x || 0;
  this.y = y || 0;
}
var proto = {
  initialize: function initialize(x, y) {
    this.x = x;
    this.y = y;
  },
  set: function set(other) {
    this.x = other.x;
    this.y = other.y;
    return this;
  },
  setArray: function setArray(arr) {
    this.x = arr[0];
    this.y = arr[1];
    return this;
  },
  setCoords: function setCoords(x, y) {
    this.x = x;
    this.y = y;
    return this;
  },
  get: function get() {
    return new Vector2d(this.x, this.y);
  },
  mag: function mag() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  },
  add: function add(other) {
    this.x += other.x;
    this.y += other.y;
    return this;
  },
  addArray: function addArray(arr) {
    this.x += arr[0];
    this.y += arr[1];
    return this;
  },
  addCoords: function addCoords(x, y) {
    this.x += x;
    this.y += y;
    return this;
  },
  sub: function sub(other) {
    this.x -= other.x;
    this.y -= other.y;
    return this;
  },
  subArray: function subArray(arr) {
    this.x -= arr[0];
    this.y -= arr[1];
    return this;
  },
  subCoords: function subCoords(x, y) {
    this.x -= x;
    this.y -= y;
    return this;
  },
  mult: function mult(n) {
    this.x *= n;
    this.y *= n;
    return this;
  },
  scale: function scale(n) {
    this.mult(n);
    return this;
  },
  multVec: function multVec(other) {
    this.x *= other.x;
    this.y *= other.y;
    return this;
  },
  div: function div(n) {
    this.x /= n;
    this.y /= n;
    return this;
  },
  divVec: function divVec(other) {
    this.x /= other.x;
    this.y /= other.y;
    return this;
  },
  dist: function dist(other) {
    var dx = this.x - other.x;
    var dy = this.y - other.y;
    return Math.sqrt(dx * dx + dy * dy);
  },
  dot: function dot(other) {
    return this.x * other.x + this.y * other.y;
  },
  dotCoords: function dotCoords(x, y) {
    return this.x * x + this.y + y;
  },
  normalize: function normalize() {
    var m = this.mag();
    if (m !== 0 && m !== 1) {
      this.div(m);
    }
    return this;
  },
  limit: function limit(max) {
    if (this.mag() > max) {
      this.normalize();
      this.mult(max);
    }
    return this;
  },
  heading2d: function heading2d(x, y) {
    var angle = Math.atan2(-y, x);
    return -1 * angle;
  },
  rotate: function rotate(rads) {
    var s = Math.sin(rads);
    var c = Math.cos(rads);
    var xrot = c * this.x - s * this.y;
    this.y = s * this.x + c * this.y;
    this.x = xrot;
    return this;
  },
  angle: function angle(other) {
    return Math.acos(this.dot(other) / (this.mag() * other.mag()));
  },
  normal: function normal() {
    var temp = this.vector.x;
    this.x = -this.vector.y;
    this.y = temp;
    return this;
  },
  random: function random(mag) {
    this.x = Math.random();
    this.y = Math.random();
    if (mag) this.scale(mag);
    return this;
  },
  zero: function zero() {
    this.x = 0;
    this.y = 0;
  },
  equals: function equals(other) {
    return this.x === other.x && this.y === other.y;
  },
  toString: function toString() {
    return '[' + this.x + ',' + this.y + ']';
  }
};

_.augment(Vector2d, proto);

Vector2d.add = function (one, other) {
  var vec = new Vector2d();
  vec.setCoords(one.x + other.x, one.y + other.y);
  return vec;
};

Vector2d.sub = function (one, other) {
  var vec = new Vector2d();
  vec.setCoords(one.x - other.x, one.y - other.y);
  return vec;
};

Vector2d.dist = function (one, other) {
  var dx = one.x - other.x;
  var dy = one.y - other.y;
  return Math.sqrt(dx * dx + dy * dy);
};

Vector2d.random = function (mag) {
  var vec = new Vector2d(Math.random(), Math.random());
  if (mag) vec.scale(mag);
  return vec;
};

Vector2d.mult = function (one, scalar) {
  var vec = new Vector2d(one.x, one.y);
  vec.x *= scalar;
  vec.y *= scalar;
  return vec;
};

Vector2d.normal = function (vec) {
  return new Vector2d(-vec.y, vec.x);
};

Vector2d.normalize = function (vec) {
  var v = new Vector2d(vec.x, vec.y);
  var m = v.mag();
  if (m !== 0 && m !== 1) {
    v.div(m);
  }
  return v;
};

Vector2d.componentVector = function (vec, directionVec) {
  directionVec.normalize();
  directionVec.mult(vec.dot(directionVec));
  return directionVec;
};

module.exports = Vector2d;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _pillowjs = __webpack_require__(2);

var pillow = _interopRequireWildcard(_pillowjs);

var _timer = __webpack_require__(10);

var _timer2 = _interopRequireDefault(_timer);

var _loader = __webpack_require__(9);

var _loader2 = _interopRequireDefault(_loader);

var isMobile = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(navigator.userAgent);

var Screen = pillow.Screen;
var Mouse = pillow.Mouse;
var Img = pillow.Img;
var RenderObjectModel = pillow.RenderObjectModel;

var math = pillow.Math;

var canvas = document.getElementById('screen');
var canvasW = 1000;
var canvasH = 600;
canvas.width = canvasW;
canvas.height = canvasH;

var screen = new Screen({
  container: canvas,
  width: canvasW,
  height: canvasH,
  x: 0,
  y: 0
});

screen.update(function () {});

_loader2['default'].ready(function (resource) {

  var height = canvasH - resource['logo'].height;
  var num = 20;
  while (num--) {
    var container = new RenderObjectModel({
      x: 0,
      y: 0,
      width: resource['logo'].width,
      height: resource['logo'].height,
      debug: true,
      scaleX: 1,
      scaleY: 1,
      speed: math.getRandom(0, 10) / 10,
      speedX: math.getRandom(10, 100) / 10,
      vspeed: math.getRandom(0, 10) / 10
    });

    screen.append(container);

    var image = new Img({
      x: 0,
      y: 0,
      width: resource['logo'].width,
      height: resource['logo'].height,
      image: resource['logo'].image,
      debug: true
    });

    container.append(image);

    container.update(function () {
      this.x += this.speedX;
      if (Math.abs(this.speed) <= 5 && this.y > height - 10) {
        this.y = height;
        this.speed = 0;
        return;
      } else {
        if (this.speed <= 0) {
          this.vspeed = 1;
        }

        if (this.y >= height) {
          this.vspeed = -this.vspeed;
          this.speed = -this.speed + 5;
        }
        this.speed += this.vspeed;
        this.y += this.speed;
      }
    });

    image.on(isMobile ? 'touchstart' : 'mousedown', function () {
      this.scaleY += 0.1;
      this.scaleX += 0.1;
    });
  }

  new Mouse({
    screen: screen
  });

  var timer = (0, _timer2['default'])(function () {
    screen.run();
  });
});

/***/ })
/******/ ]);