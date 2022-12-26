import { Typography } from '@mui/material'
import ArtList from './ArtList'

type Props = {}
const Articles = (props: Props) => {
    return (
        <>
            <Typography variant="h2" align="center" sx={{ marginTop: '50px' }}>
                TRAVEL BLOG
            </Typography>
            <ArtList />
        </>
    )
}
export default Articles
