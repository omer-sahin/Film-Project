const form = document.getElementById('film-form');
const titleElement = document.querySelector('#title');
const directorElement = document.querySelector('#director');
const urlElement = document.querySelector('#url');
const cardBody = document.querySelectorAll('.card-body')[1];
const clear = document.querySelector('#clear-films');


//! ui objesini üretme

const ui = new UI();
//! Storage objesisini üretme
const storage = new Storage();

//! Tüm eventleri Yükleme
eventListeners();

function eventListeners() {
    form.addEventListener('submit', addFilm);
    document.addEventListener('DOMContentLoaded', function() {
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films)

    });
    cardBody.addEventListener('click', deleteFilm);
    clear.addEventListener('click', clearAllFilms);


}


function addFilm(e) {
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;
    if (title === "" || director === "" || url === "") {
        ui.showAlert('Lütfen boş bırakılan yerleri doldurun', 'warning');
        //! Hata mesajı
    } else {
        //!Yeni Film
        const newFilm = new Film(title, director, url);
        ui.addFilmToUI(newFilm) //! Ara yüze film ekleme
        ui.clearInput(titleElement, directorElement, urlElement);
        storage.addFilmToStorage(newFilm); //! storage film ekleme
        ui.showAlert('Film başarı ile eklendi', 'success');
    }



    e.preventDefault();
}

function deleteFilm(e) {
    if (e.target.id === 'delete-film') {
        ui.deleteFilmFromUI(e.target);

        storage.deleteFilmFromLS(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.showAlert('Silme işlemi başarılı', 'success');

    }
}

function clearAllFilms() {
    ui.clearAllFilmsFromUI();
    storage.clearAllFilmsFromLS();
}