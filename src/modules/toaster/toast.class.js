/**
 * @name Toast
 * @description Afficher un toast (snackbar)
 * @author Aelion
 * @version 1.0.0
 */

class Toast {
    constructor(params) {
        if (!params.hasOwnProperty('background')) {
            // Paramètre de definition de la couleur de fond du toast
            this.backgroundClass = 'danger';
        } else {
            this.backgroundClass = params.background;
        }

        if (!params.hasOwnProperty('duration')) {
            // Durée d'affichage du toast (secondes)
            this.duration = 3;
        } else {
            this.duration = params.duration;
        }

        if (!params.hasOwnProperty('message')) {
            this.message = 'Default message';
        } else {
            this.message = params.message;
        }
    }

    setBackground(cssClass) {
        this.backgroundClass = cssClass;
    }

    setDuration(duration) {
        this.duration = duration;
    }

    toastIt() {
        //Pour creer un objet jquery en memoire : balise ouvrante
        const toaster = $('<div>');

        // On lui ajoute les classes
        toaster
            .addClass(this.backgroundClass)
            .addClass('toast')
            .html('<p>' + this.message + '</p>'); //Si je veux un bloc entier d ela taille de mon toaast css, je mets this.message (voir aussi sur custom.css)

        // Ajoute le toaster au document lui-même
        toaster.appendTo($('body'));

        //Affiche pendant un certain temps
        setTimeout(
            function () {
                //Ici, quand on arrive au bout de l'intervalle de temps
                toaster.remove();
            },
            this.duration * 1000
        );
    }
}