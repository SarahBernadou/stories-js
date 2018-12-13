/**
 * @name Router
 * @description Collection des routes de l'application
 * @author Aelion
 * @version 1.0.0
 */
import { Route } from './route.class';

import { LoginController } from '../../user/login/loginController.class';
import { StoriesController } from '../../stories/storiesController.class';
import { UserService } from './../../services/userservice.class';
import {ErrorController} from './../../errors/error.class';
import {LogoutController} from './../../user/logout/logoutController.class';

const controllers = { LoginController, StoriesController, ErrorController, LogoutController } //Constante (tableau) contenant nos classes controleur

export class Router {
    constructor() {
        this.routes = new Map();

        let router = this;

        // Definit le listener des routes : Ce sont des 'observers'
        $(window).on(
            'hashchange',
            function (event) {
                router.getRoute()
            }
        );

        $(window).on(
            'load',
            function (event) {
                router.getRoute()
            }
        );
    }

    add(route) {
        this.routes.set(route.path, route);
        return this;
    }

    getRoute() {
        const url = location.hash.slice(1) || '/';
        //slice enleve le # (premier caractère du hash qui est l'ensemble #/mystories), nos routes sont 
        //apelées /qqchose et non #/qqchose, donc c'est pour pouvoir faire appel à nos routes sans probleme
        console.log('URL à charger [' + url + ']');

        //On va essayer de chercher si dans les routes on a quelque chose qui correspond
        const route = this.routes.get(url);

        //Instancie un controleur vide :
        let controller = {};

        if (!route) {
            // Aucun controleur associé a cette route
            controller = new ErrorController();
        } else {
            if (url === '/') {
                // On vérifie l'utilisateur
                const userService = new UserService();
                if (userService.hasUser()) { //Me dit si oui ou non j'ai deja un utilisateur en mémoire
                    //Il y a un utilisateur identifié, donc pas de login
                    controller = new StoriesController();
                } else {
                    //Pas encore d'utilisateur connecté, on instancie un loginController
                    controller = new LoginController();
                }
            } else {
                //La route definit autre chose
                console.log('Instancie :' + route.getController());

                const canActivate = route.getCanActivate();
                if (canActivate) {
                    // L'instanciation requiert une vérification
                    if (canActivate.hasUser()) {
                        controller = new controllers[route.getController()]();// Va chercher dans notre tableau d'objet notre classe correspondante
                    } else {
                        // On ne peut pas, sans utilisateur identifié
                        controller = new LoginController();
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
}