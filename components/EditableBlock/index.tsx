import React, { useState, useEffect, ReactNode, ChangeEvent, FormEvent } from 'react'
import DataForm from './DataForm'
import WindowView from './WindowView'

interface EditableBlockProps {
  children?: ReactNode;
  data?: any;
  setData: (value: any) => void;
  placeholder?: string;
}

export default function EditableBlock({ children, data, setData, placeholder = 'Loading data...' }: EditableBlockProps) {
  const [editing, setEditing] = useState(false)
  const [value, setValue] = useState<string>(JSON.stringify(data))

  const handleEdit = () => setEditing(true)
  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)
  const handleCancel = () => setEditing(false)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const targetForm = e.target as HTMLFormElement
      const json = JSON.parse(targetForm.data.value)
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
