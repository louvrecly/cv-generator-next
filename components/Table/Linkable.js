export default function Linkable({ link = null, children }) {
  return (
    <>
      {link
        ? <a href={link} target="_blank" rel="noreferrer">{children}</a>
        : <span className="contents">{children}</span>}
    </>
  )
}
