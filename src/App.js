import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Main from './Pages/Main'
import Show from './Pages/Show'
import UsersChoice from './Pages/postChoice'
import Register from './Pages/Register'
import Post from './Pages/Post'
import Cancel from './Pages/Cancel'
import Success from './Pages/Success'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product/:id" element={<Show />} />
        <Route path="/postchoice" element={<UsersChoice />} />
        <Route path="/register" element={<Register />} />
        <Route path="/post" element={<Post />} />
        <Route path="/payment/cancel" element={<Cancel />} />
        <Route path="/payment/Success/:html/:css/:js" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
