import Menu from '../../components/Menu/Menu'
import './Footer.css'
type Props = {}
const Footer = (props: Props) => {
    return (
        <>
            <div className="footer">
                <div className="footer-1">
                    <div className="logo"></div>
                    <div className="menu">
                        <Menu />
                    </div>
                </div>
                <div className="footer-2">
                    <p>Copyright 2023</p>
                    <p>All Rights Reserved</p>
                    <div className="frame"></div>
                </div>
            </div>
        </>
    )
}
export default Footer
