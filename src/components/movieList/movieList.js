import React, { useState } from "react";
import './movieList.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const MovieList = ({ title, items }) => {
    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let leftX = scrollX + Math.round(window.innerWidth / 2);
        if (leftX > 0) {
            leftX = 0;
        }
        setScrollX(leftX)
    }

    const handleRightArrow = () => {
        let rightX = scrollX - Math.round(window.innerWidth / 2);
        let listWidth = items.results.length * 195;
        if ((window.innerWidth - listWidth) > rightX) {
            rightX = window.innerWidth - listWidth - 60;
        }
        setScrollX(rightX)
    }

    return (
        <div className="movieList">
            <h2>{title}</h2>
            <div className="arrow left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{ fontSize: 50 }} />
            </div>
            <div className="arrow right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{ fontSize: 50 }} />
            </div>

            <div className="movieList area">
                <div className="movieList list" style=
                    {{
                        marginLeft: scrollX,
                        width: items.results.length * 195
                    }}>

                    {items.results.length > 0 && items.results.map((item, key) => (

                        <div key={key} className="movieList item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>

                    ))}
                </div>

            </div>
        </div>
    )
}

export { MovieList }