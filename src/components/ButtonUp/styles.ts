import { Link } from "react-scroll";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import { breakpoints } from "../../styles/responsive";

export const Button = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    height: 70px;
    width: 70px;
    background-color: ${colors.verdeMedio};
    color: ${colors.cinzaClaro};
    cursor: pointer;
    position: fixed;
    bottom: 80px;
    right: 30px;
    transition: transform 0.2s ease-in-out;
    
    img {
        width: 40px;
        height: 40px;
    }

    &:hover {
        transform: scale(1.1);
    }

    ${breakpoints.mobile`
        transition: none;
        bottom: 30px;

        &:hover {
            transform: none;
        }
    `}
`