import React, {Component} from 'react'
import styled from 'styled-components'
import iconeFb from '../../img/fb.png'
import iconeTwitter from '../../img/twitter.png'
import iconeInstagram from '../../img/instagram.png'

const CompartilhaContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const IconImage = styled.img`
	margin-right: 5px;
`




export class SecaoCompartilha extends Component {
	state = {
	}

    onClickCompartilhaFb = () => {
        alert("Compartilhado no FaceBook!")
      }
    onClickCompartilhaTwitter = () => {
        alert("Compartilhado no Twitter!")
      }      
    onClickCompartilhaInstagram = () => {
        alert("Compartilhado no Instagram!")
      }

	render() {
		return (
            <CompartilhaContainer>
                	<IconImage alt={'Icone'} src={iconeFb} onClick={this.onClickCompartilhaFb}/>
                    <IconImage alt={'Icone'} src={iconeInstagram} onClick={this.onClickCompartilhaInstagram} />
                    <IconImage alt={'Icone'} src={iconeTwitter} onClick={this.onClickCompartilhaTwitter}/>
            </CompartilhaContainer>
        )

	}
}
