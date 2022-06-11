import React  from 'react';
import './App.css';
import NavBar from './components/nav-bar/index.js';
import 'h8k-components';
import Home from './pages/Home.js'
import News from './pages/News.js'
import Contact from './pages/Contact.js'
import About from './pages/About.js'

const title = "Navigation Bar";

function App() {
  let component
  //console.log(window)
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/news":
      component = <News />
      break
      case "/contact":
        component = <Contact />
      break
      case "/about":
        component = <About />
        break
  }
  return (
    <div>
      <h8k-navbar header={title} />
      <NavBar component={component}/>
    </div>
  );
}

export default App;
