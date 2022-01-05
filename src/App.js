
import './App.css';
import NavBar from './navbar';
import Home from './home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
function App() {

  var title="Welcome to new blog";
  var likes=30;
  return (
    <Router>
    <div className="App">
      <NavBar />
      <div className="component">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
