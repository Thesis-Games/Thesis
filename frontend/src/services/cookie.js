import axios from "axios";

export const getCookie = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/cookie", {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching cookies:", error);
    throw error;
  }
};
