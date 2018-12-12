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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/javascript/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/javascript/main.js":
/*!***********************************!*\
  !*** ./assets/javascript/main.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _router = __webpack_require__(/*! ../../src/modules/router/router.class */ "./src/modules/router/router.class.js");

var _route = __webpack_require__(/*! ../../src/modules/router/route.class */ "./src/modules/router/route.class.js");

//Instancue les routes de l'application
/**
 * @name main.js
 * @description Point d'entrée principal dans l'application Javascript
 */
var router = new _router.Router();
router.add(new _route.Route('/', 'LoginController')).add(new _route.Route('/mystories', 'StoriesController'));

/***/ }),

/***/ "./src/modules/router/route.class.js":
/*!*******************************************!*\
  !*** ./src/modules/router/route.class.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @name Route
 * @description Definition des routes de l'application
 * @author Aelion
 * @version 1.0.0
 */

var Route = exports.Route = function () {
    function Route(path, controller) {
        _classCallCheck(this, Route);

        this.path = path;
        this.controller = controller;
    }

    _createClass(Route, [{
        key: "getPath",
        value: function getPath() {
            return this.path;
        }
    }, {
        key: "getController",
        value: function getController() {
            return this.controller;
        }
    }]);

    return Route;
}();

/***/ }),

/***/ "./src/modules/router/router.class.js":
/*!********************************************!*\
  !*** ./src/modules/router/router.class.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Router = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @name Router
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @description Collection des routes de l'application
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author Aelion
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @version 1.0.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _route = __webpack_require__(/*! ./route.class */ "./src/modules/router/route.class.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Router = exports.Router = function () {
    function Router() {
        _classCallCheck(this, Router);

        this.routes = new Map();

        var router = this;

        // Definit le listener des routes
        $(window).on('hashchange', function (event) {
            router.getRoute();
        });

        $(window).on('load', function (event) {
            router.getRoute();
        });
    }

    _createClass(Router, [{
        key: 'add',
        value: function add(route) {
            this.routes.set(route.path, route);
            return this;
        }
    }, {
        key: 'getRoute',
        value: function getRoute() {
            var url = location.hash.slice(1) || '/';
            console.log('Routes définies : ' + this.routes.size + '[' + url + ']');
            return this.routes.get(url) ? this.routes.get(url) : this.routes.get('/');
        }
    }]);

    return Router;
}();

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map