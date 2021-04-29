import Head from 'next/head'
import QtApp from '../components/QtApp'

export default function Home() {
  return (
    <div>
      <Head>
        <title>NextQt</title>
        <meta name="description" content="Qt WASM App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <QtApp></QtApp>
    </div>
  )
}
