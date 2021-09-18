import axios from "axios";

export function getUnavailableDates(){
return axios.get(`${process.env.REACT_APP_BACKEND_URL}/unavailableDates`)
}

