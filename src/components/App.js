import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cart from './Cart';
import Home from './Home';
import NavbarComponent from './NavbarComponent';

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;
