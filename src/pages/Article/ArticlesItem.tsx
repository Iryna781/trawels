import { Card, CardContent, Typography } from '@mui/material'
import './ArticlesItem.css'
type Props = {
    image: string
    title: string
    text: string
}
const ArticlesItem = ({ image, title, text }: Props) => {
    return (
        <>
            <Card>
                <CardContent>
                    <div className="article-img">
                        <img src={image} alt="" />
                    </div>
                    <h4 className="article-title">{title}</h4>
                    <p className="article-text">{text}</p>
                </CardContent>
            </Card>
        </>
    )
}
export default ArticlesItem
