import Form from "../form/form.tsx";
import Contact from "../contact/contact.tsx";
import "./content.css"
const Content = () => {
    return (
        <div className="content">
            <Contact/>
            <Form/>
        </div>
    )
}
export default Content