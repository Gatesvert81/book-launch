import React from "react";
import Context from "./Context";
import Navigation from "./Navigation";

function Layout({ children }) {
  return (
    <Context>
      <Navigation />
      {children}
    </Context>
  );
}

export default Layout;
