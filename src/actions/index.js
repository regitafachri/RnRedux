import axios from 'axios'

export const FETCH_DATA = "FETCH_DATA";
export const fetchData = () => {
  return {
    type: FETCH_DATA
  };
};

// get name from input user
export const INPUT_NAME = "INPUT_NAME";
export const getInputName = name => {
  return {
    type: INPUT_NAME,
    payload: name
  };
};

export const ANIMAL = "ANIMAL";
export const animal = (name, english_version) => {
  const dataKu = {
    name,
    english_version
  };
  return {
    type: ANIMAL,
    payload: dataKu
  };
};

export const REGISTER = "REGISTER";
export const register = (name, gender, bp, city, phone) => {
  return {
    type: REGISTER,
    payload: { name, gender, bp, city, phone }
  };
};

export const DATA_SWARS = 'DATA_SWARS'
export const ambilDataSwars = () => {
  return{
    type:DATA_SWARS,
    payload: DataStarWars()
  }
}

const DataStarWars = () => {
  const url = 'https://swapi.co/api/people/1/'
  return axios.get(url)
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(error => {
      console.log(error)
    })
}