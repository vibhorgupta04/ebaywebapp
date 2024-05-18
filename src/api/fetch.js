import axios, { AxiosResponse } from 'axios';

const FAKESTORE_API_URL = 'https://api.escuelajs.co/api/v1/';

export const fetchProducts = async () => {
    try {
    const { data } = await axios.get(`${FAKESTORE_API_URL}products`);
    return { data, error: false };
  } catch (error) {
    return { data: null, error: true };
  }
};


export const fetchCategories = async () => {
    try {
    const { data } = await axios.get(`${FAKESTORE_API_URL}categories`);
    return { data, error: false };
  } catch (error) {
    return { data: null, error: true };
  }
};

export const fetchCategoryProduct = async (id) => {
    try {
    const { data } = await axios.get(`${FAKESTORE_API_URL}products/?categoryId=${id}`);
    return { data, error: false };
  } catch (error) {
    return { data: null, error: true };
  }
};

export const fetchProductById = async (id) => {
    try {
    const { data } = await axios.get(`${FAKESTORE_API_URL}products/${id}`);
    return { data, error: false };
  } catch (error) {
    return { data: null, error: true };
  }
};

export const fetchProductByTitle = async (title) => {
    try {
    const { data } = await axios.get(`${FAKESTORE_API_URL}products/?title=${title}`);
    return { data, error: false };
  } catch (error) {
    return { data: null, error: true };
  }
};
