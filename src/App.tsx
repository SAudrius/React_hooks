import { Route, Routes } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { HomePage, HookUseEffectPage } from './pages';

function App() {
  return (
    <div className='h-screen bg-black text-white'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/' element={<HookUseEffectPage />} />
      </Routes>
    </div>
  );
}

export default App;
