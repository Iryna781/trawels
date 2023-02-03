import MenuItem from './MenuItem'

type Props = {}
const Menu = (props: Props) => {
    return (
        <>
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/discover">Discover</MenuItem>
            <MenuItem to="/services">Service</MenuItem>
            <MenuItem to="/news">News</MenuItem>
            <MenuItem to="/about">About Us</MenuItem>
            <MenuItem to="/contact">Contact</MenuItem>
        </>
    )
}
export default Menu
