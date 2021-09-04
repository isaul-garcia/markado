import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Navbar, Footer} from './components';
import { Home, Inmobiliaria, Transportacion, Articulos, Muebles, SinglePost } from './pages';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Inmobiliaria" exact component={Inmobiliaria} /> 
        <Route path="/Transportacion" exact component={Transportacion} /> 
        <Route path="/Articulos" exact component={Articulos} /> 
        <Route path="/Muebles" exact component={Muebles} />  
        <Route path="/Post" exact component={SinglePost} />   
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
