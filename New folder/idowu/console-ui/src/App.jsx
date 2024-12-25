import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

const App = () => {
  const [activeSection, setActiveSection] = useState('All Products');
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-grow overflow-hidden">
        <Sidebar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <MainContent activeSection={activeSection} />
      </div>
    </div>
  );
};

export default App;