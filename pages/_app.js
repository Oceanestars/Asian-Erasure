import Layout from '../components/layout'
import '../styles/global.scss'


export default function App({ Component, pageProps }) {
    return (
      <Layout>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap" rel="stylesheet" />

        <Component {...pageProps} />
      </Layout>
    )
  }