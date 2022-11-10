import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import { BrowserRouter as Router, Routes,Route,Navigate } from 'react-router-dom';
import { useAuthContext } from './Hooks/useAuthContext';
import './App.css';

function App() {
  const {user,authIsReady}= useAuthContext();
  return (
    <>
    {authIsReady && (
      <Router>
    <div className="App">
    <Navbar/>
    <div className='content'>
    <Routes>
    <Route exact path="/" 
    element={user? <Home/> : <Navigate replace to="/login"/>}
    ></Route>
    <Route exact path="/login" element={!user ? <Login/> : <Navigate replace to="/"/>}></Route>
    <Route exact path="/signup" element={!user ? <Signup/> : <Navigate replace to="/"/>}></Route>
    </Routes>
    </div>
    </div>
    </Router>
    )}
    </>
  );
}

export default App;
