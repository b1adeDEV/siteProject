import "./form.css"
const Form = () => {
    return (
        <form className={"formContact"}>
            <div className="formGroup">
                <div className="formTitle">
                    <h2>Остались вопросы?</h2>
                    <p>Заполните форму и мы сразу вам ответим!</p>
                </div>
                <div className="inpName">
                    <input placeholder={"Имя"} type="text"/>
                </div>
                <div className="contact">
                    <div>
                        <input placeholder={"Телефон"} type="text"/>
                        <input placeholder={"Email"} type="text"/>
                    </div>
                </div>
                <div className="Ask">
                    <textarea name="text" placeholder={"Ваш вопрос"}></textarea>
                </div>
                <button className="formBtn">Заказать</button>
            </div>
        </form>
    )
}
export default Form
