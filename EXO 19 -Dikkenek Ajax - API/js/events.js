// fonction de callback d'évènement 

// lorsque je clique sur le bouton recherche cette fonction recupère ce qu'il y a 
// dans l'input et déclenche la fonction getMovie en faisans passer la mot clef 
// en argumant

function onClickSearchMovie(e) {
    
    //on supprime le comportement par défaut du navigateur
    e.preventDefault();
    //recupération de la valeur du champ de texte
    let movie = document.querySelector("#search").value;
    //apparition de la div #list
    list.classList.remove("hide");
    //appel de la fonction ajax de recherche de film en envoyant la valeur écrite par l'utilisateur
    getMovies(movie);
}
//lorsque on clique sur un li on récupère dans cette fonction son data-id
// on déclenche la fonction showOneMovie avec un id en argument

function onClickShowOneMovie() {
    //recupération de l'id du film sur lequel on a cliqué
    let id = this.dataset.id;
    //on peut reduire la width à 30% de la liste
    document.querySelector("#list").style = "width: 30%;";
    //on affiche la div #result
    document.querySelector("#result").classList.remove("hide");
    //appel de la fonction ajax de récupération d'un film par son id
    showOneMovie(id);
}