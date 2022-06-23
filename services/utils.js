export function filterByShow(items) {
  return typeof items !== 'object'
    ? items
    : Array.isArray(items)
    ? items.filter(item => typeof item !== 'object' || item.show).map(filterByShow)
    : Object.keys(items).reduce(
      (fields, key) => ({ ...fields, [key]: filterByShow(items[key]) }),
      {}
    )
}
