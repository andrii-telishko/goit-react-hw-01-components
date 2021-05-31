import React from "react";
import Profile from "./components/Profile/Profile"
import user from "./json/user.json"
import Statistics from "./components/Statistics/Statistics"
import statistic from "./json/statistical-data.json"

function App() {
  return (
    <>
    <Profile
      name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
      stats={user.stats} />
      <Statistics
        title={'Upload stats'}
        stats = {statistic}
      />
      </>
  );
}

export default App;
