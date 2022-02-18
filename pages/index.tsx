import Head from 'next/head'
import Header from '../components/Header'
import Topbar from '../components/Topbar'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Topbar />
    </div>
  )
}
