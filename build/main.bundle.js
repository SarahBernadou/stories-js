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


var _login = __webpack_require__(/*! ./../../src/user/login.class */ "./src/user/login.class.js");

var _loginController = __webpack_require__(/*! ../../src/user/login/loginController.class */ "./src/user/login/loginController.class.js");

var _storiesController = __webpack_require__(/*! ../../src/stories/storiesController.class */ "./src/stories/storiesController.class.js");

var title = document.getElementById('main-title'); /**
                                                    * @name main.js
                                                    * @description Point d'entrée principal dans l'application Javascript
                                                    */

title.innerHTML = 'Hello Javascript';

//Controleur des stories
var controllerStories = new _storiesController.StoriesController();
controllerStories.getView();

//@version 1.0.1 Passage par controleur
var controller = new _loginController.LoginController();
controller.getView();

//Creer une instance de Login
var login = new _login.Login();

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @name SotriesController
 * @description Controleur des stories
 * @author Aelion
 * @version 1.0.0
 */

var StoriesController = exports.StoriesController = function () {
    function StoriesController() {
        _classCallCheck(this, StoriesController);

        // Definit la vue pour ce controleur
        this.view = './src/stories/stories.view.html';
    }

    // Methode pour récupérer la vue à afficher


    _createClass(StoriesController, [{
        key: 'getView',
        value: function getView() {
            var app = $('[app2]'); // Je decide d'injecter mon contenu dans div app dans mon fichier index (app est un nom qu'on a choisi)

            $.get( //Ce qu'on veut récuperer de l'url et en cas de succes, ou je récupère(affiche) ce que j'ai récupéré ?
            this.view, function (viewContent) {
                app.empty(); //Vide le contenu le cas echeant
                app.html(viewContent); //Je le rempi avec ma vue
            });
        }
    }]);

    return StoriesController;
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

                // Gere l'authentification
                if (user.authentification()) {
                    console.log('Ok, ça roule');
                    var menu = new _menu.Menu(user);
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @name LoginController
 * @description Controleur pour la gestion du formulaire de login
 * @author Aelion
 * @version 1.0.0
 */

var LoginController = exports.LoginController = function () {
    function LoginController() {
        _classCallCheck(this, LoginController);

        // Definit la vue pour ce controleur
        this.view = './src/user/login/views/loginform.view.html';
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
            if (this.userName === 'sbernadou' && this.password === 'sbe') {
                this.group = 'Administrateur';
                return true;
            }
            return false;
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