import axios from "axios";
export const signinServices = async (data) => {
  try {
    const response = await axios.post(
      `http://localhost:3000/api/signin`,
      data,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const signupServices = async (data) => {
  try {
    const response = await axios.post(`http://localhost:3000/api/signup`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const forgotPasswordService = async (email) => {
  try {
    const response = await axios.post(
      `http://localhost:3000/api/forgot-password`,
      email
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
