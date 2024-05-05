import "./modal.css"
import FormBuy from "../formBuy/FormBuy.tsx";

type TModal = {
    active:boolean
    setActive:(active:boolean) => void
}

const Modal = ({active, setActive}:TModal) => {
    return (
        <div className={active? "modal active": "active"} onClick={() => setActive(false)}>
            <div className={active?"modal_content":"none"} onClick={e=> e.stopPropagation()}>
                <FormBuy click={() => setActive(false)}/>
            </div>
        </div>
    )
}

export default Modal