// import React from 'react'
// import { Link } from 'react-router-dom'

// const Header = () => {
//   return (
//     <div>
//       <nav className="bg-gray-800 text-white p-4">
//         <div className="container mx-auto flex justify-between">
//           <Link to="/" className="font-bold text-lg">Fantasy Game</Link>
//           <div>
//             <Link to="/players" className="mr-4 hover:text-gray-300">Players</Link>
//             <Link to="/create-team" className="hover:text-gray-300">Create Team</Link>
//           </div>
//         </div>
//       </nav>
//     </div>
//   )
// }

// export default Header



import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center ps-4 pe-4">
          <Link to="/" className="font-extrabold text-2xl tracking-wide text-white hover:text-gray-200 ">
            Fantasy Game
          </Link>
          <div className="space-x-6">
            <Link
              to="/players"
              className="text-lg font-medium hover:text-gray-300 transition duration-200"
            >
              Players
            </Link>
            <Link
              to="/create-team"
              className="text-lg font-medium hover:text-gray-300 transition duration-200"
            >
              Create Team
            </Link>
            <Link
              to="/all-teams"
              className="text-lg font-medium hover:text-gray-300 transition duration-200"
            >
              All Teams
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
