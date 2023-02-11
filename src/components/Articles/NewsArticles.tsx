import { Typography } from '@mui/material'
import NewsList from './NewsList'

type Props = {}
const NewsArticles = (props: Props) => {
    return (
        <>
            <Typography variant="h2" align="center" sx={{ marginTop: '50px' }}>
                NEWS IN TOURISM
            </Typography>
            <NewsList />
        </>
    )
}
export default NewsArticles
