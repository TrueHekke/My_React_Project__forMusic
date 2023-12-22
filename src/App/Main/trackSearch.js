import axios from 'axios';
import { useState,useEffect } from 'react'
import * as MS from './MainStyles'
import { useThemeContext } from '../themes'


function TrackSearch() {
  const [track, setTrack] = useState([]);
  const [activeFilter, setActiveFilter] = useState(null)

  const handleFilterClick = (filter) => {
    setActiveFilter(filter === activeFilter ? null : filter)
  }

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await axios.get('https://painassasin.online/catalog/track/all/');
        setTrack(response.data);
        console.log(response)
      } catch (error) {
        console.error('Ошибка при получении списка авторов:', error);
      }
    };

    fetchPlaylist();
  }, []);

  const {theme} = useThemeContext();
  const borderStyle = `2px solid ${theme.color}`;
  
  return (
    <MS.Filter>
      <MS.FilterTitle>Искать по:</MS.FilterTitle>
      <MS.PopupWrapper>
        <MS.FilterBtn
          className={`filter__button button-author _btn-text ${
            activeFilter === 'author' ? 'active' : ''
          }`}
          style ={{border: borderStyle}}
          onClick={() => handleFilterClick('author')}
        >
          исполнителю
        </MS.FilterBtn>
        {activeFilter === 'author' && (
          <MS.PopupAuthorAndGenre style={{backgroundColor:theme.background}}>
            <MS.PopupList >
            {(() => {
              const uniqueAuthors = new Set();

              track.forEach((track) => {
              if (track.author && track.author !== '-') {
              uniqueAuthors.add(track.author);
            }
          });

          return Array.from(uniqueAuthors).map((author, index) => (
              <MS.PopupItem key={index}>{author}</MS.PopupItem>
           ));
          })()}
          </MS.PopupList>
          </MS.PopupAuthorAndGenre>
        )}
      </MS.PopupWrapper>
      <MS.PopupWrapper>
        <MS.FilterBtn
          className={`filter__button button-author _btn-text ${
            activeFilter === 'year' ? 'active' : ''
          }`}
          style ={{border: borderStyle}}
          onClick={() => handleFilterClick('year')}
        >
          году выпуска
        </MS.FilterBtn>
        {activeFilter === 'year' && (
          <MS.PopupYear >
            <MS.RadioOption>
              <MS.RadioBtn
                type="radio"
                id="newer-songs"
                name="songs"
                value="newer"
              />
              <label htmlFor="newer-songs"style={{color:theme.color}}>Более новые</label>
            </MS.RadioOption>
            <MS.RadioOption>
              <MS.RadioBtn
                type="radio"
                id="older-songs"
                name="songs"
                value="older"
              />
              <label htmlFor="older-songs" style={{color:theme.color}}>Более старые</label>
            </MS.RadioOption>
          </MS.PopupYear>
        )}
      </MS.PopupWrapper>
      <MS.PopupWrapper>
        <MS.FilterBtn
          className={`filter__button button-author _btn-text ${
            activeFilter === 'genre' ? 'active' : ''
          }`}
          style ={{border: borderStyle}}
          onClick={() => handleFilterClick('genre')}
        >
          жанру
        </MS.FilterBtn>
        {activeFilter === 'genre' && (
          <MS.PopupAuthorAndGenre style={{
            backgroundColor:theme.background}}>
            <MS.PopupList>
            {(() => {
              const uniqueGenres = new Set();

              track.forEach((track) => {
              if (track.genre && track.genre !== '-') {
                uniqueGenres.add(track.genre);
            }
            });

          return Array.from(uniqueGenres).map((genre, index) => (
              <MS.PopupItem key={index}>{genre}</MS.PopupItem>
           ));
          })()}
            </MS.PopupList>
          </MS.PopupAuthorAndGenre>
        )}
      </MS.PopupWrapper>
    </MS.Filter>
  )
}

export default TrackSearch
