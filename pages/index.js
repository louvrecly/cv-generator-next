import useSWR from 'swr'
import UserInfoBar from 'components/UserInfoBar'
import ReferencesSection from 'components/ReferencesSection'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Home() {
  const userRes = useSWR('api/user', fetcher)
  const referencesRes = useSWR('api/references', fetcher)

  return (
    <div className="mx-8 py-12 h-full max-w-screen-sm break-words md:mx-auto lg:max-w-[960px]">
      <div>
        {
          userRes.error
            ? <p>Failed to Load Data</p>
            : !userRes.data
            ? <p>Loading...</p>
            : <UserInfoBar user={userRes.data.user} />
        }
      </div>

      <div>
        {
          referencesRes.error
            ? <p>Failed to Load Data</p>
            : !referencesRes.data
            ? <p>Loading...</p>
            : <ReferencesSection references={referencesRes.data.references} />
        }
      </div>
    </div>
  )
}
