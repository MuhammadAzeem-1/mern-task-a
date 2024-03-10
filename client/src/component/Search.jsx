import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { Geo_Api_Options, BASE_URL_GEO } from "../apis";
import axios from "axios";

const Search = () => {
  const [search, setSearch] = useState("");

  const loadOptions = (inputValue) => {
    return fetch(
      `${BASE_URL_GEO}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      Geo_Api_Options
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              label: `${city.name}`,
            };
          }),
        };
      });
  };

  const handleChange = async (searchData) => {
    setSearch(searchData.label);
    // onSearchChange(searchData);
    const data = await axios.post(
      "http://localhost:5000/getCityinfo",
      searchData
    );
  };

  return (
    <>
      <AsyncPaginate
        placeholder="Enter the city"
        value={search}
        debounceTimeout={600}
        onChange={handleChange}
        loadOptions={loadOptions}
      />
    </>
  );
};

export default Search;
