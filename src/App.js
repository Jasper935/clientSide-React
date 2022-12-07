

import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Reviews } from './pages/Reviews/Reviews';
// import { Registration } from './pages/Registration/Registration';
import { Login } from './pages/Login/Login';
// import { useSelector } from 'react-redux';
// import { getToken } from './redux/auth/auth-selectors';
//----------------------------------------

function App() {
//  const token =useSelector(getToken)



  return (
    <div className='containerApp'>
<Routes>
  <Route  path='clientSide-React' element={<Login/>}/>
  <Route  path='/reviews' element={<Reviews/>}/>
  
</Routes>
</div>  
  );
}

export default App;
