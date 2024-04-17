import axios from "axios";
import news from "../data/news.json"
const BASE_URL = 'http://localhost/api'

export const getNews = () => {
  const response = news;
  return response.data;
}

export const getPromotions = async () => {
  const response = await axios.get(`${BASE_URL}/promotions`);
  return response.data;
}

export const getNewsById = async (id) => {
  const response = await axios.get(`${BASE_URL}/news/${id}`);
  return response.data;
}