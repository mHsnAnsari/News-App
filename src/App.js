import React from "react";
import  {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from "./components/dashboard";
import Login from "./components/Login/login";
import MiniDrawer from "./components/miniDrawer";

function App() {
  return (
    <Router>
      <Routes>
         <Route path="hello" element={ <MiniDrawer />} /> 
         <Route exact path="/*" element={< Dashboard/>}/>
         <Route path="login" element={ <Login />} />

      </Routes>
    </Router>
    
  );
}

export default App;
