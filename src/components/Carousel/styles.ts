import styled from "styled-components"
import { colors } from "../../styles/colors"
import background from '../../assets/images/background-verde.jpg'
import { breakpoints } from "../../styles/responsive"

export const Master = styled.div`
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    padding: 100px 0;
    width: 100%;

    .centralized {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .container-carousel {
        max-width: 800px;
        width: 100%;
        margin: 0 auto;
        position: relative;

        .left, .right {
            position: absolute;
            bottom: 0;
        }

        .left {
            left: 0;
        }

        .right {
            right: 0;
        }
    }

    ${breakpoints.mobile`
        padding: 150px 16px;

        .centralized {
            align-items: center;
            width: 100%;
        }
    `}

    ${breakpoints.tablet`
        padding: 300px 16px;
    `}
`

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;

    ${breakpoints.mobile`
        flex-direction: column;
        width: 100%;
        gap: 20px;
    `}
`

export const SlideImage = styled.img`
    max-width: 800px;
    width: 100%;
    min-height: 350px;
    max-height: 400px;
    height: 100%;
    border-radius: 12px 12px 0 0;
    box-shadow: 0px 0px 8px rgba(0,0,0,0.3);
    transition: transform 0.4s ease-in-out;

    &:hover {
        transform: scale(1.02);
        box-shadow: 3px 4px 10px rgba(0,0,0,0.3);
    }

    ${breakpoints.mobile`
        width: 100%;
        transition: none;
        max-height: 280px;

        &:hover {
            transform: none;
            box-shadow: none;
        }
    `}
`

export const Caption = styled.p`
    max-width: 800px;
    width: 100%;
    background-color: rgba(0,0,0,0.5);
    color: ${colors.cinzaClaro};
    padding: 16px;
    border-radius: 0 0 6px 6px;
    margin: 0 auto;
    text-align: center;

    ${breakpoints.mobile`
        width: 100%;
    `}
`

export const Arrow = styled.div`
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    z-index: 2;
    font-size: 30px;
    padding: 8px;
    font-weight: bold;
    color: ${colors.cinzaClaro};

    &:hover {
        transform: scale(1.2);
    }

    ${breakpoints.mobile`
        transition: none;

        &:hover {
            transform: none;
        }
    `}
`