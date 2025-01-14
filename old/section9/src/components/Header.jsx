const Header = () => {
    return (
        <div className="header">
            <h3>오늘은</h3>
            <h2>{new Date().toDateString()}</h2>
        </div>
    )
}

export default Header;