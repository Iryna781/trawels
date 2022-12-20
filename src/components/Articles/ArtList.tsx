import { Grid } from '@mui/material'
import artArray from './artArray'
import ArtListItem from './ArtListItem'

type ArtProps = {
    image: string
    title: string
    text: string
}

type Props = {}
const ArtList = (props: Props) => {
    return (
        <>
            {console.log('test')}
            <Grid container direction="row" alignItems="center" spacing={4}>
                {artArray.map(({ image, title, text }: ArtProps) => (
                    <Grid item xs={12} sm={6} md={4}>
                        <ArtListItem image={image} title={title} text={text} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
export default ArtList
