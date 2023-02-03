import { Card, CardContent, Typography } from '@mui/material'
import './ArticlesItem.css'
type Props = {
    image: string
    title: string
    text: string
    category: string
}
const ArticlesItem = ({ image, title, text, category }: Props) => {
    return (
        <>
            <Card>
                <CardContent>
                    <div className="article-img">
                        <img src={image} alt="" />
                    </div>
                    <h4 className="article-title">{title}</h4>
                    <p className="article-text">{text}</p>
                    <p>{category}</p>
                </CardContent>
            </Card>
        </>
    )
}
export default ArticlesItem
