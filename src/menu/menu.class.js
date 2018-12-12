/**
 * @name Menu
 * @description Afficher un menu en fonction de l'utilisateur
 * @author Aelion
 * @version 1.0.0
 */


export class Menu {
    constructor(user) {

        // Autre façon plus longue d'afficher mon nom dans l'utilisateur après connexion
        // let userName = user.getUserName();
        // $('[id="navbarDropdown"]').html(userName);

        $('[id="navbarDropdown"]').html(user.getUserName());
        $('[id="pref"]').html('Mes préférences');
        $('[id="mdp"]').html('Modifier mot de passe');
        $('[id="deco"]').html('Deconnexion');

        $('[id="navbarDropdown"]').removeClass("disabled").addClass("active");

    }
}

