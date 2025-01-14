function Button({text, color="black", children}) {
    const onClickHandler = (e) => {
        console.log(e)
    }
    return (
        <button 
            style={{ color: color }}
            onClick={onClickHandler}
        >
            {text} - {color.toUpperCase()}
            {children}
        </button>
    );
}




export default Button