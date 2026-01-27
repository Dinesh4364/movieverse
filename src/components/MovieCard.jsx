import React from "react";
const MovieCard = ({ movie: {title, vote_average, poster_path, release_date, original_language} }) => {  //we need to use more properties in movie prop so we can also destructure it like ({movie: {title, year, poster}})
    return(
        <div className="movie-card">
            <img src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : './No-Poster.png'} alt={title} />
            <div className="mt-4"> {/* margin top 4 */}
                <h3 className="text-lg font-semibold">{title}</h3>
                <div className="content">
                    <div className="rating">
                        <img src="./Rating.svg" alt="star" />
                        <span>{vote_average ? vote_average.toFixed(1) : "N/A"}</span>
                    </div>
                    <span>•</span>
                    <p className="lang">{original_language}</p>
                    <span>•</span>
                    <div className="year">{release_date ? release_date.substring(0,4) : "N/A"}</div>
                </div>
            </div>
        </div>
    );
}
export default MovieCard;