import * as S from '../About/styles'
import causePeople from '../../assets/images/gemini_peoples.png'

const Cause = () => (
    <S.Container id="cause" $dark={false}>
        <S.ImageContent>
            <img src={causePeople} alt="Voluntários plantando árvores" />
        </S.ImageContent>
        <S.Content>
            <S.Title>Nossa Causa</S.Title>
            <S.Paragraph>
                O GreenCity nasceu para combater a perda de áreas verdes nas cidades,
                incentivando o plantio e o cuidado com árvores urbanas. Nossa missão é
                criar uma rede de cidadãos conscientes que, juntos, transformem o
                ambiente urbano em um espaço mais saudável, sustentável e bonito.
            </S.Paragraph>
            <br />
            <S.Paragraph>
                Nossas cidades precisam de você <strong>AGORA</strong>! O GreenCity é a ferramenta que faltava para salvarmos nossas árvores urbanas. Junte-se a nós e transforme o futuro verde da sua comunidade. A ação é urgente, o impacto é imediato!
            </S.Paragraph>
        </S.Content>
    </S.Container>
)

export default Cause
