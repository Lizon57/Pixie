import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { AppHeader } from './cmps/AppHeader';
import { HomePage } from './pages/HomePage';
import { Editor } from './pages/Editor';
import { Profile } from './pages/Profile';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { About } from './pages/About';
// import { AppFooter } from './cmps/AppFooter';

export function App() {
  return (
    <section className="app">
      <Router>
        <AppHeader />
        <main>
          <Switch>
            <Route path="/editor" component={Editor} />
            <Route exact path="/profile/login" component={Login} />
            <Route exact path="/profile/signup" component={SignUp} />
            <Route exact path="/profile/:userId" component={Profile} />
            <Route exact path="/about" component={About} />
            <Route exact path="/" component={HomePage} />
          </Switch>
        </main>
        {/* <AppFooter /> */}
      </Router>
    </section>
  );
}