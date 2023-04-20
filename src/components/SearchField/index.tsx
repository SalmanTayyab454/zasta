import React, { useState } from "react";

interface Props {
    inputValue: any;
}
const SearchField: React.FC<Props> = ({ inputValue }) => {
    const [enteredFilter, setEnteredFilter] = useState("");

    // Get input value on Change
    const inputHandler = (e: any) => {
        inputValue(e.target.value);
        setEnteredFilter(e.target.value);
    };
    return (
        <div className="row pt-4 pb-4">
            <div className="col-4">
                <div className="filter-container pb-2">
                    <label htmlFor="filter">Filter by the postal code & street name:</label>
                </div>
                <div className="filter--input">
                    <input
                        type="text"
                        id="filter"
                        className="w-100"
                        value={enteredFilter}
                        onChange={(event) => inputHandler(event)}
                    />
                </div>
            </div>
        </div>
    );
};

export default SearchField;
