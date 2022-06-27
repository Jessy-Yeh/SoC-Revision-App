import "./index.css";

export default function Navbar({ setActivePage }) {
  return (
    <nav>
      <div>
        <img
          src="soc-logo.png"
          alt="School of Code Logo"
          className="logo"
        ></img>
      </div>
      <div>
        <button onClick={() => setActivePage("Homepage")}>Home</button>
        <button onClick={() => setActivePage("Searchpage")}>Search</button>
        <button onClick={() => setActivePage("Submitpage")}>Submit</button>
      </div>
    </nav>
  );
}
