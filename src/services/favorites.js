import api from "./apiConfig";

export const getFavDrinks = async () => {
  try {
    const response = await api.get("/drinks/favorites");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createFavDrink = async (drink) => {
  try {
    const response = await api.post("/drinks/favorites", drink);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateFavDrink = async (id, drink) => {
  try {
    const response = await api.put(`/drinks/favorites/${id}`, drink);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteFavDrink = async (id) => {
  try {
    const response = await api.delete(`/drinks/favorites/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
