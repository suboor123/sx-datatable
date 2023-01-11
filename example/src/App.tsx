import React, { useEffect, useState } from 'react'
import { SxDatatable } from 'sx-datatable'
import { Headers } from '../../dist/types/headerType'

/**
 * defining the table header
 * sorting and searching are optional
 */
const header: Headers = [
  { label: "Image", accessor: "image", sortable: true, searchable: false },
  { label: "Name", accessor: "firstName", sortable: true, searchable: false },
  { label: "Age", accessor: "age", sortable: true, searchable: false },
  { label: "Email", accessor: "email", sortable: false, searchable: false },
  { label: "Phone Number", accessor: "phone", sortable: true, searchable: false },
  { label: "University", accessor: "university", sortable: true, searchable: false },
]
const App = () => {
  const [users, setUsers] = useState([])
  const [tableData, setTableData] = React.useState<any>([])

  /**
   * will add val and render value
   * @param val actual value
   * @param element render value
   * @returns value in object format 
   */

  const makeDataCol = (val: any, element: React.ReactNode) => {
    return {
      val,
      render: element
    }
  }


  /**
   * fetching the data from fake api
   */
  useEffect(() => {
    ; (async () => {
      const res = await fetch('https://dummyjson.com/users')
      const data = await res.json()
      const u = data.users
      setTableData(u)
      setUsers(u)
    })()
  }, [])


  /**
   * Sorting the data in asc and desc in alternate click
   * @param sortField the selected field for sorting
   * @param sortOrder the order in which data should be sort
   */
  const handleSorting = (sortField: string, sortOrder: string) => {
    const sorted = [...tableData].sort((a, b) => {
      if (a[sortField] === null) return 1;
      if (b[sortField] === null) return -1;
      if (a[sortField] === null && b[sortField] === null) return 0;
      return (
        a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
          numeric: true,
        }) * (sortOrder === 'asc' ? 1 : -1)
      )
    });
    setTableData(sorted)
  };


  /**
   * changing the data as per requirement
   */
  useEffect(() => {
    const records = tableData.map((user: any) => {
      return [
        makeDataCol(
          null,
          <img src={user.image} style={{ height: '50px', width: '50px' }} />
        ),
        makeDataCol(
          user.firstName + ' ' + user.lastName,
          <a href='#'>{user.firstName + ' ' + user.lastName}</a>
        ),
        makeDataCol(user.age, user.age),
        makeDataCol(user.email, user.email),
        makeDataCol(user.phone, user.phone),
        makeDataCol(user.university, user.university)
      ]
    })
    setUsers(records)
  }, [tableData])



  return <SxDatatable header={header} records={users ? users : tableData} handleSorting={handleSorting} />
}

export default App
