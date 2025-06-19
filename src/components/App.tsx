import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import { ChartComponent } from './Charts/Chart';
import { OldChart } from './Charts/ChartOld';
import { links } from './utils/links';
import { ScatterChart } from './Charts/ScatterChart';

export const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {Object.keys(links).map((keyName) => {
              return (
                <li key={keyName}>
                  <Link to={links[keyName as keyof typeof links]}>
                    {keyName}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Routes>
          <Route path={links.oldChart} element={<OldChart />}></Route>
          <Route path={links.home} element={<ChartComponent />}></Route>
          <Route path={links.scatter} element={<ScatterChart />}></Route>
        </Routes>
      </div>
    </Router>
  );
};
