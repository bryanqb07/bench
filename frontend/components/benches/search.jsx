import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';
import FilterForm from './filter_form';

export default ({benches, minSeating, maxSeating, updateFilter}) => (
        <div>
            < BenchMap benches={benches} updateFilter={updateFilter}/>
            < BenchIndex benches={benches} updateFilter={updateFilter}/>
            < FilterForm minSeating={minSeating} 
                         maxSeating={maxSeating}
                         updateFilter={updateFilter} />
        </div>
)


