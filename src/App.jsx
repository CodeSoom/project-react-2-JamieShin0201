import React from 'react';

import UsersPage from './pages/UsersPage';
import RestaurantsPage from './pages/RestaurantsPage';
import VisitorCountsPage from './pages/VisitorCountsPage';

export default function App() {
  return (
    <div>
      <h1>Eatgo Admin</h1>
      <UsersPage />
      <RestaurantsPage />
      <VisitorCountsPage />
    </div>
  );
}
