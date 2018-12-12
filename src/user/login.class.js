import { User } from './user.class';
import { Menu } from './../menu/menu.class';
import { Toast } from './../modules/toaster/toast.class';


export class Login {
    constructor() {
        // Modifier le titre du document HTML (onglet)
        $(document).attr('title', 'Identification'); //Le texte du titre de la page HTML sera changé par Identifiez vous

        // Modifier le titre de la page
        $('#main-title').html('Identifiez-vous') //html fait reference a h1 dans index

        //Definition du listener sur le formulaire
        this.formListener(); //this correspond a l'objet concerné de la classe Login
        this.submitListener();
    }

    /**
     * formListener Gestionnaire d'évènements sur le formulaire de Login
     * @param void
     * @return void
     */
    formListener() {
        //let login = this.login;
       // let password = this.password;

        const app = $('[app]');

        app.on( //Je veux écouter tous les changements au lever d'une touche ('keyup') sur le formulaire Login
            'keyup',
            '#loginForm', // Délégation d'évènement
            //Callback : Fonction appelée si l'évènement defini survient, ici, lors d'une remontée de touche
            function (event) {
                // Je defini mes attributs
                let login = $('[name="loginField"]');
                let password = $('[name="passwordField"]');

                //Est ce que les deux champs sont remplis et le login a plus ou 5 caractères
                if (login.val().length >= 5 && password.val() !== '') {
                    $('#btnLogin').removeAttr('disabled');
                } else {
                    // Non, ça ne le fait pas tout seul, il faut le lui dire
                    $('#btnLogin').attr('disabled', 'disabled');
                }
            }
        );
    }
    submitListener() {
       // let login = this.login;
       // let password = this.password;

        const app = $('[app]');

        app.on(
            'submit',
            '#loginForm',
            function (event) {
                // Je defini mes attributs
                let login = $('[name="loginField"]');
                let password = $('[name="passwordField"]');

                event.preventDefault(); //Empeche l'action par defaut (ici l'envoie du formulaire)
                const user = new User();
                user.setUserName(login.val());
                user.setPassword(password.val());

                // Gere l'authentification
                if (user.authentification()) {
                    console.log('Ok, ça roule');
                    const menu = new Menu(user);
                } else {
                    console.log('Nop, t\'as pas l\'droit !');
                    login.val('');
                    password.val('');

                    $('#btnLogin').attr('disabled', 'disabled');

                    // On peut instancier un toast, c'est un objet JSON
                    const toast = new Toast(
                        {
                            'message': 'Login et/ou mot de passe éronné(s) pour cet utilisateur',
                            'duration': 2
                        }
                    );
                    toast.toastIt();
                }
            }
        );
    }
}