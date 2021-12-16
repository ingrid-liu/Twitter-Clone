// declare URL to service
const URL = 'http://localhost:4000/rest/movies';

// declare function to retrieve data from database
const findAllMovies = () =>
    // send HTTP GET to URL
    fetch(URL)
        .then(response => response.json());


// implement function to delete movie by its ID
// send HTTP DELETE to URL including movie's ID
// export const deleteMovie = (id) =>
//     fetch(`${URL}/${id}`, {
//         method: 'DELETE',
//     });

const deleteMovie = (id) =>
    fetch(`${URL}/${id}`,
        {
            method: "DELETE"
        });


// implement function to create a new movie in the database
const createMovie = (movie) =>
    fetch(URL, {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

const findMovieById = (id) =>
    fetch(`${URL}/${id}`)
        .then(response => response.json());

const updateMovie = (movie) =>
    fetch(`${URL}/${movie._id}`, {
        method: 'PUT',
        body: JSON.stringify(movie),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());


// export findAllMovies, deleteMovie to use elsewhere
export default {
    findAllMovies, deleteMovie, createMovie, findMovieById, updateMovie

};

