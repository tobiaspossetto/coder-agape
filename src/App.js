import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import ItemListContainer from './components/Pages/ItemListContainer'
require("./App.css")
function App() {
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer/>
        <Footer/>
    </div>
  );
}

export default App;
