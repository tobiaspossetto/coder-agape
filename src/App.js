
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from './Components/menu/Menu'
import Home from './Components/pages/home/Home'

import Carrito from './Components/cart/Carrito';
import Accesorios from './Components/pages/Accesorios';
import Ropa from './Components/pages/Ropa';

import Footer from './Components/footer/Footer'
require('./app.css')
function App() {
  return (
    <div className="App">

      {/* basename={process.env.PUBLIC_URL} es para subir a gh-pages, lo saco para desarrollar */}
      <Router basename={process.env.PUBLIC_URL}>
         <Menu></Menu>

         <Switch>
           
            <Route   path="/" exact component={Home}/>
            <Route   path="/carrito" component={Carrito}/>
            <Route   path="/accesorios" component={Accesorios}/>
            <Route   path="/ropa" component={Ropa}/>
            
         </Switch>

         <Footer></Footer>

      </Router>
    </div>
  );
}

export default App;
