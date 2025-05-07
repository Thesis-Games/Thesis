import axios from "axios";
export const verifyAccountService = async (token) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/verify/account/${token}`
    );

    console.log(token);

    return response.data;
  } catch (error) {
    throw error;
  }
};
