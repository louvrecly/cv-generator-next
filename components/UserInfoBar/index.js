import LoadingPlaceholder from 'components/LoadingPlaceholder'
import UserInfo from './UserInfo'

export default function UserInfoBar({ user, setUser }) {
  return (
    <div className="py-1 text-blue-900 border-b-2 border-red-700">
      <LoadingPlaceholder data={user} setData={setUser} placeholder="Loading user data...">
        <UserInfo />
      </LoadingPlaceholder>
    </div>
  )
}
