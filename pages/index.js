import { useState, useEffect } from 'react'

export default function Home() {
  const [data, setData] = useState(null)
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    setBusy(true)

    try {
      fetch('/api/user')
        .then(res => res.json())
        .then(data => setData(data))
        .finally(() => setBusy(false))
    } catch (err) {
      console.log({ err })
    }
  }, [])

  return (
    <div className="mx-8 py-12 h-full max-w-screen-sm break-words md:mx-auto lg:max-w-[960px]">
      {
        busy
          ? <p>Loading...</p>
          : !data
          ? <p>No data available</p>
          : JSON.stringify(data)
      }
    </div>
  )
}
