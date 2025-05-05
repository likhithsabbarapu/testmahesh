import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    projects: [
        { id: 1, title: "Task Manager App", desc: "Manage daily tasks with React & Firebase", category: "Web App" },
        { id: 2, title: "Weather App", desc: "Real-time weather updates using OpenWeather API", category: "API" },
        { id: 3, title: "E-commerce Site", desc: "Full stack e-commerce with Stripe payment", category: "Web App" }
    ],
    filter: "All"
};

const projectSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload;
        }
    }
});

export const { setFilter } = projectSlice.actions;
export default projectSlice.reducer;