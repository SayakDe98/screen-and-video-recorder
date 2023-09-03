import axios from "axios";

export const signup = async ({ name , email, password }) => {
  try {
    const result = await axios.post("http://localhost:4000/api/users/register", {
        name,  
        email,
        password,
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
