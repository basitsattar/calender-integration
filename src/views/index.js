import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import DatePicker from '../components/Calender';
import Loader from '../components/Loader';
import * as services from '../services'

import '../App.css';
const Main = () => {
    const [unavailableDates, setUnavailablesDates] = useState([]);
    const [loading, setLoading] = useState(false)



    const getExludedDates = async (month = new Date().getMonth()) => {
        setLoading(true)
        try {
            setTimeout(async () => {
                const res = await services.getUnavailableDates(month);
                setUnavailablesDates(res.data)
                setLoading(false);
            }, 2000);
        } catch (error) {
            console.log("error", error.message);
            setLoading(false);
        }
    }
    useEffect(async () => {
        await getExludedDates();
    }, [])

    return (
        <div>
            <Header />
            <header className="App-header">
                {loading && <Loader />}
                <div className="mt-5"><DatePicker unavailableDates={unavailableDates} getUnavailableDates={getExludedDates} /></div>
            </header>
        </div>
    );
}

export default Main;