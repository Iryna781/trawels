import { Route, Routes } from 'react-router-dom'
import About from '../../pages/About/About'
import ArticlesCity from '../../pages/Article/ArticlesCity'
import ArticlesSea from '../../pages/Article/ArticlesSea'
import ArticlesSnow from '../../pages/Article/ArticlesSnow'
import Contact from '../../pages/Contact/Contact'
import Discover from '../../pages/Discover/Discover'
import Home from '../../pages/Home/Home'
import News from '../../pages/News/News'
import Services from '../../pages/Services/Services'

type Props = {}
const Main = (props: Props) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="discover" element={<Discover />} />
                <Route path="contact" element={<Contact />} />
                <Route path="news" element={<News />} />
                <Route path="services" element={<Services />} />
                <Route path="snow" element={<ArticlesSnow />} />
                <Route path="sea" element={<ArticlesSea />} />
                <Route path="city" element={<ArticlesCity />} />
                <Route path="back" element={<Services />} />
            </Routes>
        </>
    )
}
export default Main
