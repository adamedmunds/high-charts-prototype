import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import { ChartComponent } from './Charts/Chart';
import { OldChart } from './Charts/ChartOld';
import { links } from './utils/links';

export const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={links.home}>Home</Link>
            </li>
            <li>
              <Link to={links.oldChart}>Old HighChart Chart</Link>
            </li>
            <li>
              <Link to={links.newChart}>New HighChart Chart</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path={links.home} element={<h1>Home Page</h1>}></Route>
          <Route path={links.oldChart} element={<OldChart />}></Route>
          <Route path={links.newChart} element={<ChartComponent />}></Route>
        </Routes>
      </div>
    </Router>
  );
};
