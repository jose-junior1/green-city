import * as S from './styles'

import greenCity from '../../assets/images/green-city.png'
const About = () => (
    <S.Container id="about" $dark={true}>
        <S.Content>
            <S.Title>Sobre o GreenCity</S.Title>
            <S.Paragraph>
                O GreenCity é uma plataforma que monitora árvores urbanas e engaja os
                cidadãos no cuidado ambiental de suas cidades. Conectamos moradores,
                escolas e ONGs em ações práticas para aumentar a vegetação e melhorar
                a qualidade de vida.
            </S.Paragraph>
        </S.Content>
            <S.ImageContent>
                <img src={greenCity} alt="Cidade verde" />
            </S.ImageContent>
    </S.Container>
)

export default About