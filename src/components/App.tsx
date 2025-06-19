import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { links } from './utils/links';

export const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {Object.keys(links).map((keyName) => {
              return (
                <li key={keyName}>
                  <Link to={links[keyName as keyof typeof links].link}>
                    {keyName}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Routes>
          {Object.keys(links).map((keyName) => {
            const link = links[keyName as keyof typeof links];
            const Component = link.component;
            return <Route path={link.link} element={<Component />} />;
          })}
        </Routes>
      </div>
    </Router>
  );
};
