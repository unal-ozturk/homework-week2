import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ApiData() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [query, setQuery] = useState("");


//Function to get data from api
const getData = async () => {
  const res = await axios.get("https://swapi.dev/api/people").then( res => {
    setData(res.data.results);
    setFilteredData(res.data.results);
  });
};

// Call data instantly from api by using useEffect
useEffect(() => {
  getData();
}, []);


// Filter for searchbar
const handleSearch = (e) => {
  const getSearch = e.target.value
  setQuery(getSearch);
  if(getSearch.length > 0) {
    const searchData = data.filter(item => item.name.toLowerCase().includes(getSearch))
    setData(searchData);
  } else {
    setData(filteredData);
  }
}

// function for deleting a row from character list
const deleteRow = (e) => {
  // need a function
}




return (
  <div className='div'>
      <div>
        <input type="text" className='searchBar' name="searchBar" onChange={(e) => handleSearch(e)} value={query} placeholder="Search here"/>
      </div>
      <table className='main-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>
              Gender: <br></br>
              <select className='genderMenu' onChange={(e) => setSearch(e.target.value)}>
                <option value=""> All </option> {/* need to set empty value to show ALL characters regardless of gender */}
                <option value="male"> Male </option>
                <option value="female"> Female </option>
                <option value="n/a"> N/A </option>
              </select>
            </th>
            <th>Movies</th>
            <th>Delete</th>
          </tr>
        </thead>
          {data.map((item, index) => (
            <tbody className="table-outline" key={index}>
              <tr>
                <td>{item.name}</td>
                <td>{item.height}</td>
                <td>{item.gender}</td>
                <td>{item.films}</td>
                <td onClick={deleteRow} className='delete'><button>⚔️</button></td>
              </tr>
            </tbody>
          ))}
      </table>
  </div>
);
}

// TODO: deleterow function - i had issues with Css styling - gender filter has issues

export default ApiData;