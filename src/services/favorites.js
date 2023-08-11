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

export const updateFavDrink = async (_id, drink) => {
  try {
    const response = await api.put(`/favorites/${_id}`, drink);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteFavDrink = async (_id) => {
  try {
    const response = await api.delete(`/favorites/${_id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
