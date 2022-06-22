export default function UserInfo({ data }) {
  return (
    <div className="flex flex-wrap justify-stretch items-center gap-x-3">
      <h1 className="flex-1 text-xl uppercase whitespace-nowrap">{data.name}</h1>

      {data.contacts && (
        <ul>
          {data.contacts.map(contact => (
            <li key={contact.key} className="flex justify-between text-xs">
              <span className="mr-1 font-bold">{contact.label}:</span>
              <span>{contact.value}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
