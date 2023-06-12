import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Linkable from 'components/Table/Linkable'

export default function UserInfo({ data }) {
  return (
    <div className="w-full flex flex-wrap justify-stretch items-center gap-x-3">
      <h1 className="flex-1 text-2xl whitespace-nowrap">{data.name}</h1>

      {data.contacts && (
        <ul>
          {data.contacts.map(contact => (
            <Linkable key={contact.key} link={contact.link}>
              <li className={`flex ${contact.icon ? 'flex-row-reverse' : 'justify-between'} items-center gap-2 text-xs`}>
                {contact.icon
                  ? <FontAwesomeIcon icon={`fa-${contact.icon.style} fa-${contact.icon.name}`} />
                  : <span className="mr-1 font-bold">{contact.label}:</span>}
                  <span>{contact.value}</span>
              </li>
            </Linkable>
          ))}
        </ul>
      )}
    </div>
  )
}
