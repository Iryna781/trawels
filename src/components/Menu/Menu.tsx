import Button from '@mui/material/Button'

type Props = {}
const Menu = (props: Props) => {
    return (
        <>
            <Button color="inherit" className="btn-app">
                Home
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
                About Us
            </Button>
            <Button color="inherit" className="btn-up">
                Contact
            </Button>
        </>
    )
}
export default Menu
