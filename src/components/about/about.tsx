import "./about.css"
import React, {forwardRef} from "react";
import {motion} from "framer-motion";

type TProps = {
    name: string
    text: string
}

const About = forwardRef((
    (props:TProps, ref: React.ForwardedRef<HTMLDivElement>) => {
        return(
            <>
                <div className={"AboutCard"} ref={ref}>
                    <h2>{props.name}</h2>
                    <p>{props.text}</p>
                </div>
            </>
        )
    }
))
const MAbout = motion(About)
export default MAbout