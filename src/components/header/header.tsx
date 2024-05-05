import "./header.css"
const Header = () => {
    return (
        <div className="header">
            <div className="topHeader">
                <div className={"title"}><a href="#"><h1>TOO Интерком</h1></a></div>
                <div className={"navContainer"}>
                    <nav className="nav">
                        <a href="#">Каталог</a>
                        <a href="#">Информация</a>
                        <a href="#">Доставка</a>
                        <a href="#">Контакты</a>
                    </nav>
                </div>
            </div>
        </div>
    )
}
export default Header