import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { AppHeader } from './cmps/AppHeader';
import { HomePage } from './pages/HomePage';
import { Editor } from './pages/Editor';
import { Profile } from './pages/Profile';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { About } from './pages/About';
import { WebDetails } from './pages/WebDetails';
// import { AppFooter } from './cmps/AppFooter';

export function App() {
  return (
    <section className="app">
      <Router>
        <AppHeader />
        <main>
          <Switch>
            <Route path="/view/:webId" component={WebDetails} />
            <Route path="/profile/login" component={Login} />
            <Route path="/profile/signup" component={SignUp} />
            <Route path="/profile/:userId" component={Profile} />
            <Route path="/editor" component={Editor} />
            <Route path="/about" component={About} />
            <Route path="/" component={HomePage} />
          </Switch>
        </main>
        {/* <AppFooter /> */}
      </Router>
    </section>
  );
}