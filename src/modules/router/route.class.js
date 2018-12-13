/**
 * @name Route
 * @description Definition des routes de l'application
 * @author Aelion
 * @version 1.0.0
 * @version 1.0.1
 * Ajout de l'attribut canActivate qui permet de restreindre l'accès
 */

export class Route {
    constructor(path, controller, canActivate = null) { // Le =null rend l'attribut canActivate optionnel
        this.path = path;
        this.controller = controller;
        this.canActivate = canActivate;
    }
    getPath() {
        return this.path;
    }
    getController() {
        return this.controller;
    }
    getCanActivate() {
        return this.canActivate;
    }
}