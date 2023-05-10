import React, { useEffect, useState } from "react";
import { Tmdb } from '../Tmdb'
import { MovieList } from "../components/movieList/movieList";

const Home = () => {

    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        const loadAll = async () => {
            let list = await Tmdb.getHomeList();
            setMovieList(list);
        }

        loadAll();
    }, []);

    return (
        <div className="page">
            <section className="lists">
                {movieList.map((item, key) => (
                    <MovieList key={key} title={item.title} items={item.items}/>
                ))}
            </section>
        </div>
    )
}

export { Home }