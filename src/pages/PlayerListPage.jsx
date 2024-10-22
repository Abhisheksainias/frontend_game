// // src/pages/PlayerListPage.jsx

// import React, { useEffect, useState } from 'react';
// import Header from '../Header';

// const PlayerListPage = () => {
//   const [players, setPlayers] = useState([]);

//   useEffect(() => {
//     const fetchPlayers = async () => {
//       try {
//         const response = await fetch('http://127.0.0.1:8888/api/players');
//         if (!response.ok) {
//           throw new Error('Failed to fetch players');
//         }
//         const data = await response.json();
//         setPlayers(data);
//       } catch (error) {
//         console.error('Error fetching players:', error);
//       }
//     };

//     fetchPlayers();
//   }, []);

//   return (
//     <div className="">
//       <Header/> 

//       <h1 className="text-2xl font-bold mb-4">Player List</h1>
//       <ul className="space-y-2 pt-3">
//         {players.map((player) => (
//           <li key={player._id} className="p-4 border rounded bg-gray-100">
//             <h2 className="text-lg font-semibold">{player.name}</h2>
//             <p>Position: {player.position}</p>
//             <p>Team: {player.team}</p>
//             <p>Points: {player.points}</p>
//             <p>Matches: {player.matches}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PlayerListPage;



// src/pages/PlayerListPage.jsx

import React, { useEffect, useState } from 'react';
import Header from '../Header';
import { API_URL } from '../Data';

const PlayerListPage = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch(`${API_URL}/api/players`);
        if (!response.ok) {
          throw new Error('Failed to fetch players');
        }
        const data = await response.json();
        setPlayers(data);
      } catch (error) {
        console.error('Error fetching players:', error);
      }
    };

    fetchPlayers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-500">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-extrabold text-white text-center mb-8">Player List</h1>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {players.map((player) => (
            <li key={player._id} className="bg-white rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{player.name}</h2>
              <p className="text-gray-600 text-sm">Position: <span className="font-medium">{player.position}</span></p>
              <p className="text-gray-600 text-sm">Team: <span className="font-medium">{player.team}</span></p>
              <p className="text-gray-600 text-sm">Points: <span className="font-medium">{player.points}</span></p>
              {/* <p className="text-gray-600 text-sm">Matches: <span className="font-medium">{player.matches}</span></p> */}


            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlayerListPage;
