import axios from "axios";

export async function fetchCars() {
    try {
        const response = await axios.get("http://127.0.0.1:5550/detail")
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function saveCars(carData) {
    try {
        const response = await axios.post("http://127.0.0.1:5550/enter", carData)
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export async function deleteCar(model){
    try {
        const response = await axios.delete(`http://127.0.0.1:5550/delete/${model}`)
        return response.data;
    } catch (error) {
        console.log(error)
    } }

export async function fetchCarByModel(model){
    try {
        const response = await axios.get(`http://127.0.0.1:5550/detail/${model}`)
        return response.data;
    } catch (error) {
        console.log(error);
    } }

export async function updateCarByModel(updateData,model){
    try {
        const response = await axios.put(`http://127.0.0.1:5550/puts/${model}`,updateData)
        return response.data;
    } catch (error) {
        console.log(error);
    } }

    
export async function registerdata(LoginData) {
    try {
        const response = await axios.post("http://127.0.0.1:5550/register", LoginData)
        return response.data;
    } catch (error) {
        console.log(error)
    }
}
export async function logindata(username,pwd){
    try {
        const response = await axios.get(`http://127.0.0.1:5550/login/${username}/${pwd}`)
        return response.data;
    } catch (error) {
        console.log(error);
    } }

