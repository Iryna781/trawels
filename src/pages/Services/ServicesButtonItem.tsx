import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import './ServicesButtonItem.css'
type Props = {
    to: string
    children: React.ReactNode
}
const ServicesButtonItem = ({ to, children }: Props) => {
    return (
        <>
            <Button color="inherit">
                <NavLink
                    to={to}
                    className={({ isActive }) =>
                        isActive ? 'button-item-active' : 'button-item'
                    }
                >
                    {children}
                </NavLink>
            </Button>
        </>
    )
}
export default ServicesButtonItem
