import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/",
}); // can set a base url here

export const addNewRoom = (data) => API.post("/rooms/create", data);
export const deleteRoom = (id) => API.post(`/rooms/delete`, id);
export const fetchRoom = (url) => API.get(`/rooms/get/${url}`);
export const fetchRooms = () => API.get("/rooms");
export const fetchAvailableRooms = (data) =>
  API.post("/bookings/available", data);
export const fetchAllBookings = () => API.get("/bookings");
export const fetchExistingBooking = (data) => API.post("/bookings/get", data);
export const createBooking = (data) => API.post("/bookings/create", data);
export const deleteBooking = (data) => API.post("/bookings/delete", data);
export const signin = (data) => API.post("/auth", data);
export const createPayment = (data) => API.post("/payment/add",data);


