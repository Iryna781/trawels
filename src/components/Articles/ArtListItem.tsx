import { Card, CardActions, CardContent, Button } from '@mui/material'
import './ArtListItem.css'

type Props = {
    image: string
    title: string
    text: string
}
const ArtListItem = (props: Props) => {
    return (
        <Card className="art-list-item">
            <CardContent>
                <div className="art-image">{props.image}</div>
                <h4 className="art-title">{props.title}</h4>
                <p className="art-text">{props.text}</p>
            </CardContent>
            <CardActions className="btns-wrap">
                <Button variant="outlined">Read More</Button>
            </CardActions>
        </Card>
    )
}
export default ArtListItem
