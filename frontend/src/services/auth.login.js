import axios from "axios";
const API = process.env.REACT_APP_API_URL || "http://localhost:5000/api";
export async function login(payload){ const {data}=await axios.post(`${API}/auth/login`, payload); return data; }
