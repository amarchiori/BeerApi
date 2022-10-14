import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div>
            <input
                className = 'pa3 ba b--gray bg-white'
                type='search'
                placeholder='City'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;