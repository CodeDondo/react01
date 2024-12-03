import { ButtonStyled } from "./Button.styled";

export const ButtonComponent = ({ textValue, size }) => {
    switch{size} {
        case "small":
            return <ButtonStyled size="small">{textValue}</ButtonStyled>;
        case "medium":
            return <ButtonStyled size="medium">{textValue}</ButtonStyled>;
        case "large":
            return <ButtonStyled size="large">{textValue}</ButtonStyled>;
        default:
    }
}

return (
    <ButtonStyled>{textValue}</ButtonStyled>
);