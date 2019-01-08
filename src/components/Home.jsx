import React from "react";
import { Redirect } from "react-router-dom";

const currentDate = new Date();

// Redirects user to the current date's route
const Home = () => {
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getYear() + 1900;

    return (
        <div>
            <Redirect to={`/calendar/${year}/${month}`} />
        </div>
    );
};

export default Home;
