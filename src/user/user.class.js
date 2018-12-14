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
        // Appel vers le serveur :
        //GET http://localhost/3000/users/:login/:password

        let user = this;

        return new Promise((resolve) => {

            $.ajax({   //methode Jquery pour appel asynchrone a un serveur,  
                url: 'http://localhost:3000/users/' + this.userName + '/' + this.password,
                method: 'get',
                responseType: 'json',
                success: function (datas) {         // retourne response de notre user nodetodo-users
                   const srvUser = datas[0];
                    if (srvUser) {
                        user.id = srvUser.id;
                        user.userName = srvUser.nom;
                        user.forname = srvUser.prenom;
                        user.group = srvUser.metier;

                        const persistentUser = {
                            id: user.id,
                            Username: user.userName,
                            group: user.group
                        };

                        // On ajoute l'utilisateur au localStorage
                        localStorage.setItem('storiesUser', JSON.stringify(persistentUser));

                        // C'est bon, j'ai bien un utilisateur
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                },
                error: function (xhr, error) {
                    //J'ai personne
                    resolve(false);
                },

            });
        });
    }
    getUserName() {
        let userName = this.userName;
        return userName;
    }
}

