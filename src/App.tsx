import React from "react";
import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import TextInput from "./ui/TextInput";
import SignUp from "./pages/signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUp size="S"></SignUp>} />
        {/* <Route path='/chat' element={<ChatPage socket={socket} />} /> */}
      </Routes>
    </div>
  );
}

export default App;
