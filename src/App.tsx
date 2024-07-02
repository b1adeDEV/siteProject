import Header from "./components/header/header.tsx";
import Promo from "./components/promo/promo.tsx";
import AboutContainer from "./containers/AboutContainer/AboutContainer.tsx";
import CardContainer from "./containers/card/CardContainer.tsx";
import Content from "./components/content/content/content.tsx";
import Footer from "./components/footer/footer.tsx";
const App = () => {
    return (
        <>
            <Header/>
            <Promo/>
            <div className={"aboutCompany"}>
                <AboutContainer/>
            </div>
            <div id={"catalog"} className="Cards">
                <CardContainer/>
            </div>
            <Content/>
            <Footer/>
        </>
    )
}
export default App