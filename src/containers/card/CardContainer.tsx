import {CopperData, GalvanizedData, ICardData} from "../../components/card/card.data.tsx";
import {useState} from "react";
import MCard from "../../components/card/card.tsx";
import { motion } from "framer-motion";
import TitleCard from "../../components/titleCard/TitleCard.tsx";
import Modal from "../../components/modal/modal.tsx";


const CardContainer = () => {
    const [copperData, setCopperData] = useState(CopperData)
    const [galvanizedData, setGalvanizedData] = useState(GalvanizedData)
    const [modalActive, setModalActive] = useState<boolean>(false)

    const onClickAddCopp = (index:number) => {
        const copy = [...copperData]
        copy[index].count! += 1
        setCopperData(copy)
    }

    const onClickRemoveCopp = (index:number) => {
        const copy = [...copperData]
        if (copy[index].count! > 1) {
            copy[index].count! -= 1
            setCopperData(copy)
        }
    }

    const onClickAddGalv = (index:number) => {
        const copy = [...galvanizedData]
        copy[index].count! += 1
        setGalvanizedData(copy)
    }

    const onClickRemoveGalv = (index:number) => {
        const copy = [...galvanizedData]
        if (copy[index].count! > 1) {
            copy[index].count! -= 1
            setGalvanizedData(copy)
        }
    }

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

    return(
        <div className={"container"}>
            <Modal active={modalActive} setActive={setModalActive}/>
            <TitleCard title={"Омедненные комплекты"}/>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
                className={"contentCard"}>
                {
                    copperData.map((item: ICardData, index: number) => (
                        <MCard
                            key={index}
                            variants={CardAnimation}
                            custom={index + 1}
                            count={item.count}
                            cost={item.cost}
                            title={item.title}
                            url={item.url}
                            onClickAdd={() => onClickAddCopp(index)}
                            onClickRemove={() => onClickRemoveCopp(index)}
                            onClickBuy={() =>setModalActive(true)}/>
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
                    galvanizedData.map((item: ICardData, index: number) => (
                        <MCard
                            key={index}
                            variants={CardAnimation}
                            custom={index + 1}
                            count={item.count}
                            cost={item.cost}
                            title={item.title}
                            url={item.url}
                            onClickAdd={() => onClickAddGalv(index)}
                            onClickRemove={() => onClickRemoveGalv(index)}
                            onClickBuy={() =>setModalActive(true)}/>
                    ))
                }
            </motion.div>
        </div>
    )
}
export default CardContainer