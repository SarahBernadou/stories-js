/**
 * @name UserService
 * @description Service de gestion de la persistance de l'utilisateur
 * @author Aelion
 * @version 1.0.0
 */

import { User } from "../user/user.class";

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

    removeUser(){
        localStorage.removeItem('storiesUser');
        this.user = {};
    }

    // Retourne un objet Utilisateur à partir du localStorage
    getUser() {
        const localUser = JSON.parse(localStorage.getItem('storiesUser'));
        const user = new User();
        user.setUserName(localUser.userName);
        user.group = localUser.group;

        return user;
    }
}