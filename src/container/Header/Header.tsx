import Menu from '../../components/Menu/Menu'
import './Header.css'
import background from '../../assets/See.png'

type Props = {}
const Header = (props: Props) => {
    return (
        <div className="head" style={{ backgroundImage: `url(${background})` }}>
            <div className="app-bar">
                <div className="logo"></div>
                <div>
                    <Menu />
                </div>
            </div>

            <h1 className="title">Explore the world with a smile</h1>
            <p className="text">
                Mountains, seas and many other interesting places that will give
                you an unforgettable vacation! Stay with us!
            </p>
            <form action="" className="form">
                <input type="text" placeholder="City or Destunation" />
                <input type="text" placeholder="Date of stay" />
                <input type="text" placeholder="Person" />
                <button className="btn-find">Find Trip Now</button>
            </form>
        </div>
    )
}
export default Header
