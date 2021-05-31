import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Editor } from './pages/Editor';
import { AppHeader } from './cmps/AppHeader';
import { Profile } from './pages/Profile';
import { Login } from './cmps/Login';
import { SignUp } from './cmps/SignUp';
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
            <Route exact path="/profile/:userId/" component={Profile} />
            <Route exact path="/" component={HomePage} />
          </Switch>
        </main>
        {/* <AppFooter /> */}
      </Router>
    </section>
  );
}