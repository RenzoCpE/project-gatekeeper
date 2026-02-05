import { useState } from "react";
import LoginForm from "./components/LoginForm";
import Dashboard from "./Dashboard";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="app">
      {isLoggedIn ? (
        <Dashboard />
      ) : (
        <LoginForm setIsLoggedIn={setIsLoggedIn} setError={setError} error={error} />
      )}
    </div>
  );
};

export default App;
