import axios from "axios";

export function getUnavailableDates(month){
return axios.get(`${process.env.REACT_APP_BACKEND_URL}/unavailableDates/${month}`)
}

