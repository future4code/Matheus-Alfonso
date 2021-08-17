import React from 'react'
import styled from 'styled-components'
import axios from 'axios';

//import { ContainerTracks, TrackTitle, TrackList, CardTrack, Link, ButtonCard } from './components/StyleTracks.js'

const ContainerTracks = styled.div ` 
    color: white;
    background-color: #222326;
    border-radius: 20px;
    line-height: 40px;

    margin: 0px 0px 0px 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 4;
`
const TrackTitle = styled.div ` 
    color: grey;
    background-color: black;
    
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
    border-bottom: grey 1px solid;

    &:hover {
        border-left: #1db954 10px outset;
    }
`
const Link = styled.a ` 
    font-size: 12px;
    color: white;
    background-color: #1db954;
    text-decoration: none;
    border: #1db954 1px solid;
    border-radius: 20px;
    padding: 4px;
  
    margin-left: 10px;

    &:hover {
        color: #1db954;
        background-color: white;       
        border: none;
    }
`

const ButtonCard = styled.button ` 
    color: white;
    background-color: #1db954;
    border: #1db954 solid 1px;
    border-radius: 20px;

    width: 120px;
    padding: 5px;
    margin: 23px 0px;
    align-self: center;

    cursor: pointer;

    &:hover {
        color: #1db954;
        background-color: white;
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