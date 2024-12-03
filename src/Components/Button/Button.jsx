export const Button = ({ textValue, classNameValue }) => {
    const handleClick = () => {
        console.log("hejsa");
    };

    return (
        <button className={classNameValue} onClick={handleClick}>
            {textValue}
        </button>
    );
};
