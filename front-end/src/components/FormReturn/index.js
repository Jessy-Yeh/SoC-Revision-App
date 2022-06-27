import "./index.css";

export default function FormReturn({ FormReturnData }) {
  if (FormReturnData.length === 0) {
    return <></>;
  }

  return (
    <div className="submit-container">
      <div>
        <h4 className="submit-text">Last link submitted</h4>
      </div>

      <div className="form-return">
        <a
          target="blank"
          href={FormReturnData[0].link}
          key={FormReturnData[0].link_id}
        >
          <p className="description">{FormReturnData[0].description}</p>
          <p className="contributor">{`⭐️ Contributor: ${FormReturnData[0].contributor}`}</p>
        </a>
      </div>
    </div>
  );
}

/*
Take in formReturn as props and dynamically render:
Use link_id as key
*/
