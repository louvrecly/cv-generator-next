export default function WindowView({ children, handleEdit }) {
  return (
    <div className="c-window">
      <div className="c-window__glass">{children}</div>

      <button
        className="c-button c-button--neutral c-window__button"
        onClick={handleEdit}
      >Edit</button>
    </div>
  )
}
