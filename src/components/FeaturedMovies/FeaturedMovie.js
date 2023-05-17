import React from "react";
import './FeaturedMovie.css'

const Featured = ({ item }) => {

    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres) {
        genres.push(item.genres[i].name);
    }

    let description = item.overview;
    if (description.length > 200) {
        description = description.substring(0, 200)+'...';
    }

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured vertical">

                <div className="featured horizontal">
                    <div className="name">{item.original_name}</div>

                    <div className="info">
                        <div className="info points">{item.vote_average} pontos</div>
                        <div className="info year">{firstDate.getFullYear()}</div>
                        <div className="info seasons">{item.number_of_seasons} Temporada
                            {item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>

                    <div className="description">
                        {description}
                    </div>
                    <div className="buttons">
                        <a href="#" className="watch">▶ Assistir</a>
                        <a href="#" className="addList">+ Minha lista</a>
                    </div>

                    <div className="genres"><strong>Gêneros</strong> {genres.join(', ')}</div>
                </div>
            </div>
        </section>
    )
}

export { Featured }