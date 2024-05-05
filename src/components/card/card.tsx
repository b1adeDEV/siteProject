import {ICardData} from "./card.data.tsx";
import "./card.css"
import {CiCircleMinus, CiCirclePlus} from "react-icons/ci";
import React, {forwardRef} from "react";
import { motion } from "framer-motion";


interface IClick extends ICardData {
    onClickAdd: React.MouseEventHandler<HTMLButtonElement>,
    onClickRemove: React.MouseEventHandler<HTMLButtonElement>,
    onClickBuy: React.MouseEventHandler<HTMLButtonElement>,
}


const Card = forwardRef((props:IClick, ref: React.ForwardedRef<HTMLDivElement>) => {
    return(
        <div className="card" ref={ref}>
            <img src={props.url} alt=""/>
            <h3>{props.cost} ₸</h3>
            <p>{props.title}</p>
            <div className={"buy"}>
                <div className={"countBuy"}>
                    <div className={"counterBuy"}>
                        <button onClick={props.onClickRemove} className={"btnCard"}><CiCircleMinus/></button>
                        <p>{props.count} шт.</p>
                        <button onClick={props.onClickAdd} className={"btnCard"}><CiCirclePlus/></button>
                    </div>
                    <div>
                        <button onClick={props.onClickBuy} className={"btnBuy"}>Купить</button>
                    </div>
                </div>
            </div>
        </div>
    )
})
const MCard = motion(Card)
export default MCard