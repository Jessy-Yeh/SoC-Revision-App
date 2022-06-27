import "./index.css";

export default function CategoryBar({
  categories,
  activeCategory,
  handleToggle,
}) {
  return (
    <div>
      {categories.map((category) => (
        <button
          className={`category-btn ${
            category === activeCategory ? "active" : ""
          }`}
          onClick={() => {
            handleToggle(category);
          }}
          key={category}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
