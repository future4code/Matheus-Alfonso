import React from 'react'
import styled from 'styled-components'
import axios from 'axios';

const ContainerPlaylist = styled.div ` 
    background-color: #222326;
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
    color: white;
    background-color: #1db954;
    border: #1db954 1px solid;
    border-radius: 20px;

    width: 100px;
    padding: 5px;
    margin: 23px 0px;

    cursor: pointer;

    &:hover {
        color: #1db954;
        background-color: white;
        border: none;
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

    margin-left: 40px;

    &:hover {
        color: #1db954;
        background-color: white;    
        border: none;   
    }
    
`

const LinkPlayLists = styled.a ` 
    text-decoration: none;
    color: white;

    &:hover {
        &:hover {
        border-left: #1db954 4px outset;
    }
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
                            <label><LinkPlayLists href="#">Rock</LinkPlayLists></label>
                        </div>
                        <div>
                            <Link href="#">Delete</Link>
                        </div>
                    </CardPlaylist>
                    <CardPlaylist>
                        <div>
                            <label><LinkPlayLists href="#">Rock</LinkPlayLists></label>
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