import React, {useEffect, useState} from "react";
import service from './service';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState({title: ""});

    useEffect(() =>
        service.findAllMovies()
            .then(movies => setMovies(movies)),[]);

    // handle delete movie button click
    const deleteMovie = (movie) => {
        console.log("in Movies, will delete: ", movie.title)
        service.deleteMovie(movie._id)
            .then(() => setMovies(
                movies.filter(m => m !== movie)
            ));
        console.log("after deleting, the data:", movies)
    }

    const createMovie = () =>
        service.createMovie({title: 'New Movie'})
            .then(actualMovie =>
                setMovies([
                    actualMovie, ...movies
                ]));

    const findMovieById = (movie) =>
        service.findMovieById(movie._id)
            .then(movie => setMovie(movie));

    const updateMovie = (event) =>
        setMovie({...movie, title: event.target.value});

    const saveMovie = () =>
        service.updateMovie(movie)
            .then(() => setMovies(
                movies.map(m => m._id === movie._id ? movie : m)
            ));



    return(
        <div>
            <button
                onClick={createMovie}
                className="btn btn-success float-end">
                Create
            </button>

            <h2>Movies</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <button
                        onClick={saveMovie}
                        className="btn btn-primary float-end">
                        Save
                    </button>

                    <input
                        onChange={updateMovie}
                        defaultValue={movie.title}
                        className="form-control"/>
                </li>

                {
                    movies.map(movie =>
                        <li key={movie._id}
                            className="list-group-item">
                            <button
                                onClick={() => findMovieById (movie)}
                                className="btn btn-warning float-end ms-2">
                                Edit
                            </button>

                            <button
                                className="btn btn-danger float-end"
                                onClick={() => deleteMovie(movie)}>
                                Delete
                            </button>



                            {movie.title}
                        </li>
                    )
                }
            </ul>
        </div>
    )
};

export default Movies;

