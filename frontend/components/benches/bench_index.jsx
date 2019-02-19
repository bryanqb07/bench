import React from 'react';
import BenchIndexItem from './bench_index_item';

export default ({benches}) => (
    <ul className="bench-index"> Bench List
        {
            benches.map(bench => <BenchIndexItem bench={bench} key={bench.id} />) 
        }
    </ul>
)

