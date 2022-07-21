import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  fetchAllCountries,
  fetchSearchCountries,
} from "../../Store/slices/countries";

function SearchCountries() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const IngresarCountries = (e) => {
    setSearch(e);
  };
  const Search_Countries = () => {
    if (search.length === 0) {
      dispatch(fetchAllCountries());
    } else {
      dispatch(fetchSearchCountries(search));
    }
  };

  return (
    <div>
      <input
        type="search"
        name=""
        id=""
        value={search}
        onChange={(e) => IngresarCountries(e.target.value)}
      />
      <button onClick={() => Search_Countries()}>Buscar</button>
      <button
        onClick={() => {
          setSearch("");
          dispatch(fetchAllCountries());
        }}
      >
        Resetear
      </button>
    </div>
  );
}

export default SearchCountries;
