import api from "./apiConfig";

export const getDrinks = async () => {
  try {
    const response = await api.get("/drinks");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getDrink = async (_id) => {
  try {
    const response = await api.get(`/drinks/${_id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createDrink = async (drink) => {
  try {
    const response = await api.post("/drinks", drink);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateDrink = async (_id, drink) => {
  try {
    const response = await api.put(`/drinks/${_id}`, drink);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteDrink = async (_id) => {
  try {
    const response = await api.delete(`/drinks/${_id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
