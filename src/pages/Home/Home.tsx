import Articles from '../../components/Articles/Articles'
import Reviews from '../../components/Reviews/Reviews'
import Slider from '../../components/Slider/Slider'
import Header from '../../container/Header/Header'

type Props = {}
const Home = (props: Props) => {
    return (
        <>
            <Header />
            <Slider />
            <Articles />
            <Reviews />
        </>
    )
}
export default Home
