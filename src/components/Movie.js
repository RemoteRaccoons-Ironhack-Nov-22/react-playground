function Movie(props) {

    console.log(props)

    return (
        <section>
            <h2>Movie details:</h2>

            <p>Title: {props.movieDetails.title}</p>
            <p>Rating: {props.movieDetails.rating}</p>

        </section>
    );
}

export default Movie;