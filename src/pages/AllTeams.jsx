import React, { useState, useEffect } from 'react';
import Header from '../Header';
import AllTeamCard from './AllTeamCard';
import { API_URL } from '../Data';

const AllTeams = () => {
    const [teams, setTeams] = useState([]);
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                let response = await fetch(`${API_URL}/api/players`);
                const playerData = await response.json();
                setPlayers(playerData);

                response = await fetch(`${API_URL}/api/teams`);
                const data = await response.json();
                setTeams(data);
            } catch (error) {
                console.error('Error fetching teams:', error);
            } finally {
                setLoading(false); // Set loading to false once data is fetched
            }
        };

        fetchTeams();
    }, []);

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-500 p-6">
                <div className="container mx-auto py-10 px-4">
                    <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800">
                        All Fantasy Teams
                    </h1>

                    <div className="flex flex-wrap justify-evenly gap-6">
                        {/* Show skeleton loading placeholders when data is loading */}
                        {loading
                            ? Array(4).fill(0).map((_, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 w-80 h-40 rounded-lg shadow-lg animate-pulse"
                                >
                                    <div className="h-8 bg-gray-300 rounded mb-4"></div>
                                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                                </div>
                            ))
                            : teams.length !== 0 &&
                            teams.map((elm) => (
                                <AllTeamCard
                                    key={elm._id}
                                    team={elm}
                                    players={players}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllTeams;
