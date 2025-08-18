import * as S from '../About/styles'
import { ImageContainer } from './styles'

import greenPeople from '../../assets/images/conclusion-greencity.png'

const Conclusion = () => (
    <S.Container id="conclusion" $dark={true}>
        <S.Content>
            <S.Title>Conclusão</S.Title>
            <S.Paragraph>
                A Inteligência Artificial desempenhou um papel central e transformador em todas as fases de desenvolvimento do projeto GreenCity. Desde a etapa inicial de ideação e conceituação visual, onde ferramentas de IA generativa foram cruciais para materializar conceitos abstratos em imagens impactantes para o carrossel e mockups, até o refinamento e a criação de conteúdo textual variado com ChatGPT/Gemini.
            </S.Paragraph>
            <br />
            <S.Paragraph>
                A IA não apenas acelerou o processo criativo, permitindo a exploração rápida de múltiplas possibilidades de comunicação e design, mas também potencializou a qualidade e a diversidade do material desenvolvido. Essa colaboração entre a criatividade humana e a capacidade computacional da IA resultou em um projeto mais robusto e visualmente atraente.
            </S.Paragraph>
        </S.Content>
        <ImageContainer>
            <img src={greenPeople} alt="Voluntários plantando árvores" />
        </ImageContainer>
        
    </S.Container>
)

export default Conclusion
