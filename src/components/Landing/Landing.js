import React from "react";
import "./Landing.scss";
import { Link } from "react-router-dom";

class Marketing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="landing-container">
        <nav className="landing-navigation">
          <h1>diario</h1>
          <Link className="signing" to={`/login`}>
            <p>Sign Up/In</p>
          </Link>
        </nav>
        <div className="landing-content">
          <div className="title">
            <h2>A new kind of diary.</h2>
          </div>
          <div className="howitworks">
            <div className="attr">
              <h3>Private</h3>
            </div>
            <div className="attr">
              <h3>Simple</h3>
            </div>
            <div className="attr">
              <h3>Fun</h3>
            </div>
          </div>
          <button className="btn">Let's go!</button>
        </div>
      </div>
    );
  }
}

export default Marketing;