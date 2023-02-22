import Login from "./login";
import PasswordPage from "./passPage";
import {AnimatePresence} from "framer-motion"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    
    <BrowserRouter>
    <AnimatePresence exitBeforeEnter>
      <Routes>
        <Route  path="react-app"  element={<Login />}/>
        <Route  path="pwd"  element={<PasswordPage />}/>
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
    
   
    
  );
}

export default App;
