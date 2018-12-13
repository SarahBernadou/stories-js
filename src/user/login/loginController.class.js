/**
 * @name LoginController
 * @description Controleur pour la gestion du formulaire de login
 * @author Aelion
 * @version 1.0.0
 */
import {Login}  from './../login.class';

export class LoginController {
    constructor() {
        // Definit la vue pour ce controleur
        this.view = './src/user/login/views/loginform.view.html';

        // Instancier la classe Login pour la premiere gestion du formulaire
        this.login = new Login();
    }

    // Methode pour récupérer la vue à afficher
    getView() {
        const app = $('[app]') // Je decide d'injecter mon contenu dans div app dans mon fichier index (app est un nom qu'on a choisi)

        $.get( //Ce qu'on veut récuperer de l'url et en cas de succes, ou je récupère(affiche) ce que j'ai récupéré ?
            this.view,
            function(viewContent){
                app.empty(); //Vide le contenu le cas echeant
                app.html(viewContent); //Je le rempi avec ma vue
            }
        );
    }
}