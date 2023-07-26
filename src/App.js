import './App.css';
import {Routes, Route,  } from 'react-router-dom';
import Layout from './Components/Layout';
import IndexPages from './Pages/IndexPages';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';

function App() {
  return (
 
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<IndexPages/>}/>
          <Route path={'/login'} element={<LoginPage/>} />
          <Route path={'/signup'} element={<SignupPage/>} />
        </Route>
      </Routes>
    
    );
  }
  
  export default App;
    
