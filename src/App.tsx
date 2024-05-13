import { Route, Routes } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { HomePage } from './pages';

function App() {
  return (
    <div className='h-screen bg-black text-white'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
