import data from 'data'

export default function Home() {
  return (
    <div className="mx-8 py-12 h-full max-w-screen-sm break-words md:mx-auto lg:max-w-[960px]">
      {JSON.stringify(data)}
    </div>
  )
}
