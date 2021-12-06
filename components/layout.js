import Header from './header'
import Navbar from './navbar'
import Footer from './footer'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Asian Erasure</title>
        <meta property="og:title" content="Asian Erasure" key="title" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap" rel="stylesheet" />

      </Head>
      <Header/>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}