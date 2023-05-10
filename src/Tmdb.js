const API_KEY = 'c32dccdb618b05a9e7d5547e764f7047'
const API_URL = 'https://api.themoviedb.org/3'
const lang = 'language=pt-BR'

/*
- originais netflix
- recomendados (trending)
- em alta (top rated)
- ação
- comédia
- terror
- romance
- documentários 
*/

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_URL}${endpoint}`);
    const json = await req.json();
    return json;
}

const Tmdb = {
    getHomeList: async () => {
        return [{
            slug: 'originals',
            title: 'Originais Netflix',
            items: await basicFetch(`/discover/tv?with_network=213&${lang}&api_key=${API_KEY}`)
        },
        {
            slug: 'trending',
            title: 'Recomendados para Você',
            items: await basicFetch(`/trending/all/week?${lang}&api_key=${API_KEY}`)
        },
        {
            slug: 'toprated',
            title: 'Em alta',
            items: await basicFetch(`/movie/top_rated?${lang}&api_key=${API_KEY}`)
        },
        {
            slug: 'action',
            title: 'Ação',
            items: await basicFetch(`/discover/movie?with_genres=28&${lang}&api_key=${API_KEY}`)
        },
        {
            slug: 'comedy',
            title: 'Comédia',
            items: await basicFetch(`/discover/movie?with_genres=35&${lang}&api_key=${API_KEY}`)
        },
        {
            slug: 'horror',
            title: 'Terror',
            items: await basicFetch(`/discover/movie?with_genres=27&${lang}&api_key=${API_KEY}`)
        },
        {
            slug: 'romance',
            title: 'Romance',
            items: await basicFetch(`/discover/movie?with_genres=10749&${lang}&api_key=${API_KEY}`)
        },
        {
            slug: 'documentary',
            title: 'Documentários',
            items: await basicFetch(`/discover/movie?with_genres=99&${lang}&api_key=${API_KEY}`)
        },
        ]
    }
}

export { Tmdb }