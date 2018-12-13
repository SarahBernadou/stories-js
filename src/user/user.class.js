/**
 * @name User
 * @description Service de gestion des utilisateurs
 * @author Aelion
 * @version 1.0.0
 */

export class User {
    constructor() { }

    /** Definit le Username de l'utilisateur
     * @param {*} userName
     */
    setUserName(userName) {
        this.userName = userName;
    }

    /** Definit le mot de passe de l'utilisateur
    * @param {*} password
    */
    setPassword(password) {
        this.password = password;
    }

    /** Identifie l'utilisateur à partir d'un login et d'un mot de passe
     * @returns boolean
     */
    authentification() {
        if (this.userName === 'sbernadou' && this.password === 'sbe') {
            this.group = 'Administrateur';

            //Ajout de l'utilisateur dans localStorage
            const persistantUser = {
                userName: this.userName,
                group: this.group
            };
            localStorage.setItem('storiesUser', JSON.stringify(persistantUser)); //stringify permet d'enregistrer en chaine de caractère un objet json

            return true;
        }
        return false;
    }
    getUserName() {
        let userName = this.userName;
        return userName;
    }
}

