import axios from "axios";

const API = axios.create({
  baseURL: "https://ds-resort-sooriya-backend.herokuapp.com",
}); // can set a base url here

const Payement_API = axios.create({
  baseURL: "https://ds-resort-sooriya-payment.herokuapp.com",
});

const Taxi_API = axios.create({
  baseURL: "https://ds-resort-sooriya-taxi.herokuapp.com",
});

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
export const createPayment = (data) => Payement_API.post("/payment/add",data);
export const reserveTaxi = (data) => Taxi_API.post("/taxi/taxi_reserve",data);
export const travelerLogin = (data) => API.post("/traveler/login",data);
export const travelerRegister = (data) => API.post("/traveler/register",data);
