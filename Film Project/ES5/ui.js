function UI() {

}

UI.prototype.addFilmToUI = function(newFilm) {
    /*<tr>
        <td><img src="" class="img-fluid img-thumbnail"></td>
        <td></td>
        <td></td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr> -->*/
    const filmlist = document.querySelector('#films');
    filmlist.innerHTML += ` <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
    <td>${newFilm.title}</td>
    <td>${newFilm.director}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr> `

}

UI.prototype.clearInput = function(element1, element2, element3) {
    element1.value = "";
    element2.value = "";
    element3.value = "";

}



UI.prototype.showAlert = function(message, alert) {
    const cardBody = document.querySelector('.card-body');
    const div = document.createElement('div');
    div.className = `alert alert-${alert}`;
    div.textContent = message;
    cardBody.appendChild(div);
    setTimeout(function() {
        div.remove();
    }, 1000)


}


UI.prototype.loadAllFilms = function(films) {
    const filmList = document.getElementById('films');


    films.forEach(function(film) {
        filmList.innerHTML += ` <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
        <td>${film.title}</td>
        <td>${film.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr> `;

    });
}



UI.prototype.deleteFilmFromUI = function(element) {
    element.parentElement.parentElement.remove();

}

UI.prototype.clearAllFilmsFromUI = function() {
    const filmList = document.getElementById('films');
    // filmlist.innerHTML = "";//! Bu yöntem ağır çalışır

    while (filmList.firstElementChild !== null) {
        filmList.firstElementChild.remove();
    }


}