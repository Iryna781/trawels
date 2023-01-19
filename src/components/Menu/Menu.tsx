import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom'

type Props = {}
const Menu = (props: Props) => {
    return (
        <>
            <Button color="inherit" className="btn-app">
                <NavLink to="/">Home</NavLink>
            </Button>
            <Button color="inherit" className="btn-up">
                Discover
            </Button>
            <Button color="inherit" className="btn-app">
                Services
            </Button>
            <Button color="inherit" className="btn-up">
                News
            </Button>
            <Button color="inherit" className="btn-app">
                <NavLink to="/about">About Us</NavLink>
            </Button>
            <Button color="inherit" className="btn-up">
                Contact
            </Button>
        </>
    )
}
export default Menu
