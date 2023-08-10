import api from "./apiConfig.js"

export const getDrinks = async () => {
  try {
    const response = await api.get("/drinks")
    console.log(response)
    return response.data
  } catch (error) {
    console.error("Error:", error)
  }
}

export const getDrink = async (id) => {
  try {
    const response = await api.get(`/drinks/${id}`)
    console.log(response)
    return response.data
  } catch (error) {
    console.error("Error: ", error)
  }
}

export const createDrink = async (drinkData) => {
  try {
    const response = await api.post("/drinks", drinkData)
    console.log(response)
    return response.data
  } catch (error) {
    console.error("Error: ", error)
  }
}

export const updateDrink = async (id, drinkData) => {
  try {
    const response = await api.put(`/drinks/${id}`, drinkData)
    console.log(response)
    return response.data
  } catch (error) {
    console.error("Error: ", error)
  }
}

export const deleteDrink = async (id) => {
  try {
    const response = await api.delete(`/drinks/${id}`)
    console.log(response)
    return response.data
  } catch (error) {
    console.error("Error: ", error)
  }
}