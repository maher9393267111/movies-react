import axios from 'axios';

const ApiUrl = 'http://localhost:5000/api/';


// Filmleri getir


export const getFilms = async () => {

    const response = await axios.get(ApiUrl + 'films/' + 'allfilms');
  if(response) {
    return response.data;
  }

    return null;
    



}


// film id ye göre film getir


export const getFilmById = async (id) => {


    const response = await axios.get(`${ApiUrl}films/film/${id}`);
  if(response) {
    return response.data;
  }

    return null;


}