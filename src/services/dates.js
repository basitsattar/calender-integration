import axios from "axios";

export function getUnavailableDates(month){
return axios.get(`http://localhost:3000/api/v1/unavailableDates/${month}`)
}

