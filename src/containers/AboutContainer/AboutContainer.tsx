import { motion } from "framer-motion";
import {data} from "../../components/about/about.data.tsx";
import MAbout from "../../components/about/about.tsx";

const AboutContainer = () => {
    const AboutAnimation = {
        hidden: {
            scale: 0,
            opacity: 0,
        },
        visible: (custom: number) =>({
            scale: 1,
            opacity: 1,
            transition:{delay: custom * 0.2}
        }),
    }

    return (
        <motion.div
            id={"info"}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount : 0.5, once:true}}
            className={"AboutContainer"}>
            <h2>
                Привилегии нашей компании
            </h2>
            <div className={"CardContainer"}>
                {
                    data.map((item, index) => (
                        <MAbout
                            variants={AboutAnimation}
                            custom={index+1}
                            key={index}
                            text={item.text}
                            name={item.name}/>
                    ))
                }
            </div>
        </motion.div>
    )
}
export default AboutContainer