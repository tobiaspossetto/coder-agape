
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from './Components/menu/Menu'
import Home from './Components/pages/Home'

import Carrito from './Components/pages/Carrito';
import Accesorios from './Components/pages/Accesorios';
import Ropa from './Components/pages/Ropa';
require('./app.css')
function App() {
  return (
    <div className="App">

      <Router>
         <Menu></Menu>

         <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/carrito" component={Carrito}/>
            <Route path="/accesorios" component={Accesorios}/>
            <Route path="/ropa" component={Ropa}/>
            
         </Switch>

      </Router>
    </div>
  );
}

export default App;
