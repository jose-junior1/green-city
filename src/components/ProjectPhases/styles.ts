import styled from "styled-components"
import { colors } from "../../styles/colors"
import { breakpoints } from "../../styles/responsive"

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    padding: 160px 10%;
    gap: 40px;
    background-color: ${colors.cinzaClaro};

    ${breakpoints.mobile`
        padding: 80px 16px;
    `}

    ${breakpoints.tablet`
        padding: 80px 16px;
    `}
`

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    ${breakpoints.mobile`
        display: flex;
        flex-direction: column;
    `}

    ${breakpoints.tablet`
        display: flex;
        flex-direction: column;
    `}
`

export const Title = styled.h2`
    color: ${colors.verdeEscuro};
    font-size: 40px;
`