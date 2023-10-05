import { Route, Routes } from 'react-router-dom';
import HeaderComponents from './components/headerComponents';
import './sass/main.scss';
import LandingPage from './pages/landingPage';

function App() {
  return (
    <div>

      <HeaderComponents/>

      <Routes>
        <Route path='/' element={ <LandingPage/> } />
      </Routes>

    </div>
  );
}

export default App;
