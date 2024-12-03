import {Routes,Route} from "react-router-dom";
import './App.scss'
import Home from "./pages/home/Home.tsx";
import LoginPage from "./pages/auth/LoginPage.tsx";


function App() {

  return (
      <Routes>
          <Route index element={<Home/>}/>
          <Route path="/auth/login" element={<LoginPage/>}/>

      </Routes>
  )
}

export default App
