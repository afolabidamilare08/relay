import React from "react";

const AppContext = React.createContext({
  sideNav: false,
  UpdatesideNav: () => {},
  enableWeb3: () => {},
  isWeb3Enabled: false,
  user_account: false,
  displayAccount: false
});

export default AppContext;
