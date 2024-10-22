import React from 'react';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TeamCreationForm from './TeamCreationForm';
import TeamDetailsPage from './pages/TeamCreationPage';
import PlayerListPage from './pages/PlayerListPage';
import AllTeams from './pages/AllTeams';



const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/create-team',
    element: <TeamCreationForm />,
  },
  {
    path: '/players',
    element: <PlayerListPage />,
  },
  {
    path: '/team-details',
    element: <TeamDetailsPage />,
  },
  {
    path: '/all-teams',
    element: <AllTeams />
  }
]);

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="min-h-screen">

        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App;
