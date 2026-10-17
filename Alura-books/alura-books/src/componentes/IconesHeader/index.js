import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';
import styled from 'styled-components';

const Icone = styled.li`
    margin-left: 40px;
    width: 25px;
`

const Icones = styled.ul`
  display: flex;
  align-items: center;
`

const icones = [perfil, sacola];

function iconesHeader () {
    return (
        <Icones>
          { icones.map( (icone) => (
            <Icone><img src={icone} alt="ícone"/></Icone>
          ) ) }
        </Icones>
    )
}

export default iconesHeader