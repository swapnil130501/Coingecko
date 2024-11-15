import axiosInstance from '../utils/axiosInstance';

export async function fetchCoinData() {
    try {
        const response = await axiosInstance.get('/coins/markets?vs_currency=usd');
        console.log(response.data);
        return response;
    } catch (error) {
        console.log(error);
        return null;
    }
}