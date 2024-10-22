import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { TextField, Select, MenuItem, FormControl, InputLabel, Checkbox, ListItemText } from '@mui/material';
import Header from './Header';
import { API_URL } from './Data';
import Spinner from './pages/Spinner';

const TeamCreationForm = () => {
  const [loading, setLoading] = useState(false)
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const navigate = useNavigate();

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

  const formik = useFormik({
    initialValues: {
      teamName: '',
      players: [],
    },
    validationSchema: Yup.object({
      teamName: Yup.string().required('Team name is required'),
      players: Yup.array().min(1, 'At least one player is required').max(11, 'Maximum of 11 players allowed'),
    }),
    onSubmit: async (values) => {
      try {
        setLoading(true)
        if (selectedPlayers.length != 11) {
          return alert("Please select 11 players");
        }
        const res = await fetch(`${API_URL}/api/teams`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            teamName: values.teamName,
            players: selectedPlayers
          })
        })

        const data = await res.json()
        // console.log(data);


        navigate('/team-details', { state: { teamName: values.teamName, players: selectedPlayers } });
        // console.log(values, selectedPlayers)
      } catch (error) {
        console.error('Error navigating to team details:', error);
      }
      finally { setLoading(false) }
    },
  });

  const handlePlayerSelect = (event) => {
    const value = event.target.value;
    console.log(event.target.value)
    setSelectedPlayers(value);
    formik.setFieldValue('players', value);
  };

  // const submitdata = () => {
  //   // console.log(selectedPlayers)

  // }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-500">
      <Header />
      <div className="container mx-auto py-10 px-4">
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white shadow-2xl rounded-xl p-8 max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-extrabold mb-6 text-center text-blue-700">
            Create Your Fantasy Team
          </h1>

          {/* Team Name Input */}
          <TextField
            label="Team Name"
            variant="outlined"
            fullWidth
            margin="normal"
            {...formik.getFieldProps('teamName')}
            error={formik.touched.teamName && Boolean(formik.errors.teamName)}
            helperText={formik.touched.teamName && formik.errors.teamName}
            className="mb-6"
          />

          {/* Player Selection */}
          <FormControl fullWidth margin="normal" className="mb-6">
            <InputLabel>Players</InputLabel>
            <Select
              multiple
              value={selectedPlayers}
              onChange={handlePlayerSelect}
              renderValue={(selected) => selected.map((id) => players.find((p) => p._id === id)?.name).join(', ')}
              className="bg-white"
            >
              {players.map((player) => (
                <MenuItem key={player._id} value={player._id}>
                  <Checkbox checked={selectedPlayers.indexOf(player._id) > -1} />
                  <ListItemText
                    primary={`${player.name} (${player.position})`}
                    secondary={`Team: ${player.team}, Points: ${player.points}, Matches: ${player.matches}`}
                  />
                </MenuItem>
              ))}
            </Select>
            {formik.touched.players && formik.errors.players && (
              <p className="text-red-500 text-sm mt-2">{formik.errors.players}</p>
            )}
          </FormControl>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={formik.errors.players || formik.values.players.length === 0 || loading}
          >
            {loading ? (
              <div className="flex justify-center items-center">
                <Spinner size="w-6 h-6" /> {/* Spinner inside the button */}
              </div>
            ) : (
              'Create Team' // Default text when not loading
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TeamCreationForm;
