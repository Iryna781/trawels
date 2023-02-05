import { Grid, Typography } from '@mui/material'
import HeaderAll from '../../container/HeaderAll/HeaderAll'
import ArticlesItem from './ArticlesItem'
import allArray from '../../components/Articles/allArray'
import './ArticlesSea.css'
type AllProps = {
    id: number
    image: string
    title: string
    text: string
    category?: string
}
type Props = {}
const ArticlesSea = (props: Props) => {
    return (
        <>
            <HeaderAll />
            <div className="back3">SERVICE</div>
            <Typography variant="h5" align="center" marginTop="20px">
                SEA VACATION
            </Typography>
            <Grid container direction="row" alignItems="center">
                {allArray
                    .filter(
                        ({ category }: AllProps) => category === 'sea vacation'
                    )
                    .map(({ id, image, title, text }: AllProps) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={8}
                            margin="20px auto"
                            key={id}
                        >
                            <ArticlesItem
                                image={image}
                                title={title}
                                text={text}
                            />
                        </Grid>
                    ))}
            </Grid>
        </>
    )
}
export default ArticlesSea
