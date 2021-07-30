import React from 'react'
import styled from 'styled-components'
import axios from 'axios';

//import { ContainerTracks, TrackTitle, TrackList, CardTrack, Link, ButtonCard } from './components/StyleTracks.js'

const ContainerTracks = styled.div ` 
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
const TrackTitle = styled.div ` 
    color: white;
    background-color: lightgrey;
    border-bottom: lightgrey 1px solid;
    
    display: flex;
    justify-content: center;    
    margin-bottom: 30px;
`

const TrackList = styled.div ` 
    display: flex;
    flex-direction: column;

`
const CardTrack = styled.div ` 
    display: flex;
    justify-content: space-around;
`
const Link = styled.a ` 
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

const ButtonCard = styled.button ` 
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

export default class Tracks extends React.Component {
    render(){
        return(
            <ContainerTracks>
                <TrackList>
                    <TrackTitle> <h3>Nome da Playlist</h3></TrackTitle>
                    <CardTrack>
                        <div>
                            <label>Nome da Musica</label>
                        </div>
                        <div>
                            <label>Artista</label>
                        </div>
                        <div>
                            <Link href="#">Play</Link>
                            <Link href="#">Pause</Link>
                            <Link href="#">Delete</Link>
                        </div>
                    </CardTrack>
                    <CardTrack>
                        <div>
                            <label>Nome da Musica</label>
                        </div>
                        <div>
                            <label>Artista</label>
                        </div>
                        <div>
                            <Link href="#">Play</Link>
                            <Link href="#">Pause</Link>
                            <Link href="#">Delete</Link>
                        </div>
                    </CardTrack>

                </TrackList>
                        <ButtonCard>Adicionar Música</ButtonCard>                       
            </ContainerTracks>
        )
    }
}