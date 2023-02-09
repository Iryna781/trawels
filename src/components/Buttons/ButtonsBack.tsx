import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import './ButtonBack.css'
type Props = {
    to: string
    children: React.ReactNode
}
const ButtonBack = ({ to, children }: Props) => {
    return (
        <>
            <Button color="inherit" className="btn-back">
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
export default ButtonBack
