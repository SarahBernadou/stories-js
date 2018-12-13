/**
 * @name main.js
 * @description Point d'entrée principal dans l'application Javascript
 */
import { Router } from '../../src/modules/router/router.class';
import { Route } from '../../src/modules/router/route.class';
import { UserService } from '../../src/services/userservice.class';
import {ErrorController} from '../../src/errors/error.class';

//Instancie les routes de l'application
const router = new Router();
const userService = new UserService()
router
    .add(
        new Route('/', 'LoginController', userService)
    )
    .add(
        new Route('/mystories', 'StoriesController', userService)
    )
    
