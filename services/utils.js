export function filterByShow(items) {
  if (!items || typeof items !== 'object') return items

  if (Array.isArray(items)) return items.reduce((filteredItems, item) => {
    if (typeof item === 'object' && !item.show) return filteredItems

    return [...filteredItems, filterByShow(item)]
  }, [])

  return Object.keys(items).reduce(
      (fields, key) => ({ ...fields, [key]: filterByShow(items[key]) }),
      {}
    )
}
