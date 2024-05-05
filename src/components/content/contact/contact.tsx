import {IoCall} from "react-icons/io5";
import {MdEmail} from "react-icons/md";
import "./contact.css"
import {CSSProperties} from "react";

const styleContent: CSSProperties = {
    paddingRight:"20px",
    color: "#F35138"
}

const Contact = () => {
    return(
        <div>
            <div className="contactFoot">
                <h1><h1>Наши</h1> контакты</h1>
                <h2><IoCall style={styleContent}/>+7 727 257 95 21</h2>
                <h2><IoCall style={styleContent}/>+7 777 251 77 88</h2>
                <h2><MdEmail style={styleContent}/>ttoointerkom@mail.ru</h2>
            </div>
        </div>

    )
}
export default Contact