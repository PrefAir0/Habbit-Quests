import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css'

import Home from "./pages/home/home";
import LogIn from "./pages/log-in/log-in";
import SignIn from "./pages/sign-in/sign-in";
import Tasks from "./pages/tasks/tasks"


function App() {

  return (
    <BrowserRouter>
      <nav>
        <div className="nav-left">
          <Link to="/"><img src="" alt="" /></Link>
          <Link to="/tasks">Дэшбоард</Link>
        </div>
        <div className="nav-right">
          <Link to="/signin">Ссылка на регистрацию</Link>
          <Link to="/login">Ссылка на вход</Link>          
        </div>
      </nav>
      <Routes>
        <Route path="/tasks" element={<Tasks/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/signin" element={<SignIn/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
