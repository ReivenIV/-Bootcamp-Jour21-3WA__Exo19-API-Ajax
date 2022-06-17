// création d'un listener au click sur le bouton de recherche
document.querySelector("form").addEventListener("submit",onClickSearchMovie)
// création d'un listener au click sur un li, le li n'existe pas au chargement on écoute le document (UNIQUEMENT SI JQUERY sinon en JS on ajoutera le addEventListener au moment de la création de la liste dans api.js)