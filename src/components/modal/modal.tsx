import "./modal.css"
import {CopperData, GalvanizedData} from "../card/card.data.tsx";

type TModal = {
    active:boolean
    setActive:(active:boolean) => void
    index: number
    onClose:() => void
}

const Modal = ({active, setActive, index, onClose}:TModal) => {
    return (
        <div className={active? "modal active": "active"} onClick={() => setActive(false)}>
            <div className={active ? "modal_content" : "none"} onClick={e => e.stopPropagation()}>
                <div className={"modalInfo"}>
                    {
                        index < 2 ? <>
                            <div className={"modalGroup"}>
                                <h2>{CopperData[index].title}</h2>
                                <img src={CopperData[index].url} alt="img"/>
                            </div>
                            <p dangerouslySetInnerHTML={{__html: CopperData[index].description.title}}/>
                        </> : <>
                            <div className={"modalGroup"}>
                                <h2>{GalvanizedData[index - 3].title}</h2>
                                <img src={GalvanizedData[index - 3].url} alt="img"/>
                            </div>
                            <p dangerouslySetInnerHTML={{__html: GalvanizedData[index - 3].description.title}}/></>
                    }
                </div>
                <button className={"modalBTN"} onClick={onClose}>Close</button>
            </div>
        </div>
    )
}

export default Modal