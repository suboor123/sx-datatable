import React, { useEffect, useState } from 'react'

import { SxDatatable } from 'sx-datatable'
import 'sx-datatable/dist/index.css'

const header = ['Image', 'Name', 'Age', 'Email', 'Phone Number', 'University']
const App = () => {
  const [users, setUsers] = useState([])

  const makeDataCol = (val: any, element: React.ReactNode) => {
    return {
      val,
      render: element
    }
  }

  useEffect(() => {
    ;(async () => {
      const res = await fetch('https://dummyjson.com/users')
      const data = await res.json()
      const u = data.users
      const records = u.map((user: any) => {
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
      console.log(records)
      setUsers(records)
    })()
  }, [])

  return <SxDatatable header={header} records={users} />
}

export default App
