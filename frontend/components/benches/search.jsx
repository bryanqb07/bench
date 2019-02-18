import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';

export default ({benches, updateFilter}) => (
        <div>
            < BenchMap benches={benches} updateFilter={updateFilter}/>
            < BenchIndex benches={benches} updateFilter={updateFilter}/>
        </div>
)


