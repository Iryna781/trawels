import { Card, CardContent, Button } from '@mui/material'
import './ArticlesItem.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { addLike, removeLike } from '../../redux/LikeReducer'
type Props = {
    id: number
    image: string
    title: string
    text: string
}
const ArticlesItem = ({ id, image, title, text }: Props) => {
    const isLiked = useAppSelector((state) => state.LikeArticles[id])
    const dispatch = useAppDispatch()
    return (
        <>
            <Card>
                <CardContent>
                    <Button
                        variant="outlined"
                        className="btn-like"
                        onClick={() =>
                            isLiked
                                ? dispatch(removeLike(id))
                                : dispatch(addLike(id))
                        }
                    >
                        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </Button>
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
