import React from 'react'

const SortableTableHeader = ({ children, active, sortBy, direction, onClick }) => {

  const onThClick = () => {
    onClick(sortBy, direction)
  }

  return (
    <th onClick={onThClick}>
      {children}
    </th>
  )
}

export default SortableTableHeader