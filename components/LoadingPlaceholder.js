import React, { useState, useEffect } from 'react'

export default function LoadingPlaceholder({ children, data, setData, placeholder = 'Loading data...' }) {
  const [editing, setEditing] = useState(false)
  const [value, setValue] = useState(JSON.stringify(data))

  useEffect(() => {
    setValue(JSON.stringify(data))
  }, [data])

  const handleInput = e => setValue(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()

    try {
      const json = JSON.parse(e.target.data.value)
      setData(json)

      setEditing(false)
    } catch (error) {
      alert(`Error - ${error.message}`)
    }
  }

  return (
    <>
      {
        !data
          ? <p>{placeholder}</p>
          : editing
            ? (
              <form className="py-1" onSubmit={handleSubmit}>
                <textarea name="data" className="px-3 py-2 w-full text-xs border border-neutral-300 rounded" placeholder="Input JSON here..." rows="6" defaultValue={value} onChange={handleInput} />

                <div className="py-1 flex justify-center gap-x-3">
                  <button className="c-button c-button--green" type="submit">Submit</button>
                  <button className="c-button c-button--red" onClick={() => setEditing(false)}>Cancel</button>
                </div>
              </form>
            )
            : (
              <div className="c-glass">
                <div className="c-glass__screen">
                  {
                    React.Children.map(
                      children,
                      child => React.isValidElement(child)
                        ? React.cloneElement(child, { data })
                        : child
                      )
                  }
                </div>

                <button className="c-button c-button--neutral c-glass__button" onClick={() => setEditing(true)}>Edit</button>
              </div>
            )
      }
    </>
  )
}
