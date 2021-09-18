import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import DatePicker from '../components/Calender';
import Loader from '../components/Loader';
import * as services from '../services'

import '../App.css';
const Main = () => {
    const [unavailableDates, setUnavailablesDates] = useState([]);
    const [loading, setLoading] = useState(false)



    const getExludedDates = async () => {
        setLoading(true)
        try {
            setTimeout(async () => {
                const res = await services.getUnavailableDates();
                setUnavailablesDates(res.data)
                setLoading(false);
            }, 2000);
        } catch (error) {
            console.log("error", error.message);
            setLoading(false);
        }
    }
    useEffect(() => {
        async function fetchData() {
            await getExludedDates();
        }
        fetchData();
    }, [])

    return (
        <div>
            <Header/>
            <header className="container m-6 p-6">
                {loading && <Loader />} 
                <div className="container-sm m-6 p-6"><DatePicker unavailableDates={unavailableDates}/></div>
            </header>
        </div>
    );
}

export default Main;