import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import Authentication from './Components/Authentication/Authentication';
//yapacağım sitede eğer onaylanırsak anasayfaya gideceğiz onaylanmazsa giriş sayfasına gideceğiz authentication sayfası oradan geliyor.
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={true?<HomePage />:<Authentication/>} />  
      </Routes>
    </div>
  );
}

export default App;
