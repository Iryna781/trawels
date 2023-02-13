import { Card, CardActions, CardContent, Button } from '@mui/material'
import ButtonRead from '../Buttons/ButtonRead'
import './ArtListItem.css'

type Props = {
    image: string
    title: string
    text: string
    button: string
}

const ArtListItem = ({ image, title, text, button }: Props) => {
    return (
        <Card className="art-list-item">
            <CardContent>
                <div className="art-img">
                    <img src={image} alt="" />
                </div>
                <h4 className="art-title">{title}</h4>
                <p className="art-text">{text}</p>
                <ButtonRead to="/read">{button}</ButtonRead>
            </CardContent>
        </Card>
    )
}
export default ArtListItem
