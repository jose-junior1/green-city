import About from "../components/About"
import ButtonUp from "../components/ButtonUp"
import Carousel from "../components/Carousel"
import Cause from "../components/Cause"
import Conclusion from "../components/Conclusion"
import Credits from "../components/Credits"
import Header from "../components/Header"
import ProjectPhases from "../components/ProjectPhases"
import { slides } from "../components/Slides"

const Home = () => {
    return (
        <>
            <Header />
            <Carousel slides={slides} />
            <About />
            <Cause />
            <Conclusion />
            <ProjectPhases />
            <Credits />
            <ButtonUp />
        </>
    )
}

export default Home