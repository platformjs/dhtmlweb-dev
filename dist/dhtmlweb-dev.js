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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../dhtmlweb/src/util/ErrorMessage.js":
/*!********************************************!*\
  !*** ../dhtmlweb/src/util/ErrorMessage.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = {\n    OUT_OF_BOUND: \"the index is out of bound\",\n    UN_SUPPORTED_ROW_TYPE: \"the row type offered are not supported\"\n};\n\n//# sourceURL=webpack:///../dhtmlweb/src/util/ErrorMessage.js?");

/***/ }),

/***/ "../dhtmlweb/src/util/Log.js":
/*!***********************************!*\
  !*** ../dhtmlweb/src/util/Log.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = {\n    debug: function debug() {\n        if (window && window.console) {\n            var _window$console;\n\n            (_window$console = window.console).debug.apply(_window$console, arguments);\n        }\n    },\n    info: function info() {\n        if (window && window.console) {\n            var _window$console2;\n\n            (_window$console2 = window.console).info.apply(_window$console2, arguments);\n        }\n    },\n    warn: function warn() {\n        if (window && window.console) {\n            var _window$console3;\n\n            (_window$console3 = window.console).warn.apply(_window$console3, arguments);\n        }\n    },\n    error: function error() {\n        if (window && window.console) {\n            var _window$console4;\n\n            (_window$console4 = window.console).error.apply(_window$console4, arguments);\n        }\n    }\n};\n\n//# sourceURL=webpack:///../dhtmlweb/src/util/Log.js?");

/***/ }),

/***/ "../dhtmlweb/src/util/Util.js":
/*!************************************!*\
  !*** ../dhtmlweb/src/util/Util.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _ErrorMessage = __webpack_require__(/*! ./ErrorMessage */ \"../dhtmlweb/src/util/ErrorMessage.js\");\n\nvar _ErrorMessage2 = _interopRequireDefault(_ErrorMessage);\n\nvar _Log = __webpack_require__(/*! ./Log */ \"../dhtmlweb/src/util/Log.js\");\n\nvar _Log2 = _interopRequireDefault(_Log);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nexports.default = {\n    reduce: function reduce(str, leftCount, rightCount) {\n        if (typeof str !== \"string\") {\n            throw new Error(\"Not supported to be reduced\");\n        }\n        leftCount = leftCount || 0;\n        rightCount = rightCount || 0;\n        return str.substring(leftCount, str.length - rightCount);\n    },\n    startWith: function startWith(str, prefix) {\n        _Log2.default.debug(\"startWith\", str, prefix);\n        if (typeof str === \"string\") {\n            return str.indexOf(prefix) === 0;\n        }\n        return false;\n    },\n    endWith: function endWith(str, suffix) {\n        _Log2.default.debug(\"endWith\", str, suffix);\n        if (typeof str === \"string\") {\n            return str.split(\"\").reverse().join(\"\").indexOf(suffix.split(\"\").reverse().join(\"\")) === 0;\n        }\n        return false;\n    },\n    each: function each(collection, callback) {\n        _Log2.default.debug.apply(_Log2.default, [\"each\"].concat(Array.prototype.slice.call(arguments)));\n        callback = callback || function () {};\n        if (Array.isArray(collection)) {\n            for (var i = 0, n = collection.length; i < n; i++) {\n                var continuing = callback(collection[i], i, collection);\n                if (continuing === false) {\n                    break;\n                }\n            }\n        } else {\n            var hash = collection;\n            for (var p in hash) {\n                var _continuing = callback(hash[p], p, hash);\n                if (_continuing === false) {\n                    break;\n                }\n            }\n        }\n    },\n    eachRight: function eachRight(collection, callback) {\n        _Log2.default.debug.apply(_Log2.default, [\"eachRight\"].concat(Array.prototype.slice.call(arguments)));\n        callback = callback || function () {};\n        var n = collection.length;\n        for (var i = n - 1; i >= 0; i--) {\n            var continuing = callback(collection[i], i, collection);\n            if (continuing === false) {\n                break;\n            }\n        }\n    },\n    toHash: function toHash(collection, id) {\n        _Log2.default.debug.apply(_Log2.default, [\"toHash\"].concat(Array.prototype.slice.call(arguments)));\n        var hash = {};\n        for (var i = 0, n = collection.length; i < n; i++) {\n            var item = collection[i];\n            if (typeof id === \"function\") {\n                hash[id(item)] = item;\n            } else {\n                hash[item[id]] = item;\n            }\n        }\n        return hash;\n    },\n    insert: function insert(collection, items, index) {\n        _Log2.default.debug.apply(_Log2.default, [\"insert\"].concat(Array.prototype.slice.call(arguments)));\n        if (!Array.isArray(items)) {\n            items = [items];\n        }\n        if (isNaN(index) || index === null || index === undefined || index === collection.length) {\n            this.each(items, function (item) {\n                collection.push(item);\n            });\n        } else if (index === 0) {\n            this.eachRight(items, function (item) {\n                collection.unshift(item);\n            });\n        } else if (index > collection.length) {\n            throw new Error(_ErrorMessage2.default.OUT_OF_BOUND);\n        } else {\n            collection.splice.apply(collection, [index, 0].concat(_toConsumableArray(items)));\n        }\n    },\n    equal: function equal(left, right, operator) {\n        operator = operator || \"==\";\n        if (operator == \"===\") {\n            return left === right;\n        } else {\n            if (left === null || right === null) {\n                return left == right;\n            }\n            if (left === undefined || right === undefined) {\n                return left == right;\n            }\n            if ((typeof left === \"undefined\" ? \"undefined\" : _typeof(left)) === \"object\") {\n                if ((typeof right === \"undefined\" ? \"undefined\" : _typeof(right)) === \"object\") {\n                    return JSON.stringify(left) == JSON.stringify(right);\n                } else {\n                    return false;\n                }\n            } else if ((typeof right === \"undefined\" ? \"undefined\" : _typeof(right)) === \"object\") {\n                if ((typeof left === \"undefined\" ? \"undefined\" : _typeof(left)) === \"object\") {\n                    return JSON.stringify(left) == JSON.stringify(right);\n                } else {\n                    return false;\n                }\n            } else {\n                return left == right;\n            }\n        }\n    },\n    guid: function guid() {\n        var d = new Date().getTime();\n        var id = \"aaaaaaaa-aaaa-aaaa-baaa-aaaaaaaaaaaa\".replace(/[ab]/g, function (c) {\n            var r = (d + Math.random() * 16) % 16 | 0;\n            d = Math.floor(d / 16);\n            return (c == \"a\" ? r : r & 0x7 | 0x8).toString(16);\n        });\n        return id;\n    },\n    remove: function remove(collection, index) {\n        if (index === null || index === undefined || isNaN(index) || index < 0 || index >= collection.length) {\n            throw new Error(\"incorrect index for remove: \", index, collection);\n        } else {\n            collection.splice(index, 1);\n        }\n    },\n    find: function find(collection, call) {\n        var foundObject = void 0;\n        this.each(collection, function (item) {\n            if (call(item)) {\n                foundObject = item;\n                //break the loop\n                return false;\n            }\n        });\n        return foundObject;\n    },\n    isArray: function isArray(value) {\n        return Array.isArray(value);\n    },\n    isPlainObject: function isPlainObject(value) {\n        return value && typeof value === \"string\";\n    },\n    isString: function isString(value) {\n        return typeof vlaue === \"string\";\n    },\n    isUndefined: function isUndefined(value) {\n        return typeof value === \"undefined\";\n    },\n    isNull: function isNull(value) {\n        return !value && _typeof(null) === \"object\";\n    }\n};\n\n//# sourceURL=webpack:///../dhtmlweb/src/util/Util.js?");

/***/ }),

/***/ "./pkg.js":
/*!****************!*\
  !*** ./pkg.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _ComponentPalette = __webpack_require__(/*! ./src/ComponentPalette.js */ \"./src/ComponentPalette.js\");\n\nvar _ComponentPalette2 = _interopRequireDefault(_ComponentPalette);\n\nvar _ComponentProxy = __webpack_require__(/*! ./src/ComponentProxy.js */ \"./src/ComponentProxy.js\");\n\nvar _ComponentProxy2 = _interopRequireDefault(_ComponentProxy);\n\nvar _Designer = __webpack_require__(/*! ./src/Designer.js */ \"./src/Designer.js\");\n\nvar _Designer2 = _interopRequireDefault(_Designer);\n\nvar _Editor = __webpack_require__(/*! ./src/Editor.js */ \"./src/Editor.js\");\n\nvar _Editor2 = _interopRequireDefault(_Editor);\n\nvar _EventEditor = __webpack_require__(/*! ./src/EventEditor.js */ \"./src/EventEditor.js\");\n\nvar _EventEditor2 = _interopRequireDefault(_EventEditor);\n\nvar _Ext = __webpack_require__(/*! ./src/ext/Ext.js */ \"./src/ext/Ext.js\");\n\nvar _Ext2 = _interopRequireDefault(_Ext);\n\nvar _LayoutDataEditor = __webpack_require__(/*! ./src/LayoutDataEditor.js */ \"./src/LayoutDataEditor.js\");\n\nvar _LayoutDataEditor2 = _interopRequireDefault(_LayoutDataEditor);\n\nvar _LayoutEditor = __webpack_require__(/*! ./src/LayoutEditor.js */ \"./src/LayoutEditor.js\");\n\nvar _LayoutEditor2 = _interopRequireDefault(_LayoutEditor);\n\nvar _common = __webpack_require__(/*! ./src/meta/common.js */ \"./src/meta/common.js\");\n\nvar _common2 = _interopRequireDefault(_common);\n\nvar _componentsmeta = __webpack_require__(/*! ./src/meta/componentsmeta.js */ \"./src/meta/componentsmeta.js\");\n\nvar _componentsmeta2 = _interopRequireDefault(_componentsmeta);\n\nvar _Outline = __webpack_require__(/*! ./src/Outline.js */ \"./src/Outline.js\");\n\nvar _Outline2 = _interopRequireDefault(_Outline);\n\nvar _PropertyEditor = __webpack_require__(/*! ./src/PropertyEditor.js */ \"./src/PropertyEditor.js\");\n\nvar _PropertyEditor2 = _interopRequireDefault(_PropertyEditor);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  ComponentPalette: _ComponentPalette2.default,\n  ComponentProxy: _ComponentProxy2.default,\n  Designer: _Designer2.default,\n  Editor: _Editor2.default,\n  EventEditor: _EventEditor2.default,\n  ext: {\n    Ext: _Ext2.default\n  },\n  LayoutDataEditor: _LayoutDataEditor2.default,\n  LayoutEditor: _LayoutEditor2.default,\n  meta: {\n    common: _common2.default,\n    componentsmeta: _componentsmeta2.default\n  },\n  Outline: _Outline2.default,\n  PropertyEditor: _PropertyEditor2.default\n};\n\n//# sourceURL=webpack:///./pkg.js?");

/***/ }),

/***/ "./src/ComponentPalette.js":
/*!*********************************!*\
  !*** ./src/ComponentPalette.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ComponentPalette = function (_dweb$component$Panel) {\n    _inherits(ComponentPalette, _dweb$component$Panel);\n\n    function ComponentPalette(editor, componentMetas) {\n        _classCallCheck(this, ComponentPalette);\n\n        var _this = _possibleConstructorReturn(this, (ComponentPalette.__proto__ || Object.getPrototypeOf(ComponentPalette)).call(this));\n\n        _this.set({\n            title: \"Component Palette\",\n            width: 400,\n            height: 300\n        });\n        _this.editor = editor;\n        _this.componentMetas = componentMetas;\n\n        var layout = new dweb.layout.GridLayout({\n            numberOfColumn: 1\n        });\n        _this.setLayout(layout);\n\n        var btns = [];\n        dweb.util.Util.each(componentMetas, function (meta) {\n            var btn = new dweb.component.Button();\n            btn.set({\n                title: meta.clazz,\n                clazz: meta.clazz,\n                disabled: true\n            });\n            btn.bind(\"html.click\", function (b) {\n                _this.editor.addComponent(b.get(\"clazz\"));\n            });\n            btns.push(btn);\n        });\n        _this.addComponents(btns);\n        return _this;\n    }\n\n    _createClass(ComponentPalette, [{\n        key: \"enableComponents\",\n        value: function enableComponents() {\n            dweb.util.Util.each(this.components, function (comp) {\n                return comp.set({ disabled: false });\n            });\n        }\n    }, {\n        key: \"disableComponents\",\n        value: function disableComponents() {\n            dweb.util.Util.each(this.components, function (comp) {\n                return comp.set({ disabled: true });\n            });\n        }\n    }]);\n\n    return ComponentPalette;\n}(dweb.component.Panel);\n\nexports.default = ComponentPalette;\n\n//# sourceURL=webpack:///./src/ComponentPalette.js?");

/***/ }),

/***/ "./src/ComponentProxy.js":
/*!*******************************!*\
  !*** ./src/ComponentProxy.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ComponentProxy = function () {\n    function ComponentProxy() {\n        _classCallCheck(this, ComponentProxy);\n\n        this.$top = $(\"<div></div>\");\n        this.$right = $(\"<div></div>\");\n        this.$bottom = $(\"<div></div>\");\n        this.$left = $(\"<div></div>\");\n\n        this.$top.appendTo(\"body\");\n        this.$right.appendTo(\"body\");\n        this.$bottom.appendTo(\"body\");\n        this.$left.appendTo(\"body\");\n    }\n\n    _createClass(ComponentProxy, [{\n        key: \"highlight\",\n        value: function highlight(component) {\n            this.component = component;\n            var position = this.component.$el.offset();\n            var width = this.component.$el.outerWidth();\n            var height = this.component.$el.outerHeight();\n\n            this.$top.css({\n                width: width,\n                height: \"1px\",\n                top: position.top,\n                left: position.left,\n                background: \"blue\",\n                position: \"absolute\"\n            });\n            this.$right.css({\n                width: \"1px\",\n                height: height,\n                top: position.top,\n                left: position.left + width,\n                background: \"blue\",\n                position: \"absolute\"\n            });\n            this.$bottom.css({\n                width: width,\n                height: \"1px\",\n                top: position.top + height,\n                left: position.left,\n                background: \"blue\",\n                position: \"absolute\"\n            });\n            this.$left.css({\n                width: \"1px\",\n                height: height,\n                top: position.top,\n                left: position.left,\n                background: \"blue\",\n                position: \"absolute\"\n            });\n        }\n    }]);\n\n    return ComponentProxy;\n}();\n\nexports.default = ComponentProxy;\n\n//# sourceURL=webpack:///./src/ComponentProxy.js?");

/***/ }),

/***/ "./src/Designer.js":
/*!*************************!*\
  !*** ./src/Designer.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Designer = function (_dweb$component$Conta) {\n    _inherits(Designer, _dweb$component$Conta);\n\n    function Designer(meta, editor) {\n        _classCallCheck(this, Designer);\n\n        var _this = _possibleConstructorReturn(this, (Designer.__proto__ || Object.getPrototypeOf(Designer)).call(this));\n\n        _this.editor = editor;\n        _this.meta = meta;\n        _this.set({\n            width: 500,\n            height: 500\n        });\n        _this.addComponents(dweb.generator.ComponentCreator.create(_this.meta));\n        // this.bind(\"html.mousemove\", (container, evt) => {\n        //     clearTimeout(this.timeoutHandler);\n        //     this.timeoutHandler = setTimeout(() => {\n        //         let $target = $(evt.target);\n        //         while($target.length) {\n        //             const id = $target.attr(\"id\");\n        //             if (id) {\n        //                 this.editor.hoverComponent(id);    \n        //                 break;\n        //             }\n        //             $target = $target.parent();\n        //         }\n        //     }, 50);\n        // });\n        _this.bind(\"html.mousedown\", function (container, evt) {\n            var $target = $(evt.target);\n            while ($target.length) {\n                var id = $target.attr(\"id\");\n                if (id) {\n                    _this.editor.selectComponent(id);\n                    break;\n                }\n                $target = $target.parent();\n            }\n        });\n        return _this;\n    }\n\n    _createClass(Designer, [{\n        key: \"getComponentById\",\n        value: function getComponentById(id) {\n            var components = [].concat(this.components);\n            while (components.length) {\n                var component = components.shift();\n                if (id === component.get(\"id\")) {\n                    return component;\n                }\n                if (component.components) {\n                    components = components.concat(component.components);\n                }\n            }\n        }\n    }, {\n        key: \"selectComponent\",\n        value: function selectComponent(component) {}\n    }]);\n\n    return Designer;\n}(dweb.component.Container);\n\nexports.default = Designer;\n\n//# sourceURL=webpack:///./src/Designer.js?");

/***/ }),

/***/ "./src/Editor.js":
/*!***********************!*\
  !*** ./src/Editor.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Designer = __webpack_require__(/*! ./Designer */ \"./src/Designer.js\");\n\nvar _Designer2 = _interopRequireDefault(_Designer);\n\nvar _Outline = __webpack_require__(/*! ./Outline */ \"./src/Outline.js\");\n\nvar _Outline2 = _interopRequireDefault(_Outline);\n\nvar _PropertyEditor = __webpack_require__(/*! ./PropertyEditor */ \"./src/PropertyEditor.js\");\n\nvar _PropertyEditor2 = _interopRequireDefault(_PropertyEditor);\n\nvar _EventEditor = __webpack_require__(/*! ./EventEditor */ \"./src/EventEditor.js\");\n\nvar _EventEditor2 = _interopRequireDefault(_EventEditor);\n\nvar _LayoutEditor = __webpack_require__(/*! ./LayoutEditor */ \"./src/LayoutEditor.js\");\n\nvar _LayoutEditor2 = _interopRequireDefault(_LayoutEditor);\n\nvar _LayoutDataEditor = __webpack_require__(/*! ./LayoutDataEditor */ \"./src/LayoutDataEditor.js\");\n\nvar _LayoutDataEditor2 = _interopRequireDefault(_LayoutDataEditor);\n\nvar _ComponentPalette = __webpack_require__(/*! ./ComponentPalette */ \"./src/ComponentPalette.js\");\n\nvar _ComponentPalette2 = _interopRequireDefault(_ComponentPalette);\n\nvar _ComponentProxy = __webpack_require__(/*! ./ComponentProxy */ \"./src/ComponentProxy.js\");\n\nvar _ComponentProxy2 = _interopRequireDefault(_ComponentProxy);\n\nvar _componentsmeta = __webpack_require__(/*! ./meta/componentsmeta */ \"./src/meta/componentsmeta.js\");\n\nvar _componentsmeta2 = _interopRequireDefault(_componentsmeta);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Editor = function (_dweb$component$Conta) {\n    _inherits(Editor, _dweb$component$Conta);\n\n    function Editor(path, meta) {\n        _classCallCheck(this, Editor);\n\n        var _this = _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).call(this));\n\n        _this.path = path;\n        _this.meta = meta;\n\n        _this.componentProxy = new _ComponentProxy2.default();\n        _this.designer = new _Designer2.default(_this.meta, _this);\n        _this.outline = new _Outline2.default(_this.meta, _this);\n        _this.propertyEditor = new _PropertyEditor2.default(_this);\n        _this.layoutEditor = new _LayoutEditor2.default();\n        _this.layoutDataEditor = new _LayoutDataEditor2.default();\n        _this.componentPalette = new _ComponentPalette2.default(_this, _this.getAvailableComponents());\n\n        _this.container = new dweb.component.Container();\n        _this.container.addComponents([_this.outline, _this.propertyEditor, _this.layoutEditor, _this.layoutDataEditor, _this.componentPalette]);\n\n        _this.addComponents([_this.designer, _this.container]);\n        _this.setLayout(new dweb.layout.GridLayout({\n            numberOfColumn: 2\n        }));\n        return _this;\n    }\n\n    _createClass(Editor, [{\n        key: \"selectComponent\",\n        value: function selectComponent(id) {\n            var component = this.designer.getComponentById(id);\n            if (!component) {\n                return;\n            }\n            this.selectedComponent = component;\n            this.highlightComponent(component);\n            dweb.util.Log.debug(\"select component on \" + id, component);\n            this.designer.selectComponent(component);\n            this.outline.selectComponent(component);\n            this.propertyEditor.selectComponent(component);\n\n            if (this.isContainer(component)) {\n                this.componentPalette.enableComponents();\n            } else {\n                this.componentPalette.disableComponents();\n            }\n        }\n    }, {\n        key: \"save\",\n        value: function save() {}\n    }, {\n        key: \"undo\",\n        value: function undo() {}\n    }, {\n        key: \"redo\",\n        value: function redo() {}\n    }, {\n        key: \"highlightComponent\",\n        value: function highlightComponent(component) {\n            this.componentProxy.highlight(component);\n        }\n    }, {\n        key: \"getEditProperties\",\n        value: function getEditProperties(component) {\n            var meta = this.getComponentMeta(component.get(\"clazz\"));\n            if (!meta) {\n                dweb.util.Log.warn(\"No such component \" + component.get(\"clazz\") + \" is defined!\");\n                return [];\n            }\n            var props = [];\n            dweb.util.Util.each(meta.attr, function (value, key) {\n                props.push({\n                    name: key,\n                    text: value.text,\n                    type: value.type,\n                    readonly: value.readonly\n                });\n            });\n            return props.sort(function (a, b) {\n                return a.text.localeCompare(b.text);\n            });\n        }\n    }, {\n        key: \"getAvailableComponents\",\n        value: function getAvailableComponents() {\n            var coms = [];\n            dweb.util.Util.each(_componentsmeta2.default.components, function (meta, clazz) {\n                coms.push({\n                    clazz: clazz,\n                    type: meta.type,\n                    icon: meta.icon\n                });\n            });\n            return coms;\n        }\n    }, {\n        key: \"getComponentMeta\",\n        value: function getComponentMeta(clazz) {\n            return _componentsmeta2.default.components[clazz];\n        }\n    }, {\n        key: \"addComponent\",\n        value: function addComponent(clazz) {\n            var Clazz = dweb.generator.ComponentCreator.getClassFromPath(clazz);\n            var obj = new Clazz();\n            obj.set({\n                clazz: clazz\n            });\n            if (this.isContainer(this.selectedComponent)) {\n                this.selectedComponent.addComponents(obj);\n                this.outline.addComponent(this.selectedComponent.get(\"id\"), obj);\n            }\n        }\n    }, {\n        key: \"isContainer\",\n        value: function isContainer(component) {\n            return component && component.getLayout;\n        }\n    }]);\n\n    return Editor;\n}(dweb.component.Container);\n\nexports.default = Editor;\n\n//# sourceURL=webpack:///./src/Editor.js?");

/***/ }),

/***/ "./src/EventEditor.js":
/*!****************************!*\
  !*** ./src/EventEditor.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Util = __webpack_require__(/*! ../../dhtmlweb/src/util/Util */ \"../dhtmlweb/src/util/Util.js\");\n\nvar _Util2 = _interopRequireDefault(_Util);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar EventEditor = function () {\n    function EventEditor() {\n        _classCallCheck(this, EventEditor);\n    }\n\n    _createClass(EventEditor, [{\n        key: \"render\",\n        value: function render() {\n            this.panel = new dweb.component.Panel();\n            this.panel.set({\n                title: \"Events\",\n                width: 400,\n                height: 300\n            });\n            this.$el = $(\"<div></div>\");\n            this.$el.html(this.panel.render().$el);\n            return this;\n        }\n    }]);\n\n    return EventEditor;\n}();\n\nexports.default = EventEditor;\n\n//# sourceURL=webpack:///./src/EventEditor.js?");

/***/ }),

/***/ "./src/LayoutDataEditor.js":
/*!*********************************!*\
  !*** ./src/LayoutDataEditor.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _Util = __webpack_require__(/*! ../../dhtmlweb/src/util/Util */ \"../dhtmlweb/src/util/Util.js\");\n\nvar _Util2 = _interopRequireDefault(_Util);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar LayoutDataEditor = function (_dweb$component$Panel) {\n    _inherits(LayoutDataEditor, _dweb$component$Panel);\n\n    function LayoutDataEditor() {\n        _classCallCheck(this, LayoutDataEditor);\n\n        var _this = _possibleConstructorReturn(this, (LayoutDataEditor.__proto__ || Object.getPrototypeOf(LayoutDataEditor)).call(this));\n\n        _this.set({\n            title: \"Layout Data\",\n            width: 400,\n            height: 300\n        });\n        return _this;\n    }\n\n    return LayoutDataEditor;\n}(dweb.component.Panel);\n\nexports.default = LayoutDataEditor;\n\n//# sourceURL=webpack:///./src/LayoutDataEditor.js?");

/***/ }),

/***/ "./src/LayoutEditor.js":
/*!*****************************!*\
  !*** ./src/LayoutEditor.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _Util = __webpack_require__(/*! ../../dhtmlweb/src/util/Util */ \"../dhtmlweb/src/util/Util.js\");\n\nvar _Util2 = _interopRequireDefault(_Util);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar LayoutEditor = function (_dweb$component$Panel) {\n    _inherits(LayoutEditor, _dweb$component$Panel);\n\n    function LayoutEditor() {\n        _classCallCheck(this, LayoutEditor);\n\n        var _this = _possibleConstructorReturn(this, (LayoutEditor.__proto__ || Object.getPrototypeOf(LayoutEditor)).call(this));\n\n        _this.set({\n            title: \"Layout\",\n            width: 400,\n            height: 300\n        });\n        return _this;\n    }\n\n    return LayoutEditor;\n}(dweb.component.Panel);\n\nexports.default = LayoutEditor;\n\n//# sourceURL=webpack:///./src/LayoutEditor.js?");

/***/ }),

/***/ "./src/Outline.js":
/*!************************!*\
  !*** ./src/Outline.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Util = __webpack_require__(/*! ../../dhtmlweb/src/util/Util */ \"../dhtmlweb/src/util/Util.js\");\n\nvar _Util2 = _interopRequireDefault(_Util);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Outline = function (_dweb$component$Panel) {\n    _inherits(Outline, _dweb$component$Panel);\n\n    function Outline(meta, editor) {\n        _classCallCheck(this, Outline);\n\n        var _this = _possibleConstructorReturn(this, (Outline.__proto__ || Object.getPrototypeOf(Outline)).call(this));\n\n        _this.editor = editor;\n        _this.meta = meta;\n        _this.set({\n            title: \"Outline\",\n            width: 400,\n            height: 300\n        });\n        var tree = _this.tree = new dweb.component.Tree();\n        tree.bind(\"beforeComponentRender\", function () {\n            tree.setData(_this.getTreeData());\n        });\n        _this.addComponents(tree);\n        tree.bind(\"afterSelected\", function (tree, id) {\n            _this.editor.selectComponent(id);\n        });\n        return _this;\n    }\n\n    _createClass(Outline, [{\n        key: \"getTreeData\",\n        value: function getTreeData() {\n            var data = {\n                items: []\n            };\n            var dataItems = [this.meta];\n            this.extract(data.items, dataItems);\n            return data;\n        }\n    }, {\n        key: \"extract\",\n        value: function extract(items, dataItems) {\n            var _this2 = this;\n\n            _Util2.default.each(dataItems, function (dataItem) {\n                var item = {\n                    id: dataItem.attr.id,\n                    name: dataItem.attr.clazz\n                };\n                if (dataItem.components) {\n                    item.expanded = true;\n                    item.items = [];\n                    _this2.extract(item.items, dataItem.components);\n                }\n                items.push(item);\n            });\n        }\n    }, {\n        key: \"selectComponent\",\n        value: function selectComponent(component) {\n            this.components[0].select(component.get(\"id\"));\n        }\n    }, {\n        key: \"addComponent\",\n        value: function addComponent(parentId, component) {\n            this.tree.addItem(parentId, {\n                id: component.get(\"id\"),\n                name: component.get(\"clazz\")\n            });\n        }\n    }]);\n\n    return Outline;\n}(dweb.component.Panel);\n\nexports.default = Outline;\n\n//# sourceURL=webpack:///./src/Outline.js?");

/***/ }),

/***/ "./src/PropertyEditor.js":
/*!*******************************!*\
  !*** ./src/PropertyEditor.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Util = dweb.util.Util;\n\nvar PropertyEditor = function (_dweb$component$Panel) {\n    _inherits(PropertyEditor, _dweb$component$Panel);\n\n    function PropertyEditor(editor) {\n        _classCallCheck(this, PropertyEditor);\n\n        var _this = _possibleConstructorReturn(this, (PropertyEditor.__proto__ || Object.getPrototypeOf(PropertyEditor)).call(this));\n\n        _this.editor = editor;\n        _this.set({\n            title: \"Properties\",\n            width: 400,\n            height: 300\n        });\n        var gridLayout = new dweb.layout.GridLayout({\n            numberOfColumn: 2\n        });\n        _this.setLayout(gridLayout);\n        _this.watchers = [];\n        return _this;\n    }\n\n    _createClass(PropertyEditor, [{\n        key: \"getEditProperties\",\n        value: function getEditProperties() {\n            return this.editor.getEditProperties(this.editComponent);\n        }\n    }, {\n        key: \"showProperties\",\n        value: function showProperties() {\n            var _this2 = this;\n\n            var props = this.getEditProperties();\n            this.clearComponents();\n            Util.each(props, function (prop) {\n                var label = new dweb.component.Label();\n                label.set({ title: prop.text });\n                var propEditor = _this2.getEditorComponent(prop);\n                _this2.addComponents([label, propEditor]);\n                _this2.watchers.push(new dweb.util.Watcher(_this2.editComponent, prop.name, propEditor, \"value\"));\n            });\n        }\n    }, {\n        key: \"getEditorComponent\",\n        value: function getEditorComponent(prop) {\n            var textField = new dweb.component.TextField();\n            textField.set({\n                value: this.editComponent.get(prop.name),\n                name: prop.name,\n                readonly: prop.readonly,\n                inputParser: prop.type\n            });\n            return textField;\n        }\n    }, {\n        key: \"cleanWatch\",\n        value: function cleanWatch() {\n            Util.each(this.watchers, function (watcher) {\n                return watcher.destroy();\n            });\n            this.watchers.length = 0;\n        }\n    }, {\n        key: \"selectComponent\",\n        value: function selectComponent(editComponent) {\n            this.editComponent = editComponent;\n            this.showProperties();\n        }\n    }]);\n\n    return PropertyEditor;\n}(dweb.component.Panel);\n\nexports.default = PropertyEditor;\n\n//# sourceURL=webpack:///./src/PropertyEditor.js?");

/***/ }),

/***/ "./src/ext/Ext.js":
/*!************************!*\
  !*** ./src/ext/Ext.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = {\n    select: {\n        events: {\n            beforeSelectOpen: function beforeSelectOpen(select) {\n                select.setData([{ value: \"yes\", text: \"Yes\" }, { value: \"no\", text: \"No\" }]);\n            }\n        }\n    },\n    button: {\n        events: {\n            \"html.click\": function htmlClick(btn) {\n                btn.doClick();\n            }\n        },\n        functions: {\n            doClick: function doClick() {\n                console.log(\"btn clicked\", this);\n            }\n        }\n    }\n};\n\n//# sourceURL=webpack:///./src/ext/Ext.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _pkg = __webpack_require__(/*! ../pkg */ \"./pkg.js\");\n\nvar _pkg2 = _interopRequireDefault(_pkg);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nif ((typeof window === \"undefined\" ? \"undefined\" : _typeof(window)) === \"object\") {\n    window.dwebDev = _pkg2.default;\n}\nexports.default = _pkg2.default;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/meta/common.js":
/*!****************************!*\
  !*** ./src/meta/common.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = {\n    id: {\n        type: \"string\",\n        text: \"ID\"\n    },\n    clazz: {\n        type: \"string\",\n        text: \"Class\",\n        readonly: true\n    },\n    width: {\n        type: \"string\",\n        text: \"Width\"\n    },\n    height: {\n        type: \"string\",\n        text: \"Height\"\n    },\n    disabled: {\n        type: \"boolean\",\n        text: \"Disabled\"\n    },\n    extend: {\n        type: \"string\",\n        text: \"Extend\"\n    }\n};\n\n//# sourceURL=webpack:///./src/meta/common.js?");

/***/ }),

/***/ "./src/meta/componentsmeta.js":
/*!************************************!*\
  !*** ./src/meta/componentsmeta.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _common = __webpack_require__(/*! ./common */ \"./src/meta/common.js\");\n\nvar _common2 = _interopRequireDefault(_common);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n    \"components\": {\n        \"dweb.component.Button\": {\n            type: \"COMPONENT\",\n            icon: \"\",\n            attr: $.extend(true, {}, _common2.default, {\n                title: {\n                    type: \"string\",\n                    text: \"Title\"\n                }\n            })\n        },\n        \"dweb.component.Panel\": {\n            type: \"COMPONENT\",\n            icon: \"\",\n            attr: $.extend(true, {}, _common2.default, {\n                title: {\n                    type: \"string\",\n                    text: \"Title\"\n                }\n            })\n        },\n        \"dweb.component.Select\": {\n            type: \"COMPONENT\",\n            icon: \"\",\n            attr: $.extend(true, {}, _common2.default, {\n                title: {\n                    type: \"string\",\n                    text: \"Title\"\n                },\n                text: {\n                    type: \"string\",\n                    text: \"Text\"\n                },\n                value: {\n                    type: \"string\",\n                    text: \"Value\"\n                }\n            })\n        },\n        \"dweb.component.TextField\": {\n            type: \"COMPONENT\",\n            icon: \"\",\n            attr: $.extend(true, {}, _common2.default, {\n                value: {\n                    type: \"string\",\n                    text: \"Value\"\n                },\n                formatter: {\n                    type: \"string\",\n                    text: \"Formatter\"\n                },\n                parser: {\n                    type: \"string\",\n                    text: \"Parser\"\n                },\n                pattern: {\n                    type: \"string\",\n                    text: \"Pattern\"\n                }\n            })\n        },\n        \"dweb.component.Label\": {\n            type: \"COMPONENT\",\n            icon: \"\",\n            attr: $.extend(true, {}, _common2.default, {\n                title: {\n                    type: \"string\",\n                    text: \"Title\"\n                }\n            })\n        },\n        \"dweb.component.Container\": {\n            type: \"CONTAINER\",\n            icon: \"\",\n            attr: $.extend(true, {}, _common2.default)\n        }\n    },\n    \"layouts\": {\n        \"dweb.layout.FlowLayout\": {\n            attr: {}\n        },\n        \"dweb.layout.GridLayout\": {\n            attr: {\n                numberOfColumn: {\n                    type: \"number\",\n                    text: \"N. of C.\"\n                }\n            }\n        }\n    }\n};\n\n//# sourceURL=webpack:///./src/meta/componentsmeta.js?");

/***/ })

/******/ });