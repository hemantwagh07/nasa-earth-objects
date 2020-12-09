import React from 'react'

export default function TableBody({ data }) {
    return (
        <tbody role="rowgroup">
            {data.map(row => (
                <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.neo_reference_id}</td>
                    <td>{row.name}</td>
                    <td>{row.nasa_jpl_url}</td>
                    <td>{row.absolute_magnitude_h}</td>
                    <td>Min: {row.estimated_diameter.kilometers.estimated_diameter_min} Max: {row.estimated_diameter.kilometers.estimated_diameter_max}</td>
                </tr>
            ))}
        </tbody>
    )
}
