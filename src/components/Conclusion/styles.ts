import styled from "styled-components";
import { breakpoints } from "../../styles/responsive";

export const ImageContainer = styled.div`
    transition: transform 0.4s ease-in-out;

    &:hover {
        box-shadow: 0px 0px 20px rgba(53, 228, 9, 0.5);
        transform: scale(1.03);
    }

    img {
        max-height: 600px;
        height: 100%;
        width: 100%;
        border-radius: 12px;
        box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
    }

    ${breakpoints.mobile`
        transition: none;

        &:hover {
            transform: none;
            box-shadow: none;
        }
    `}
`