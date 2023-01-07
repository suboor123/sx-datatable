import React from "react"

interface Props {
    header: string[]
}

export const Header: React.FC<Props> = (props) => {
    const {header} = props;
    return (
        <thead>
            <tr>
                {header.map((head, index) => (
                    <td key={index}>{head}</td>
                ))}
            </tr>
        </thead>
    )
}