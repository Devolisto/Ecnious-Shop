import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        color : ${(props) => props.theme.fontColorMain};
        background-color : ${(props) => props.theme.backgroundMain}
    }
`;



