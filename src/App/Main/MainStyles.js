import styled from "styled-components";

export const Main = styled.main`
-webkit-box-flex: 1;
-ms-flex: 1 1 auto;
    flex: 1 1 auto;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
    justify-content: space-between;
`

export const Centerblock = styled.div`
width: auto;
-webkit-box-flex: 3;
-ms-flex-positive: 3;
flex-grow: 3;
padding: 20px 40px 20px 111px;
`
export const Search = styled.div`
width: 100%;
border-bottom: 1px solid #4E4E4E;
margin-bottom: 51px;
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
`
export const SearchImg = styled.img`
width: 17px;
height: 17px;
margin-right: 5px;
fill: transparent;
`

export const SearchText =styled.input`
-webkit-box-flex: 100;
      -ms-flex-positive: 100;
          flex-grow: 100;
background-color: transparent;
border: none;
padding: 13px 10px 14px;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;

::placeholder {
    background-color: transparent;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
}

::-ms-input-placeholder {
    background-color: transparent;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
}

:-ms-input-placeholder {
    background-color: transparent;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
}

.search__text::-webkit-input-placeholder {
    background-color: transparent;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
}
`

export const H2 = styled.h2`
font-style: normal;
font-weight: 400;
font-size: 64px;
line-height: 72px;
letter-spacing: -0.8px;
margin-bottom: 45px;
`
export const Filter = styled.div`
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
margin-bottom: 51px;
`
export const FilterTitle = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
margin-right: 15px;
`
export const FilterBtn = styled.div`
position: relative;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
border: 1px solid #FFFFFF;
border-radius: 60px;
padding: 6px 20px;
:hover {
border-color: #D9B6FF;
color: #D9B6FF;
cursor: pointer;
}
    
:active {
border-color: #AD61FF;
color: #AD61FF;
cursor: pointer;
}
`
export const PopupWrapper = styled.div`
position: relative;
display: inline-block;
`
export const PopupAuthorAndGenre = styled.div`
border-radius: 12px;
position: absolute;
top: calc(100% + 5px);
left: 0;
width: 200px;
z-index: 1;
display: inline-flex;
padding: 34px;
flex-direction: column;
align-items: flex-start;
gap: 10px;
`
export const PopupList = styled.ul`
list-style: none;
padding: 0;
margin: 0;
max-height: 150px; 
overflow: auto;
scrollbar-width: thin;
scrollbar-color: #AD61FF #fff;

::-webkit-scrollbar {
    width: 8px; 
}

::-webkit-scrollbar-thumb {
    background-color: #AD61FF; 
}

::-webkit-scrollbar-track {
    background-color: #fff; 
}
`

export const PopupItem = styled.li`
margin-bottom: 5px;
`

export const PopupYear = styled.div`
display: flex;
flex-direction: row;
gap: 20px;
border-radius: 12px;
font-weight: 400;
line-height: 24px;
position: absolute;
top: calc(100% + 5px);
left: 0;
padding: 34px;
width: 350px;
z-index: 1;
`
export const RadioOption = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 15px;
`
export const RadioBtn = styled.input`
width: 18px;
height: 18px;
`