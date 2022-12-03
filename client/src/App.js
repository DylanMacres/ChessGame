import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import ChatPage from "./components/ChatPage";
import socketIO from "socket.io-client"
import { Chessboard } from 'react-chessboard';
import './App.css';

import HomePage from "./components/Home"

const socket = socketIO.connect("http://localhost:3000")
function App() {
  return (
    <BrowserRouter>
        <div>
          <Routes>
            <Route path="/homepage"  element={<HomePage socket={socket}/>}></Route>
            <Route path="/chess" element={<Chessboard className = "board"/>}></Route>
            <Route path="/" element={<Home socket={socket}/>}></Route>
            <Route path="/chat" element={<ChatPage socket={socket}/>}></Route>
          </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
