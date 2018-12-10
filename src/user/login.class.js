class Login {
    constructor() {
        // Modifier le titre du document HTML (onglet)
        $(document).attr('title', 'Identification'); //Le texte du titre de la page HTML sera changé par Identifiez vous

        // Modifier le titre de la page
        $('#main-title').html('Identifiez-vous') //html fait reference a h1 dans index

        //Definition du listener sur le formulaire
        this.formListener(); //this correspond a l'objet concerné de la classe Login
    }
    /**
     * formListener Gestionnaire d'évènements sur le formulaire de Login
     * @param void
     * @return void
     */
    formListener() {
        $('#loginForm').on( //Je veux écouter tous les changements au lever d'une touche ('keyup') sur le formulaire Login
            'keyup',
            //Callback : Fonction appelée si l'évènement defini survient, ici, lors d'un changement
            function (event) {
                //Verifier le contenu des deux champs
                const login = $('[name=loginField]');
                const password = $('[name=passwordField]');

                //Est ce que les deux champs sont remplis
                if (login.val() !== '' && password.val() !== '') {
                    $('#btnLogin').removeAttr('disabled');
                } else {
                    // Non, ça ne le fait pas tout seul, il faut le lui dire
                    $('#btnLogin').attr('disabled', 'disabled');
                }
            }
        );
    }
}