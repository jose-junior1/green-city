import styled from "styled-components"
import { colors } from "../../styles/colors"
import { breakpoints } from "../../styles/responsive"

export const CardContainer = styled.div`
    width: 100%;
    height: 400px;
    padding: 16px;
    border-radius: 12px;
    box-shadow: 2px 3px 6px rgba(0,0,0,0.5);
    background-color: ${colors.cinzaEscuro};
    transition: transform 0.4s ease-in-out;
    cursor: default;

    &:hover {
        box-shadow: 0px 0px 20px 5px rgba(53, 228, 9, 0.5);
        transform: scale(1.03);
    }

    ${breakpoints.mobile`
        transition: none;

        &:hover {
            transform: none;
            box-shadow: none;
        }
    `}

    ${breakpoints.tablet`
        transition: none;

        &:hover {
            transform: none;
            box-shadow: none;
        }
    `}
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    p {
        color: ${colors.cinzaClaro};
    }

    a {
        background-color: ${colors.verdeEscuro};
        color: ${colors.cinzaClaro};
        font-weight: 500;
        text-align: center;
        padding: 16px;
        border-radius: 12px;
        text-decoration: none;
        font-size: 18px;
        border: 2px solid transparent;

        &:hover {
            background-color: ${colors.cinzaClaro};
            color: ${colors.cinzaEscuro};
            border-color: ${colors.verdeMedio};
            font-weight: bold;
        }
    }
`

export const Title = styled.h3`
    color: ${colors.verdeMedio};
    font-size: 24px;
    text-align: center;
    font-family: Montserrat, sans-serif;
    letter-spacing: 3px;
    border-bottom: 1px solid ${colors.cinzaMedio};
`

export const Description = styled.p`
    color: ${colors.textoPrincipal};
    line-height: 2;
    font-size: 18px;
    text-align: justify;
`