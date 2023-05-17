import React, { useEffect, useState } from "react";
import { Tmdb } from '../Tmdb'
import { MovieList } from "../components/movieList/movieList";
import { Featured } from "../components/FeaturedMovies/FeaturedMovie";
import { Header } from "../components/header/header";
import { Loading } from "../components/loading/loading";

const Home = () => {

    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState(null);
    const [scrollBlack, setScrollBlack] = useState(false)

    useEffect(() => {
        const loadAll = async () => {
            let list = await Tmdb.getHomeList();
            setMovieList(list);

            let originals = list.filter(i => i.slug === 'originals');
            let randomMovie = Math.floor(Math.random() * (originals[0].items.results.length - 1));
            let randomChoice = originals[0].items.results[randomMovie];
            let choiceInfo = await Tmdb.getMovieInfo(randomChoice.id, 'tv')
            setFeaturedData(choiceInfo)

            console.log(choiceInfo);
        }

        loadAll();
    }, []);

    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY > 10) {
                setScrollBlack(true)
            } else {
                setScrollBlack(false)
            }
        }
        window.addEventListener('scroll', scrollListener)

        return () => {
            window.removeEventListener('scroll', scrollListener)
        }
    }, []);

    return (
            <div className="page">
                <Header black={scrollBlack} />
                {featuredData &&
                    <Featured item={featuredData} />
                }

                <section className="lists">
                    {movieList.map((item, key) => (
                        <MovieList key={key} title={item.title} items={item.items} />
                    ))}
                </section>

                <footer>
                    Feito por Ryan Paiva<br />
                    Direitos de imagem para Netflix<br />
                    Dados utilizados do site themoviedb.org
                </footer>

            {movieList.length <=0 &&
                <Loading />
            }
            </div>
    )
}

export { Home }