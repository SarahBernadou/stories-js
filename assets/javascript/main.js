/**
 * @name main.js
 * @description Point d'entrée principal dans l'application Javascript
 */
import { Router } from '../../src/modules/router/router.class';
import { Route } from '../../src/modules/router/route.class';

//Instancue les routes de l'application
const router = new Router();
router
    .add(
        new Route('/', 'LoginController')
    )
    .add(
        new Route('/mystories', 'StoriesController')
    )
