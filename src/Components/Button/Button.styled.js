import styled from "styled-components";

export const ButtonStyled = styled.button`
    font-size: ${(props) =>
        props.size === "small"
            ? "12px"
            : props.size === "medium"
            ? "16px"
            : "20px"};
    background-color: ${(props) =>
        props.theme === "light" ? "#fff" : "#333"};
    color: ${(props) =>
        props.theme === "light" ? "#333" : "#fff"};
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
`;
