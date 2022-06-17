// clef api
const API_KEY = 'a59ecd6f6f0c1384cb253d93d5b20699';
// base url image
const url_img = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';

// function ajax qui recupèrent tous les film en fonction d'un mot clef
//callback à l'intérieur execute affichage d'une liste
function getMovies(movie) {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movie}`)   
    .then((response)=> { //!Si la reponse est positive alors : 
        
        console.log(response);
        let res = response.data.results;
        let list = document.querySelector("#list");//!On appel l'ID list du HTML ou on rajoutera nos ul
        list.innerHTML = "";

        let ul = document.createElement("ul");//!On crée notre ul où on rajoutera les autres valises HTML

        for (let i = 0; i < res.length; i++){
            let id = res[i].id;            
            let li = document.createElement("li");
            let a = document.createElement("a");

            a.setAttribute("href", "#");
            a.dataset.id = id;
            a.innerHTML = res[i].title;            
            a.addEventListener("click", showOneMovie);

            li.appendChild(a);
            ul.appendChild(li);
        }
        list.appendChild(ul);
    })
    //!Si la reponse est null alors : 
    .catch(err=>("error fetch", err))

}


//fonction ajax qui récupère les détails d'un film en fonction de son id
// callback à l'intérieur execute l'affichage d'un film
function showOneMovie(id) {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`) 
        .then((response)=> {
            //console.log('fede', response.data);
            let res = response.data;
            console.log(res);
            let div = document.querySelector('#result');
            div.innerHTML = "";

            let image = document.createElement('img');
            image.src = `https://image.tmdb.org/t/p/w500${poster_path}`;

            let title = document.createElement("h2");
            title.innerHTML = res.original_title;
            
            let date = document.createElement("p");
            date.innerHTML = res.release_date;

            let description = document.createElement("p");
            description.innerHTML = res.overview;

            div.appendChild(image);
            div.appendChild(title);
            div.appendChild(date);
            div.appendChild(description);
        })
        .catch(err=>("error fetch", err))
}

//requète ajax de récupération des données d'une company
function getCompanyWebSite(id) {
    
}

//fonction callback d'affichage des données d'une company
function displayCompany(response) {
    
}


//companies : https://api.themoviedb.org/3/company/{company_id}?api_key=a59ecd6f6f0c1384cb253d93d5b20699