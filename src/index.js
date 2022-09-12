// bootstrap customization
import "./sass/all.sass";
import {
  ReactDOM,
  Router,
  Switch,
  Route,
  LegalNotices,
  WaysToWatch,
  Home,
  PROGRESS_X,
  ScrollTop,
  FAQ,
  History,
  Fragment,
} from "./Skelton/all.jsx";
ReactDOM.render(
  <Fragment>
    <ScrollTop />
    <History />
    <PROGRESS_X />
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/FAQ" component={FAQ} />
        <Route path="/Legal Notices" component={LegalNotices} />
        <Route path="/Ways to Watch" component={WaysToWatch} />
      </Switch>
    </Router>
  </Fragment>,
  document.getElementById("root")
);
