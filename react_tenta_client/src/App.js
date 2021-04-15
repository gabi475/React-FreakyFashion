import { Route, Switch, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./components/pages/Home/Home";
import Products from "./components/pages/Products/Products";
import Categories from "./components/pages/Categories/Categories";
import Search from "./components/pages/Search/Search";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { categories } from "./util/constants";

const history = createBrowserHistory();

function App() {
  return (
    <div>
      <Router history={history}>
        <Header categories={categories} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products/:id" component={Products} />
          <Route path="/categories/:id" component={Categories} />
          <Route path="/search" component={Search} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
