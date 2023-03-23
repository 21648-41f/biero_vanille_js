/**
 * Module de gestion des données et des requêtes des bieres
 *
 * @module ServiceBiere
 */
export default class ServiceBiere {
    /**
     * URL de base du service Web utilisé pour les appels de l'API.
     * @static
     * @memberof Biere
     */
    static api_url = "http://127.0.0.1:8000/webservice/php/";
    
    /**
     * Récupérer l'ensemble des biere sur le service Web
     *
     * @static
     * @returns void
     * @memberof Biere
     */
    static getListeBieres (fctRappel){
        fetch(this.api_url + "biere")
            .then(data=>data.json())
            .then(data=>{
                fctRappel(data);
            })
    }

    static getListeDesMeilleuresBieres(fctRappel){
       
    }

    static getUneBiere(id, fctRappel){
       
    }

    static getCommentaires(id, fctRappel){
       
    }

    static ajouterCommentaires(id, commentaire, fctRappel){
        
    }

}
