/**
 * @name UserService
 * @description Service de gestion de la persistance de l'utilisateur
 * @author Aelion
 * @version 1.0.0
 */

import { User } from "../user/user.class";

export class UserService {
    constructor() { 
        this.user = {};
    }

    // Lit localStorage pour récupérer un éventuel utilisateur
    hasUser() {
        const user = JSON.parse(localStorage.getItem('storiesUser')); // methode parse : je prends une chaine, je la convertie en objet JSON

        if (user) {
            this.user = new User();
            this.user.setUserName(user.userName);
            this.user.group = user.group;

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
        user.id = localUser.id;
        user.setUserName(localUser.userName);
        user.group = localUser.group;
        console.log('UserService::getUser');
        return user;
    }

    getAuthentificateUser() {
        this.hasUser();
        return this.user;
    }
}