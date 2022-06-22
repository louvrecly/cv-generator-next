export default function UserInfoBar({ user }) {
  return (
    <div className="py-1 flex flex-wrap justify-stretch items-center gap-x-3 text-blue-900 border-b-2 border-red-700">
      {
        !user
          ? <p>Loading user data...</p>
          : (
            <>
              <h1 className="flex-1 text-xl uppercase whitespace-nowrap">{user.name}</h1>

              <ul>
                {user.contacts?.map(contact => (
                  <li key={contact.key} className="flex justify-between text-xs">
                    <span className="mr-1 font-bold">{contact.label}:</span>
                    <span>{contact.value}</span>
                  </li>
                ))}
              </ul>
            </>
          )
      }
    </div>
  )
}
