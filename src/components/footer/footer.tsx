import "./footer.css"

const Footer = () => {
    return(
        <div className="foot">
            <div className="footer">
                <h1>TOO ИНТЕРКОМ</h1>
                <nav>
                    <a className={"footerLink"} href="#">Каталог</a>
                    <a className={"footerLink"} href="#">Информация</a>
                    <a className={"footerLink"} href="#">Доставка</a>
                    <a className={"footerLink"} href="#">Контакты</a>
                </nav>
                <div className={"icon"}>
                    <div className={"allIcon vkIcon"}></div>
                    <div className={"allIcon tgIcon"}></div>
                    <div className={"allIcon instagramIcon"}></div>
                </div>
            </div>
        </div>
    )
}
export default Footer