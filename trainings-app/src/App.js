import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { useState } from "react";
import { IdContext, UserContext } from "./context/Context";
import CreateTraining from "./pages/CreateTraining";

const App = () => {
  const [isAdmin, setIsAdmin] = useState(0);
  const [id, setId] = useState(0);

  return (
    <UserContext.Provider value={[isAdmin, setIsAdmin]}>
      <IdContext.Provider value={[id, setId]}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/createTraining" element={<CreateTraining value={"Create new training"} />} />
        <Route path="/updateTraining" element={<CreateTraining value={"Update training"} /> }/>
        </Routes>
      </IdContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
