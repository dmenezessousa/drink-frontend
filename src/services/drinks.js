import api from "./apiConfig";

export const getDrinks = async () => {
  try {
    const response = await api.get("/drinks");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getDrink = async (id) => {
  try {
    const response = await api.get(`/drinks/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createDrink = async (drink) => {
  try {
    const response = await api.post("/drinks/create-drink", drink);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateDrink = async (id, drink) => {
  try {
    const response = await api.put(`/drinks/${id}`, drink);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteDrink = async (id) => {
  try {
    const response = await api.delete(`/drinks/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
