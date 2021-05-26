import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarComponent from './NavbarComponent';
import { Suspense, lazy } from 'react';

const Home = lazy(() => import('./Home'));
const Cart = lazy(() => import('./Cart'));

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Suspense fallback={<div />}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
