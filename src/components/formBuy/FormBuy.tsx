import "./FormBuy.css"


type TProps = {
    click: () => void
}

const FormBuy = (props: TProps) => {
    return (
        <div className={"buyContainer"}>
            <h1>Заполните форму</h1>
            <form className={"formBuy"}>
                <div className={"FullName"}>
                    <input  type="text" placeholder={"Name"}/>
                    <input type="text" placeholder={"Surname"}/>
                </div>
                <div className="emailTel">
                    <div className={"email"}>
                        <h3>Email</h3>
                        <input type="email" placeholder={"Email"}/>
                    </div>
                    <div className="tel">
                        <h3>Phone</h3>
                        <input type="tel" placeholder="+7(000)000-00-00"/>
                    </div>
                </div>
                <button onClick={props.click}>Отправить</button>
            </form>
        </div>
    )
}
export default FormBuy