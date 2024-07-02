import Form from "../form/form.tsx";
import Contact from "../contact/contact.tsx";
import "./content.css"
const Content = () => {
    return (
        <div id={"contact"} className="content">
            <Contact/>
            <Form/>
        </div>
    )
}
export default Content