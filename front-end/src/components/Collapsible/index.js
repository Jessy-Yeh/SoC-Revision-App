import "./index.css";

export default function Collapsible({ resourceLinks }) {
  return (
    <div className="links-container">
      {resourceLinks.map((resource) => (
        <a target="blank" href={resource.link} key={resource.link_id}>
          <p className="description">{resource.description}</p>
          <p className="contributor">{`⭐️ Contributor: ${resource.contributor}`}</p>
        </a>
      ))}
    </div>
  );
}
