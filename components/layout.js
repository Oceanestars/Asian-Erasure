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
      </Head>
      <Header/>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}