import SearchInput from "../SearchInput/index.js";
import ResultList from "../ResultList/index.js";
import { useReducer } from "react";
import "./SearchPage.css";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "RANDOM_SNIPPET":
      return action.payload;
    case "SEARCH_SNIPPET":
      return action.payload;
    default:
      console.log("Nothing changes!");
      return state;
  }
}

export default function Searchpage({ activePage }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  if (activePage === "Searchpage") {
    return (
      <div className="search-container">
        <div className="search-header">
          <h1>
            The <s>School</s> Search of Code
          </h1>
          <SearchInput dispatch={dispatch} />
        </div>
        <ResultList results={state} />
      </div>
    );
  }
  return <></>;
}

/*
Plan for State
Import useReducer
Set initialState
Create reducer function to return new state
Set State using [state, dispatch] syntax
Pass in reducer function and initialState
Pass down dispatch as prop to Search Input
*/
