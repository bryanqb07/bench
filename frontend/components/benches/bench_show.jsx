import React from 'react';
import BenchIndexItem from './bench_index_item';
import BenchMap from './bench_map';


export default ({bench}) => (
    <div>

        <ul>
            <BenchIndexItem bench={bench}/>
        </ul>
    </div>
)

//    < BenchMap benches = { bench } /> ADD IN LATER