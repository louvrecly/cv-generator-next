import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Home() {
  const { data, error } = useSWR('api/user', fetcher)

  return (
    <div className="mx-8 py-12 h-full max-w-screen-sm break-words md:mx-auto lg:max-w-[960px]">
      {
        error
          ? <p>Failed to Load Data</p>
          : !data
          ? <p>Loading...</p>
          : JSON.stringify(data)
      }
    </div>
  )
}
