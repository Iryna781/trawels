import NewsArticles from '../../components/Articles/NewsArticles'
import NewsSlider from '../../components/Slider/NewsSlider'
import HeaderAll from '../../container/HeaderAll/HeaderAll'
import './News.css'
type Props = {}
const News = (props: Props) => {
    return (
        <>
            <HeaderAll />
            <div className="back7">NEWS</div>
            <NewsArticles />
            <NewsSlider />
        </>
    )
}
export default News
