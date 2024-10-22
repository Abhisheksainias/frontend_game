import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header';
import { API_URL } from '../Data';

const TeamDetailsPage = () => {
  const location = useLocation();
  const { teamName, players: playerIds } = location.state || { teamName: '', players: [] };
  const [players, setPlayers] = useState([]);

  // Fetch player details based on player IDs
  useEffect(() => {
    const fetchPlayerDetails = async () => {
      try {
        const response = await fetch(`${API_URL}/api/players`);
        if (!response.ok) {
          throw new Error('Failed to fetch players');
        }
        const allPlayers = await response.json();
        // Filter the players to only include those in the selected team
        const selectedPlayers = allPlayers.filter((player) => playerIds.includes(player._id));
        setPlayers(selectedPlayers);
      } catch (error) {
        console.error('Error fetching player details:', error);
      }
    };

    if (playerIds.length > 0) {
      fetchPlayerDetails();
    }
  }, [playerIds]);

  const totalPoints = players.reduce((sum, player) => sum + player.points, 0);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-500">
      <Header />
      <div className="container mx-auto py-10 px-4">
        <div className="bg-white shadow-2xl rounded-xl p-8 max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-6">{teamName}</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left mb-6">
            <p className="text-lg font-semibold text-gray-700">
              Total Players: <span className="text-blue-700">{players.length} / 11</span>
            </p>
            <p className="text-lg font-semibold text-gray-700">
              Total Points: <span className="text-green-600">{totalPoints}</span>
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">Team Players:</h2>
          <ul className="space-y-4">
            {players.map((player) => (
              <li
                key={player._id}
                className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{player.name}</h3>
                  <p className="text-gray-600">{player.position} - {player.team}</p>
                </div>
                <p className="text-green-600 font-bold">Points: {player.points}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeamDetailsPage;
