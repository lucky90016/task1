
import './App.css';
import Navbar from './NavBarComponent/Navbar';
import Footer from './FooterComponent/Footer';
import Register from './RegisterCompoent/Register';
import Read from './ReadComponent/Read';
import Edit from './EditComponent/Edit';
import Home from './home'
import Login from './LoginComponet/Login';

import { Routes ,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Navbar/>
      
      <Routes>
      <Route path='/' element ={<Read/>} ></Route> 
      <Route path='/' element ={<Home/>} ></Route> 

      <Route path='/ragister' element ={<Register/>}></Route> 
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/edit' element ={<Edit/>}></Route> 
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;