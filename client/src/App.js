import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import ChatPage from "./components/ChatPage";
import socketIO from "socket.io-client"
import { Chessboard } from 'react-chessboard';
import './App.css';
import '../src/assets/login.css'
import LogIn from "./components/loginpage";
import jQuery from "jquery";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';



const httpLink = createHttpLink({
  uri: '/graphql',
});


const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



const socket = socketIO.connect("http://localhost:3000")
function App() {
  return (

    <ApolloProvider client={client}>
    <BrowserRouter>
        <div>
          <Routes>
         
            <Route path="/chess" element={<Chessboard className = "board"/>}></Route>
            <Route path="/" element={<Home socket={socket}/>}></Route>
            <Route path="/login" element={<LogIn socket={socket} jQuery/>}></Route>
            <Route path="/chat" element={<ChatPage socket={socket}/>}></Route>
          </Routes>
    </div>
    </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
