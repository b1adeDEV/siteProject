import {IoIosArrowForward} from "react-icons/io";
import {motion} from "framer-motion";

type TProps = {
    title: string;
}

const TitleAnimation = {
    hidden: {
        opacity: 0,
    },
    visible: {
        x: 400,
        opacity: 1,
        transition:{delay: 1},
        zIndex:0
    },
}

const TitleCard = (props:TProps) => {
    return (
        <motion.h1
            viewport={{amount: 0.5, once: true}}
            variants={TitleAnimation}
            initial="hidden"
            whileInView="visible"
            className={"TitleProduct"}>{props.title}<IoIosArrowForward/></motion.h1>
    )
}
export default TitleCard