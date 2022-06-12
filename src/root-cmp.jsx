import { Routes, Route } from 'react-router-dom'

// Routes
import routes from './routes.js';

// cmps
import { AppHeader } from './cmps/app-header.jsx'

export function RootCmp() {
  return (
    <div className="App">
      <AppHeader />
      <main>
        {/* <Routes>
          {routes.map(route => (
            <Route key={route.path} element={route.element} path={route.path}/>
          ))}
        </Routes> */}
      </main>
    </div>
  );
}

