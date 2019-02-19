import React from 'react';

export default ({bench}) => (
    <li>
        Id: {bench.id}
        <br />
        Description: {bench.description}
        <br />
        Seating: {bench.seating}
    </li>
)