import {CopperData} from "./card.data.tsx";
import "./card.css"
import React, {forwardRef} from "react";
import { motion } from "framer-motion";


interface IClick{
    url:string
    title:string
    onClickBuy: React.MouseEventHandler<HTMLButtonElement>,
    index:number
}


const Card = forwardRef((props:IClick, ref: React.ForwardedRef<HTMLDivElement>) => {
    return(
        <div className="card" ref={ref}>
            <img src={props.url} alt=""/>
            <p>{props.title}</p>
            <div className={"buy"}>
                <div>
                    <button onClick={props.onClickBuy} className={CopperData[props.index].description.title == "" ?"none":"btnBuy"}>Подробнее</button>
                </div>
            </div>
        </div>
    )
})
const MCard = motion(Card)
export default MCard