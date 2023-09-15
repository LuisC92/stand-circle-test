import "./StanceCircle.css";

function StanceCircle() {
  const element = {
    name: "TEST",
    type: "10",
    performance: "10",
    description: "testdescription",
  };
  return (
    <div>
      <div className="stance-circle">
        <svg width="70" height="70">
          <circle className="meter-1" cx="50" cy="50" r="40" />
          <text
            x="37%"
            y="60%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="#b7cb75"
          >
            {element.name}
          </text>
          {/* <text
            x="40%"
            y="80%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="#b7cb75"
          >
            {element.type}
          </text>  */}
        </svg>
        <div className="stance-bottom">
          <p className="stance-performance">
            Ø Wachstum:{String(element.performance).replaceAll(".", ",")} %
          </p>
        </div>
      </div>
      <div className="stance-circle">
        <svg width="70" height="70">
        <circle className="meter-1" cx="50" cy="50" r="40" />
          <text
            x="40%"
            y="70%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="#b7cb75"
          >
            {element.name}
          </text>
        </svg>
        <div className="stance-bottom">
          <p className="stance-performance">
            Ø Wachstum:{String(element.performance).replaceAll(".", ",")} %
          </p>
        </div>
      </div>
      <div className="stance-circle">
        <svg width="70" height="70">
        <circle className="meter-1" cx="50" cy="50" r="40" />
          <text
            x="40%"
            y="70%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="#b7cb75"
          >
            {element.name}
          </text>
        </svg>
        <div className="stance-bottom">
          <p className="stance-performance">
            Ø Wachstum:{String(element.performance).replaceAll(".", ",")} %
          </p>
        </div>
      </div>
      <p className="stance-description">{element.description}</p>
    </div>
  );
}
export default StanceCircle;
