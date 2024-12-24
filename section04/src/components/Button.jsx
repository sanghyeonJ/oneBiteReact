const Button = ({text, color="black"}) => {
    const onClickButton = () => {
        console.log(text)
    }

    return (
    <button
        onClick={onClickButton}
        style={{ color: color }}>
        {text} - {color.toUpperCase()}
    </button>
    )
}

export default Button;