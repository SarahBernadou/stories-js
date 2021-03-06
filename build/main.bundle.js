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

var _userservice = __webpack_require__(/*! ../../src/services/userservice.class */ "./src/services/userservice.class.js");

//Instancie les routes de l'application
var router = new _router.Router(); /**
                                    * @name main.js
                                    * @description Point d'entrée principal dans l'application Javascript
                                    */

var userService = new _userservice.UserService();
router.add(new _route.Route('/', 'LoginController', userService)).add(new _route.Route('/mystories', 'StoriesController', userService)).add(new _route.Route('/deco', 'LogoutController', userService));

/***/ }),

/***/ "./src/errors/error.class.js":
/*!***********************************!*\
  !*** ./src/errors/error.class.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @name ErrorController
 * @description Controleur des erreur
 * @author Aelion
 * @version 1.0.0
 */

var ErrorController = exports.ErrorController = function () {
    function ErrorController() {
        _classCallCheck(this, ErrorController);

        // Definit la vue pour ce controleur
        this.view = './src/errors/views/noRoute.view.html';
    }

    // Methode pour récupérer la vue à afficher


    _createClass(ErrorController, [{
        key: 'getView',
        value: function getView() {
            var app = $('[app]'); // Je decide d'injecter mon contenu dans div app dans mon fichier index (app est un nom qu'on a choisi)

            $.get( //Ce qu'on veut récuperer de l'url et en cas de succes, ou je récupère(affiche) ce que j'ai récupéré ?
            this.view, function (viewContent) {
                app.empty(); //Vide le contenu le cas echeant
                app.html(viewContent); //Je le rempi avec ma vue
            });
        }
    }]);

    return ErrorController;
}();

/***/ }),

/***/ "./src/menu/menu.class.js":
/*!********************************!*\
  !*** ./src/menu/menu.class.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @name Menu
 * @description Afficher un menu en fonction de l'utilisateur
 * @author Aelion
 * @version 1.0.0
 */

var Menu = exports.Menu = function Menu(user) {
        _classCallCheck(this, Menu);

        // Autre façon plus longue d'afficher mon nom dans l'utilisateur après connexion
        // let userName = user.getUserName();
        // $('[id="navbarDropdown"]').html(userName);

        $('[id="navbarDropdown"]').html(user.getUserName());
        $('[id="pref"]').html('Mes préférences');
        $('[id="mdp"]').html('Modifier mot de passe');
        $('[id="deco"]').html('Deconnexion');

        $('[id="navbarDropdown"]').removeClass("disabled").addClass("active");
};

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
 * @version 1.0.1
 * Ajout de l'attribut canActivate qui permet de restreindre l'accès
 */

var Route = exports.Route = function () {
    function Route(path, controller) {
        var canActivate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        _classCallCheck(this, Route);

        // Le =null rend l'attribut canActivate optionnel
        this.path = path;
        this.controller = controller;
        this.canActivate = canActivate;
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
    }, {
        key: "getCanActivate",
        value: function getCanActivate() {
            return this.canActivate;
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

var _loginController = __webpack_require__(/*! ../../user/login/loginController.class */ "./src/user/login/loginController.class.js");

var _storiesController = __webpack_require__(/*! ../../stories/storiesController.class */ "./src/stories/storiesController.class.js");

var _userservice = __webpack_require__(/*! ./../../services/userservice.class */ "./src/services/userservice.class.js");

var _error = __webpack_require__(/*! ./../../errors/error.class */ "./src/errors/error.class.js");

var _logoutController = __webpack_require__(/*! ./../../user/logout/logoutController.class */ "./src/user/logout/logoutController.class.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var controllers = { LoginController: _loginController.LoginController, StoriesController: _storiesController.StoriesController, ErrorController: _error.ErrorController, LogoutController: _logoutController.LogoutController //Constante (tableau) contenant nos classes controleur

};
var Router = exports.Router = function () {
    function Router() {
        _classCallCheck(this, Router);

        this.routes = new Map();

        var router = this;

        // Definit le listener des routes : Ce sont des 'observers'
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
            //slice enleve le # (premier caractère du hash qui est l'ensemble #/mystories), nos routes sont 
            //apelées /qqchose et non #/qqchose, donc c'est pour pouvoir faire appel à nos routes sans probleme
            console.log('URL à charger [' + url + ']');

            //On va essayer de chercher si dans les routes on a quelque chose qui correspond
            var route = this.routes.get(url);

            //Instancie un controleur vide :
            var controller = {};

            if (!route) {
                // Aucun controleur associé a cette route
                controller = new _error.ErrorController();
            } else {
                if (url === '/') {
                    // On vérifie l'utilisateur
                    var userService = new _userservice.UserService();
                    if (userService.hasUser()) {
                        //Me dit si oui ou non j'ai deja un utilisateur en mémoire
                        //Il y a un utilisateur identifié, donc pas de login
                        controller = new _storiesController.StoriesController();
                    } else {
                        //Pas encore d'utilisateur connecté, on instancie un loginController
                        controller = new _loginController.LoginController();
                    }
                } else {
                    //La route definit autre chose
                    console.log('Instancie :' + route.getController());

                    var canActivate = route.getCanActivate();
                    if (canActivate) {
                        // L'instanciation requiert une vérification
                        if (canActivate.hasUser()) {
                            controller = new controllers[route.getController()](); // Va chercher dans notre tableau d'objet notre classe correspondante
                        } else {
                            // On ne peut pas, sans utilisateur identifié
                            controller = new _loginController.LoginController();
                        }
                    } else {
                        // Route activable sans contrôle
                        controller = new controllers[route.getController()]();
                    }
                }
            }
            //A la fin, on charge la vue
            controller.getView();
        }
    }]);

    return Router;
}();

/***/ }),

/***/ "./src/modules/toaster/toast.class.js":
/*!********************************************!*\
  !*** ./src/modules/toaster/toast.class.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @name Toast
 * @description Afficher un toast (snackbar)
 * @author Aelion
 * @version 1.0.0
 */

var Toast = exports.Toast = function () {
    function Toast(params) {
        _classCallCheck(this, Toast);

        if (!params.hasOwnProperty('background')) {
            // Paramètre de definition de la couleur de fond du toast
            this.backgroundClass = 'danger';
        } else {
            this.backgroundClass = params.background;
        }

        if (!params.hasOwnProperty('duration')) {
            // Durée d'affichage du toast (secondes)
            this.duration = 3;
        } else {
            this.duration = params.duration;
        }

        if (!params.hasOwnProperty('message')) {
            this.message = 'Default message';
        } else {
            this.message = params.message;
        }
    }

    _createClass(Toast, [{
        key: 'setBackground',
        value: function setBackground(cssClass) {
            this.backgroundClass = cssClass;
        }
    }, {
        key: 'setDuration',
        value: function setDuration(duration) {
            this.duration = duration;
        }
    }, {
        key: 'toastIt',
        value: function toastIt() {
            //Pour creer un objet jquery en memoire : balise ouvrante
            var toaster = $('<div>');

            // On lui ajoute les classes
            toaster.addClass(this.backgroundClass).addClass('animated').addClass('zoomIn').addClass('toast').html('<p>' + this.message + '</p>'); //Si je veux un bloc entier d ela taille de mon toaast css, je mets this.message (voir aussi sur custom.css)

            // Ajoute le toaster au document lui-même
            toaster.appendTo($('body'));

            //Affiche pendant un certain temps 

            setTimeout(function () {
                // Ici je fais joliment disparaitre mon toaster
                toaster.removeClass('zoomIn').addClass('zoomOut');

                setTimeout(function () {
                    //Ici, quand on arrive au bout de l'intervalle de temps
                    toaster.remove();
                }, 1000);
            }, this.duration * 1000);
        }
    }]);

    return Toast;
}();

/***/ }),

/***/ "./src/services/userservice.class.js":
/*!*******************************************!*\
  !*** ./src/services/userservice.class.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @name UserService
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @description Service de gestion de la persistance de l'utilisateur
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author Aelion
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @version 1.0.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _user = __webpack_require__(/*! ../user/user.class */ "./src/user/user.class.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserService = exports.UserService = function () {
    function UserService() {
        _classCallCheck(this, UserService);

        this.user = {};
    }

    // Lit localStorage pour récupérer un éventuel utilisateur


    _createClass(UserService, [{
        key: 'hasUser',
        value: function hasUser() {
            var user = JSON.parse(localStorage.getItem('storiesUser')); // methode parse : je prends une chaine, je la convertie en objet JSON

            if (user) {
                this.user = new _user.User();
                this.user.setUserName(user.userName);
                this.user.group = user.group;

                return true;
            }
            return false;
        }
    }, {
        key: 'removeUser',
        value: function removeUser() {
            localStorage.removeItem('storiesUser');
            this.user = {};
        }

        // Retourne un objet Utilisateur à partir du localStorage

    }, {
        key: 'getUser',
        value: function getUser() {
            var localUser = JSON.parse(localStorage.getItem('storiesUser'));
            var user = new _user.User();
            user.id = localUser.id;
            user.setUserName(localUser.userName);
            user.group = localUser.group;
            console.log('UserService::getUser');
            return user;
        }
    }, {
        key: 'getAuthentificateUser',
        value: function getAuthentificateUser() {
            this.hasUser();
            return this.user;
        }
    }]);

    return UserService;
}();

/***/ }),

/***/ "./src/stories/storiesController.class.js":
/*!************************************************!*\
  !*** ./src/stories/storiesController.class.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StoriesController = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @name StoriesController
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @description Controleur des stories
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author Aelion
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @version 1.0.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _userservice = __webpack_require__(/*! ./../services/userservice.class */ "./src/services/userservice.class.js");

var _storyservice = __webpack_require__(/*! ./storyservice.class */ "./src/stories/storyservice.class.js");

var _story = __webpack_require__(/*! ./story.class */ "./src/stories/story.class.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StoriesController = exports.StoriesController = function () {
    function StoriesController() {
        var _this = this;

        _classCallCheck(this, StoriesController);

        // Définit la vue pour ce contrôleur
        this.view = './src/stories/stories.view.html';

        var userService = new _userservice.UserService();

        this.stories = [];

        // Affichage du loader
        var loader = $('[app]').children('#loader').eq(0);
        loader.removeClass('hidden');

        var service = new _storyservice.StoriesService();

        service.getMyStories().then(function (stories) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = stories[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var story = _step.value;

                    var aStory = new _story.Story();
                    aStory.deserialize(story);
                    _this.stories.push(aStory);
                }
                // En fin de parcours, on crée les lignes du tableau
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

            _this._createTable();

            // Efface le loader
            loader.addClass('hidden');
        });
    }

    /**
     * Méthode pour récupérer la vue à afficher
     */


    _createClass(StoriesController, [{
        key: 'getView',
        value: function getView() {
            // Récupère le placeholder de mon application
            var app = $('[app]');

            $.get(this.view,
            // Callback appelée après que le fichier ait été chargé
            function (viewContent) {
                app.empty(); // Vide le contenu le cas échéant
                app.html(viewContent);
            });
        }
    }, {
        key: '_createTable',
        value: function _createTable() {
            var tbody = $('[app]').children('#stories-table').eq(0).children('tbody').eq(0);

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.stories[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var story = _step2.value;


                    // Créer une ligne
                    var _row = $('<tr>');
                    _row.attr('data-id', story.id);

                    // Colonne 1 : id
                    var _td = $('<td>');
                    _td.html(story.id);
                    _td.appendTo(_row);

                    // Colonne 2 : Titre
                    _td = $('<td>');
                    _td.html(story.titre);
                    _td.appendTo(_row);

                    // Colonne 3 : Date de début
                    _td = $('<td>');
                    _td.html(story.getBeginDate());
                    _td.appendTo(_row);

                    // Colonne 4 : Date de fin estimée
                    _td = $('<td>');
                    _td.html(story.getEstimatedEndDate());
                    _td.appendTo(_row);

                    _td = $('<td>');
                    _td.html(story.libelle);
                    _td.appendTo(_row);

                    // Dernière colonne à traiter
                    _td = $('<td>');
                    var _btn = $('<i>');
                    _btn.addClass('icon-switch').addClass('done');
                    _btn.appendTo(_td);
                    _btn = $('<i>');
                    _btn.addClass('icon-bin2').addClass('delete');
                    _btn.appendTo(_td);
                    _td.appendTo(_row);

                    // Ajoute le tout au tbody
                    _row.appendTo(tbody);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
    }]);

    return StoriesController;
}();

/***/ }),

/***/ "./src/stories/story.class.js":
/*!************************************!*\
  !*** ./src/stories/story.class.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @name Story
 * @desc Modèle pour la gestion des stories
 * @author Aélion
 * @version 1.0.0
 */
var Story = exports.Story = function () {
    function Story() {
        _classCallCheck(this, Story);

        this.id = 0;
        this.titre = '';
        this.debut = new Date();
        this.fin = new Date();
        this.val = '';
        this.team_members_id = 0;
        //this.business_values_id = 0;
    }

    _createClass(Story, [{
        key: 'getBeginDate',
        value: function getBeginDate() {
            return this.debut.getDate() + '-' + this.debut.getMonth() + '-' + this.debut.getFullYear();
        }
    }, {
        key: 'getEstimatedEndDate',
        value: function getEstimatedEndDate() {
            return this.fin.getDate() + '-' + this.fin.getMonth() + '-' + this.fin.getFullYear();
        }
    }, {
        key: 'deserialize',
        value: function deserialize(datas) {
            this.id = datas.Num;
            this.titre = datas.Titre;
            this.debut = new Date(datas.Debut);
            this.fin = new Date(datas.Fin);
            this.val = datas.Valeur;
            this.team_members_id = datas.Utilisateur;
            //this.business_values_id = datas.business_values_id;

            this.libelle = datas.libelle;
            if (datas.hasOwnProperty('prenom')) {
                this.forname = datas.forname;
            }
            if (datas.hasOwnProperty('nom')) {
                this.lastname = datas.lastname;
            }
        }
    }]);

    return Story;
}();

/***/ }),

/***/ "./src/stories/storyservice.class.js":
/*!*******************************************!*\
  !*** ./src/stories/storyservice.class.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StoriesService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @name StoriesService
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @desc Service de mapping des stories
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author Aélion
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @version 1.0.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _userservice = __webpack_require__(/*! ./../services/userservice.class */ "./src/services/userservice.class.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StoriesService = exports.StoriesService = function () {
    function StoriesService() {
        _classCallCheck(this, StoriesService);

        this.uri = 'http://localhost:3000/stories';
    }

    /**
     * Retourne une promesse de stories d'un utilisateur identifié
     * @return Promise<any>
     */


    _createClass(StoriesService, [{
        key: 'getMyStories',
        value: function getMyStories() {
            var _this = this;

            var userService = new _userservice.UserService();
            var user = userService.getUser();
            console.log(JSON.stringify(user));
            return new Promise(function (resolve) {
                $.ajax({
                    url: _this.uri + '/' + user.userName,
                    method: 'get',
                    dataType: 'json',
                    success: function success(datas) {
                        resolve(datas);
                    },
                    error: function error(xhr, _error) {
                        resolve(false);
                    }
                });
            });
        }
    }, {
        key: 'getAllStories',
        value: function getAllStories() {
            var _this2 = this;

            return new Promise(function (resolve) {
                $.ajax({
                    url: _this2.uri,
                    method: 'get',
                    dataType: 'json',
                    success: function success(datas) {
                        resolve(datas);
                    },
                    error: function error(xhr, _error2) {
                        resolve(false);
                    }
                });
            });
        }
    }]);

    return StoriesService;
}();

/***/ }),

/***/ "./src/user/login.class.js":
/*!*********************************!*\
  !*** ./src/user/login.class.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Login = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _user = __webpack_require__(/*! ./user.class */ "./src/user/user.class.js");

var _menu = __webpack_require__(/*! ./../menu/menu.class */ "./src/menu/menu.class.js");

var _toast = __webpack_require__(/*! ./../modules/toaster/toast.class */ "./src/modules/toaster/toast.class.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Login = exports.Login = function () {
    function Login() {
        _classCallCheck(this, Login);

        // Modifier le titre du document HTML (onglet)
        $(document).attr('title', 'Identification'); //Le texte du titre de la page HTML sera changé par Identifiez vous

        // Modifier le titre de la page
        $('#main-title').html('Identifiez-vous'); //html fait reference a h1 dans index

        //Definition du listener sur le formulaire
        this.formListener(); //this correspond a l'objet concerné de la classe Login
        this.submitListener();
    }

    /**
     * formListener Gestionnaire d'évènements sur le formulaire de Login
     * @param void
     * @return void
     */


    _createClass(Login, [{
        key: 'formListener',
        value: function formListener() {
            //let login = this.login;
            // let password = this.password;

            var app = $('[app]');

            app.on( //Je veux écouter tous les changements au lever d'une touche ('keyup') sur le formulaire Login
            'keyup', '#loginForm', // Délégation d'évènement
            //Callback : Fonction appelée si l'évènement defini survient, ici, lors d'une remontée de touche
            function (event) {
                // Je defini mes attributs
                var login = $('[name="loginField"]');
                var password = $('[name="passwordField"]');

                //Est ce que les deux champs sont remplis et le login a plus ou 5 caractères
                if (login.val().length >= 5 && password.val() !== '') {
                    $('#btnLogin').removeAttr('disabled');
                } else {
                    // Non, ça ne le fait pas tout seul, il faut le lui dire
                    $('#btnLogin').attr('disabled', 'disabled');
                }
            });
        }
    }, {
        key: 'submitListener',
        value: function submitListener() {
            // let login = this.login;
            // let password = this.password;

            var app = $('[app]');

            app.on('submit', '#loginForm', function (event) {
                // Je defini mes attributs
                var login = $('[name="loginField"]');
                var password = $('[name="passwordField"]');

                event.preventDefault(); //Empeche l'action par defaut (ici l'envoie du formulaire)
                var user = new _user.User();
                user.setUserName(login.val());
                user.setPassword(password.val());

                user.authentification().then(function (aUser) {
                    // Je demande a la methode authentification de me retourner sa promesse une fois résolue
                    // Gere l'authentification
                    if (aUser) {
                        console.log('Ok, ça roule');

                        //Instancie le menu
                        var menu = new _menu.Menu(user);

                        //On va essayer d'aller vers une autre page
                        document.location.replace('#/mystories');
                    } else {
                        console.log('Nop, t\'as pas l\'droit !');
                        login.val('');
                        password.val('');

                        $('#btnLogin').attr('disabled', 'disabled');

                        // On peut instancier un toast, c'est un objet JSON
                        var toast = new _toast.Toast({
                            'message': 'Login et/ou mot de passe éronné(s) pour cet utilisateur',
                            'duration': 2
                        });
                        toast.toastIt();
                    }
                });
            });
        }
    }]);

    return Login;
}();

/***/ }),

/***/ "./src/user/login/loginController.class.js":
/*!*************************************************!*\
  !*** ./src/user/login/loginController.class.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoginController = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @name LoginController
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @description Controleur pour la gestion du formulaire de login
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author Aelion
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @version 1.0.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _login = __webpack_require__(/*! ./../login.class */ "./src/user/login.class.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LoginController = exports.LoginController = function () {
    function LoginController() {
        _classCallCheck(this, LoginController);

        // Definit la vue pour ce controleur
        this.view = './src/user/login/views/loginform.view.html';

        // Instancier la classe Login pour la premiere gestion du formulaire
        this.login = new _login.Login();
    }

    // Methode pour récupérer la vue à afficher


    _createClass(LoginController, [{
        key: 'getView',
        value: function getView() {
            var app = $('[app]'); // Je decide d'injecter mon contenu dans div app dans mon fichier index (app est un nom qu'on a choisi)

            $.get( //Ce qu'on veut récuperer de l'url et en cas de succes, ou je récupère(affiche) ce que j'ai récupéré ?
            this.view, function (viewContent) {
                app.empty(); //Vide le contenu le cas echeant
                app.html(viewContent); //Je le rempi avec ma vue
            });
        }
    }]);

    return LoginController;
}();

/***/ }),

/***/ "./src/user/logout/logoutController.class.js":
/*!***************************************************!*\
  !*** ./src/user/logout/logoutController.class.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LogoutController = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @name LogoutController
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @description Controleur pour la gestion du formulaire de login
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author Aelion
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @version 1.0.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _loginController = __webpack_require__(/*! ./../login/loginController.class */ "./src/user/login/loginController.class.js");

var _userservice = __webpack_require__(/*! ./../../services/userservice.class */ "./src/services/userservice.class.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LogoutController = exports.LogoutController = function () {
    function LogoutController() {
        _classCallCheck(this, LogoutController);

        // Utilise le service pour supprimer la clé
        var userService = new _userservice.UserService();
        userService.removeUser();

        //Desactive le menu
        $('[id="navbarDropdown"]').html('Utilisateur');
        $('[id="navbarDropdown"]').addClass("disabled").removeClass("active");

        // Instancier la classe Login pour la premiere gestion du formulaire
        this.login = new _loginController.LoginController();
    }

    // Methode pour récupérer la vue à afficher


    _createClass(LogoutController, [{
        key: 'getView',
        value: function getView() {
            return this.login.getView();
        }
    }]);

    return LogoutController;
}();

/***/ }),

/***/ "./src/user/user.class.js":
/*!********************************!*\
  !*** ./src/user/user.class.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @name User
 * @description Service de gestion des utilisateurs
 * @author Aelion
 * @version 1.0.0
 */

var User = exports.User = function () {
    function User() {
        _classCallCheck(this, User);
    }

    /** Definit le Username de l'utilisateur
     * @param {*} userName
     */


    _createClass(User, [{
        key: 'setUserName',
        value: function setUserName(userName) {
            this.userName = userName;
        }

        /** Definit le mot de passe de l'utilisateur
        * @param {*} password
        */

    }, {
        key: 'setPassword',
        value: function setPassword(password) {
            this.password = password;
        }

        /** Identifie l'utilisateur à partir d'un login et d'un mot de passe
         * @returns boolean
         */

    }, {
        key: 'authentification',
        value: function authentification() {
            var _this = this;

            // Appel vers le serveur :
            //GET http://localhost/3000/users/:login/:password

            var user = this;

            return new Promise(function (resolve) {

                $.ajax({ //methode Jquery pour appel asynchrone a un serveur,  
                    url: 'http://localhost:3000/users/' + _this.userName + '/' + _this.password,
                    method: 'get',
                    responseType: 'json',
                    success: function success(datas) {
                        // retourne response de notre user nodetodo-users
                        var srvUser = datas[0];
                        if (srvUser) {
                            user.id = srvUser.id;
                            user.userName = srvUser.nom;
                            user.forname = srvUser.prenom;
                            user.group = srvUser.metier;

                            var persistentUser = {
                                id: user.id,
                                userName: user.userName,
                                group: user.group
                            };

                            // On ajoute l'utilisateur au localStorage
                            localStorage.setItem('storiesUser', JSON.stringify(persistentUser));

                            // C'est bon, j'ai bien un utilisateur
                            resolve(true);
                        } else {
                            resolve(false);
                        }
                    },
                    error: function error(xhr, _error) {
                        //J'ai personne
                        resolve(false);
                    }

                });
            });
        }
    }, {
        key: 'getUserName',
        value: function getUserName() {
            var userName = this.userName;
            return userName;
        }
    }]);

    return User;
}();

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map