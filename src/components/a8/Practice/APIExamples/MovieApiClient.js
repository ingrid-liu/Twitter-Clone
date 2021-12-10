import React, {useEffect, useState} from "react";
const MovieApiClient = () => {
    // declare empty array local state variable movies
    const [movies, setMovies] = useState([]);

    // handle movie title input field change
    const [movie, setMovie] = useState({title: '', rating: 2.5});


    // when the component first loads
    useEffect(() =>
            // send an HTTP request to this URL
            fetch('http://localhost:4000/api/movies')
                .then(response => response.json())
                .then(movies => setMovies(movies))
        , []);
        // ↑ don't force re-render because state changed


    // delete from front-end;
    // Now is getting the updated data from the server
    const deleteMovie = (movie) =>
        fetch(`http://localhost:4000/api/movies/${movie._id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(movies => setMovies(movies));


    // send HTTP message to server URL /api/movies use HTTP POST
    const onMovieTitleChange = (event) =>
        setMovie({...movie, title: event.target.value});

    const createMovieClickHandler = () =>
        fetch('http://localhost:4000/api/movies', {
            method: 'POST',
            body: JSON.stringify(movie),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(movies => setMovies(movies));

    // send an HTTP PUT message to the saveMovie HTTP Webservice endpoint
    const saveMovie = () =>
        fetch(`http://localhost:4000/api/movies/${movie._id}`, {
            method: 'PUT',
            body: JSON.stringify(movie),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(movies => setMovies(movies));




    return(
        <div>
            <h2>Movies</h2>
            <ul className="list-group">
                {
                    movies.map((movie) =>
                        <li className="list-group-item"
                            key={movie._id}>
                            {movie.title} {movie.rating}


                            <input className="form-control"
                                   value={movie.title}
                                   onChange={onMovieTitleChange}
                                   style={{width: "70%"}}/>

                            {/*Create Button*/}
                            <button
                                onClick={createMovieClickHandler}
                                className="btn btn-success float-end ms-2">
                                Create
                            </button>

                            {/*Delete Button*/}
                            <button
                                onClick={()=>{deleteMovie(movie)}}
                                className="btn btn-danger float-end  ms-2">
                                Delete
                            </button>

                            {/*Edit Button*/}
                            <button
                                onClick={() => setMovie(movie)}
                                className="btn btn-primary float-end ms-2">
                                Edit
                            </button>

                            {/*Save Button*/}
                            <button
                                onClick={saveMovie}
                                className="btn btn-primary ms-2 float-end">
                                Save
                            </button>




                        </li>
                    )
                }
            </ul>
        </div>
    )
};
export default MovieApiClient;
