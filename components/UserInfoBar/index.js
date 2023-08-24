import EditableBlock from '@/components/EditableBlock'
import UserInfo from './UserInfo'
import { filterByShow } from '@/services/utils'

export default function UserInfoBar({ user, setUser }) {
  return (
    <div className="py-0.5 text-blue-800 border-b-2 border-rose-700">
      <EditableBlock data={user} setData={setUser} placeholder="Loading user data...">
        <UserInfo data={filterByShow(user)} />
      </EditableBlock>
    </div>
  )
}
