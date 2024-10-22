import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function AllTeamCard({ team, players }) {
    // Filter players that belong to the current team
    const teamPlayers = players.filter((player) => team.players.includes(player._id));

    return (
        <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 duration-300 ease-in-out">
            <h2 className="text-2xl font-bold text-blue-600 mb-2">{team.teamName}</h2>
            <p className="mb-2 text-gray-600">Players:</p>
            <ul className="list-disc list-inside ml-5">
                {teamPlayers.length > 0 ? (
                    teamPlayers.map((player) => (
                        <li key={player._id} className="mb-1 text-gray-800">
                            <span className="font-semibold">{player.name}</span> ({player.position})
                        </li>
                    ))
                ) : (
                    <li className="text-gray-500">No players found.</li>
                )}
            </ul>
            <div className="mt-4">
            </div>
        </div>
    );
}

export default AllTeamCard;
