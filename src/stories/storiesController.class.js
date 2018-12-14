/**
 * @name StoriesController
 * @description Controleur des stories
 * @author Aelion
 * @version 1.0.0
 */

import { UserService } from './../services/userservice.class';
import { StoriesService } from './storyservice.class';
import { Story } from './story.class';
 
export class StoriesController {
    constructor() {
        // Définit la vue pour ce contrôleur
        this.view = './src/stories/stories.view.html';

        const userService = new UserService();
        

        this.stories = [];

        // Affichage du loader
        const loader = $('[app]').children('#loader').eq(0);
        loader.removeClass('hidden');

        const service = new StoriesService();

        service.getMyStories().then((stories) => {
            for (let story of stories) {
                const aStory = new Story();
                aStory.deserialize(story);
                this.stories.push(aStory);
            }
            // En fin de parcours, on crée les lignes du tableau
            this._createTable();

            // Efface le loader
            loader.addClass('hidden');
        });
    }

    /**
     * Méthode pour récupérer la vue à afficher
     */
    getView() {
        // Récupère le placeholder de mon application
        const app = $('[app]');

        $.get(
            this.view,
            // Callback appelée après que le fichier ait été chargé
            function(viewContent) {
                app.empty(); // Vide le contenu le cas échéant
                app.html(viewContent);
            }
        );
    }

    _createTable() {
        const tbody = $('[app]').children('#stories-table').eq(0).children('tbody').eq(0);
        
        for (let story of this.stories) {
           
            // Créer une ligne
            let _row = $('<tr>');
            _row.attr('data-id', story.id);

            // Colonne 1 : id
            let _td = $('<td>');
            _td.html(story.id);
            _td.appendTo(_row);

            // Colonne 2 : Titre
            _td = $('<td>');
            _td.html(story.titre);
            _td.appendTo(_row);

            // Colonne 3 : Date de début
            _td = $('<td>');
            _td.html(story.getBeginDate());
            _td.appendTo(_row);

            // Colonne 4 : Date de fin estimée
            _td = $('<td>');
            _td.html(story.getEstimatedEndDate());
            _td.appendTo(_row);

            _td = $('<td>');
            _td.html(story.libelle);
            _td.appendTo(_row);

            // Dernière colonne à traiter
            _td = $('<td>');
            let _btn = $('<i>');
            _btn
                .addClass('icon-switch')
                .addClass('done');
            _btn.appendTo(_td);
            _btn = $('<i>');
            _btn
                .addClass('icon-bin2')
                .addClass('delete');
            _btn.appendTo(_td);
            _td.appendTo(_row);

            // Ajoute le tout au tbody
            _row.appendTo(tbody);
        }
    }
}