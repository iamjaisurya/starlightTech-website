import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Contact from './pages/Contact';
import StarField from './components/StarField';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'solutions':
        return <Solutions />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white relative overflow-hidden">
      <StarField />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="relative z-10">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;