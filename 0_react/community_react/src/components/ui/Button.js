import styled from '@emotion/styled';
import { css } from '@emotion/css';
import { darken, lighten } from "polished";

export const Button = styled.button`
    ${props => css`
        padding: 5px 10px;
        cursor: pointer;
        border: none;
        border-radius: 10px;
        margin: 0.2rem 0.5rem;
        background-color: ${props.color};
        color: #fff;
        font-weight: bold;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
        transition: background-color 0.3s ease-in;
        &:hover {
            background-color: ${darken(0.2, props.color)};
        }
        &:active {
            transform: translateY(1.5px);
        }
    `}
`