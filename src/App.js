// imports
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// components
import PageOne from './pages/PageOne'
import PageTwo from './pages/PageTwo'

function App() {
  return (
    <div className='active'>
      <Router>   
        <Switch>
        <Route exact path='/'>
          <PageOne />
        </Route>
        <Route path='/pageTwo'>
          <PageTwo />
        </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
