import React from 'react';
import BenchMap from '../benches/bench_map';
import BenchIndex from '../benches/bench_index';
import FilterForm from './filter_form';

export default ({benches, minSeating, maxSeating, updateFilter}) => (
        <div className="content-wrapper">
            < BenchMap benches={benches} updateFilter={updateFilter}/>
            <div className="map-divider">
                < FilterForm minSeating={minSeating}
                    maxSeating={maxSeating}
                    updateFilter={updateFilter} />
                < BenchIndex benches={benches} updateFilter={updateFilter}/>
            </div>

        </div>
)


