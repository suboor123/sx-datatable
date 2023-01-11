import { useState } from "react";

export const useSortableTable = (data) => {
    const [sortedtableData, setSortedTableData] = useState(data);

    const handleSorting = (sortField, sortOrder) => {
        if (sortField) {
            const sorted = [...sortedtableData].sort((a, b) => {
                if (a[sortField] === null) return 1;
                if (b[sortField] === null) return -1;
                if (a[sortField] === null && b[sortField] === null) return 0;
                return (
                    a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
                        numeric: true,
                    }) * (sortOrder === "asc" ? 1 : -1)
                );
            });
            setSortedTableData(sorted);
        }
    };

    return [sortedtableData, handleSorting];
};