import React from "react";

const AppContext = React.createContext({
  sideNav: false,
  UpdatesideNav: () => {},
});

export default AppContext;
