import styled from "styled-components";

export const Bar = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
`

export const BarProgress = styled.div`
width: 100%;
height: 5px;
background: #2E2E2E;
`
export const BarPlayerBlock = styled.div`
height: 73px;
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
`
export const BarPlayer = styled.div`
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
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
`
export const PlayerControls = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
padding: 0 27px 0 31px;
`
export const BtnPrev = styled.div`
cursor: pointer;
margin-right: 23px;
adding: 5px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
`
export const PrevImg = styled.img`
width: 15px;
height: 14px;
`
export const BtnPlay = styled.div`
cursor: pointer;
margin-right: 23px;
padding: 5px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
`
export const PlayImg = styled.img`
width: 22px;
height: 20px;
fill: #D9D9D9;
`
export const BtnNext = styled.div`
cursor: pointer;
padding: 5px;
margin-right: 15px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
`
export const NextImg = styled.img`
width: 15px;
height: 14px;
fill: inherit;
stroke: #D9D9D9;
`
export const BtnRepeat = styled.div`
margin-right: 24px;
padding: 5px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
:hover {
    fill: transparent;
    stroke: #ACACAC;
    cursor: pointer;
}
:active {
    fill: transparent;
    stroke: #FFFFFF;
    cursor: pointer;
}
`
export const RepeatImg = styled.img`
width: 18px;
height: 12px;
fill: transparent;
stroke: #696969;
`
export const BtnShuffle = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
margin-right: 15px;
:hover {
    fill: transparent;
    stroke: #ACACAC;
    cursor: pointer;
}
:active {
    fill: transparent;
    stroke: #FFFFFF;
    cursor: pointer;
}
`
export const ShuffleImg = styled.img`
width: 19px;
height: 12px;
fill: transparent;
stroke: #696969;
`
export const TrackPlay = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
`
export const TrackContain = styled.div`
width: auto;
display: -ms-grid;
display: grid;
  -ms-grid-columns: auto 1fr;
      grid-template-columns: auto 1fr;
      grid-template-areas: "image author" "image album";
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
`
export const TrackPlayImg = styled.div`
width: 51px;
height: 51px;
background-color: #313131;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
margin-right: 12px;
  -ms-grid-row-span: 2;
  grid-area: image;
`
export const TrackImg = styled.img`
width: 18px;
height: 17px;
fill: transparent;
stroke: #4E4E4E;
`
export const TrackPlayAuthor = styled.div`
grid-area: author;
min-width: 49px;
`
export const AuthorLink = styled.a`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
white-space: nowrap;
`
export const TrackPlayAlbum = styled.div`
grid-area: album;
min-width: 49px;
`
export const AlbumLink = styled.a`
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 24px;
color: #FFFFFF;
`
export const TrackLikeAndDis = styled.div`
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
margin-left: 26%;
`
export const TrackLike = styled.div`
cursor: pointer;
padding: 5px;
`
export const LikeImg = styled.img`
width: 14px;
height: 12px;
fill: transparent;
stroke: #696969;
:active {
    fill: #696969;
    stroke: #FFFFFF;
    cursor: pointer;
}
`
export const TrackDis = styled.div`
cursor: pointer;
padding: 5px;
margin-left: 28.5px;
`
export const DisImg = styled.img`
width: 14.34px;
height: 13px;
fill: transparent;
stroke: #696969;
`
export const VolumeBlock = styled.div`
width: auto;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
justify-content: space-around;
padding: 0 92px 0 180%;
`
export const VolumeContent = styled.div`
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
  -webkit-box-pack: end;
      -ms-flex-pack: end;
          justify-content: end;
`
export const VolumeImgBlock = styled.div`
width: 13px;
height: 18px;
margin-right: 17px;
`
export const VolumeImg = styled.img`
width: 13px;
height: 18px;
fill: transparent;
`
export const VolumeProgress = styled.div`
width: 109px;
`
export const ProgressLine = styled.input`
width: 109px;
cursor: pointer;
`