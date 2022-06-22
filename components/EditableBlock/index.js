import React, { useState, useEffect } from 'react'
import DataForm from './DataForm'

export default function EditableBlock({ children, data, setData, placeholder = 'Loading data...' }) {
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

  const handleCancel = () => setEditing(false)

  return (
    <>
      {
        !data
          ? <p>{placeholder}</p>
          : editing
            ? <DataForm
                defaultValue={value}
                handleInput={handleInput}
                handleSubmit={handleSubmit}
                handleCancel={handleCancel}
              />
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

                <button
                  className="c-button c-button--neutral c-glass__button"
                  onClick={() => setEditing(true)}
                >Edit</button>
              </div>
            )
      }
    </>
  )
}
