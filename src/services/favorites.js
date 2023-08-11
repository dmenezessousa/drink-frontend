import api from "./apiConfig";

export const getFavDrinks = async () => {
  try {
    const response = await api.get("/favorites");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createFavDrink = async (drink) => {
  try {
    const response = await api.post("/favorites", drink);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateFavDrink = async (id, drink) => {
  try {
    const response = await api.put(`/favorites/${id}`, drink);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteFavDrink = async (id) => {
  try {
    const response = await api.delete(`/favorites/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
