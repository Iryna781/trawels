import { Route, Routes } from 'react-router-dom'
import About from '../../pages/About/About'
import Home from '../../pages/Home/Home'

type Props = {}
const Main = (props: Props) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
            </Routes>
        </>
    )
}
export default Main
