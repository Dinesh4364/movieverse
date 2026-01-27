import React from "react";

//----destructing the object--------
// const person = {
//     name: "John Doe",
//     age: 30,
//     occupation: "Software Developer"
// };
// const {name,age,occupation} = person;
// console.log(name,age,occupation);


const Search = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="search">
            <div>
                <img src="./search.svg" alt="search" />
                <input
                    type="text"
                    placeholder="Search for a movie...here..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
    );
}
export default Search;