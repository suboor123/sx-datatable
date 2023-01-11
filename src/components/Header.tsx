import React from "react"
import { Headers } from '../types/headerType'

interface Props {
    header: Headers,
    handleSorting: any
}

export const Header: React.FC<Props> = (props) => {
    const [sortField, setSortField] = React.useState("")
    const [order, setOrder] = React.useState("asc")
    const { header, handleSorting } = props;

    const handleSortingChange = (accessor: string) => {
        const sortOrder = accessor === sortField && order === "asc" ? "desc" : "asc"
        setSortField(accessor);
        setOrder(sortOrder);
        handleSorting(accessor, sortOrder)
    }

    return (
        <thead>
            <tr>
                {header.map(({ accessor, label, sortable }) => {
                    return (
                        <th key={accessor} onClick={sortable ? () => handleSortingChange(accessor) : undefined}>{label}</th>
                    )
                })}
            </tr>
        </thead>
    )
}