/**
 * @name LogoutController
 * @description Controleur pour la gestion du formulaire de login
 * @author Aelion
 * @version 1.0.0
 */
import { LoginController } from './../login/loginController.class';
import { UserService } from './../../services/userservice.class';


export class LogoutController {
    constructor() {
        // Utilise le service pour supprimer la clé
        const userService = new UserService();
        userService.removeUser();

        //Desactive le menu
        $('[id="navbarDropdown"]').html('Utilisateur');
        $('[id="navbarDropdown"]').addClass("disabled").removeClass("active");


        // Instancier la classe Login pour la premiere gestion du formulaire
        this.login = new LoginController();
    }

    // Methode pour récupérer la vue à afficher
    getView() {
        return this.login.getView();
    }
}