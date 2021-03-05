import Navbar from './components/website/Navbar';
import Home from './components/website/Home';
import NotFound from './components/website/NotFound';

import BlogCreate from './components/blog/BlogCreate';
import BlogDetails from './components/blog/BlogDetails';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/create"><BlogCreate /></Route>
            <Route path="/blogs/:id"><BlogDetails /></Route>
            <Route path="*"><NotFound /></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;