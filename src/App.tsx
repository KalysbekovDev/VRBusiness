import React from 'react';
import Header from "./components/header";
import Hero from "./components/hero";
import './styles/style.scss'
import Services from "./components/services";
import About from "./components/about";
import Team from "./components/team";
import Subscribe from "./components/subscribe";
import Footer from "./components/footer";
function App() {
  return (
      <div className='App'>
          <Header/>
          <Hero />
          <Services/>
          <About/>
          <Team/>
          <Subscribe/>
          <Footer/>
      </div>
  );
}

export default App;
