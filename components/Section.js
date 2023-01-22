export default function Section({ title, children }) {
  return (
    <section className="py-0.5 w-full">
      <h2 className="text-base uppercase">{title}</h2>

      {children}
    </section>
  )
}
