import React from 'react'
import TableBody from './TableBody'
import TableHead from './TableHead'
import './table.css';

export default function Table({ data }) {
    return (
        <table role="table">
            <TableHead />
            <TableBody data={data} />
        </table>
    )
}
