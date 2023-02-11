import { Grid } from '@mui/material'
import newsArray from './newsArray'
import NewsListItem from './NewsListItem'

type NewsProps = {
    image: string
    title: string
    text: string
}

type Props = {}
const NewsList = (props: Props) => {
    return (
        <>
            <Grid
                container
                direction="row"
                spacing={2}
                maxWidth="lg"
                margin="auto"
            >
                {newsArray.map(({ image, title, text }: NewsProps) => (
                    <Grid item xs={12} sm={6} md={4}>
                        <NewsListItem image={image} title={title} text={text} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
export default NewsList
