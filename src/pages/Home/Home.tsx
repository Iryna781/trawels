import Articles from '../../components/Articles/Articles'
import Header from '../../container/Header/Header'

type Props = {}
const Home = (props: Props) => {
    return (
        <>
            <Header />
            <Articles />
        </>
    )
}
export default Home
