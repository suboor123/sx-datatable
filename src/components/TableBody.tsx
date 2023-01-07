import React from 'react'
import { Records } from '../types'

interface Props {
  records: Records
}

const TableBody: React.FC<Props> = (props) => {
  const { records = [] } = props
  return (
    <tbody>
      {records.map((row, rowIndex) => {
        return (
          <tr key={rowIndex}>
            {row.map((col, colIndex) => (
              <td key={colIndex + ' ' + rowIndex}>{col.render}</td>
            ))}
          </tr>
        )
      })}
    </tbody>
  )
}

export default TableBody
