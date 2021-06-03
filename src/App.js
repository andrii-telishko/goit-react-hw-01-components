import React from "react";
import Profile from "./components/Profile/Profile"
import user from "./json/user.json"
import Statistics from "./components/Statistics/Statistics"
import statistic from "./json/statistical-data.json"
import FriendsList from "./components/FriendsList/FriendsList"
import friends from "./json/friends.json"
import transactions from "./json/transactions.json"
import TransactionsHistory from "./components/TransactionHistory/TransactionsHistory"
import Conteiner from "./components/Contiener/Conteiner"

function App() {
  return (
    <>
      <h1>Homework 1</h1>
      <Conteiner>
         <Profile
            name={user.name}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats} />
         <Statistics
           title='Upload stats'
           stats = {statistic} />
         <FriendsList friends={friends} />
         <TransactionsHistory transactions={transactions} />
      </Conteiner>
    </>
    );
};

export default App;
