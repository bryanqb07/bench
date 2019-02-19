import React from 'react';

const handleChange = (filter, updateFilter) => (e) => (
    updateFilter(filter, parseInt(e.currentTarget.value))
);

export default ({minSeating, maxSeating, updateFilter}) => (
    <div>
        <span>Filter Seats</span>
        <br/>
        <label>Minimum Seating
          <input type="number" 
                 value={minSeating}
                 onChange={handleChange('minSeating', updateFilter)}/>
        </label>
        <label>Maximum Seating
          <input type="number"
                value={maxSeating}
                onChange={handleChange('maxSeating', updateFilter)} />
        </label>
    </div>
)