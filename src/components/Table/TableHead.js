import React from 'react'

export default function TableHead() {
    return (
        <thead role="rowgroup">
            <tr role="row">
                <th role="columnheader">Id</th>
                <th role="columnheader">Neo Reference Id</th>
                <th role="columnheader">Name</th>
                <th role="columnheader">Nasa jpl Url</th>
                <th role="columnheader">Absolute Magnitude h</th>
                <th role="columnheader">Estimated Diameter (kilometers)</th>
            </tr>
        </thead>
    )
}
