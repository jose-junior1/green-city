import styled from "styled-components";
import { colors } from "../../styles/colors";
import { breakpoints } from "../../styles/responsive";

interface SectionProps {
    $dark: boolean
}

export const Container = styled.section<SectionProps>`
    display: flex;
    justify-content: center;
    align-items: flex-start; 
    padding: 160px 10%;
    gap: 40px;
    background-color: ${(bg) => bg.$dark === true ? `${colors.cinzaEscuro}` : `${colors.cinzaClaro}`};
    
    h2 {
        color: ${(title) => title.$dark === true ? `${colors.verdeClaro}` : `${colors.verdeEscuro}`};
    }

    p {
        color: ${(text) => text.$dark === true ? `${colors.cinzaClaro}` : `${colors.textoPrincipal}`};
    }

    .title-small-credits {
        margin-top: 20px;
    }

    ${breakpoints.mobile`
        flex-direction: column;
        align-items: center;
        padding: 80px 16px;
    `}

    ${breakpoints.tablet`
        align-items: center;
        padding: 150px 16px;
        flex-direction: column;
    `}
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-width: 600px;

    ${breakpoints.mobile`
        max-width: 100%;
        width: 100%;
    `}

    ${breakpoints.tablet`
        max-width: 100%;
        width: 100%;
    `}
`

export const Title = styled.h2<{ fontSize?: string }>`
    font-family: Montserrat, sans-serif;
    margin-bottom: 20px;
    font-size: ${(props) => props.fontSize === 'small' ? "24px" : "40px"};

    ${breakpoints.mobile`
        font-size: 32px;
    `}
`

export const Paragraph = styled.p`
    width: 100%;
    font-size: 18px;
    line-height: 2;
    text-align: justify;
    color: ${colors.cinzaClaro};

    a {
        color: ${colors.cinzaClaro};
        text-decoration: none;
        font-style: italic;

        &:hover {
            border-bottom: 2px solid;
            color: ${colors.cinzaMedio};
        }

    ${breakpoints.mobile`
        transition: none;
        width: 100%;

        &:hover {
            border: none;
        }
    `}
    }
`

export const ImageContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.4s ease-in-out;
        
    &:hover {
        box-shadow: 0px 0px 20px rgba(53, 228, 9, 0.5);
        transform: scale(1.03);
    }

    img {
        max-height: 600px;
        height: auto;
        width: 100%;
        border-radius: 12px;
        box-shadow: 2px 4px 30px rgba(0, 0, 0, 0.5);
    }

    .author {
        width: 400px;
        height: 400px;
    }

    ${breakpoints.mobile`
        transition: none;
        width: 100%;

        &:hover {
            transform: none;
            box-shadow: none;
        }

        .author {
            width: 100%;
            height: 350px;
        }
    `}

    ${breakpoints.tablet`
        width: 100%;

        .author {
            width: 70%;
            height: 100%;
        }
    `}
`