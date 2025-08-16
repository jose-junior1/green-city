import styled from "styled-components";
import { colors } from "../../styles/colors"
import { Link } from "react-scroll";
import { breakpoints } from "../../styles/responsive"

interface MenuProps {
    $open: boolean;
}

export const BotaoHamburguer = styled.button<MenuProps>`
    position: fixed;
    display: none;
    background: transparent;
    border: none;
    font-size: 2em;
    z-index: 1001;
    color: ${colors.cinzaClaro};
    height: 60px;
    width: 60px;
    border-radius: 10px;
    font-weight: bold;
    transition: top 0.3s ease, left 0.3s ease;

    span {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 768px) {
        display: block;
        background-color: rgba(0,0,0,0.5);
        
        ${({ $open }) =>
        $open
            ? `
        top: 10px;
        right: 20px;
    `
            : `
        top: 10px;
        right: 20px;
    `}
    }
`

export const Header = styled.header<MenuProps>`
    position: fixed;
    z-index: 100;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    background-color: ${colors.destaqueVerde};
    box-shadow: 1px 2px 6px rgba(0,0,0,0.5);
    transition: transform 0.3s ease-in-out;

    @media (max-width: 768px) {
        display: block;
        width: 100%;
        transform: ${({ $open }) =>
        $open ? 'translateY(0)' : 'translateY(-100%)'};
        z-index: 100;
        box-shadow: ${({ $open }) => $open ? `2px 4px 20px rgba(0, 0, 0, 0.8)` : 'none'};
        padding: 16px 16px 30px 16px;

        h1 {
            padding-bottom: 50px;
        }
    }
`

export const Title = styled.h1`
    color: ${colors.verdeClaro};
    font-size: 36px;

    ${breakpoints.mobile`
        font-size: 24px;
    `}
`

export const NavList = styled.ul`
    display: flex;
    gap: 30px;
    list-style: none;

    ${breakpoints.mobile`
        flex-direction: column;
        align-items: center;
        gap: 40px;
    `}
`

export const ListLinks = styled.li`
    transition: transform 0.3s ease-in-out;
    font-size: 18px;

    &:hover {
        transform: scale(1.15);
    }

    ${breakpoints.mobile`
        font-size: 18px;
        transition: none;

        &:hover {
            transform: none;
        }
    `}
`

export const Links = styled(Link)`
    color: ${colors.cinzaClaro};
    font-weight: 500;
    cursor: pointer;

    &:hover {
        color: ${colors.verdeClaro};
    }

    ${breakpoints.mobile`
        font-weight: normal;
    `}
`