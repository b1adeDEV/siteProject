import "./header.css"
const Header = () => {
    return (
        <div className="header">
            <div className="topHeader">
                <div className={"title"}><a href="#"><h1>TOO Интерком</h1></a></div>
                <div className={"navContainer"}>
                    <nav className="nav">
                        <a href="#catalog">Каталог</a>
                        <a href="#info">Информация</a>
                        <a href="#contact">Контакты</a>
                    </nav>
                </div>
            </div>
        </div>
    )
}
export default Header