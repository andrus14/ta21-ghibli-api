const filmListUl = document.querySelector('#film-list');

fetch('https://ghibliapi.herokuapp.com/films')
.then(response => response.json())
.then(data => {
    data.forEach(film => {
        const filmLi = document.createElement('li');
        // filmLi.innerText = film.title;

        const filmTitleA = document.createElement('a');
        filmTitleA.href = 'film.html?id=' + film.id;
        filmTitleA.textContent = film.title;
        filmLi.appendChild(filmTitleA);

        const filmImageImg = document.createElement('img');
        filmImageImg.src = film.image;
        filmLi.appendChild(filmImageImg);

        filmListUl.appendChild(filmLi);
    });
});

