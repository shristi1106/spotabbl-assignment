import React from "react";
import css from "./App.css"

const Header = () => {
  return (
    <div className="ui menu">
      <div className="ui container center">
        <img className="img" src="https://media-exp1.licdn.com/dms/image/C560BAQHKJ7bgUY5kjA/company-logo_200_200/0/1615143047817?e=2147483647&v=beta&t=QvGVaP8GxB8aHUb9Y887DfWNwXOQZZVjCaQAALUjo2c" height="90px" width="90px"/>
        <div className="headings">
        <h2 className="heading1">YOUR SPOTABBL TEAM</h2><br/>
        <p className="para">Spotabbl supports you all throughout</p>
        {/* <h2 className="heading2">Contact Manager</h2> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
