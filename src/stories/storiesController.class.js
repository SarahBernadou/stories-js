/**
 * @name SotriesController
 * @description Controleur des stories
 * @author Aelion
 * @version 1.0.0
 */

export class StoriesController {
    constructor() {
        // Definit la vue pour ce controleur
        this.view = './src/stories/stories.view.html';
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