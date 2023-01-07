import * as React from 'react'
import { Header } from './components/Header'
import TableBody from './components/TableBody'
import { Records } from './types'

interface Props {
  header: string[]
  records: Records
  sortable?: boolean
  pagination?: boolean
  searching?: boolean
}

export const SxDatatable = (props: Props) => {
  const { header, records } = props

  return (
    <React.Fragment>
      <table>
        <Header header={header} />
        <TableBody records={records} />
      </table>
    </React.Fragment>
  )
}

/**
 
  header: string[] => ['#', 'Name', 'Salary']
  records: React.ReactNode[][] => [
    [
      {
        val: danish,
        render: (<div className="">danish</ddiv>)
      }
    ],

  ]

  sortable: boolean;
  pagination: boolean;
  searching: boolean;


 
 */
