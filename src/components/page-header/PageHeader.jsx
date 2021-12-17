import React from "react";
import bg from "../../assets/b1.jpg";
//import "./page-header.scss";

/* Show page title on top of page: Movies <-> TV Series */
const PageHeader = (props) => {
  return (
    <div className="page-header" style={{ backgroundImage: `url(${bg})` }}>
      <h2>{props.children}</h2>
    </div>
  );
};

export default PageHeader;
