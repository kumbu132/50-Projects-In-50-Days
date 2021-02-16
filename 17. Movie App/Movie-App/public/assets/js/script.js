const API_KEY = "581290909e3339e714adcd123180bc5e";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query="`;

const main = document.querySelector("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.results);

  showMovies(data.results);
}

function getRatingColor(rating) {
  let color = "";
  rating < 4
    ? (color = `red`)
    : rating < 6
    ? (color = "orange")
    : rating < 7.5
    ? (color = "yellow")
    : (color = "green");
  return color;
}

function showMovies(movies) {
  main.innerHTML = "";

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview, release_date } = movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
    <img
          src="${IMG_PATH + poster_path}"
          alt="${title}"
        />
        <div class="movie-info">
          <h3>${title} [${release_date.slice(0, 4)}]</h3>
          <span class="${getRatingColor(vote_average)}">${vote_average.toFixed(
      1
    )}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
      `;

    main.appendChild(movieEl);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + searchTerm);
    search.value = "";
  } else {
    window.location.reload();
  }
});
