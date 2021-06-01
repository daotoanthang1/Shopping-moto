import { Fragment } from 'react';
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.css';
import ConfirmBuyProduct from './Components/Body/ConfirmBuyProduct/ConfirmBuyProduct';
import DetailProduct from './Components/Body/DetailProduct/DetailProduct';
import FilterProduct from "./Components/Body/SearchedProduct/FilterProduct";
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import About from './Components/Header/Nav/NavList/About';
import Brand from './Components/Header/Nav/NavList/Brand';
import Contact from './Components/Header/Nav/NavList/Contact';
import Investor from './Components/Header/Nav/NavList/Investor';
import HomePages from './Components/Homepages/HomePages';
function App() {
  return (
    <Fragment>
      
      <div className="App" >
        <Router>
        <Header />
          <Switch>
            <Route path="/" exact component={HomePages} />
            <Route path="/navList/about" component={About} />
            <Route path="/navList/brand" component={Brand} />
            <Route path="/navList/investor" component={Investor} />
            <Route path="/navList/contact" component={Contact} />
            <Route path="/purchase-product" component={ConfirmBuyProduct} />
            <Route path="/filter-product" component={FilterProduct} />
            <Route path="/detail-product" component={DetailProduct} />
          </Switch>
          <Footer />
        </Router>
      </div>
      
    </Fragment>
  );
}

export default App;
