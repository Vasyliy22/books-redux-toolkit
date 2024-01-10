import { extendApiEndPoint } from "./utils";
import { COUNT_PER_PAGE } from '../constants/api';

const API = 'https://www.googleapis.com/books/v1/volumes?q=time&printType=books&maxResults=';
const API_KEY = 'AIzaSyBBA37PHb5UjrZfGBvNsHUF8xct7TRybJ8';

export const getEndPoint = (count: number) => {
  return API + count;
};

export const getBooks = async (queries: Record<string, string> = {}, count = COUNT_PER_PAGE) => {
  const response = await fetch(`${getEndPoint(count)}${extendApiEndPoint(queries)}&key=${API_KEY}`);

  return response.json();
};
