import { Button } from "./styles"

import upIcon from '../../assets/images/up.png'

const ButtonUp = () => {
    return (
        <Button
            to="top"
            smooth={true}
            duration={500}
        >
            <img src={upIcon} alt="Subir ↑" />
        </Button>
    )
}

export default ButtonUp