/**
 * @name Menu
 * @description Afficher un menu en fonction de l'utilisateur
 * @author Aelion
 * @version 1.0.0
 */


export class Menu {
    constructor(user) {



        let userName = user.getUserName();

        $('[id="navbarDropdown"]').html(userName);
        $('[id="pref"]').html('Mes préférences');
        $('[id="mdp"]').html('Modifier mot de passe');
        $('[id="deco"]').html('Deconnexion');

        $('[id="navbarDropdown"]').removeClass("disabled");

    }
}

