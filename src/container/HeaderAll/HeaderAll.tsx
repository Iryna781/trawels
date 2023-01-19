import Menu from '../../components/Menu/Menu'
import './HeaderAll.css'
type Props = {}
const HeaderAll = (props: Props) => {
    return (
        <div className="app-bar-all">
            <div className="logo-all"></div>
            <div className="menu">
                <Menu />
            </div>
        </div>
    )
}
export default HeaderAll
