import * as S from './styles'

type Props = {
    title: string
    description: string
    linkDrive: string
    text: string
}

const PhaseCard = ({ title, description, linkDrive, text }: Props) => {
    return (
        <S.CardContainer>
            <S.Card>
                <S.Title>{title}</S.Title>
                <S.Description>
                    {description}
                </S.Description>
                <a
                    href={linkDrive} target='_blank'
                    rel='noreferrer noopener'
                    title={text}
                >
                    {text}
                </a>
            </S.Card>
        </S.CardContainer>
    )
}

export default PhaseCard