import Head from 'next/head'

export default function DefaultLayout({ children }) {
  return (
    <>
      <Head>
        <title>Next Profile</title>
        <meta name="description" content="Next Profile" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="default">{children}</div>
    </>
  )
}
