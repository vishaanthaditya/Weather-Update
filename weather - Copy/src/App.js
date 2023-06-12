import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import SignUp from './components/Signup';
import Home from './components/Home';
import Weather from './components/Weather';
import EditDetails from './components/EditWeather';
import AddWeather from './components/Addweather';
import Search from './components/Search';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/Home" element={<Home/>} />
    <Route path="/getweather/:id" element={<EditDetails/>} />
    <Route path="/usersignup" element={<SignUp/>} />
    <Route path="/weatherlist" element={<Weather/>} />
    <Route path="/update" element={<AddWeather/>} />
   </Routes>
  );
}

export default App;
