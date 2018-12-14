/**
 * @name Story
 * @desc Modèle pour la gestion des stories
 * @author Aélion
 * @version 1.0.0
 */
export class Story {
    constructor() {
        this.id = 0;
        this.titre = '';
        this.debut =  new Date();
        this.fin = new Date();
        this.val = '' ;
        this.team_members_id = 0;
        //this.business_values_id = 0;
    }

    getBeginDate() {
        return this.debut.getDate() + '-' + this.debut.getMonth() + '-' + this.debut.getFullYear();
    }

    getEstimatedEndDate() {
        return this.fin.getDate() + '-' + this.fin.getMonth() + '-' + this.fin.getFullYear();
    }

    deserialize(datas) {
        this.id = datas.Num;
        this.titre = datas.Titre;
        this.debut = new Date(datas.Debut);
        this.fin = new Date(datas.Fin);
        this.val = datas.Valeur;
        this.team_members_id = datas.Utilisateur;
        //this.business_values_id = datas.business_values_id;
        
        this.libelle = datas.libelle;
        if (datas.hasOwnProperty('prenom')) {
            this.forname = datas.forname;
        }
        if (datas.hasOwnProperty('nom')) {
            this.lastname = datas.lastname;
        }
    }
}