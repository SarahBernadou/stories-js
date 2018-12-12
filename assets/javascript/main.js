/**
 * @name main.js
 * @description Point d'entrée principal dans l'application Javascript
 */
import { Login } from './../../src/user/login.class';
import { LoginController } from '../../src/user/login/loginController.class';
import { StoriesController } from '../../src/stories/storiesController.class';
import { UserService } from '../../src/services/user-service.class'

$(window).on(
    'hashchange',
    function (event) {
        const url = document.location.hash;
        console.log('Nouvelle URL : ' + url);
        if (url === '#/mystories') {
            // On va instancier le controleur associé
            const authGuard = new UserService();
            if (!authGuard.hasUser()) {
                const controller = new LoginController();
                controller.getView();

                //Creer une instance de Login
                const login = new Login();
            } else {
                //Si il y a deja un utilisateur, j'appelle le controleur des stories
                const controller = new StoriesController
                controller.getView();
            }

        } else {
            const controller = new LoginController();
            controller.getView();

            //Creer une instance de Login
            const login = new Login();
        }
    }
);

$(window).on(
    'load', // Charge la page si le # ne change pas (le cas au lancement de l'application)
    function (event) {
        const url = document.location.hash;
        console.log('Nouvelle URL : ' + url);
        if (url === '#/mystories') {
            // On va instancier le controleur associé
            const authGuard = new UserService();
            if (!authGuard.hasUser()) {
                const controller = new LoginController();
                controller.getView();

                //Creer une instance de Login
                const login = new Login();
            } else {
                //Si il y a deja un utilisateur, j'appelle le controleur des stories
                const controller = new StoriesController
                controller.getView();
            }

        } else {
            const controller = new LoginController();
            controller.getView();

            //Creer une instance de Login
            const login = new Login();
        }
    }
);
