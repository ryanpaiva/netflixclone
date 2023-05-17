import './loading.css';

const loadGif = 'https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif'

const Loading = () => {
    return(
        <div className="loading">
            <img src={loadGif} alt="Carregando" />
        </div>
    )
}

export {Loading}