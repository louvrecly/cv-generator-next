import { ListItem } from '@/context/data.types';

interface ItemsListProps {
  items: ListItem[];
}

export default function ItemsList({ items = [] }: ItemsListProps) {
  return (
    <ul className="list-disc list-inside text-xs">
      {items
        .filter(item => item.show)
        .map((item, idx) => (
          <li key={idx} className="py-px text-slate-600">{item.content}</li>
        ))}
    </ul>
  )
}
