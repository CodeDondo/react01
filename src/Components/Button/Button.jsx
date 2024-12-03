export const Button = ({ textValue, classNameValue }) => {
    const handleClick = () => {
        console.log("korteleter i fad, adobo, mechado, bøf med løg, gullasch");
    };

    return (
        <button className={classNameValue} onClick={handleClick}>
            {textValue}
        </button>
    );
};
