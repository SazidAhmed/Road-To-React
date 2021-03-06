
import "../node_modules/materialize-css/dist/css/materialize.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/website/Navbar';
import Home from './components/website/Home';
import NotFound from './components/website/NotFound';

import ContactCreate from './components/contacts/ContactCreate';
import ContactEdit from './components/contacts/ContactEdit';
import ContactDetails from './components/contacts/ContactDetails';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/contact/create"><ContactCreate /></Route>
            <Route path="/contact/edit/:id"><ContactEdit /></Route>
            <Route path="/contact/details/:id"><ContactDetails /></Route>
            <Route path="*"><NotFound /></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;