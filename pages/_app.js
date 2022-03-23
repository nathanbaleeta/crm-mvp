import '../styles/globals.css'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

function MyApp({ Component, pageProps }) {
  return <LocalizationProvider dateAdapter={AdapterDateFns}>
    <Component {...pageProps} />
  </LocalizationProvider>

}

export default MyApp
