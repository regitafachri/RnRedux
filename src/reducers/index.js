import { combineReducers } from "redux";
import { PENDING, FULFILLED, REJECTED } from "redux-promise-middleware";
import {
  FETCH_DATA,
  INPUT_NAME,
  ANIMAL,
  REGISTER,
  DATA_SWARS
} from "../actions/index";

// to do list
//1. import action
//2. create reducer
//3. combine all the reducer

export const DataSw = (
  state = {
    isFetching: false,
    item: {},
    massage: ""
  },
  action
) => {
  switch (action.type) {
    case `${DATA_SWARS}_PENDING`:
      return {
        ...state,
        isFetching: true
      };
    case `${DATA_SWARS}_FULFILLED`:
      return {
        ...state,
        isFetching: false,
        item: action.payload
      };
    case `${DATA_SWARS}_REJECTED`:
      return {
        ...state,
        isFetching: false,
        massage: "Error"
      };
    default:
      return state;
  }
};

export const data = (
  state = {
    items: ""
  },
  action
) => {
  switch (action.type) {
    case `${FETCH_DATA}`:
      return {
        ...state,
        items: "This is data from redux"
      };

    default:
      return state;
  }
};

export const input_dari_user = (
  state = {
    input_from_user: ""
  },
  action
) => {
  switch (action.type) {
    case `${INPUT_NAME}`:
      return {
        ...state,
        input_from_user: action.payload
      };
    default:
      return state;
  }
};

export const animal = (
  state = {
    nama_animal: "",
    english_version: ""
  },
  action
) => {
  switch (action.type) {
    case `${ANIMAL}`:
      return {
        ...state,
        nama_animal: action.payload.name,
        english_version: action.payload.english_version
      };
    default:
      return state;
  }
};

export const register = (
  state = {
    name: "",
    gender: "",
    birth_place: "",
    city: "",
    phone: ""
  },
  action
) => {
  switch (action.type) {
    case `${REGISTER}`:
      return {
        ...state, // nambahin atau ganti
        name: action.payload.name,
        gender: action.payload.gender,
        birth_place: action.payload.bp,
        city: action.payload.city,
        phone: action.payload.phone
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  data,
  input_dari_user,
  animal,
  register,
  DataSw
});

export default rootReducer;

//pengertian
// "ANIMAL" dia ambil isi nya (liat file action)
// `${ANIMAL}` dia nge refer ke nama variable , tapi lebih baik pake ini YAAAA!
