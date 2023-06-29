import { useState } from "react";

function TrackSearch() {
    const [activeFilter, setActiveFilter] = useState(null);

    const handleFilterClick = (filter) => {
        setActiveFilter(filter === activeFilter ? null : filter);
    };
    
    return(<div className="centerblock__filter filter">
            <div className="filter__title">Искать по:</div>
            <div className={`filter__button button-author _btn-text ${activeFilter === "author" ? "active" : ""}`}
            onClick={() => handleFilterClick("author")}>исполнителю</div>
            {activeFilter === "author" && (
                <div className="popup_wrapper">
                    <div className="popup_author popup">
                        <ul>
                            <li className="author_item">Michael Jackson</li>
                            <li className="author_item">Frank Sinatra</li>
                            <li className="author_item">Calvin Harris</li>
                            <li className="author_item">Zhu</li>
                            <li className="author_item">Arctic Monkeys</li>
                        </ul>
                    </div>
                </div>
            )}
            <div className={`filter__button button-author _btn-text ${activeFilter === "year" ? "active" : ""}`}
            onClick={() => handleFilterClick("year")}>году выпуска</div>
            {activeFilter === "year" && (
                <div className="popup_wrapper">
                    <div className="popup_year popup">
                        <div className="radio-option">
                            <input
                                className="radio-button"
                                type="radio"
                                id="newer-songs"
                                name="songs"
                                value="newer"
                        
                            />
                            <label htmlFor="newer-songs">Более новые</label>
                        </div>
                        <div className="radio-option">
                            <input
                                className="radio-button"
                                type="radio"
                                id="older-songs"
                                name="songs"
                                value="older"
                            />
                            <label htmlFor="older-songs">Более старые</label>
                        </div>
                    </div>
                </div>
            )}
            <div className={`filter__button button-author _btn-text ${activeFilter === "genre" ? "active" : ""}`}
            onClick={() => handleFilterClick("genre")}>жанру</div>
            {activeFilter === "genre" && (
                <div className="popup_wrapper">
                    <div className="popup_genre popup">
                        <ul>
                            <li className="genre_item">Rock</li>
                            <li className="genre_item">Pop</li>
                            <li className="genre_item">Rap & Hip-Hop</li>
                            <li className="genre_item">Easy Listening</li>
                            <li className="genre_item">Dance & House</li>
                            <li className="genre_item">Instrumental</li>
                            <li className="genre_item">Metal</li>
                            <li className="genre_item">Alternative</li>
                            <li className="genre_item">Dubstep</li>
                            <li className="genre_item">Jazz & Blues</li>
                            <li className="genre_item">Drum & Bass</li>
                            <li className="genre_item">Trance</li>
                            <li className="genre_item">Chanson</li>
                            <li className="genre_item">Ethnic</li>
                            <li className="genre_item">Acoustic & Vocal</li>
                            <li className="genre_item">Reggae</li>
                            <li className="genre_item">Classical</li>
                            <li className="genre_item">Indie Pop</li>
                            <li className="genre_item">Speech</li>
                            <li className="genre_item">Electropop & Disco</li>
                            <li className="genre_item">Other</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}

export default TrackSearch;