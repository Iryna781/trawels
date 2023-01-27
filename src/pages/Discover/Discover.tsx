import HeaderAll from '../../container/HeaderAll/HeaderAll'
import { Typography } from '@mui/material'
import './Discover.css'
import Discovertextsnow from '../../components/Discovertext/Discovertextsnow'
import Discovertextsea from '../../components/Discovertext/Discovertextsea'
import Discovertexteurope from '../../components/Discovertext/Discovertexteurope'
type Props = {}
const Discover = (props: Props) => {
    return (
        <>
            <HeaderAll />
            <Typography variant="h5" align="center">
                Your favorite resorts in North America
            </Typography>
            <Discovertextsnow />
            <Typography variant="h5" align="center">
                Best Beaches in the World
            </Typography>
            <Discovertextsea />
            <Typography variant="h5" align="center">
                Top European Destination
            </Typography>
            <Discovertexteurope />
        </>
    )
}
export default Discover
