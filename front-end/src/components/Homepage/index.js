import CategoryBar from "../Category Bar";
import Callapsible from "../Collapsible";
import "./index.css";

export default function Homepage({
  categories,
  activeCategory,
  handleToggle,
  activeContent,
  activePage,
}) {
  if (activePage === "Homepage") {
    return (
      <div className="home-container">
        <div className="header">
          <h1>School of Code Revision</h1>
          <p>
            View the links below to external resources, submit your own links{" "}
            <br></br>or switch over to the "search" tab to find some specific
            code snippets.
          </p>
        </div>
        {/* <Navbar /> */}
        <CategoryBar
          categories={categories}
          activeCategory={activeCategory}
          handleToggle={handleToggle}
        />
        <Callapsible resourceLinks={activeContent} />
      </div>
    );
  }
  return <></>;
}
