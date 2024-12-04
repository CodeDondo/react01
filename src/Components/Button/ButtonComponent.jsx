import { ButtonStyled } from "./Button.styled";

export const ButtonComponent = ({ action, size, theme, text }) => {
    return (
        <ButtonStyled 
            size={size} 
            theme={theme} 
            onClick={action} // Tilføj handling ved klik
        >
            {text}
        </ButtonStyled>
    );
};
