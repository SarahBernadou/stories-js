/**
 * @name UserService
 * @description Service de gestion de la persistance de l'utilisateur
 * @author Aelion
 * @version 1.0.0
 */

export class UserService {
    constructor() { }

    // Lit localStorage pour récupérer un éventuel utilisateur
    hasUser() {
        const user = JSON.parse(localStorage.getItem('storiesUser')); // methode parse : je prends une chaine, je la convertie en objet JSON

        if (user) {
            return true
        }
        return false;

    }
}