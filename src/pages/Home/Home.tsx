import Articles from '../../components/Articles/Articles'
import Slider from '../../components/Slider/Slider'
import Header from '../../container/Header/Header'

type Props = {}
const Home = (props: Props) => {
    return (
        <>
            <Header />
            <Slider />
            <Articles />
        </>
    )
}
export default Home
