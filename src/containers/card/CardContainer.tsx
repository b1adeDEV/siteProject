import {CopperData, GalvanizedData, ICardData} from "../../components/card/card.data.tsx";
import {useState} from "react";
import MCard from "../../components/card/card.tsx";
import { motion } from "framer-motion";
import TitleCard from "../../components/titleCard/TitleCard.tsx";
import Modal from "../../components/modal/modal.tsx";

const CardContainer = () => {
    const [activeCard, setActiveCard] = useState<boolean>(false);
    const [index, setIndex] = useState<number>(4);

    const CardAnimation = {
        hidden: {
            y:80,
            opacity: 0,
        },
        visible: (custom: number) =>({
            y:0,
            opacity: 1,
            transition:{delay: custom * 0.2}
        }),
    }

    const  CopperInfoProduct = (index:number) => {
        setIndex(index)
        setActiveCard(true)
    }

    const GalvanizedinfoProduct = (index:number) => {
        setIndex(index+3)
        setActiveCard(true)
    }

    return(
        <div className={"container"}>
            <Modal active={activeCard} setActive={() => setActiveCard(!activeCard)} index={index} onClose={() => setActiveCard(!activeCard)}/>
            <TitleCard title={"Омедненные комплекты"}/>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
                className={"contentCard"}>
                {
                    CopperData.map((item: ICardData, index: number) => (
                        <MCard
                            key={index}
                            variants={CardAnimation}
                            custom={index + 1}
                            title={item.title}
                            url={item.url}
                            onClickBuy={() => CopperInfoProduct(index)} index={index}/>
                    ))
                }
            </motion.div>
            <TitleCard title={"Оцинкованные комплекты"}/>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
                className={"contentCard"}>
                {
                    GalvanizedData.map((item: ICardData, index: number) => (
                        <MCard
                            index={index}
                            key={index}
                            variants={CardAnimation}
                            custom={index + 1}
                            title={item.title}
                            url={item.url}
                            onClickBuy={() =>GalvanizedinfoProduct(index)}/>
                    ))
                }
            </motion.div>
        </div>
    )
}
export default CardContainer