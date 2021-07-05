
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

      <Router>
         <Menu></Menu>

         <Switch>
           
            <Route  basename={process.env.PUBLIC_URL} path="/" exact component={Home}/>
            <Route  basename={process.env.PUBLIC_URL} path="/carrito" component={Carrito}/>
            <Route  basename={process.env.PUBLIC_URL} path="/accesorios" component={Accesorios}/>
            <Route  basename={process.env.PUBLIC_URL} path="/ropa" component={Ropa}/>
            
         </Switch>

         <Footer></Footer>

      </Router>
    </div>
  );
}

export default App;
