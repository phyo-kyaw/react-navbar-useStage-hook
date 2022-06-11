import React, { useState }  from "react";
import "./index.css";

export default function NavBar({component}) {
  //console.log(component)

  const [pageTag, setPageTag] = useState("HOME PAGE");

  return (
    <div className="layout-column justify-content-center align-items-center">
      <div className="links layout-row justify-content-around align-items-center mt-20 links"
           data-testid="navigation-tabs">
          {/* <a href="/" onClick={() => setPageTag("HOME PAGE")} >Home</a>
          <a href="/news" onClick={() => setPageTag("News PAGE")}>News</a>
          <a href="/contact" onClick={() => setPageTag("CONTACT PAGE")}>Contact</a>
          <a href="/about" onClick={() => setPageTag("ABOUT PAGE")}>About</a> */}
          <a onClick={() => setPageTag("HOME PAGE")} >Home</a>
          <a onClick={() => setPageTag("NEWS PAGE")}>News</a>
          <a onClick={() => setPageTag("CONTACT PAGE")}>Contact</a>
          <a onClick={() => setPageTag("ABOUT PAGE")}>About</a>      </div>

      <div className="card w-20 ma-0">
        <section className="card-text" data-testid="tab-content">
          <span>{pageTag}</span>
        </section>
      </div>
    </div>
  );
}