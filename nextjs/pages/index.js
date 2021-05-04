import Head from 'next/head'
import AnalogClockCanvas from '../components/AnalogClockCanvas'

export default function Home() {
  return (
    <div>
      <Head>
        <title>NextQt</title>
        <meta name="description" content="Qt WASM App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnalogClockCanvas></AnalogClockCanvas>
    </div>
  )
}
