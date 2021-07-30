import styled from 'styled-components'

export const ContainerTracks = styled.div ` 
    color: grey;
    background-color: white;
    border-radius: 20px;
    line-height: 40px;

    margin: 0px 0px 0px 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 4;
`
export const TrackTitle = styled.div ` 
    color: white;
    background-color: lightgrey;
    border-bottom: lightgrey 1px solid;
    
    display: flex;
    justify-content: center;    
    margin-bottom: 30px;
`

export const TrackList = styled.div ` 
    display: flex;
    flex-direction: column;

`
export const CardTrack = styled.div ` 
    display: flex;
    justify-content: space-around;
`
export const Link = styled.a ` 
    font-size: 12px;
    color: white;
    background-color: lightgrey;
    text-decoration: none;
    border: lightgrey 1px solid;
    border-radius: 20px;
    padding: 3px;
  
    margin-left: 10px;

    &:hover {
        color: lightgrey;
        background-color: white;       
    }
`

export const ButtonCard = styled.button ` 
    color: grey;
    background-color: white;
    border: grey 1px solid;
    border-radius: 20px;

    width: 120px;
    padding: 5px;
    margin: 23px 0px;
    align-self: center;

    &:hover {
        color: white;
        background-color: lightgrey;
        border: none;
    }
`