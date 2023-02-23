import { Card, CardContent } from '@mui/material'
import './NewsListItem.css'

type Props = {
    image: string
    title: string
    text: string
}
const ArtListItem = ({ image, title, text }: Props) => {
    return (
        <Card className="news-list-item">
            <CardContent>
                <div className="news-img">
                    <img src={image} alt="" />
                </div>
                <h4 className="news-title">{title}</h4>
                <p className="news-text">{text}</p>
            </CardContent>
        </Card>
    )
}
export default ArtListItem
