import { Grid } from '@mui/material'
import HeaderAll from '../../container/HeaderAll/HeaderAll'
import homeArray from '../../components/Articles/homeArray'
type HomeProps = {
    id: number
    image: string
    title: string
    text: string
    category?: string
}
type Props = {}
const HomeArticleSea = (props: Props) => {
    return (
        <>
            <HeaderAll />
            <Grid container direction="row" alignItems="center">
                {homeArray
                    .filter(({ category }: HomeProps) => category === 'sea')
                    .map(({ id, image, title, text }: HomeProps) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={8}
                            margin="20px auto"
                            key={id}
                        >
                            <div className="article-img">
                                <img src={image} alt="" />
                            </div>
                            <h4 className="article-title">{title}</h4>
                            <p className="article-text">{text}</p>
                        </Grid>
                    ))}
            </Grid>
        </>
    )
}
export default HomeArticleSea
