import React from 'react'
import styled from 'styled-components'
import axios from 'axios';

const ContainerPlaylist = styled.div ` 
    background-color: white;
    color: grey;
    border-radius: 20px;
    line-height: 35px;

    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
const Playlist = styled.div ` 
    display: flex;
    flex-direction: column;
    align-items: center;
`
const CardPlaylist = styled.div ` 
    display: flex;
    justify-content: space-between;
`
const ButtonPlaylist = styled.button ` 
    color: grey;
    background-color: white;
    border: grey 1px solid;
    border-radius: 20px;

    width: 100px;
    padding: 5px;
    margin: 23px 0px;

    &:hover {
        color: white;
        background-color: lightgrey;
        border: none;
    }
`
const Link = styled.a ` 
    font-size: 12px;
    color: white;
    background-color: lightgrey;
    text-decoration: none;
    border: lightgrey 1px solid;
    border-radius: 20px;
    padding: 3px;

    margin-left: 40px;

    &:hover {
        color: lightgrey;
        background-color: white;       
    }
    
`

export default class Playlists extends React.Component {
    render(){
        return (
            <ContainerPlaylist>
                <Playlist>
                    <h3>Playlists</h3>
                    <CardPlaylist>
                        <div>
                            <label>Rock</label>
                        </div>
                        <div>
                            <Link href="#">Delete</Link>
                        </div>
                    </CardPlaylist>
                    <CardPlaylist>
                        <div>
                            <label>Rock</label>
                        </div>
                        <div>
                            <Link href="#">Delete</Link>
                        </div>
                    </CardPlaylist>
                </Playlist>
                <ButtonPlaylist>Adicionar</ButtonPlaylist>
            </ContainerPlaylist>
        )
    }
}