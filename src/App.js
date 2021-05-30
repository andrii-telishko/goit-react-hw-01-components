import React from "react";
import Profile from "./components/Profile/Profile"
import user from "./json/user.json"

function App() {
  return (
    <Profile user={ user }/>
  );
}

export default App;
