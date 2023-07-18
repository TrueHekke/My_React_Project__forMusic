import { useState } from 'react'
import * as MS from './MainStyles'
import { useThemeContext } from '../themes'


function TrackSearch() {
  const [activeFilter, setActiveFilter] = useState(null)

  const handleFilterClick = (filter) => {
    setActiveFilter(filter === activeFilter ? null : filter)
  }

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
              <MS.PopupItem>Michael Jackson</MS.PopupItem>
              <MS.PopupItem>Frank Sinatra</MS.PopupItem>
              <MS.PopupItem>Calvin Harris</MS.PopupItem>
              <MS.PopupItem>Zhu</MS.PopupItem>
              <MS.PopupItem>Arctic Monkeys</MS.PopupItem>
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
              <MS.PopupItem>Rock</MS.PopupItem>
              <MS.PopupItem>Pop</MS.PopupItem>
              <MS.PopupItem>Rap & Hip-Hop</MS.PopupItem>
              <MS.PopupItem>Easy Listening</MS.PopupItem>
              <MS.PopupItem>Dance & House</MS.PopupItem>
              <MS.PopupItem>Instrumental</MS.PopupItem>
              <MS.PopupItem>Metal</MS.PopupItem>
              <MS.PopupItem>Alternative</MS.PopupItem>
              <MS.PopupItem>Dubstep</MS.PopupItem>
              <MS.PopupItem>Jazz & Blues</MS.PopupItem>
              <MS.PopupItem>Drum & Bass</MS.PopupItem>
              <MS.PopupItem>Trance</MS.PopupItem>
              <MS.PopupItem>Chanson</MS.PopupItem>
              <MS.PopupItem>Ethnic</MS.PopupItem>
              <MS.PopupItem>Acoustic & Vocal</MS.PopupItem>
              <MS.PopupItem>Reggae</MS.PopupItem>
              <MS.PopupItem>Classical</MS.PopupItem>
              <MS.PopupItem>Indie Pop</MS.PopupItem>
              <MS.PopupItem>Speech</MS.PopupItem>
              <MS.PopupItem>Electropop & Disco</MS.PopupItem>
              <MS.PopupItem>Other</MS.PopupItem>
            </MS.PopupList>
          </MS.PopupAuthorAndGenre>
        )}
      </MS.PopupWrapper>
    </MS.Filter>
  )
}

export default TrackSearch
