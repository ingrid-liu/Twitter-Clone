import React, {useEffect, useState} from "react";
const MovieApiClient = () => {
    const [movies, setMovies] = useState([]);

    const [movie, setMovie] = useState({title: "", rating: 2.5});

    // will render the component once
    // Essentially get all
    useEffect(() =>
            fetch('http://localhost:4000/api/movies')
                .then(response => response.json())
                .then(movies => setMovies(movies))
        , []);

    // delete in front end, currently we are getting the full udpated data
    // from the server
    const deleteMovie = (movie) => {
        fetch(`http://localhost:4000/api/movies/${movie._id}`,
            {method: "DELETE"})
            .then(response => response.json())
            .then(movies => setMovies(movies));
    }

    const onMovieTitleChange = (event) => {
        setMovie({...movie, title: event.target.value});
    }

    const createMovieClickHandler = () => {
        fetch("http://localhost:4000/api/movies", {
            method: "POST",
            body: JSON.stringify({...movie, _id: new Date().getTime().toString()}),
            headers:{
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(movies => setMovies(movies));
    }


    const saveMovie = () => {
        fetch(`http://localhost:4000/api/movies/${movie._id}`, {
            method: "PUT",
            body: JSON.stringify(movie),
            headers:{
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(movies => setMovies(movies));
    }
    return(
        <div>
            <h2>Movies</h2>
            <input
                className="form-control"
                value={movie.title}
                onChange = {onMovieTitleChange}
                style={{width: "70%"}}
            />
            <button
                onClick={createMovieClickHandler}
                className = "btn btn-success"
            >
                Create
            </button>

            <button
                onClick={saveMovie}
                className = "btn btn-primary float-end ms-2"
            >
                Save
            </button>

            <ul className="list-group">
                {
                    movies.map((movie) =>
                        <li className="list-group-item"
                            key={movie._id}>
                            {movie.title} {movie.rating}
                            <button
                                onClick = {() => setMovie(movie)}
                                className = "btn btn-primary float-end ms-2"
                            >
                                Edit
                            </button>


                            <button
                                onClick={()=>{deleteMovie(movie)}}
                                className="btn btn-danger float-end"
                            >
                                Delete
                            </button>


                        </li>
                    )
                }

            </ul>
        </div>
    )
};
export default MovieApiClient;
