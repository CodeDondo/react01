export const Button = ({ textValue, classNameValue, favoriteDishes }) => {
    const handleClick = () => {
        console.log(favoriteDishes);
    };

    return (
        <button className={classNameValue} onClick={handleClick}>
            {textValue}
        </button>
    );
};
