import "./promo.css"
import promoMD from "/public/assets/promo_992px.png"
import promo from "/public/assets/promo.png"
import promoSM from "/public/assets/320px_promo.png"

const Promo = () => {
    const imgStyle: React.CSSProperties = {
        lineHeight: '500px',
        width: "100%",
    }
    return(
        <div className={"promo"}>
            <div className={"promoFull"}>
                <img style={imgStyle} src={promo} alt="promo"/>
            </div>
            <div className={"promoMD"}>
                <img style={imgStyle} src={promoMD} alt="promo"/>
            </div>
            <div className={"promoSM"}>
                <img style={imgStyle} src={promoSM} alt="promo"/>
            </div>
        </div>
    )
}

export default Promo