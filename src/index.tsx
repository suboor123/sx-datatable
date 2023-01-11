import * as React from 'react'
import { Header } from './components/Header'
import TableBody from './components/TableBody'
import { Records } from './types'
import { Headers } from './types/headerType'

interface Props {
  header: Headers
  records: Records
  sortable?: boolean
  pagination?: boolean
  searching?: boolean,
  handleSorting: any
}

export const SxDatatable = (props: Props) => {
  const { header, records, handleSorting } = props




  return (
    <React.Fragment>
      <table>
        <Header header={header} handleSorting={handleSorting} />
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
