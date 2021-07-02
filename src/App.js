
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from './Components/Menu'
import Home from './pages/Home'
import Products from './pages/Products'
import Reports from './pages/Reports'
require("./App.css")
function App() {
  return (
    <div className="App">

      <Router>
         <Menu></Menu>

         <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/reports" component={Reports}/>
            <Route path="/products" component={Products}/>

            
         </Switch>

      </Router>
    </div>
  );
}

export default App;
