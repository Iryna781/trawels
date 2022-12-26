import { Card, CardActions, CardContent, Button } from '@mui/material'
import './ArtListItem.css'

type Props = {
    image: string
    title: string
    text: string
}
const ArtListItem = ({ image, title, text }: Props) => {
    return (
        <Card className="art-list-item">
            <CardContent>
                <div className="art-img">
                    <img src={image} alt="" />
                </div>
                <h4 className="art-title">{title}</h4>
                <p className="art-text">{text}</p>
            </CardContent>
            <CardActions>
                <Button variant="outlined" className="btns-wrap">
                    Read More
                </Button>
            </CardActions>
        </Card>
    )
}
export default ArtListItem
