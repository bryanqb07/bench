import React from 'react';
import BenchIndexItem from './bench_index_item';

export default ({benches}) => (
    <ul>
        {
            benches.map(bench => <BenchIndexItem bench={bench} key={bench.id} />) 
        }
    </ul>
)

// class BenchIndex extends React.Component{
//         // const benches = this.props.benches;
//         // const benchList = benches ? 
//         //     benches.map(bench => <BenchIndexItem bench={bench} key={bench.id}/>) 
//         // : "";

//         return(
//             <ul>Benches
//                 { benchList }
//             </ul>
//         )
//     }
// }
//export default BenchIndex;