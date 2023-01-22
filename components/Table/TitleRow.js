import Image from 'next/image'

export default function TitleRow({ title, logo = null }) {
  return (
    <div className="flex items-center gap-2">
      {logo && <Image src={logo} alt={title} width={15} height={15} />}

      <h3 className="font-bold text-xs">{title}</h3>
    </div>
  )
}
