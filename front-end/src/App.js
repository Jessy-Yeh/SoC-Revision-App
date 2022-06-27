import "./App.css";

import { useState, useEffect } from "react";
import Homepage from "./components/Homepage";
import Searchpage from "./components/SearchPage";
import Submitpage from "./components/SubmitPage";
import Navbar from "./components/Navbar";

const linksURL = `http://localhost:5001/links`;

function App() {
  /*
  Start with empty array
  Make a call to the database to get the category column - use what's already coming in from useEffect?
  Check if category already exists in the array
  If not, immutably update the array with the category
  */
  const [categories, setCategories] = useState([]);
  //const categories = ["Array Methods", "React", "General", "Test"];
  const [activeCategory, setActiveCategory] = useState("Array Methods");
  const [activePage, setActivePage] = useState("Homepage");

  const [resourceLinks, setResourceLinks] = useState([]);

  const [FormReturnData, setFormReturnData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(linksURL);
      const responseJSON = await response.json();
      setResourceLinks(responseJSON.payload);
      //Create Categories from response data and pass it to the categories State
      const payloadArray = responseJSON.payload;
      let categoryArray = [];
      //console.log(payloadArray);
      for (let i = 0; i < payloadArray.length; i++) {
        //console.log(payloadArray[i].category);
        if (categoryArray.includes(payloadArray[i].category)) {
          categoryArray = categoryArray;
        } else {
          categoryArray.push(payloadArray[i].category);
        }
        setCategories(categoryArray);
        //console.log(categories);
      }
    }
    fetchData();
  }, [FormReturnData]);

  const handleToggle = (category) => {
    console.log(category);
    setActiveCategory(category);
  };

  const activeContent = resourceLinks.filter(
    (resource) => resource.category === activeCategory
  );

  return (
    <>
      <Navbar setActivePage={setActivePage} />
      <Homepage
        categories={categories}
        handleToggle={handleToggle}
        activeContent={activeContent}
        activePage={activePage}
        activeCategory={activeCategory}
      />
      <Searchpage activePage={activePage} />
      <Submitpage
        activePage={activePage}
        FormReturnData={FormReturnData}
        setFormReturnData={setFormReturnData}
        categories={categories}
      />
    </>
  );
}

export default App;
