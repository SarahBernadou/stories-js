/**
 * @name Router
 * @description Collection des routes de l'application
 * @author Aelion
 * @version 1.0.0
 */
import { Route } from './route.class';

export class Router {
    constructor() {
        this.routes = new Map();

        let router = this;

        // Definit le listener des routes
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
        console.log('Routes définies : ' + this.routes.size + '[' + url + ']');
        return this.routes.get(url) ? this.routes.get(url) : this.routes.get('/');
    }
}