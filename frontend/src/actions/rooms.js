import { CREATE, FETCH_ROOMS, ROOM } from "../constants/actionTypes";
import * as api from "../api";

/* This is to grab all rooms from the db */
export const getAllRooms = () => async (dispatch) => {
  try {
    const { data } = await api.fetchRooms();
    dispatch({ type: FETCH_ROOMS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

/* This is to grab & display a single room on the client side */
export const getRoom = (url) => async (dispatch) => {
  try {
    const { data } = await api.fetchRoom(url);
    console.log(data);
    dispatch({ type: ROOM, payload: data });
  } catch (error) {
    console.log(error);
  }
};

/* This is to add a new room to the db */
export const postRoom = (details) => async (dispatch) => {
  try {
    const newRoom = {
      formdata: details.formData,
      selectedAmenities: details.selectedAmenities
    };

    console.log("Frontend actions")
    console.log(newRoom)

    const { data } = await api.addNewRoom(newRoom);
    dispatch({ type: CREATE, payload: data })

  } catch (error) {
    console.log(error)
  }
};
