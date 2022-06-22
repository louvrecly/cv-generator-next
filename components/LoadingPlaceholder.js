import React from 'react'

export default function LoadingPlaceholder({ children, data, placeholder = 'Loading data...' }) {
  return (
    <>
      {
        !data
          ? <p>{placeholder}</p>
          : React.Children.map(
            children,
            child => React.isValidElement(child)
              ? React.cloneElement(child, { data })
              : child
          )
      }
    </>
  )
}
