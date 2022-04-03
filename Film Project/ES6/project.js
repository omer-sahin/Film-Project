const form = document.getElementById('film-form');
const titleElement = document.querySelector('#title');
const directorElement = document.querySelector('#director');
const urlElement = document.querySelector('#url');
const cardBody = document.querySelectorAll('.card-body')[1];
const clear = document.querySelector('#clear-films');




//! Tüm eventleri Yükleme
eventListeners();

function eventListeners() {
    form.addEventListener('submit', addFilm);
    document.addEventListener('DOMContentLoaded', function() {
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films)

    });
    cardBody.addEventListener('click', deleteFilm);
    clear.addEventListener('click', clearAllFilms);


}


function addFilm(e) {
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;
    if (title === "" || director === "" || url === "") {
        UI.showAlert('Lütfen boş bırakılan yerleri doldurun', 'warning');
        //! Hata mesajı
    } else {
        //!Yeni Film
        const newFilm = new Film(title, director, url);
        UI.addFilmToUI(newFilm) //! Ara yüze film ekleme
        UI.clearInput(titleElement, directorElement, urlElement);
        Storage.addFilmToStorage(newFilm); //! storage film ekleme
        UI.showAlert('Film başarı ile eklendi', 'success');
    }



    e.preventDefault();
}

function deleteFilm(e) {
    if (e.target.id === 'delete-film') {
        UI.deleteFilmFromUI(e.target);

        Storage.deleteFilmFromLS(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.showAlert('Silme işlemi başarılı', 'success');

    }
}

function clearAllFilms() {
    UI.clearAllFilmsFromUI();
    Storage.clearAllFilmsFromLS();
}