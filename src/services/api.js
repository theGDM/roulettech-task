import axios from 'axios';
const baseURL = 'https://roulettech-service.onrender.com';
// import { toast } from 'react-toastify';

export const getAllRecipes = async () => {
    try {
        let response = await axios.get(`${baseURL}/api/recipes/`);
        return response;
    } catch (err) {
        console.log(err);
        // toast('Some error occured while getting the recipes!');
    }
}