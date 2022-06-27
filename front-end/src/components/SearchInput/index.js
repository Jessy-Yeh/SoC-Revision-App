// 3 inputs: ConfirmSearch button, RandomSearch button, SearchFieldInput
/*
State for Text (updated by User input in to text input)
    Set state [Text, setText]
    Create function to updateText
    Take in event
    Call setText with the value of the text input
Make a random call to the API
    Made an async function
    Variable to store response, use fetch to URL of API
    Unpack the JSON response
    Take in dispatch function as prop
    Use dispatch to update the State with the results
    Add function to onClick of Random button
Make a specific call for Search, using text input(state) and search button
    Make an async function
    Variable to store response, use fetch to URL of API 
    Unpack the JSON response
    Use dispatch to update the State with the results (by passing in object with type and payload)
    Add function to onClick of search button
*/

import React, { useState } from "react";
import "./SearchInput.css";

const snippetsURL = "http://localhost:5001/snippets";

export default function SearchInput({ dispatch }) {
  const [Text, setText] = useState("");
  function updateText(event) {
    setText(event.target.value);
    console.log(Text);
  }

  async function handleRandom() {
    //Make a random number
    const searchID = Math.floor(Math.random() * 6 + 1);
    //Pass in Random Number to get random snippet
    const response = await fetch(`${snippetsURL}/${searchID}`);
    const responseJSON = await response.json();
    dispatch({ type: "RANDOM_SNIPPET", payload: responseJSON.payload });
  }

  async function handleSearch() {
    const response = await fetch(
      `${snippetsURL}?category=${Text}`
    );
    const responseJSON = await response.json();
    dispatch({ type: "SEARCH_SNIPPET", payload: responseJSON.payload });
  }

  return (
    <React.Fragment>
      <input
        type="text"
        placeholder="Search by Category"
        onChange={updateText}
        id="search-bar"
      ></input>
      <br />
      <button onClick={handleSearch} className="search-btn" name="searchButton">
        Search
      </button>
      <button
        onClick={handleRandom}
        className="search-btn random-btn"
        name="randomButton"
      >
        Random
      </button>
    </React.Fragment>
  );
}
