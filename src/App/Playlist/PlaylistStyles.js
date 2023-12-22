import styled from "styled-components";

export const Content = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
flex-direction: column;
`
export const ContentTitle = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
justify-content: space-between;
margin-bottom: 24px;
`
export const TitleItem1 = styled.div`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
letter-spacing: 2px;
color: #696969;
text-transform: uppercase;
width: 447px;
`
export const TitleItem2 = styled.div`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
letter-spacing: 2px;
color: #696969;
text-transform: uppercase;
width: 321px;
`

export const TitleItem3 = styled.div`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
letter-spacing: 2px;
color: #696969;
text-transform: uppercase;
width: 245px;
`

export const TitleItem4 = styled.div`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
letter-spacing: 2px;
color: #696969;
text-transform: uppercase;
width: 60px;
text-align: end;
`

export const TitleItemImg = styled.img`
width: 12px;
height: 12px;
fill: transparent;
stroke: #696969;
`
export const TitlePlaylist = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
`
export const Playlist = styled.div`
`

export const PlaylistContainer = styled.div`
  max-height: 600px; 
  overflow-y: auto;
  scrollbar-width: none; 
  -ms-overflow-style: none; 
  ::-webkit-scrollbar {
    display: none; 
  }
`

export const PlaylistItem = styled.div`
width: 100%;
display: block;
margin-bottom: 12px;
`
export const Track = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
    -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
    -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;

`
export const TrackTitle = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
width: 447px;
`

export const TrackTitleImg = styled.div`
width: 51px;
height: 51px;
padding: 16px;
background: #313131;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
margin-right: 17px;
`

export const TrackImg = styled.img`
width: 18px;
height: 17px;
fill: transparent;
stroke: #4E4E4E;
`

export const TrackTitleText = styled.div`
`

export const TrackLink = styled.a`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
`

export const TrackSpan = styled.span`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #4E4E4E;
`
export const TrackAuthor = styled.div`
width: 321px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
`
export const AuthorLink = styled.a`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
text-align: left;
`
export const TrackAlbum = styled.div`
width: 245px;
`
export const AlbumLink = styled.a`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #696969;
`
export const TrackTime = styled.div`
`
export const TimeImg = styled.img`
width: 14px;
height: 12px;
margin-right: 17px;
fill: transparent;
stroke: #696969;
cursor:pointer;
`
export const TimeText = styled.span`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
text-align: right;
color: #696969;
`
export const H2 = styled.h2`
сolor: "#FFFFFF";
font-style: normal;
font-weight: 400;
font-size: 64px;
line-height: 72px;
letter-spacing: -0.8px;
margin-bottom: 45px;
`