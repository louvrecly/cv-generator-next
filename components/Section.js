export default function Section({ title, children }) {
  return (
    <section className="py-1 w-full md:w-[49%]">
      <h2 className="text-base uppercase underline">{title}</h2>

      {children}
    </section>
  )
}
