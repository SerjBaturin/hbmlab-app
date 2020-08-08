import React from "react";
import "./App.css";
import Users from "./components/Users";

// const user: User = { name: "John", sirname: "Doe", email: "jd@mail.com" };

const App: React.FC = () => {
  return (
    <div className="App">
      <Users />
    </div>
  );
};

export default App;
