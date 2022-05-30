import "./App.css";
import { ReactQueryDevtools } from "react-query/devtools";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import SuperHeroesPage from "./components/SuperHeroesPage";
import RQSuperHeroesPage from "./components/RQSuperHeroesPage";
import RQSuperHeroPage from "./components/RQSuperHeroPage";
import ParallelQueriesPage from "./components/ParallelQueriesPage";
import DynamicParallelPage from "./components/DynamicParallelPage";
import DependentQueries from "./components/DependentQueries";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/super-heroes">Traditional Super Heroes</Link>
          </li>
          <li>
            <Link to="/rq-super-heroes">RQ Super Heroes</Link>
          </li>
          <li>
            <Link to="/rq-parallel">RQ Parallel Queriess</Link>
          </li>
          <li>
            <Link to="/dynamic-parallel">Dynamic Parallel</Link>
          </li>
          <li>
            <Link to="/dependent-queries">Dependent Queries</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="super-heroes" element={<SuperHeroesPage />} />
        <Route path="rq-super-heroes" element={<RQSuperHeroesPage />} />
        <Route path="rq-super-heroes/:heroId" element={<RQSuperHeroPage />} />
        <Route path="rq-parallel" element={<ParallelQueriesPage />} />
        <Route
          path="dynamic-parallel"
          element={<DynamicParallelPage heroIds={[1, 3]} />}
        />
        <Route
          path="dependent-queries"
          element={<DependentQueries email="vishwas@example.com" />}
        />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default App;
