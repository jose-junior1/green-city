import * as S from './styles'
import PhaseCard from '../PhaseCard'

const ProjectPhases = () => {
    return (
        <S.Container id='phases'>
            <S.Title>
                Fases do projeto
            </S.Title>
            <S.CardContainer>
                <PhaseCard
                    title='Fase 1 - Estrutura Inicial'
                    description='Organização da paleta de cores e definição da identidade visual. Estratégia: criar uma base sólida para consistência do projeto.'
                    linkDrive='https://drive.google.com/drive/folders/17mK86P9ZDw0Zu0KeLxic86Rytd1d7Tcs?usp=drive_link'
                    text='Baixar imagens'
                />
                <PhaseCard
                    title='Fase 2 - Protótipo Navegável'
                    description='Construção do mockup interativo com foco em usabilidade. Estratégia: validar a navegação antes de avançar no design final.'
                    linkDrive='https://drive.google.com/drive/folders/13MWi90O5wAuY3OII-esxHS_qVFXjZt4g?usp=drive_link'
                    text='Baixar imagens'
                />
                <PhaseCard
                    title='Fase 3 - Produto final'
                    description='Entrega consolidada com mockup visual, variações de texto refinadas e justificativa estratégica. Representa o produto final.'
                    linkDrive='https://drive.google.com/file/d/1riKiG2QuDS48iUMxU1ygwjx07YsvYL66/view?usp=drive_link'
                    text='Baixar domumentação'
                />
            </S.CardContainer>
        </S.Container>
    )
}

export default ProjectPhases