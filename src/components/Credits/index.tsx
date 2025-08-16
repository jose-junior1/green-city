import * as S from '../About/styles'

import autor from '../../assets/images/dev-josejunior.jpg'
const Credits = () => (
    <S.Container id="credits" $dark={true}>
        <S.Content>
            <S.Title>Créditos</S.Title>
            <S.Paragraph>
                Este projeto foi desenvolvido por José Junior, com todo o design, conteúdo textual e imagens gerados 100% por Inteligência Artificial, utilizando ferramentas como ChatGPT, DALL-E 3 (modelo de inteligência artificial generativa da OpenAI que consegue criar imagens) e Gemini.
            </S.Paragraph>
            <S.Title
                fontSize='small'
                className='title-small-credits'
            >
                Portfólio
            </S.Title>
            <S.Paragraph>
                <a
                    href="https://portfoliojosejuniordev.vercel.app"
                    target='_blank'
                    rel='noreferrer noopener'
                >https://portfoliojosejuniordev.vercel.app</a>
            </S.Paragraph>
            <S.Title
                fontSize='small'
                className='title-small-credits'
            >
                LinkedIn
            </S.Title>
            <S.Paragraph>
                <a
                    href="https://www.linkedin.com/in/josejunior-dev"
                    target='_blank'
                    rel='noreferrer noopener'
                >https://www.linkedin.com/in/josejunior-dev</a>
            </S.Paragraph>
        </S.Content>
            <S.ImageContent>
                <img className='author' src={autor} alt="José Junior" />
            </S.ImageContent>
    </S.Container>
)

export default Credits