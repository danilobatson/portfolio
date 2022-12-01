import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/css/nucleo-icons.css';
import '../assets/scss/blk-design-system-react.scss';
import '../assets/demo/demo.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
