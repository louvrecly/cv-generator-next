import React, { useState, useEffect } from 'react'
import DataForm from './DataForm'
import WindowView from './WindowView'

export default function EditableBlock({ children, data, setData, placeholder = 'Loading data...' }) {
  const [editing, setEditing] = useState(false)
  const [value, setValue] = useState(JSON.stringify(data))

  const handleEdit = () => setEditing(true)
  const handleInput = e => setValue(e.target.value)
  const handleCancel = () => setEditing(false)
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

  useEffect(() => {
    setValue(JSON.stringify(data))
  }, [data])

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
            : <WindowView handleEdit={handleEdit}>{children}</WindowView>
      }
    </>
  )
}
