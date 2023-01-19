import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import Footer from '../../components/Footer/Footer'
import Main from '../Main/Main'

type Props = {}
const App = (props: Props) => {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Main />
                <Footer />
            </StyledEngineProvider>
        </>
    )
}
export default App
